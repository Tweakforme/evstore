"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { XMark, BarsThree } from "@medusajs/icons"
import { Text, useToggleState, clx } from "@medusajs/ui"
import { Fragment } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Model 3 Parts", href: "/categories/model-3" },
  { label: "Model Y Parts", href: "/categories/model-y" },
  { label: "Accessories", href: "/categories/accessories" },
  { label: "About Us", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Account", href: "/account" },
  { label: "Cart", href: "/cart" },
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
  className="relative h-full flex items-center px-2 text-lg tracking-wide text-white hover:text-gray-300 transition-colors"
>
  <BarsThree className="w-6 h-6" /> 
</Popover.Button>

              </div>

             <Transition
  show={open}
  as={Fragment}
  enter="transition ease-out duration-200"
  enterFrom="opacity-0 -translate-x-full"
  enterTo="opacity-100 translate-x-0"
  leave="transition ease-in duration-200"
  leaveFrom="opacity-100 translate-x-0"
  leaveTo="opacity-0 -translate-x-full"
>

               <PopoverPanel
  static
  focus
  className="fixed top-0 left-0 z-50 h-screen w-[90%] max-w-sm text-white bg-black bg-opacity-95 shadow-lg backdrop-blur-2xl p-6 flex flex-col justify-between"
>

                  <div>
                    {/* Close Button */}
                    <div className="flex justify-end mb-6">
                      <button
                        onClick={close}
                        aria-label="Close menu"
                        className="hover:text-gray-400 transition-colors"
                      >
                        <XMark className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Menu Items */}
                    <ul className="space-y-6">
                      {SideMenuItems.map(({ label, href }) => (
                        <li key={href}>
                          <LocalizedClientLink
                            href={href}
                            onClick={close}
                            className="block text-2xl font-light hover:text-gray-300 transition-colors"
                          >
                            {label}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Country + Copyright */}
                  <div className="flex flex-col gap-y-6 mt-12">
                    {regions && (
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        <CountrySelect toggleState={toggleState} regions={regions} />
                      </div>
                    )}
                    <Text className="text-sm text-gray-500">
                      © {new Date().getFullYear()} Tesla Parts. All rights reserved.
                    </Text>
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
