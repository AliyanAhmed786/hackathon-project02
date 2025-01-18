import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/dist/client/link'

function ForthSection() {
  return (
    <div className="bg-lightyellow py-10 px-4 md:px-10">
      {/* Flex container for layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Image Container */}
        <div className="w-full max-w-[600px] flex flex-wrap justify-center">
          <Image
            src="/Asgaard sofa 1.png"
            width={853}
            height={1000}
            alt="Asgaard Sofa"
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Text & Button Container */}
        <div className="w-full text-center md:text-left md:max-w-[500px]">
          <p className="text-xl md:text-2xl flex justify-center  text-gray-700">New Arrivals</p>
          <h1 className="text-4xl md:text-5xl my-3 lg:text-7xl font-bold text-black mb-4">Asgaard Sofa</h1>
          <div className='flex justify-center'>
          <Link href="/shop">
          <Button
            variant="outline"
            className="text-black text-lg mt-8 sm:text-xl lg:text-2xl w-64 rounded-none bg-lightyellow hover:bg-black hover:text-white border-black h-16 md:h-16 mx-auto md:mx-0"
          >
            Order Now
          </Button>
          </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ForthSection
