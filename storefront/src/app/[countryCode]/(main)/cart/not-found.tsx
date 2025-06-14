import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Cart Not Found - EV Store",
  description: "The cart you're looking for doesn't exist. Start fresh with our Tesla parts collection.",
}

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        {/* Cart Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg mx-auto flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.084 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Cart Not Found
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your cart session has expired or doesn't exist. Clear your browser cookies and start fresh.
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

          {/* Helpful Instructions */}
          <div className="pt-8 border-t border-gray-100">
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-blue-900 mb-1">How to fix this:</h3>
                  <p className="text-sm text-blue-700">Clear your browser cookies, then start shopping again for Tesla parts.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">Popular Tesla categories:</p>
            <div className="space-y-2">
              <div className="inline-block mr-3 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <InteractiveLink href="/store">
                    <span className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">All Products</span>
                  </InteractiveLink>
                </div>
              </div>
              
              <div className="inline-block mr-3 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <InteractiveLink href="/categories/model-3">
                    <span className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">Model 3 Parts</span>
                  </InteractiveLink>
                </div>
              </div>
              
              <div className="inline-block mr-3 mb-2">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <InteractiveLink href="/categories/model-y">
                    <span className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">Model Y Parts</span>
                  </InteractiveLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}