import React from 'react'
import { Button } from './ui/button'
import Link from 'next/dist/client/link'

function SixthSection() {
  return (
    <div className="relative bg-cover bg-center h-[500px] sm:h-[600px] lg:h-[500px]" style={{ backgroundImage: "url('Rectangle 17.png')" }}>
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Instagram</h1>
        <p className="text-lg sm:text-xl mb-6">Follow our store on Instagram</p>
        <Link href="/">
        <Button className="shadow-lg text-lg h-16 w-64 rounded-full sm:text-xl bg-white text-black border-2 hover:bg-black hover:text-white transition duration-300">
          Follow Us
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default SixthSection
