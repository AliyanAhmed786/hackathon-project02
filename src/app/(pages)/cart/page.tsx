"use client";
import { useStore } from "@/Store/usestore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Checkout() {
  const { cartItems, clearCart, removeFromCart, updateQuantity } = useStore(); // 👈 Use updateQuantity
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems, router]);

  

  const handleDecrement = (itemId: string, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(itemId, quantity - 1); // Decrement only if quantity is greater than 1
    }
  };

  const handleIncrement = (itemId: string, quantity: number) => {
    updateQuantity(itemId, quantity + 1); // Always allow increment
  };

  console.log(cartItems); // Check the incoming data

  return (
    <div className="mt-20">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Cart</h3>


            {cartItems.map((item) => (
              <div key={item._id} className="flex flex-col lg:flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4 w-full lg:w-auto">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.name} 
                    width={80} 
                    height={80} 
                    className="rounded-md object-cover"
                  />
                  <h4 className="font-semibold">{item.name}</h4>
                </div>

                <div className="hidden lg:block text-center w-24">{item.price} Rs</div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 w-28">
                  <button 
                    className="px-3 py-1 bg-gray-300 rounded-md"
                    onClick={() => handleDecrement(item._id, item.quantity)} // Decrement only if quantity > 1
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    className="w-12 p-2 border rounded-md text-center"
                    readOnly
                  />
                  <button 
                    className="px-3 py-1 bg-gray-300 rounded-md"
                    onClick={() => handleIncrement(item._id, item.quantity)} // Increment always works
                  >
                    +
                  </button>
                </div>

                <div className="hidden lg:block text-center w-24">{item.price * item.quantity} Rs</div>

                {/* Remove Item Button */}
                <Trash 
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[300px] bg-myyellow p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Cart Totals</h1>
            <div className="flex justify-between py-2 border-b">
              <p>Subtotal</p>
              <p>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} Rs</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-2 border-b font-bold">
              <p>Total</p>
              <p>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} Rs</p>
            </div>
            
            <div className="flex justify-center mt-6">
              <Link href="/checkout"><Button className="bg-green-600 w-full py-3 text-white">
                Place Order
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
