import { Request as ExpressRequest, Response } from "express"
import { MedusaContainer } from "@medusajs/types"
import { listModules } from "awilix"

export const GET = async (
  req: ExpressRequest & { scope: MedusaContainer },
  res: Response
) => {
  const container = req.scope

const productService = container.resolve("productService") as any
const regionService = container.resolve("regionService") as any


  const region = await regionService.retrieveByCountryCode("us")

  const products = await productService.list(
    { status: ["published"] },
    { relations: ["variants", "variants.prices"] }
  )

  const sorted = products.sort((a, b) => {
    const priceA =
      a.variants?.[0]?.prices?.find(p => p.region_id === region.id)?.amount ?? 0
    const priceB =
      b.variants?.[0]?.prices?.find(p => p.region_id === region.id)?.amount ?? 0

    return req.query.order === "price_desc" ? priceB - priceA : priceA - priceB
  })

  res.status(200).json({
    products: sorted,
    count: sorted.length,
    offset: 0,
    limit: 100,
  })
}
