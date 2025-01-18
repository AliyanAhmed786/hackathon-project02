'use client'
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { client } from "@/sanity/lib/client";

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

  useEffect(() => {
    const fetchProducts = async () => {
      // Using client.fetch to get data
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
    };

    fetchProducts();
  }, []);

  return (
    <div className="my-5 mx-5">
      <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
      {products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/3">
          <div
            className="border p-4 flex flex-col items-center bg-white rounded-lg shadow-md"
            key={product._id}
          >
            <div
              className="w-48 h-48 relative overflow-hidden rounded-md"
              style={{ position: "relative" }}
            >
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
          </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-3" />
      <CarouselNext className="mr-3"/>
      </Carousel>
    </div>
  );
}
