import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";

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

export default async function Card() {
  // Fetch products from Sanity using the fourPro query
  const { data: products }: { data: Product[] } = await sanityFetch({
    query: `*[_type == 'product']{
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
  });

  return (
    <div className="mx-10 mt-20">

      {/* Display products in a grid */}
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
}
