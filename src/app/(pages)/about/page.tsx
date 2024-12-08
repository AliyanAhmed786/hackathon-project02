import BgImage from '@/components/BgImage'
import TextSection from '@/components/TextSection'
import { ChevronRight } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div>
        <div>
        <BgImage imageSrc={'/Rectangle 1.png'} heading={'About'} paragraph={'Home'} icon={<ChevronRight />} iconText={'About'}/>
        </div>
      <div className="flex items-center max-w-screen-xl mx-auto px-4 sm:px-6">
  {/* Left Image Section */}
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <img src="https://i.imgur.com/WbQnbas.png" alt="About Our Company" className="w-full h-auto object-cover" />
    </div>
  </div>

  {/* Right Text Section */}
  <div className="sm:w-1/2 p-5">
    <div className="text">
      {/* Subtitle */}
      <span className="text-gray-500 border-b-2 border-myyellow uppercase">About us</span>
      
      {/* Heading */}
      <h2 className="my-4 font-bold text-3xl sm:text-4xl">
        About <span className="text-myyellow">Our Company</span>
      </h2>
      
      {/* Paragraph */}
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
        doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
        voluptatum.
      </p>
    </div>
  </div>
</div>
<div>
<TextSection/>
</div>

    </div>
  )
}

export default page
