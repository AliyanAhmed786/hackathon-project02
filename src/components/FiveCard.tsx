import * as React from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Clock, Calendar } from 'lucide-react'

interface Product {
  id: number
  name: string
  image: string
  description: string
  time: string
  date: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Going all-in with millennial design",
    image: "/Rectangle 13.png",
    description: "A beautiful side table perfect for any room.",
    time: "5 min",
    date: "12th Oct 2022"
  },
  {
    id: 2,
    name: "Going all-in with millennial design",
    image: "/Rectangle 14.png",
    description: "Sleek and stylish coffee table for your living room.",
    time: "5 min",
    date: "12th Oct 2022"
  },
  {
    id: 3,
    name: "Going all-in with millennial design",
    image: "/Rectangle 15.png",
    description: "A sturdy dining table for family gatherings.",
    time: "5 min",
    date: "12th Oct 2022"
  },
  {
    id: 4,
    name: "Going all-in with millennial design",
    image: "/Rectangle 13.png",
    description: "A slim console table for your entryway.",
    time: "5 min",
    date: "12th Oct 2022"
  },
  {
    id: 5,
    name: "Going all-in with millennial design",
    image: "/Rectangle 14.png",
    description: "A charming bedside table with antique finish.",
    time: "5 min",
    date: "12th Oct 2022"
  },
]

export default function ProductCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex flex-col p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2 truncate">{product.name}</h2>
                <p className="text-gray-600 mb-4 h-10 overflow-hidden">{product.description}</p>
                <div className='flex justify-center'>
      <Button 
              variant="ghost" 
              className=' text-black text-lg sm:text-xl lg:text-2xl border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-10 mb-5 mx-auto lg:mx-0'>
              Read More
            </Button>
      </div>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{product.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{product.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

