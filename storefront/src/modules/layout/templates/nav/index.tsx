import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Main Navigation */}
      <header className="relative h-20 mx-auto duration-200 bg-gradient-to-r from-green-500 via-green-400 to-blue-400 shadow-lg">
        <nav className="content-container flex items-center justify-between w-full h-full text-small-regular">
          {/* Left: Side Menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex items-center group"
              data-testid="nav-store-link"
            >
              <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                <img 
                  src="/images/logo.png" 
                  alt="The EV Store" 
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </LocalizedClientLink>
          </div>

          {/* Right: Account + Cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="text-white hover:text-blue-100 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <div className="text-white hover:text-blue-100 transition-colors duration-200">
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 8.32M7 13l1.68-8.32M19 19a2 2 0 11-4 0 2 2 0 014 0zM9 19a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>
        </nav>
      </header>

      {/* Secondary Navigation Bar - HIDDEN ON MOBILE */}
      <div className="hidden small:block bg-white shadow-sm border-b border-gray-200">
        <div className="content-container">
          <nav className="flex items-center justify-center space-x-8 py-3 text-sm font-medium">
            <LocalizedClientLink
              href="/store"
              className="text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
            >
              All Products
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories/model-3"
              className="text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
            >
              Model 3 Parts
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories/model-y"
              className="text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
            >
              Model Y Parts
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories/accessories"
              className="text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
            >
              Accessories
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
            >
              About Us
            </LocalizedClientLink>
          </nav>
        </div>
      </div>
    </div>
  )
}