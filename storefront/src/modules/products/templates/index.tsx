import React, { Suspense } from "react"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12 py-12"
        data-testid="product-container"
      >
        {/* LEFT: Product Images */}
        <div className="w-full">
          <ImageGallery images={product?.images || []} />
        </div>

        {/* RIGHT: Info, Actions, Tabs */}
        <div className="flex flex-col gap-y-8">
          <ProductInfo product={product} />

          <div className="flex flex-col gap-y-6">
            <ProductOnboardingCta />

            <Suspense fallback={<ProductActions disabled product={product} region={region} />}>
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>

          <ProductTabs product={product} />
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div
        className="content-container my-20"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
