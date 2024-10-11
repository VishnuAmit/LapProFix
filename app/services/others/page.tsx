import React from 'react';
import Link from 'next/link';

const OthersIssuesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Others Issues</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ServiceCard title="Regular Cleaning" rating={4.75} reviews={1200} price={159} time="30 mins" />
        <ServiceCard title="Regular Check-Up" rating={4.82} reviews={3100} price={159} time="30 mins" />
        <ServiceCard title="Upgrading Components" rating={4.90} reviews={1800} price={159} time="60 mins" />
      </div>
    </div>
  );
};

const ServiceCard = ({ title, rating, reviews, price, time }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3>{title}</h3>
        <p>⭐ {rating} ({reviews} reviews)</p>
        <p>₹{price} • {time}</p>
      </div>
      <button style={{ padding: '10px', backgroundColor: '#6f63f2', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Add
      </button>
    </div>
  );
};

export default OthersIssuesPage;
