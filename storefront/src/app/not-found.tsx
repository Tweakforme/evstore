import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.084 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Page Not Found
            </h1>
            <Text className="text-lg text-gray-600 leading-relaxed">
              The page you're looking for doesn't exist or may have been moved.
            </Text>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-200 group"
              href="/"
            >
              <Text className="text-white">Return to Store</Text>
              <ArrowUpRightMini
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                color="white"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-100">
            <Text className="text-sm text-gray-500 mb-4">Or explore popular sections:</Text>
            <div className="space-y-2">
              <Link 
                href="/store"
                className="inline-block mr-3 mb-2"
              >
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <Text className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">
                    All Products
                  </Text>
                </div>
              </Link>
              
              <Link 
                href="/categories/model-3"
                className="inline-block mr-3 mb-2"
              >
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <Text className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">
                    Model 3 Parts
                  </Text>
                </div>
              </Link>
              
              <Link 
                href="/categories/model-y"
                className="inline-block mr-3 mb-2"
              >
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <Text className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">
                    Model Y Parts
                  </Text>
                </div>
              </Link>
              
              <Link 
                href="/about"
                className="inline-block mr-3 mb-2"
              >
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                  <Text className="text-gray-700 group-hover:text-emerald-700 text-sm font-medium">
                    About Us
                  </Text>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}