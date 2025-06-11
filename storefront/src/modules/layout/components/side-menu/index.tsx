"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { XMark, BarsThree } from "@medusajs/icons"
import { Text, useToggleState, clx } from "@medusajs/ui"
import { Fragment } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems: { label: string; href: string; icon?: string }[] = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "Model 3 Parts", href: "/categories/model-3", icon: "🚗" },
  { label: "Model Y Parts", href: "/categories/model-y", icon: "🚙" },
  { label: "Accessories", href: "/categories/accessories", icon: "⚡" },
  { label: "About Us", href: "/about", icon: "ℹ️" },
  { label: "Support", href: "/support", icon: "🛠️" },
  { label: "Account", href: "/account", icon: "👤" },
  { label: "Cart", href: "/cart", icon: "🛒" },
]

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center px-3 text-lg tracking-wide text-white hover:text-blue-100 transition-colors duration-200 hover:bg-white/10 rounded-md"
                >
                  <BarsThree className="w-6 h-6" /> 
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <PopoverPanel
                  static
                  focus
                  className="fixed top-0 left-0 z-50 h-screen w-[90%] max-w-sm text-white shadow-2xl backdrop-blur-xl flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)'
                  }}
                >
                  <div>
                    {/* Header with Logo and Close */}
                    <div className="flex items-center justify-between p-6 border-b border-white/20">
                      {/* Logo */}
                      <div className="flex items-center">
                        <img 
                          src="/images/logo.png" 
                          alt="The EV Store" 
                          className="h-8 w-auto"
                        />
                      </div>
                      
                      {/* Close Button */}
                      <button
                        onClick={close}
                        aria-label="Close menu"
                        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                      >
                        <XMark className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Menu Items */}
                    <div className="p-6">
                      <ul className="space-y-4">
                        {SideMenuItems.map(({ label, href, icon }) => (
                          <li key={href}>
                            <LocalizedClientLink
                              href={href}
                              onClick={close}
                              className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 transform hover:translate-x-2"
                            >
                              {icon && (
                                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                                  {icon}
                                </span>
                              )}
                              <span className="text-lg font-light group-hover:text-blue-100 transition-colors">
                                {label}
                              </span>
                            </LocalizedClientLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="p-6 border-t border-white/20">
                    {/* Country Select */}
                    {regions && (
                      <div
                        className="mb-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        <CountrySelect toggleState={toggleState} regions={regions} />
                      </div>
                    )}
                    
                    {/* Copyright */}
                    <Text className="text-sm text-white/70 text-center">
                      © {new Date().getFullYear()} The EV Store. All rights reserved.
                    </Text>
                    
                    {/* Decorative Element */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu