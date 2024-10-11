// app/windows-issues/page.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Search from "@/components/Search";
import {  useServiceContext } from '../themeProvider';
import Toastr from '@/components/Toast';

const windowsIssue = [
  { id: 10, title: "Display Issue", rating: 4.8, reviews: "6K reviews", price: "₹159", time: "45 mins" },
  { id: 11, title: "Keyboard Issue", rating: 4.81, reviews: "6K reviews", price: "₹159", time: "30 mins" },
  { id: 12, title: "Battery Issue", rating: 4.7, reviews: "5K reviews", price: "₹199", time: "60 mins" },
];

const WindowsIssuesPage = () => {
  const [windowsIssues, setWindowsIssues] = useState(windowsIssue);
  const [cart, setCart] = useState(() => {
    return windowsIssue.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
  });
  const { products, setProducts } = useServiceContext();
  const [added, setAdded] = useState<boolean | null>(null);

  const addToCart = (id) => {
    setProducts([...products, windowsIssue.find(item => item.id === id)]);
    setCart(prev => ({ ...prev, [id]: true }));
    setAdded(true)
  };

  const removeFromCart = (id) => {
    setProducts(products.filter(item => item.id !== id));
    setCart(prev => ({ ...prev, [id]: false }));
    setAdded(false)
  };

  return (
    <>
      {
        added === true &&
        <Toastr text={"Issue Added"} />
      }
      {
        added === false &&
        <Toastr text={"Issue Removed"} />
      } 
      <div className="p-5 text-black px-36">
        <div className="flex justify-between">
          <h1 className="text-center text-2xl font-semibold">Windows Laptop Issues</h1>
          <Search
            issue={windowsIssues}
            setIssue={setWindowsIssues}
            originalIssues={windowsIssue}
          />
        </div>
        <div className='grid grid-cols-3 sm:flex-row py-4 justify-between gap-4'>
          {windowsIssues.map((issue, index) => (
            <div key={index} style={{ border: "1px solid #ccc" }}
              className='flex flex-col justify-between rounded-lg shadow-lg'
            >
              <div className="rounded-t-lg px-3 bg-[#7c72f2] py-2">
                <h2 className="py-1 font-bold">{issue.title}</h2>
                <p className="py-1">⭐ {issue.rating} ({issue.reviews})</p>
                <p className="py-1">{issue.price} • {issue.time}</p>
              </div>
              <div className="flex justify-between px-3 py-3">
                <span
                  className="bg-[#6f63f2] rounded-lg p-2 cursor-pointer"
                  onClick={() => {
                    if (cart[issue.id]) 
                      removeFromCart(issue.id);
                    else 
                      addToCart(issue.id);
                  }}
                >
                  {cart[issue.id] ? 
                    <RemoveShoppingCartIcon /> :
                    <ShoppingCartCheckoutIcon />
                  }
                </span>

                {cart[issue.id] && 
                  <button className="bg-[#6f63f2] rounded-lg p-2">
                    <DownloadDoneIcon />
                  </button>
                }
              </div>
            </div>
          ))}
        </div>
        <Link href="/cart" style={{ marginTop: "20px", display: "block", textAlign: "center", color: "#4CAF50", textDecoration: "underline" }}>
          Go to Cart
        </Link>
      </div>
    </>
  );
};

export default WindowsIssuesPage;
