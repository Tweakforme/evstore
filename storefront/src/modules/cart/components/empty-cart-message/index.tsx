import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8" data-testid="empty-cart-message">
      <div className="max-w-lg text-center">
        {/* Icon Container */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg mx-auto flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 8.32M7 13l1.68-8.32M19 19a2 2 0 11-4 0 2 2 0 014 0zM9 19a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Heading
            level="h1"
            className="text-3xl font-semibold text-gray-900"
          >
            Your Cart is Empty
          </Heading>
          
          <Text className="text-lg text-gray-600 leading-relaxed">
            Ready to find the perfect Tesla parts? Browse our premium selection 
            of Model 3 and Y components to enhance your electric driving experience.
          </Text>

          {/* Action Button */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors duration-200">
              <InteractiveLink href="/store">
                <span className="flex items-center gap-2">
                  Explore Tesla Parts
                  
                </span>
              </InteractiveLink>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Popular categories:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                <InteractiveLink href="/categories/model-3">Model 3 Parts</InteractiveLink>
              </div>
              <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                <InteractiveLink href="/categories/model-y">Model Y Parts</InteractiveLink>
              </div>
              <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-all duration-200">
                <InteractiveLink href="/categories/accessories">Accessories</InteractiveLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyCartMessage