import React from 'react'
import Image from 'next/image'
import ThirdSection from '@/components/ThirdSection'
import SecCard from '@/components/SecCard'
import { Button } from '@/components/ui/button'
import { AlignLeft, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Link from 'next/dist/client/link'
import BgImage from '@/components/BgImage'
import ShopCard from '@/components/ShopCard'

function page() {
  return (
    <div className='mt-32'>
      <div className=''>
      <BgImage imageSrc={'/Rectangle 1.png'} heading={'Shop'} paragraph={'Home'} icon={<ChevronRight />} iconText={'Shop'}/>
        </div>
        <div>
        <ShopCard/>
        </div>

        <div className='flex justify-center space-x-4'>
          <Button className=' bg-myyellow text-black h-16 w-16'>1</Button>
          <Link href="/singleProduct">
          <Button className='bg-lightyellow text-black h-16 w-16'>2</Button>
          </Link>
          <Link href="/singleProduct">
          <Button className='bg-lightyellow text-black h-16 w-16'>3</Button>
          </Link>
          <Link href="/singleProduct">
          <Button className='bg-lightyellow text-black h-16 w-24'>Next</Button>
          </Link>
        </div>

    </div>
  )
}

export default page
