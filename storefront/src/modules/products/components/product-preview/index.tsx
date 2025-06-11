import { Text } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block h-full"
    >
      <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200 group-hover:scale-105 transform">
        {/* Image container with overlay effects */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {isFeatured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Featured
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-6 space-y-3">
          {/* Product title */}
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
            {product.title}
          </h3>
          
          {/* Product description */}
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {product.subtitle || product.description?.slice(0, 80) + "..."}
          </p>
          
          {/* Price section */}
          {cheapestPrice && (
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-gray-900">
                  <PreviewPrice price={cheapestPrice} />
                </div>
                
                {/* Action indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Subtle accent line */}
          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500 rounded-full" />
        </div>
      </div>
    </LocalizedClientLink>
  )
}