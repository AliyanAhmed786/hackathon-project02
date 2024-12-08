"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  groupSize: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    image: "/Rectangle 14.png",
    title: "Exotic Beaches Tour",
    description: "Experience the most beautiful beaches around the world. Conquer the highest peaks and enjoy breathtaking views. Immerse yourself in the rich history of ancient cities.",
    duration: "7 days",
    location: "Maldives",
    groupSize: "10 people"
  },
  {
    id: 2,
    image: "/Rectangle 14.png",
    title: "Mountain Expedition",
    description: "Experience the most beautiful beaches around the world. Conquer the highest peaks and enjoy breathtaking views. Immerse yourself in the rich history of ancient cities.",
    duration: "10 days",
    location: "Nepal",
    groupSize: "8 people"
  },
  {
    id: 3,
    image: "/Rectangle 14.png",
    title: "Cultural City Tour",
    description: "Experience the most beautiful beaches around the world. Conquer the highest peaks and enjoy breathtaking views. Immerse yourself in the rich history of ancient cities.",
    duration: "5 days",
    location: "Rome",
    groupSize: "12 people"
  },
  {
    id: 4,
    image: "/Rectangle 14.png",
    title: "Cultural City Tour",
    description: "Experience the most beautiful beaches around the world. Conquer the highest peaks and enjoy breathtaking views. Immerse yourself in the rich history of ancient cities.",
    duration: "5 days",
    location: "Rome",
    groupSize: "12 people"
  },
];

export function BlogCard() {
  return (
    <div className="gap-6 justify-start grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col">
      {cardData.map((card) => (
        <div key={card.id} className="w-full flex justify-center">
          <Card className="my-10 mx-5 w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] h-[900px]">
            <CardHeader className="p-0">
              <div className="relative h-[650px] w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex space-x-8 mb-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{card.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{card.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{card.groupSize}</span>
                </div>
              </div>
              <CardTitle className="text-2xl mb-2">{card.title}</CardTitle>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
