'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Adjust based on your actual client import
import Image from 'next/image';
import { useStore } from '@/Store/usestore';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'; // Import ShadCN Carousel component
import { Button } from './ui/button';
import { Heart } from 'lucide-react'; // Import heart icon for wishlist

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
  const { addToCart, wishlistItems, addToWishlist, removeFromWishlist } = useStore(); // Get the functions from Zustand
  const [currentSlide, setCurrentSlide] = useState(0); // To track the current slide

  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products from Sanity
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
      setProducts(data); // Set the fetched products to the state
    };

    fetchProducts();
  }, []);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleWishlist = (product: Product) => {
    if (wishlistItems.some((item) => item._id === product._id)) {
      removeFromWishlist(product._id); // Remove from wishlist if already added
    } else {
      addToWishlist(product); // Add to wishlist if not already added
    }
  };

  return (
    <div className="my-5 mx-11">
      <div className="w-full max-w-7xl mx-auto relative">
        <Carousel className='mx-5'>
          <CarouselContent>
            {/* Group products into sets of 3 */}
            {Array.from({ length: totalSlides }).map((_, index) => (
              <CarouselItem key={index} className="flex gap-4">
                {products.slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide).map((product) => (
                  

                  <div
                    key={product._id}
                    className="basis-1/3 border p-4 flex flex-col items-center bg-white rounded-lg shadow-md"
                  >
                    {/* Wishlist Button */}
                    <div
                      onClick={() => toggleWishlist(product)} 
                      className={`ml-40 my-2 flex cursor-pointer ${wishlistItems.some((item) => item._id === product._id) ? 'text-red-500' : 'text-gray-500'}`}
                    >
                      <Heart size={20} />
                    </div>
                    
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
                    
                    {/* Add to Cart Button */}
                    <Button
                      variant="ghost"
                      onClick={() => addToCart({ ...product, quantity: 1 } as Product)} // Add to cart when clicked
                      className='bg-white text-black border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12 mt-2'
                    >
                      Add to Cart
                    </Button>
                    
                    
                  </div>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
