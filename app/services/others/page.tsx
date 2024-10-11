"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import Search from "@/components/Search";
import { useServiceContext } from '../themeProvider';
import Toastr from '@/components/Toast';

const othersIssue = [
  { id: 4, title: "Regular Cleaning", rating: 4.75, reviews: 1200, price: "₹159", time: "30 mins" },
  { id: 5, title: "Regular Check-Up", rating: 4.82, reviews: 3100, price: "₹159", time: "30 mins" },
  { id: 6, title: "Upgrading Components", rating: 4.90, reviews: 1800, price: "₹159", time: "60 mins" }
];

const OthersIssuesPage = () => {
  const [othersIssues, setOthersIssues] = useState(othersIssue);
  const [cart, setCart] = useState(() => {
    return othersIssue.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
  });
  const { products, setProducts } = useServiceContext();

  const [added, setAdded] = useState<boolean | null>(null);

  const addToCart = (id) => {
    setProducts([...products, othersIssue.find(item => item.id === id)]);
    setCart(prev => ({ ...prev, [id]: true }));
    setAdded(true)
  };

  const removeFromCart = (id) => {
    setProducts(products.filter(item => item.id !== id));
    setCart(prev => ({ ...prev, [id]: false }));
    setAdded(false)
  };

  return (
    <div className="text-black">
      {
        added === true &&
        <Toastr text={"Issue Added"} />
      }
      {
        added === false &&
        <Toastr text={"Issue Removed"} />
      } 
      <div className="p-5 text-black px-36">
        <div className='flex justify-between'>
          <h1 className="text-center text-2xl font-semibold">Others Issues</h1>
          <Search 
            issue={othersIssues}
            setIssue={setOthersIssues}
            originalIssues={othersIssue}
          />
        </div>
        <div className='grid grid-cols-3 sm:flex-row py-4 justify-between gap-4'>
          {othersIssues.map((issue) => (
            <div
              key={issue.id}
              style={{ border: "1px solid #ccc" }}
              className="flex flex-col justify-between rounded-lg shadow-lg"
            >
              <div className="rounded-t-lg px-3 bg-[#7c72f2] py-2">
                <h3 className="py-1 font-bold">{issue.title}</h3>
                <p className="py-1">⭐ {issue.rating} ({issue.reviews} reviews)</p>
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
    </div>
  );
};

export default OthersIssuesPage;
