"use client";

import React, { useState } from 'react';
import Link from "next/link";

import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Snackbar from '@mui/material/Snackbar';
import Search from "@/components/Search"
import { useServiceContext} from '../themeProvider';
import Toastr from '@/components/Toast';

const appleIssue = [
  { id : 1, title: "Screen Issue", rating: 4.9, reviews: "4K reviews", price: "₹199", time: "50 mins" },
  { id : 2, title: "Battery Drain Issue", rating: 4.85, reviews: "3K reviews", price: "₹199", time: "55 mins" },
  { id : 3, title: "Software Issue", rating: 4.75, reviews: "2K reviews", price: "₹149", time: "40 mins" },
];

const AppleIssuesPage = () => {
  const [appleIssues, setappleIssues] = useState(appleIssue)
  const [cart, setCart] = useState(() => {
    return appleIssue.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
  });


  const {products, setProducts} = useServiceContext()
  const [added, setAdded] = useState<boolean | null>(null);

  const addToCart = (id) => {
    
    setProducts([...products, appleIssue.find(item => item.id === id)]);
    setCart(prev => ({...prev, [id]: true }));
    setAdded(true)
  };

  const removeFromCart = (id: number) => { // Specify the type for id
    setProducts(products.filter(item=> item.id !== id)); // Ensure prev is an array of Product
    setCart(prev => ({...prev, [id]: false}));
    setAdded(false)
  };

  console.log(products);

  

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
        <div className='flex justify-between'>
          <h1 className="text-center text-2xl font-semibold">Apple Laptop Issues</h1>
          <Search 
            issue = {appleIssues}
            setIssue = {setappleIssues}
            originalIssues = {appleIssue}
            />
        </div>
        <div className='grid grid-cols-3 sm:flex-row py-4 justify-between gap-4'>
          {appleIssues.map((issue, index) => (
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
                    if(cart[issue.id]) 
                      removeFromCart(issue.id);
                    else 
                      addToCart(issue.id);
                  }}
                >
                  { cart[issue.id] ? 
                    <RemoveShoppingCartIcon /> :
                    <ShoppingCartCheckoutIcon /> 
                  }
                </span>

                { cart[issue.id] && 
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

export default AppleIssuesPage;
