import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import ThirdSection from '@/components/ThirdSection'



function page() {
  return (
    <div>
      <div className="font-sans">
  <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

      {/* Left Section (Image Gallery & Main Image) */}
      <div className="w-full lg:sticky top-0 sm:flex gap-2">
        <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
          <img src="/Asgaard sofa 1.png" alt="Product1" className="w-full cursor-pointer rounded-md outline bg-myyellow" />
          <img src="/Granite dining table with dining chair 1.png" alt="Product2" className=" bg-myyellow w-full cursor-pointer rounded-md" />
          <img src="/Cloud sofa three seater + ottoman_3 1.png" alt="Product3" className="bg-myyellow w-full cursor-pointer rounded-md" />
          <img src="/Rocket single seater 1.png" alt="Product4" className="bg-myyellow w-full cursor-pointer rounded-md" />
        </div>
        <img src="/Asgaard sofa 1.png" alt="Product" className="bg-myyellow w-4/5 rounded-md object-cover" />
      </div>

      {/* Right Section (Product Details) */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Asgaard sofa</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <p className="text-gray-800 text-xl font-bold">Rs. 250,000.00</p>
          <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
          <p className="text-gray-400 text-xl"> <span className="text-sm ml-1.5">Tax included</span></p>
        </div>

        {/* Rating Section */}
        <div className="flex space-x-2 mt-4">
        <Star className='text-yellow-400 fill-yellow-200' />
        <Star className='text-yellow-400 fill-yellow-200' />
        <Star className='text-yellow-400 fill-yellow-200' />
        <Star className='text-yellow-400 fill-yellow-200' />
        <Star />
        </div>

        {/* Sizes Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <button type="button" className="w-10 h-10 border-2 hover:border-yellow-200 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">SM</button>
            <button type="button" className="w-10 h-10 border-2 hover:border-yellow-200 border-yellow-400 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">MD</button>
            <button type="button" className="w-10 h-10 border-2 hover:border-yellow-200 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">LG</button>
            <button type="button" className="w-10 h-10 border-2 hover:border-yellow-200 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">XL</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button variant="outline" color="indigo" className="border-2 my-5 border-black w-full md:w-[215px] h-16">
                  Register</Button>
      <hr />
      <div className='m-3'>
        <div className='flex space-x-2'><p>SKU</p>
        <span>:</span>
        <p>SS001</p></div>
        <div className='flex space-x-2'><p>SKU</p>
        <span>:</span>
        <p>SS001</p></div>
        <div className='flex space-x-2'><p>SKU</p>
        <span>:</span>
        <p>SS001</p></div>
        <div className='flex space-x-2'><p>SKU</p>
        <span>:</span>
        <p>SS001</p></div>
      </div>
      
      </div>
      
    </div>
    <hr />
    <div className='my-10 flex-wrap'>
      <div className='flex justify-center space-x-20 my-5'>
      <div className='h-9'>Description</div>
      <div className='h-9 text-[#9F9F9F]'>Additional Information</div>
      <div className='h-9 text-[#9F9F9F]'>Reviews [5]</div></div>
      <div><p className='text-[#9F9F9F] my-5'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p></div>
      <div><p className='text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p></div>
    </div>
  </div>
</div>

<div className='flex justify-around'>
  <div>
<Image
            src="/Mask group (1).png"
            width={500}
            height={500}
            alt="Rocket single seater"
            className='bg-myyellow sm:flex sm:flex-col'
          />
</div>
<div>
<Image
            src="/Mask group.png"
            width={500}
            height={500}
            alt="Rocket single seater"
            className='bg-myyellow sm:flex sm:flex-col'
          />

</div>
</div>
<div>
  <ThirdSection/>
</div>

    </div>
  )
}

export default page
