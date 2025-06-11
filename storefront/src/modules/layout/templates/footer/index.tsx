import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background with Animated Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 border-t border-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20">
        <div className="content-container">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-start justify-between py-16 gap-12">
            
            {/* Logo & Brand Section */}
            <div className="flex-1 max-w-md">
              <div className="mb-6">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-2xl inline-block">
                  <img 
                    src="/images/logo.png" 
                    alt="The EV Store" 
                    className="h-10 w-auto"
                  />
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Elevate your Tesla experience with premium accessories and OEM components. 
                Your trusted partner in electric vehicle enhancement.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: "📘", label: "Facebook", href: "#" },
                  { icon: "🐦", label: "Twitter", href: "#" },
                  { icon: "📷", label: "Instagram", href: "#" },
                  { icon: "💼", label: "LinkedIn", href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-xl hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="flex-2 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Categories */}
              {productCategories?.length > 0 && (
                <div className="group">
                  <h3 className="text-white font-semibold text-lg mb-6 relative">
                    Categories
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  <ul className="space-y-3">
                    {productCategories.slice(0, 6).map((c) => {
                      if (c.parent_category) return null

                      return (
                        <li key={c.id}>
                          <LocalizedClientLink
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group/link"
                            href={`/categories/${c.handle}`}
                          >
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                            {c.name}
                          </LocalizedClientLink>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {/* Collections */}
              {collections?.length > 0 && (
                <div className="group">
                  <h3 className="text-white font-semibold text-lg mb-6 relative">
                    Collections
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  <ul className="space-y-3">
                    {collections.slice(0, 6).map((c) => (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group/link"
                          href={`/collections/${c.handle}`}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                          {c.title}
                        </LocalizedClientLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Company & Support */}
              <div className="group">
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  Company
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Contact", href: "/contact" },
                    { label: "Support", href: "/support" },
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Shipping Info", href: "/shipping" }
                  ].map((link, index) => (
                    <li key={index}>
                      <LocalizedClientLink
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group/link"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                        {link.label}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Charged with Updates
              </h3>
              <p className="text-gray-400 mb-8">
                Get the latest Tesla accessories, exclusive deals, and EV insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <Text>© {new Date().getFullYear()} The EV Store. All rights reserved.</Text>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>
    </footer>
  )
}