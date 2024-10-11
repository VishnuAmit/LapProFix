import React from 'react';

const InstantIssuesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Instant Issues</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ServiceCard 
          title="Instant Book for Desktop" 
          rating={4.80} 
          reviews={2000} 
          price={159} 
          time="45 mins" 
        />
        <ServiceCard 
          title="Instant Book for Windows Laptop" 
          rating={4.84} 
          reviews={19000} 
          price={159} 
          time="45 mins" 
        />
        <ServiceCard 
          title="Instant Book for MacBook/Apple Laptop" 
          rating={4.69} 
          reviews={224} 
          price={159} 
          time="45 mins" 
        />
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

export default InstantIssuesPage;
