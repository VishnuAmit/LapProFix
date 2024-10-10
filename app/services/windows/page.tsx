// app/windows-issues/page.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";

const windowsIssues = [
  { title: "Display Issue", rating: 4.8, reviews: "6K reviews", price: "₹159", time: "45 mins" },
  { title: "Keyboard Issue", rating: 4.81, reviews: "6K reviews", price: "₹159", time: "30 mins" },
  { title: "Battery Issue", rating: 4.7, reviews: "5K reviews", price: "₹199", time: "60 mins" },
];

const WindowsIssuesPage = () => {
  const [cart, setCart] = useState([]);

//   const addToCart = (issue) => {
//     setCart([...cart, issue]);
//     alert(${issue.title} has been added to your cart!);
//   };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Windows Laptop Issues</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {windowsIssues.map((issue, index) => (
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

export default WindowsIssuesPage;
