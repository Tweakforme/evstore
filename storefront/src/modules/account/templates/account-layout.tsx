import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100" data-testid="account-page">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 small:grid-cols-[280px_1fr] gap-8">
          <div className="small:sticky small:top-8 small:self-start">
            {customer && <AccountNav customer={customer} />}
          </div>
          <div className="flex-1">{children}</div>
        </div>
        
        {/* Customer Service Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <div className="flex flex-col small:flex-row items-start small:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Need Help?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Find answers to frequently asked questions about EV products, shipping, and account management by clicking the customer service link.
              </p>
            </div>
            <div className="flex-shrink-0">
              <UnderlineLink 
                href="/customer-service"
              
              >
                <span>Customer Service</span>
               
              </UnderlineLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout