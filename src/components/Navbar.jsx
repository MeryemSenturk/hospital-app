import React, { useContext} from "react";
import { NavLink} from "react-router-dom";
import {logoutIcon} from "../helper/icons";
import { AuthContext } from "../contexts/AuthProvider";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

   const { logout } = useContext(AuthContext);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-1">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 ml-8 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 md[5px] sm[2px]">
                  <img
                    className="h-8 w-auto md[5px] sm[2px]"
                    src="https://vectorseek.com/wp-content/uploads/2023/08/The-Store-Logo-Vector.svg-.png"
                    alt="The Store"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.title}
                        href={item.path}
                        className={classNames(
                          item.current
                            ? "bg-gray-900"
                            : "text-gray-300 hover:bg-gray-700 hover:text-red-400",
                          "rounded-md px-3 py-2 text-sm font-medium scale-125 text-decoration-none"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-1 sm:static sm:inset-auto sm:ml-10 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logout */}

                <div className="flex-1 items-center justify-end space-y-6 md:flex md:space-y-0 md:mt-0">
                  <NavLink
                    onClick={() => logout()}
                    className=" text-decoration-none flex items-center justify-center py-2  font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    {logoutIcon}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium text-decoration-none"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}










