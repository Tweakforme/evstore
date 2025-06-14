import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="content-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <LocalizedClientLink href="/" className="inline-block">
                  <div className="text-2xl font-semibold text-white">
                    EV STORE
                  </div>
                </LocalizedClientLink>
              </div>
              
              <p className="text-sm leading-relaxed mb-6 text-gray-400">
                Premium Tesla accessories and OEM components. Elevating your electric vehicle experience since 2020.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Shop */}
              {productCategories?.length > 0 && (
                <div>
                  <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                    Shop
                  </h3>
                  <ul className="space-y-3">
                    {productCategories.slice(0, 5).map((c) => {
                      if (c.parent_category) return null
                      return (
                        <li key={c.id}>
                          <LocalizedClientLink
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            href={`/categories/${c.handle}`}
                          >
                            {c.name}
                          </LocalizedClientLink>
                        </li>
                      )
                    })}
                    <li>
                      <LocalizedClientLink
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        href="/categories"
                      >
                        View All →
                      </LocalizedClientLink>
                    </li>
                  </ul>
                </div>
              )}

              {/* Customer Service */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                  Customer Service
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "Contact Us", href: "/contact" },
                    { label: "Shipping & Returns", href: "/shipping" },
                    { label: "Size Guide", href: "/size-guide" },
                    { label: "Track Order", href: "/track-order" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Warranty", href: "/warranty" }
                  ].map((link) => (
                    <li key={link.href}>
                      <LocalizedClientLink
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Careers", href: "/careers" },
                    { label: "Press", href: "/press" },
                    { label: "Sustainability", href: "/sustainability" },
                    { label: "Affiliates", href: "/affiliates" },
                    { label: "Corporate Sales", href: "/corporate" }
                  ].map((link) => (
                    <li key={link.href}>
                      <LocalizedClientLink
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800 mt-12 pt-12">
            <div className="max-w-xl">
              <h3 className="text-lg font-medium text-white mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest products and exclusive offers delivered to your inbox.
              </p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm"
                />
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="content-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
              <Text>© {new Date().getFullYear()} EV Store. All rights reserved.</Text>
              <LocalizedClientLink href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </LocalizedClientLink>
              <LocalizedClientLink href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </LocalizedClientLink>
              <LocalizedClientLink href="/cookies" className="hover:text-gray-300 transition-colors">
                Cookie Policy
              </LocalizedClientLink>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 mr-2">Secure payments:</span>
              {/* Payment icons placeholder - in real implementation, use actual payment provider icons */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">VISA</div>
                <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">MC</div>
                <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">AMEX</div>
                <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">PAY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}