import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react' // Example icon, you can replace it with any other

interface BgImageProps {
  imageSrc: string; // The source of the background image
  heading: string; // The heading text
  paragraph: string; // The paragraph text
  icon: React.ReactNode; // The icon component (e.g., Heart, ShoppingCart, etc.)
  iconText: string; // The text to display next to the icon
}

const BgImage: React.FC<BgImageProps> = ({ imageSrc, heading, paragraph, icon, iconText }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={imageSrc}
        width={1440}
        height={316}
        alt="/Rectangle 1.png"
        className="w-full h-auto"
      />
      
      {/* Text Overlay on Image */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center p-4 bg-black bg-opacity-40">
        <div className="text-black">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
          
          {/* Icon and Text */}
          <div className="flex justify-center items-center space-x-2">
            {/* Paragraph */}
          <p className="text-lg">{paragraph}</p>
            <div className="text-black">{icon}</div>
            <p className="text-lg">{iconText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BgImage
