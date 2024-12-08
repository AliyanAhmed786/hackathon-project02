import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Side Table", price:2500000, image: "/Trenton modular sofa_3 1.png" },
  { id: 2, name: "Coffee Table", price: 2500000, image: "/Granite dining table with dining chair 1.png" },
  { id: 3, name: "Dining Table", price: 2500000, image: "/Outdoor bar table and stool 1.png" },
  { id: 4, name: "Console Table", price: 2500000, image: "/Plain console with teak mirror 1.png" },
]

export default function ProductCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-lg font-bold text-gray-900">
                Rs. {product.price.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

