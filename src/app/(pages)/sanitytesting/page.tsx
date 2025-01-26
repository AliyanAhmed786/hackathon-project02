'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Adjust based on your actual client import
import Image from 'next/image';
import { useStore } from '@/Store/usestore'; // Import Zustand store

// Define your product type
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
};

export default function SecCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useStore(); // Get the addToCart function from Zustand

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from Sanity
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
        setProducts(data); // Set the fetched products to the state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="my-5 mx-5">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 flex flex-col items-center bg-white rounded-lg shadow-md"
          >
            <div className="w-48 h-48 relative overflow-hidden rounded-md">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
            <button
              onClick={() => addToCart({ ...product, quantity: 1 } as Product)} // Add to cart when clicked
              className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
