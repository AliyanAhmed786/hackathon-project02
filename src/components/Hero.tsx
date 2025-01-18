import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Poppins } from 'next/font/google';
import Link from 'next/dist/client/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

function Hero() {
  return (
    <div className='bg-myyellow'>
      <div className='flex flex-col md:flex-row items-center justify-between py-8 px-2 md:px-[100px]'>
        
        {/* Text and Button Container */}
        <div className='w-full md:w-[440px] h-auto md:h-[276px] p-6 flex flex-col justify-center'>
          {/* Hero Text */}
          <h1 className={`${poppins.className} w-full text-[42px] md:text-[48px] lg:text-[64px] font-bold text-black`}>
            Rocket Single
          </h1>

          <h1 className={`${poppins.className} text-[40px] md:text-[42px] lg:text-[64px] font-bold text-black mb-4`}>
            Seater
          </h1>

          {/* Shop Now Button */}
          <Link href="/shop">
          <Button 
            variant="ghost" 
            className='bg-myyellow text-black border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12'>
            Shop Now
          </Button>
          </Link>
        </div>

        {/* Image Container */}
        <div className='flex justify-center mt-6 md:mt-0 w-full md:w-[600px] lg:w-[700px]'>
          <Image
            src="/Rocket single seater 1.png"
            width={853}
            height={1000}
            alt="Rocket single seater"
            className='object-contain w-full h-auto md:scale-y lg:scale-125'
          />
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
