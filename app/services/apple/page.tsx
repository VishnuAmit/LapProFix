// app/apple-issues/page.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";

const appleIssues = [
  { title: "Screen Issue", rating: 4.9, reviews: "4K reviews", price: "₹199", time: "50 mins" },
  { title: "Battery Drain Issue", rating: 4.85, reviews: "3K reviews", price: "₹199", time: "55 mins" },
  { title: "Software Issue", rating: 4.75, reviews: "2K reviews", price: "₹149", time: "40 mins" },
];

const AppleIssuesPage = () => {
  const [cart, setCart] = useState([]);

//   const addToCart = (issue) => {
//     setCart([...cart, issue]);
//     alert(${issue.title} has been added to your cart!);
//   };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Apple Laptop Issues</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {appleIssues.map((issue, index) => (
          <div key={index} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2>{issue.title}</h2>
              <p>⭐ {issue.rating} ({issue.reviews})</p>
              <p>{issue.price} • {issue.time}</p>
            </div>
            <button style={{ background: "#4CAF50", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
              Add
            </button>
          </div>
        ))}
      </div>
      <Link href="/cart" style={{ marginTop: "20px", display: "block", textAlign: "center", color: "#4CAF50", textDecoration: "underline" }}>
        Go to Cart
      </Link>
    </div>
  );
};

export default AppleIssuesPage;
