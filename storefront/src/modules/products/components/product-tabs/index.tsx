"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"
import { ReactNode } from "react"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const getMetadata = (key: string): string => {
    const value = product.metadata?.[key]
    return typeof value === "string" ? value : "-"
  }

  const renderCompatibility = () => {
    const compatibility = getMetadata("compatibility")
    if (typeof compatibility !== "string" || compatibility.trim() === "-") return "-"

    const models = compatibility.split(",").map((model) => model.trim())
    return (
      <div className="flex flex-wrap gap-1">
        {models.map((model, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md font-medium"
          >
            {model}
          </span>
        ))}
      </div>
    )
  }

  const renderInstallationDifficulty = () => {
    const difficulty = getMetadata("installation_difficulty")
    if (difficulty === "-") return "-"

    const colorMap: Record<string, string> = {
      "Easy": "text-green-600 bg-green-50",
      "Moderate": "text-yellow-600 bg-yellow-50", 
      "Professional Required": "text-red-600 bg-red-50"
    }

    const colorClass = colorMap[difficulty] || "text-gray-600 bg-gray-50"

    return (
      <span className={`px-2 py-1 text-xs rounded-md font-medium ${colorClass}`}>
        {difficulty}
      </span>
    )
  }

  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Compatibility</span>
            <div className="mt-1">
              {renderCompatibility()}
            </div>
          </div>
          <div>
            <span className="font-semibold">Part Number</span>
            <p className="font-mono text-sm">{getMetadata("part_number")}</p>
          </div>
          <div>
            <span className="font-semibold">Installation</span>
            <div className="mt-1">
              {renderInstallationDifficulty()}
            </div>
          </div>
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material || getMetadata("material") || "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Finish</span>
            <p>{getMetadata("finish")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
          <div>
            <span className="font-semibold">Warranty</span>
            <p>{getMetadata("warranty")}</p>
          </div>
          <div>
            <span className="font-semibold">What's Included</span>
            <p>{getMetadata("includes")}</p>
          </div>
          <div>
            <span className="font-semibold">Country of Origin</span>
            <p>{product.origin_country || "-"}</p>
          </div>
        </div>
      </div>

      {getMetadata("installation_notes") !== "-" && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <span className="font-semibold text-blue-900">Installation Notes</span>
          <p className="text-blue-800 text-sm mt-1">{getMetadata("installation_notes")}</p>
        </div>
      )}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your Tesla parts will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              Tesla part for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your Tesla part and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
