import { Container } from "@medusajs/ui"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper" className="flex-1">
      {/* Mobile View */}
      <div className="small:hidden space-y-6">
        {/* Mobile Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900" data-testid="welcome-message" data-value={customer?.first_name}>
                Welcome, {customer?.first_name}
              </h1>
              <p className="text-sm text-gray-600">{customer?.email}</p>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-700">Profile</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-900" data-testid="customer-profile-completion" data-value={getProfileCompletion(customer)}>
                {getProfileCompletion(customer)}%
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">Complete</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-700">Addresses</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-900" data-testid="addresses-count" data-value={customer?.addresses?.length || 0}>
                {customer?.addresses?.length || 0}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">Saved</span>
            </div>
          </div>
        </div>

        {/* Mobile Recent Orders */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900">Recent Orders</h3>
          </div>
          <div className="space-y-3" data-testid="orders-wrapper">
            {orders && orders.length > 0 ? (
              orders.slice(0, 3).map((order) => (
                <LocalizedClientLink
                  key={order.id}
                  href={`/account/orders/details/${order.id}`}
                  data-testid="order-wrapper"
                  data-value={order.id}
                >
                  <div className="bg-gray-50/80 rounded-lg p-4 border border-gray-200 hover:bg-white hover:shadow-sm hover:border-gray-300 transition-all duration-200">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="font-medium text-gray-900">#{order.display_id}</p>
                        <p className="text-sm text-gray-600" data-testid="order-created-date">
                          {new Date(order.created_at).toDateString()}
                        </p>
                        <p className="text-sm font-semibold text-emerald-700" data-testid="order-amount">
                          {convertToLocale({
                            amount: order.total,
                            currency_code: order.currency_code,
                          })}
                        </p>
                      </div>
                      <ChevronDown className="-rotate-90 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </LocalizedClientLink>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p data-testid="no-orders-message">No recent orders</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden small:block">
        {/* Desktop Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-8 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1" data-testid="welcome-message" data-value={customer?.first_name}>
                  Welcome back, {customer?.first_name}
                </h1>
                <p className="text-gray-600">Manage your account and track your orders</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Signed in as</p>
              <p className="font-medium text-gray-900" data-testid="customer-email" data-value={customer?.email}>
                {customer?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Stats and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Profile Stats */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Profile</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-900" data-testid="customer-profile-completion" data-value={getProfileCompletion(customer)}>
                {getProfileCompletion(customer)}%
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-wide mb-1">Complete</span>
            </div>
          </div>

          {/* Addresses Stats */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Addresses</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-900" data-testid="addresses-count" data-value={customer?.addresses?.length || 0}>
                {customer?.addresses?.length || 0}
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-wide mb-1">Saved</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Quick Access</h3>
            </div>
            <div className="space-y-2">
              <LocalizedClientLink
                href="/account/profile"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white hover:shadow-sm hover:border-gray-300 transition-all duration-200 group"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Edit Profile</span>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/account/addresses"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white hover:shadow-sm hover:border-gray-300 transition-all duration-200 group"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Add Address</span>
              </LocalizedClientLink>
            </div>
          </div>
        </div>

        {/* Desktop Recent Orders */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
          </div>

          <div className="space-y-3" data-testid="orders-wrapper">
            {orders && orders.length > 0 ? (
              orders.slice(0, 5).map((order) => (
                <div key={order.id} data-testid="order-wrapper" data-value={order.id}>
                  <LocalizedClientLink href={`/account/orders/details/${order.id}`}>
                    <div className="bg-gray-50/80 rounded-lg p-6 border border-gray-200 hover:bg-white hover:shadow-sm hover:border-gray-300 transition-all duration-200">
                      <div className="flex justify-between items-center">
                        <div className="grid grid-cols-3 gap-8 flex-1">
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Date Placed</p>
                            <p className="font-medium text-gray-900" data-testid="order-created-date">
                              {new Date(order.created_at).toDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Order Number</p>
                            <p className="font-medium text-gray-900" data-testid="order-id" data-value={order.display_id}>
                              #{order.display_id}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Total Amount</p>
                            <p className="font-semibold text-emerald-700" data-testid="order-amount">
                              {convertToLocale({
                                amount: order.total,
                                currency_code: order.currency_code,
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" data-testid="open-order-button">
                          <ChevronDown className="-rotate-90 text-gray-600 w-4 h-4" />
                          <span className="sr-only">Go to order #{order.display_id}</span>
                        </div>
                      </div>
                    </div>
                  </LocalizedClientLink>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-1" data-testid="no-orders-message">No recent orders</p>
                <p className="text-sm text-gray-500">Your order history will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer: HttpTypes.StoreCustomer | null) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  const billingAddress = customer.addresses?.find(
    (addr) => addr.is_default_billing
  )

  if (billingAddress) {
    count++
  }

  return (count / 4) * 100
}

export default Overview