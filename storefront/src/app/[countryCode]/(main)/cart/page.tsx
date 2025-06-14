import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Shopping Cart - EV Store",
  description: "Review your Tesla parts and complete your purchase. Premium Model 3 and Y components ready for checkout.",
  keywords: "Tesla parts cart, Model 3 parts checkout, Model Y accessories, EV parts purchase",
}

export default async function Cart() {
  const cart = await retrieveCart().catch((error) => {
    console.error(error)
    return notFound()
  })

  const customer = await retrieveCustomer()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Cart Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Shopping Cart
              </h1>
              <p className="text-gray-600 mt-2">
                Review your Tesla parts and complete your order
              </p>
            </div>
            
            {/* Security Badge */}
            <div className="hidden md:flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.172-2H12l-5.172 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20.5V12l-5.172-2z" />
              </svg>
              <span className="text-sm font-medium text-emerald-700">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
          <CartTemplate cart={cart} customer={customer} />
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Shipping */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
            <p className="text-gray-600 text-sm">Quick delivery across Canada with secure packaging for your Tesla parts</p>
          </div>

          {/* Secure Payment */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">Your payment information is protected with industry-standard encryption</p>
          </div>

          {/* Expert Support */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Need help? Our Tesla specialists are here to assist with your order</p>
          </div>
        </div>
      </div>

      {/* Continue Shopping Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need More Parts?
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our complete collection of Tesla Model 3 and Y components
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/store"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Continue Shopping
            </a>
            <a 
              href="/categories/accessories"
              className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              Browse Accessories
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}