import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Page Not Found - EV Store",
  description: "The page you're looking for doesn't exist. Browse our Tesla parts collection instead.",
}

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg mx-auto flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.462-.676-6.28-1.843C7.152 11.223 9.462 10 12 10s4.848 1.223 6.28 3.157c0 0-1.487 2.169-6.28 1.843z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The page you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <div className="inline-block px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors duration-200">
              <InteractiveLink href="/">
                Return to Store
              </InteractiveLink>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Or explore popular sections:</p>
            <div className="space-y-2">
              <div className="inline-block mr-4 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                  <InteractiveLink href="/store">All Products</InteractiveLink>
                </div>
              </div>
              <div className="inline-block mr-4 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                  <InteractiveLink href="/categories/model-3">Model 3 Parts</InteractiveLink>
                </div>
              </div>
              <div className="inline-block mr-4 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                  <InteractiveLink href="/categories/model-y">Model Y Parts</InteractiveLink>
                </div>
              </div>
              <div className="inline-block mr-4 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                  <InteractiveLink href="/about">About Us</InteractiveLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}