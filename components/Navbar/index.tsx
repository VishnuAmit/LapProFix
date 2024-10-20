"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { signOut } from 'next-auth/react';
import Cart from "@/components/Cart"

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [])

  console.log(open);
  

  const toggleDropdown = (): void => {
    setDropdownVisible((prev) => !prev);
  };
  return (
    <nav className="dark:bg-gray-800 bg-white antialiased">
        <div className="mx-auto max-w-screen-xl px-4 py-4 2xl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="">
                <Image
                  className="dark:hidden block h-8 w-auto"
                  src="images/logo/logodash.svg"
                  alt=""
                  width={25}  
                  height={25} 
                  style={{ transform: 'scale(1.2)', transformOrigin: 'left' }}
                />

          
                </a>
              </div>
              <ul className="hidden items-center justify-start gap-6 py-3 sm:justify-center md:gap-8 lg:flex">
                <li>
                  <Link
                    href="/dashboard"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 flex text-sm font-medium text-gray-900"
                  >
                    Home
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="/dashboard/BestSeller"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 flex text-sm font-medium text-gray-900"
                  >
                    Best Sellers
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="/dashboard/GiftIdeas"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 flex text-sm font-medium text-gray-900"
                  >
                    Gift Ideas
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="/dashboard/TodaysDeals"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 text-sm font-medium text-gray-900"
                  >
                    Today's Deals
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="/dashboard/Sell"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 text-sm font-medium text-gray-900"
                  >
                    Sell
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="dark:hover:bg-gray-700 dark:text-white inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100"
                onClick={()=>setOpen(!open)}
              >
                <span className="sr-only">
                    Cart
                </span>
                <svg
                  className="h-5 w-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">
                    My Cart
                    <Cart open={open} setOpen={setOpen}/>
                </span>

                {/* <svg
                  className="dark:text-white ms-1 hidden h-4 w-4 text-gray-900 sm:flex"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg> */}
              </button>

              {/* Cart Dropdown */}
              <div
                id="myCartDropdown1"
                className="dark:bg-gray-800 z-10 mx-auto hidden max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg"
              >
                {/* Cart items */}
                {/* ... (Cart items content) ... */}
              </div>

              <button
                id="userDropdownButton1"
                onClick={() => toggleDropdown()}
                data-dropdown-toggle="userDropdown1"
                type="button"
                className="dark:hover:bg-gray-700 dark:text-white inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="me-1 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Account
                <svg
                  className="dark:text-white ms-1 h-4 w-4 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* User Dropdown */}
              {dropdownVisible && (
                <div className="dark:divide-gray-600 dark:bg-gray-700 fixed right-9 top-16 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow">
                  <ul
                    className="dark:text-gray-200 py-2 text-sm text-gray-700"
                    aria-labelledby="userDropdownButton1"
                  >
                    <li>
                      <a
                        href="#"
                        className="dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2 hover:bg-gray-100"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      onClick={() => signOut()} // Replace with your actual sign-out function
                      className="dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}

              <button
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded="false"
                className="dark:hover:bg-gray-700 dark:text-white inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 lg:hidden"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
