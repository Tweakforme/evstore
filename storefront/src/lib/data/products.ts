"use server"

import { sdk } from "@lib/config"
import { sortProducts } from "@lib/util/sort-products"
import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { getRegion, retrieveRegion } from "./regions"

export const listProducts = async ({
  pageParam = 1,
  queryParams,
  countryCode,
  regionId,
}: {
  pageParam?: number
queryParams?: (HttpTypes.FindParams & HttpTypes.StoreProductParams) & { handle?: string }

  countryCode?: string
  regionId?: string
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number }
  nextPage: number | null
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
}> => {
  if (!countryCode && !regionId) {
    throw new Error("Country code or region ID is required")
  }

  const limit = queryParams?.limit || 12
  const _pageParam = Math.max(pageParam, 1)
  const offset = (_pageParam === 1) ? 0 : (_pageParam - 1) * limit;

  let region: HttpTypes.StoreRegion | undefined | null

  if (countryCode) {
    region = await getRegion(countryCode)
  } else {
    region = await retrieveRegion(regionId!)
  }

  if (!region) {
    return {
      response: { products: [], count: 0 },
      nextPage: null,
    }
  }

  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("products")),
  }

  return sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[]; count: number }>(
      `/store/products`,
      {
        method: "GET",
        query: {
          limit,
          offset,
          region_id: region?.id,
          fields:
            "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
          ...queryParams,
        },
        headers,
        next,
        cache: "force-cache",
      }
    )
    .then(({ products, count }) => {
      const nextPage = count > offset + limit ? pageParam + 1 : null

      return {
        response: {
          products,
          count,
        },
        nextPage: nextPage,
        queryParams,
      }
    })
}

/**
 * Filter products based on Tesla model and category
 */
const filterProductsByTesla = (
  products: HttpTypes.StoreProduct[], 
  model?: string, 
  category?: string
): HttpTypes.StoreProduct[] => {
  let filteredProducts = products

  // Filter by Tesla model if specified
  if (model) {
    filteredProducts = filteredProducts.filter(product => {
      // Check if product title, description, or metadata contains the model
      const modelName = model === 'model-3' ? 'Model 3' : 'Model Y'
      const searchText = `${product.title} ${product.description || ''} ${JSON.stringify(product.metadata || {})}`.toLowerCase()
      
      return searchText.includes(modelName.toLowerCase()) || 
             searchText.includes(model.toLowerCase())
    })
  }

  // Filter by category if specified
  if (category) {
    filteredProducts = filteredProducts.filter(product => {
      // Convert category handle to readable format for matching
      const categoryName = category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
      
      const searchText = `${product.title} ${product.description || ''} ${JSON.stringify(product.metadata || {})}`.toLowerCase()
      
      return searchText.includes(categoryName.toLowerCase()) ||
             searchText.includes(category.toLowerCase())
    })
  }

  return filteredProducts
}

/**
 * This will fetch 100 products to the Next.js cache and sort them based on the sortBy parameter.
 * It will then return the paginated products based on the page and limit parameters.
 */
export const listProductsWithSort = async ({
  page = 0,
  queryParams,
  sortBy = "created_at",
  countryCode,
  model,
  category,
}: {
  page?: number
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
  sortBy?: SortOptions
  countryCode: string
  model?: string
  category?: string
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number }
  nextPage: number | null
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
}> => {
  const limit = queryParams?.limit || 12

  const {
    response: { products, count },
  } = await listProducts({
    pageParam: 0,
    queryParams: {
      ...queryParams,
      limit: 100,
    },
    countryCode,
  })

  // Filter products by Tesla model and category
  const filteredProducts = filterProductsByTesla(products, model, category)
  
  // Sort the filtered products
  const sortedProducts = sortProducts(filteredProducts, sortBy)

  const pageParam = (page - 1) * limit
  const filteredCount = filteredProducts.length
  const nextPage = filteredCount > pageParam + limit ? pageParam + limit : null

  const paginatedProducts = sortedProducts.slice(pageParam, pageParam + limit)

  return {
    response: {
      products: paginatedProducts,
      count: filteredCount, // Use filtered count instead of original count
    },
    nextPage,
    queryParams,
  }
}