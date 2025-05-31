import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer className="bg-black text-white border-t border-gray-700 w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-2xl font-semibold uppercase tracking-widest"
            >
              EVStore
            </LocalizedClientLink>
          </div>

          <div className="text-sm gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-white font-medium">Categories</span>
                <ul className="grid grid-cols-1 gap-2">
                  {productCategories.slice(0, 6).map((c) => {
                    if (c.parent_category) return

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li className="flex flex-col gap-2 text-gray-300" key={c.id}>
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-white",
                            children && "font-semibold"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="ml-3 space-y-1">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-white text-gray-400"
                                  href={`/categories/${child.handle}`}
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-white font-medium">Collections</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-gray-300",
                    {
                      "grid-cols-2": collections.length > 3,
                    }
                  )}
                >
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-white"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <span className="text-white font-medium">Company</span>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-white">
                    About
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-white">
                    Contact
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full mb-16 justify-between text-gray-500 text-xs">
          <Text>© {new Date().getFullYear()} EVStore. All rights reserved.</Text>
        </div>
      </div>
    </footer>
  )
}
