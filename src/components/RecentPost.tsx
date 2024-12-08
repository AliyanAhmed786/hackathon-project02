"use client";

import * as React from "react";
import { Card } from "@/components/ui/card"; // Assuming you are using a UI card component.
import Image from "next/image";

// Define props interface
interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

// Example card data array
const cardData: CardData[] = [
  {
    id: 1,
    image: "/Rectangle 14.png",
    title: "",
    description: "Going all-in with millennial design",
    date: "April 12, 2024"
  },
  {
    id: 2,
    image: "/Rectangle 14.png",
    title: "",
    description: "Going all-in with millennial design",
    date: "May 15, 2024"
  },
  {
    id: 3,
    image: "/Rectangle 14.png",
    title: "",
    description: "Going all-in with millennial design",
    date: "June 20, 2024"
  },
  {
    id: 4,
    image: "/Rectangle 14.png",
    title: "",
    description: "Going all-in with millennial design",
    date: "June 20, 2024"
  },
  {
    id: 5,
    image: "/Rectangle 14.png",
    title: "",
    description: "Going all-in with millennial design",
    date: "June 20, 2024"
  },
];

// Card Component
export function RecentPost() {
  return (
    <div className="flex flex-col gap-6 justify-start">
      {cardData.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card className="w-72 flex flex-row">
            {/* Left side: Image */}
            <div className="relative w-1/3">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-l-lg"
              />
            </div>

            {/* Right side: Text content */}
            <div className="flex flex-col w-2/3">
              <h3 className="text-xl font-bold  mb-4">{card.title}</h3>
              <p className="text-gray-600 ml-2 mb-4">{card.description}</p>
              <span className="text-sm ml-2 text-gray-500">{card.date}</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
