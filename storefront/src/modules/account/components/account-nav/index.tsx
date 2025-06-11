"use client"

import { clx } from "@medusajs/ui"
import { ArrowRightOnRectangle } from "@medusajs/icons"
import { useParams, usePathname } from "next/navigation"

import ChevronDown from "@modules/common/icons/chevron-down"
import User from "@modules/common/icons/user"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { signout } from "@lib/data/customer"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signout(countryCode)
  }

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="small:hidden" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-x-3 py-3 px-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
            data-testid="account-main-link"
          >
            <>
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                <ChevronDown className="transform rotate-90 text-white w-4 h-4" />
              </div>
              <span className="font-medium text-gray-900">Account</span>
            </>
          </LocalizedClientLink>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-4">
              <div className="text-lg font-semibold text-white mb-1">
                {customer?.first_name}
              </div>
              <div className="text-slate-200 text-sm">
                Account Management
              </div>
            </div>
            <div className="p-2">
              <ul className="space-y-1">
                <li>
                  <LocalizedClientLink
                    href="/account/profile"
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                    data-testid="profile-link"
                  >
                    <>
                      <div className="flex items-center gap-x-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">Profile</span>
                      </div>
                      <ChevronDown className="transform -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors w-4 h-4" />
                    </>
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/addresses"
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                    data-testid="addresses-link"
                  >
                    <>
                      <div className="flex items-center gap-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <MapPin size={16} className="text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">Addresses</span>
                      </div>
                      <ChevronDown className="transform -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors w-4 h-4" />
                    </>
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/orders"
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                    data-testid="orders-link"
                  >
                    <div className="flex items-center gap-x-3">
                      <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                        <Package size={16} className="text-white" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Orders</span>
                    </div>
                    <ChevronDown className="transform -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors w-4 h-4" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-red-50 transition-all duration-200 w-full group"
                    onClick={handleLogout}
                    data-testid="logout-button"
                  >
                    <div className="flex items-center gap-x-3">
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <ArrowRightOnRectangle className="text-white w-4 h-4" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-red-700">Sign out</span>
                    </div>
                    <ChevronDown className="transform -rotate-90 text-gray-400 group-hover:text-red-500 transition-colors w-4 h-4" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden small:block" data-testid="account-nav">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <div className="pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Account
                </h3>
                <p className="text-sm text-gray-600">Manage your account settings</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-2">
              <li className="w-full">
                <AccountNavLink
                  href="/account"
                  route={route!}
                  data-testid="overview-link"
                  iconType="overview"
                >
                  Overview
                </AccountNavLink>
              </li>
              <li className="w-full">
                <AccountNavLink
                  href="/account/profile"
                  route={route!}
                  data-testid="profile-link"
                  iconType="profile"
                >
                  Profile
                </AccountNavLink>
              </li>
              <li className="w-full">
                <AccountNavLink
                  href="/account/addresses"
                  route={route!}
                  data-testid="addresses-link"
                  iconType="addresses"
                >
                  Addresses
                </AccountNavLink>
              </li>
              <li className="w-full">
                <AccountNavLink
                  href="/account/orders"
                  route={route!}
                  data-testid="orders-link"
                  iconType="orders"
                >
                  Orders
                </AccountNavLink>
              </li>
              <li className="w-full pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleLogout}
                  data-testid="logout-button"
                  className="flex items-center gap-x-3 py-3 px-4 rounded-lg hover:bg-red-50 transition-all duration-200 w-full group text-left"
                >
                  <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                    <ArrowRightOnRectangle className="text-white w-3 h-3" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-red-700 transition-colors">Sign out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  iconType?: 'overview' | 'profile' | 'addresses' | 'orders'
  "data-testid"?: string
}

const IconComponent = ({ type, active }: { type: string, active: boolean }) => {
  const iconClasses = "w-4 h-4 text-white"
  
  switch (type) {
    case 'overview':
      return (
        <div className={clx("w-5 h-5 rounded flex items-center justify-center", {
          "bg-slate-600": active,
          "bg-gray-500": !active
        })}>
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      )
    case 'profile':
      return (
        <div className={clx("w-5 h-5 rounded flex items-center justify-center", {
          "bg-emerald-600": active,
          "bg-gray-500": !active
        })}>
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )
    case 'addresses':
      return (
        <div className={clx("w-5 h-5 rounded flex items-center justify-center", {
          "bg-blue-600": active,
          "bg-gray-500": !active
        })}>
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      )
    case 'orders':
      return (
        <div className={clx("w-5 h-5 rounded flex items-center justify-center", {
          "bg-slate-600": active,
          "bg-gray-500": !active
        })}>
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      )
    default:
      return null
  }
}

const AccountNavLink = ({
  href,
  route,
  children,
  iconType,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href
  
  return (
    <LocalizedClientLink
      href={href}
      className={clx(
        "flex items-center gap-x-3 py-3 px-4 rounded-lg transition-all duration-200 group w-full",
        {
          "bg-gray-50 shadow-sm": active,
          "hover:bg-gray-50 border border-transparent": !active,
        }
      )}
      data-testid={dataTestId}
    >
      {iconType && <IconComponent type={iconType} active={active} />}
      <span className={clx(
        "font-medium transition-colors",
        {
          "text-gray-900 font-semibold": active,
          "text-gray-700 group-hover:text-gray-900": !active,
        }
      )}>
        {children}
      </span>
      {active && (
        <div className="ml-auto w-2 h-2 bg-slate-600 rounded-full"></div>
      )}
    </LocalizedClientLink>
  )
}

export default AccountNav