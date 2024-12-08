import React from 'react'
import FiveCard from './FiveCard'
import { Button } from './ui/button'
import Link from 'next/link'

function FifthSection() {
  return (
    <div className='my-10 mx-10'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800'>Our Blogs</h1>
        <p className='text-sm sm:text-base text-[#9f9f9f] mt-4 max-w-3xl mx-auto'>
        Find a bright ideal to suit your taste with our great selection        </p>
      </div>
      <div className='flex my-10'>
        <FiveCard/>
      </div>
      <div className='flex justify-center'>
      <Link href="/blog">
      <Button 
  variant="ghost" 
  className="text-black text-lg sm:text-xl lg:text-2xl border-b-2 rounded-none border-black w-[121px] h-12 mx-auto lg:mx-0">
  <span className="inline-block px-2 py-1 hover:bg-black hover:text-white transition-all">
    View More Post
  </span>
</Button>
            </Link>
      </div>
    </div>
  )
}

export default FifthSection
