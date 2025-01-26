'use client';

import React, { useState, useEffect } from "react";
import { useStore } from '@/Store/usestore';
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { urlFor } from "@/sanity/lib/image";

const Wishlist = () => {
  const { wishlistItems, addToCart, removeFromWishlist, getWishlistProducts } = useStore(); // Access Zustand store
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWishlistProducts = () => {
      try {
        const wishlistProductDetails = getWishlistProducts();
        setProducts(wishlistProductDetails);
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishlistProducts();
  }, [wishlistItems]);

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <section className="container mx-auto px-4 py-5 max-w-6xl">
      <div className="mt-10 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">My Wishlist</h1>
        {loading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <div
              className="h-48 md:h-28 w-full rounded-md animate-pulse bg-gray-300"
              key={index}
            />
          ))
        ) : products.length === 0 ? (
          <p className="text-lg text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-6">
            {products.map((product) => (
              <div
                className="flex flex-col md:flex-row gap-4 items-center border-b pb-4"
                key={product._id}
              >
                {/* Image and Details */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Image */}
                  <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-md overflow-hidden">
                    {/* <Link href={`/product/${product._id}`} className="absolute inset-0"> */}
                      <Image
                        src={urlFor(product.imageUrl).url()}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    {/* </Link> */}
                  </div>
                  {/* Details */}
                  <div className="space-y-2 text-center md:text-left">
                    <Link href={`/product/${product._id}`}>
                      <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                        {product.name}
                      </h2>
                    </Link>
                    <p className="line-clamp-2 text-gray-600 text-sm">{product.description}</p>
                    <p className="text-gray-500 text-sm">
                      Category:{" "}
                      <span className="font-medium text-gray-800">
                        {product.category?.name || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Price and Actions */}
                <div className="flex flex-col items-center md:items-end space-y-3">
                  <p className="text-xl font-semibold text-gray-700">${product.price}</p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 text-sm"
                    >
                      Add to Cart
                    </Button>
                    <RiDeleteBin6Line
                      className="w-6 h-6 text-red-500 cursor-pointer"
                      onClick={() => handleRemoveFromWishlist(product._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
