"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CCard, CCardImage, CCardBody } from "@coreui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FAQPage from "@/components/Faq/Faqs";
import Image from "next/image";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi'; 

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  useEffect(() => {
    // Simulate clicking the cart button on component mount
    const cartButton = document.getElementById("myCartDropdownButton1");
    if (cartButton) {
      cartButton.click();
    }
  }, []);

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); //state for hamburger menu
  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };
  const toggleDropdown = (): void => {
    setDropdownVisible((prev) => !prev);
  };

  if (status === "loading") {
    return;
  }

  return (
    <div>
      {/* Navbar Section */}
      <nav className="dark:bg-gray-800 bg-white antialiased">
        <div className="mx-auto max-w-screen-xl px-4 py-4 2xl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 w-full">
              <div className="shrink-0">
                <a href="#" title="">
                  <Image
                    className="dark:hidden block h-8 w-auto"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                    // width={200}  // To prevent error
                    // height={50}  // To prevent error
                    alt=""
                  />
                  <Image
                    className="dark:block hidden h-8 w-auto"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                    alt=""
                  />
                </a>
              </div>
              {/* <ul className="hidden items-center justify-start gap-6 py-3 sm:justify-center md:gap-8 lg:flex">
                <li>
                  <a
                    href="#"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 flex text-sm font-medium text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 flex text-sm font-medium text-gray-900"
                  >
                    Best Sellers
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 flex text-sm font-medium text-gray-900"
                  >
                    Gift Ideas
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 text-sm font-medium text-gray-900"
                  >
                    Today's Deals
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="hover:text-primary-700 dark:text-white dark:hover:text-primary-500 text-sm font-medium text-gray-900"
                  >
                    Sell
                  </a>
                </li>
              </ul> */}
              <div className="flex items-center space-x-4 lg:space-x-4 w-full">
                {/* Search Bar - MADE WIDER */}
                <div className="relative flex-grow mr-5 mx-5">
                  <input
                    type="text"
                    placeholder="Noida, India" // Updated placeholder
                    className="pl-10 pr-4 py-2 rounded-lg border border-blue-400 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full" // Padding adjusted for icon
                  />
                  {/* Location Icon inside the search bar */}
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FaMapMarkerAlt />
                  </span>
                  <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition duration-200">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:flex items-center space-x-2">
                  <span className="hidden  lg:flex text-sm font-medium text-gray-900 dark:text-white">
                    Call Us:
                  </span>
                  <span className="hidden  lg:flex me-2 text-sm font-bold text-blue-500 dark:text-blue-400">
                    +1 234 567 890
                  </span>
                </div>
              </div>
              {/* END OF SEARCH BAR AND CALL TAG    */}
            </div>

            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="dark:hover:bg-gray-700 dark:text-white inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100"
              >
                <span className="sr-only">Cart</span>
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
                <span className="hidden sm:flex">My Cart</span>
                <svg
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
                </svg>
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

              {/* <button
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
        </div> */}
              <button
                onClick={toggleMenu}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 z-20 bg-white shadow-lg">
            <div className="flex flex-col p-4">
              {/* Call Us section with icon and phone number */}
              <div className="flex items-center py-4">
                {/* Phone Icon from React Icons */}
                <FiPhoneCall className="w-5 h-5 mr-2 text-gray-500" />

                {/* Phone Number */}
                <span className="font-bold text-blue-500">+1 234 567 890</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Cards Row */}
        <div className="flex flex-wrap justify-between">
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://img.freepik.com/premium-vector/online-reservation-booking-icon-black-vector-graphics_1178600-116.jpg"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }}>
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="/instant-book"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Instant Book
                </Link>
              </div>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://cdn.pixabay.com/photo/2018/05/08/21/29/windows-3384024_1280.png"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }}>
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="/instant-book"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Windows services
                </Link>
              </div>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }}>
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="/instant-book"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Apple services
                </Link>
              </div>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://cdn.pixabay.com/photo/2021/08/23/22/40/refresh-6568981_1280.png"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }}>
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="/instant-book"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Other services
                </Link>
              </div>
            </CCardBody>
          </CCard>
        </div>

        <FAQPage />
      </div>
    </div>
  );
};

export default Dashboard;
