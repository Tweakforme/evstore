import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "EV Store - Premium Tesla Parts & Service",
  description: "Premium Tesla Model 3 and Y parts (2017-2024). Expert service, quality components, and professional installation. Your trusted Tesla parts specialist in Kamloops.",
  keywords: "Tesla parts, Model 3, Model Y, EV parts, electric vehicle service, OEM parts, Tesla accessories, Kamloops",
  openGraph: {
    title: "EV Store - Premium Tesla Parts & Service",
    description: "Premium Tesla Model 3 and Y parts (2017-2024). Expert service and quality components.",
    type: "website",
  },
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Featured Tesla Parts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium selection of Tesla Model 3 and Y components, 
            carefully curated for performance and quality.
          </p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <FeaturedProducts collections={collections} region={region} />
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality Assurance */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Every part undergoes rigorous testing to meet Tesla's exacting standards. 
                OEM and premium aftermarket components only.
              </p>
            </div>

            {/* Expert Service */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional installation and service by certified technicians 
                who understand Tesla's precision engineering.
              </p>
            </div>

            {/* Local Business */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local & Trusted</h3>
              <p className="text-gray-600 leading-relaxed">
                Proudly serving Kamloops since 2020. Part of a family of 
                trusted local businesses with deep community roots.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Model Focus Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Tesla Model Specialization
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive parts and service for Model 3 and Y (2017-2024)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Model 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Model 3 Parts</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Performance and aesthetic upgrades for Tesla's flagship sedan. 
                From suspension components to interior accessories.
              </p>
              <a 
                href={`/${countryCode}/store?model=model-3`}
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group-hover:gap-3 transition-all"
              >
                Browse Model 3 Parts
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Model Y */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Model Y Parts</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Premium components for Tesla's versatile SUV. 
                Cargo solutions, protection accessories, and performance upgrades.
              </p>
              <a 
                href={`/${countryCode}/store?model=model-y`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
              >
                Browse Model Y Parts
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Ready to Enhance Your Tesla?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Browse our complete collection of premium Tesla parts and accessories, 
              or contact our experts for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`/${countryCode}/store`}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Shop All Parts
              </a>
              <a 
                href={`/${countryCode}/about`}
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}