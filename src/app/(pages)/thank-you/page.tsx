"use client";
import React from 'react';

const Page = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your order. We will notify you once it's shipped.</p>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
};

export default Page;
