import React from 'react';

function TextSection() {
  return (
    <div className="bg-[#FAF4F4] flex flex-col md:flex-row justify-evenly px-6 sm:px-10 py-16 sm:py-28 h-auto md:h-[300px]">
      {/* Free Delivery */}
      <div className="text-center md:text-left">
        <h1 className="text-[24px] sm:text-[32px] text-black ">Free Delivery</h1>
        <p className="text-sm sm:text-base">For all orders over $50, consectetur adipim scing elit.</p>
      </div>
      
      {/* 90 Days Return */}
      <div className="text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-[24px] sm:text-[32px] text-black ">90 Days Return</h1>
        <p className="text-sm sm:text-base">If goods have problems, consectetur adipim scing elit.</p>
      </div>
      
      {/* Secure Payment */}
      <div className="text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-[24px] sm:text-[32px] text-black ">Secure Payment</h1>
        <p className="text-sm sm:text-base">100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </div>
  );
}

export default TextSection;
