import { cache } from "react"
import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  offset: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

// ✅ Cache region so it doesn’t trigger re-renders
const getCachedRegion = cache(async (code: string) => {
  return await getRegion(code)
})

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  category,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
  category?: string
}) {
  const region = await getCachedRegion(countryCode)
  if (!region) return null

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
    offset: (page - 1) * PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams.collection_id = [collectionId]
  }

  if (categoryId) {
    queryParams.category_id = [categoryId]
  } else if (category) {
    queryParams.category_id = [category]
  }

  if (productsIds) {
    queryParams.id = productsIds
  }

  if (sortBy && sortBy !== "price_asc") {
    queryParams.order = sortBy // directly use "price_desc", "name_asc", etc.
  }

  const {
    response: { products, count },
  } = await listProductsWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="products-list"
      >
        {products.map((p) => (
          <li key={p.id}>
            <ProductPreview product={p} region={region} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
