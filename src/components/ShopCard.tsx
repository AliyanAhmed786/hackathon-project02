'use client';

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the Product type
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

export default function ShopCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(
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
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mb-4 mx-auto mt-10 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            className="border p-4 flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            key={product._id}
          >
            <div className="w-full h-48 relative overflow-hidden rounded-md">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-center">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-2 text-sm text-center">
              {product.description}
            </p>
            <p className="text-green-600 font-bold mt-2 text-center">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
