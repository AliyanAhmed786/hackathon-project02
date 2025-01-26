'use client'

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { useStore } from '@/Store/usestore';
import { Button } from './ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
  isFeaturedProduct: boolean;
  quantity?: number;
};

export default function ShopCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart, wishlistItems, addToWishlist, removeFromWishlist } = useStore(); // Access Zustand store

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == 'product']{
            _id,
            name,
            description,
            price,
            discountPercentage,
            "imageUrl": image.asset->url,
            stockLevel,
            category,
            isFeaturedProduct
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleWishlist = (product: Product) => {
    if (wishlistItems.some((item) => item._id === product._id)) {
      removeFromWishlist(product._id); // Remove from wishlist
    } else {
      addToWishlist(product); // Add to wishlist
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="my-5 mx-5">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-center col-span-4">No products available at the moment.</p>
        ) : (
          products.map((product) => {
            const discountedPrice = product.discountPercentage
              ? product.price - (product.price * product.discountPercentage) / 100
              : product.price;

            return (
              <div
                key={product._id}
                className="border p-4 flex flex-col items-center bg-white rounded-lg shadow-md"
              >
                {/* Wishlist Button */}
                <div
                  onClick={() => toggleWishlist(product)}
                  className={`ml-auto my-2 flex cursor-pointer ${
                    wishlistItems.some((item) => item._id === product._id)
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  <Heart size={20} />
                </div>

                <Link href={`/shop/${product._id}`}>
                  <div className="w-48 h-48 relative overflow-hidden rounded-md cursor-pointer">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="transition-all duration-300 ease-in-out transform hover:scale-105 object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.description}</p>

                  <div className="mt-2 flex items-center gap-2">
                    {product.discountPercentage > 0 && (
                      <span className="text-gray-400 line-through">${product.price}</span>
                    )}
                    <p className="text-green-600 font-bold">${discountedPrice.toFixed(2)}</p>
                  </div>
                </Link>

                <Button
                  variant="ghost"
                  onClick={() => addToCart({ ...product, quantity: 1 } as Product)}
                  className="bg-white text-black border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12 mt-4"
                >
                  Add to Cart
                </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
