'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { useStore } from '@/Store/usestore'; // Import your Zustand store
import SecCard from '@/components/SecCard';

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

type CartProduct = Product & { quantity: number };


const Page = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useStore(); // Access the addToCart function from Zustand store

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "product" && _id == $id]{
            _id,
            name,
            description,
            price,
            discountPercentage,
            "imageUrl": image.asset->url,
            stockLevel,
            category,
            isFeaturedProduct
          }`,
          { id } // Pass the `id` dynamically as a parameter for the Sanity query
        );
        if (data.length > 0) {
          setProduct(data[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="mt-28">
      <div className="font-sans">
        <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
            {/* Left Section */}
            <div className="w-full lg:sticky top-0 sm:flex gap-2">
              <img
                src={product.imageUrl}
                alt="Product"
                className="w-4/5 rounded-md object-cover"
              />
            </div>
            {/* Right Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-800 text-xl font-bold">Rs. {product.price}</p>
              <p>{product.description}</p>
              <div className="flex space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-200" />
                ))}
              </div>
              <Button
                variant="outline"
                color="indigo"
                className="border-2 my-5 border-black w-full md:w-[215px] h-16"
                onClick={() =>
                  addToCart({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    quantity: 1,
                  } as CartProduct)
                }
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Page;
