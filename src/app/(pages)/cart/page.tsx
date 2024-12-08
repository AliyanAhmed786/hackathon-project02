import React from 'react';
import Image from 'next/image';
import { ChevronRight, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TextSection from '@/components/TextSection';
import BgImage from '@/components/BgImage';
import Link from 'next/link';

function Page() {
  return (
    <div>
            <div className=''>
            <BgImage imageSrc={'/Rectangle 1.png'} heading={'Cart'} paragraph={'Home'} icon={<ChevronRight />} iconText={'Cart'}/>
        </div>

    <div className="max-w-screen-xl my-10 mx-auto">
      {/* Shopping Cart Layout */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 py-10">
        
        {/* Product List (Left side) */}
        <div className="w-full lg:w-2/3 bg-gray-50 p-4 rounded-lg shadow-md">
          {/* Header Table for Large Screens */}
          <div className="hidden lg:grid grid-cols-5 gap-4 bg-myyellow p-3 rounded-t-lg text-center">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
            <h4>Remove</h4>
          </div>

          {/* Product Card for Smaller Screens (Mobile/Tablet) */}
          <div className="lg:hidden bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Product Info (Image and Name) */}
            <div className="flex flex-col sm:flex-row items-start space-x-4">
              <Image
                src="/Rectangle 1.png"
                width={100}
                height={100}
                alt="Product Image"
                className="rounded-md"
              />
              <div className="flex flex-col justify-start">
                <h4 className="text-xl font-semibold">Rocket Single Seater</h4>
                <div className="flex justify-between mt-2">
                  <span>Rs. 50,000.00</span>
                  <input
                    type="number"
                    value="1"
                    className="w-16 p-2 border border-gray-300 rounded-md text-center"
                  />
                </div>
              </div>
            </div>

            {/* Subtotal and Remove */}
            <div className="flex justify-between items-center mt-4">
              <h4 className="text-xl">Rs. 50,000.00</h4>
              <Trash className="text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Product Row for Larger Screens */}
          <div className="hidden lg:flex items-center justify-between p-4 border-b">
            {/* Product Info (Image and Name) */}
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <Image
                src="/Rectangle 1.png"
                width={100}
                height={100}
                alt="Product Image"
                className="rounded-md"
              />
              <div className="flex flex-col justify-start">
                <h4 className="text-xl font-semibold">Rocket Single Seater</h4>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center justify-start w-full sm:w-auto">
              <h4 className="text-xl">Rs. 50,000.00</h4>
            </div>

            {/* Quantity */}
            <div className="flex flex-col items-center justify-start w-full sm:w-auto">
              <input
                type="number"
                value="1"
                className="w-16 p-2 border border-gray-300 rounded-md text-center"
              />
            </div>

            {/* Subtotal */}
            <div className="flex flex-col items-center justify-start w-full sm:w-auto">
              <h4 className="text-xl">Rs. 50,000.00</h4>
            </div>

            {/* Remove Icon */}
            <div className="flex items-center justify-center w-full sm:w-auto">
              <Trash className="text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Add more product rows as needed */}
        </div>

        {/* Cart Totals (Right side) */}
        <div className="w-full lg:w-[300px] bg-myyellow p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-6">Cart Totals</h1>
          <div className="flex justify-between py-2 border-b">
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between py-2 border-b">
            <p>Shipping</p>
            <p>Rs. 0.00</p>
          </div>
          <div className="flex justify-between py-2 border-b">
            <p>Total</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-center mt-8'>
          {/* Checkout Button */}
          <Link href="/checkout">
          <Button variant="outline" className="border-2 border-black w-full md:w-[215px] h-16">
            Check Out
          </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <TextSection/>
    </div>
    </div>
  );
}

export default Page;
