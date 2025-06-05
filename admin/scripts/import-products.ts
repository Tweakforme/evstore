// scripts/import-products.ts
import fs from "fs"
import path from "path"
import csvParser from "csv-parser"
import { Medusa } from "@medusajs/medusa-js"
import dotenv from "dotenv"

dotenv.config()

const medusa = new Medusa({ baseUrl: "http://localhost:9000", maxRetries: 3 })

interface CsvRow {
  title: string
  bainel_no: string
  oe_no: string
  price_1: string
  price_10: string
  price_50: string
  category_handle: string
  image_url: string
}

const filePath = path.join(__dirname, "products.csv")

async function importProducts() {
  const rows: CsvRow[] = []

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (data) => rows.push(data))
    .on("end", async () => {
      for (const row of rows) {
        try {
          const categories = await medusa.store.productCategories.list({ handle: row.category_handle })
          const categoryId = categories?.product_categories?.[0]?.id

          if (!categoryId) {
            console.warn(`Category not found: ${row.category_handle}`)
            continue
          }

          const product = await medusa.admin.products.create({
            title: row.title,
            handle: row.title.toLowerCase().replace(/\s+/g, "-"),
            description: `Auto-imported: ${row.title}`,
            images: [row.image_url],
            options: [{ title: "Pack Size" }],
            metadata: {
              bainel_no: row.bainel_no,
              oe_no: row.oe_no,
            },
            categories: [{ id: categoryId }],
          })

          await medusa.admin.variants.create(product.id, {
            title: "1 pc",
            options: ["1 pc"],
            prices: [{ currency_code: "usd", amount: parseInt(row.price_1) }],
          })

          await medusa.admin.variants.create(product.id, {
            title: "10 pcs",
            options: ["10 pcs"],
            prices: [{ currency_code: "usd", amount: parseInt(row.price_10) }],
          })

          await medusa.admin.variants.create(product.id, {
            title: "50 pcs",
            options: ["50 pcs"],
            prices: [{ currency_code: "usd", amount: parseInt(row.price_50) }],
          })

          console.log(`✅ Imported: ${row.title}`)
        } catch (err) {
          console.error(`❌ Failed to import: ${row.title}`, err)
        }
      }
    })
}

importProducts()
