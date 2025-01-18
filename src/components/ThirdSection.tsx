import React from 'react'
import SecCard from './SecCard'
import { Button } from './ui/button'
import Link from 'next/dist/client/link'

function ThirdSection() {
  return (
    <div className=' h-auto w-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-8'>
      {/* Title and Description */}
      <div className='text-center mb-8'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800'>Top Picks For You</h1>
        <p className='text-sm sm:text-base text-[#9f9f9f] mt-4 max-w-3xl mx-auto'>
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Cards Section */}
      <div>
        <SecCard />
      </div>
      <div className='flex justify-center'>
      <Link href="/shop">
      <Button 
              variant="ghost" 
              className=' text-black text-lg sm:text-xl lg:text-2xl border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12 mx-auto lg:mx-0'>
              View More
            </Button>
      </Link>
      </div>
    </div>
  )
}

export default ThirdSection
