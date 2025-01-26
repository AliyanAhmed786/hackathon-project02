import React from 'react'
import BgImage from '@/components/BgImage'
import ShopCard from '@/components/ShopCard'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

function Page() {
  return (
    <div className='mt-32'>
      <div>
        <BgImage
          imageSrc={'/Rectangle 1.png'}
          heading={'Shop'}
          paragraph={'Home'}
          icon={<ChevronRight />}
          iconText={'Shop'}
        />
      </div>
      <div>
        <ShopCard />
      </div>

      <div className='flex justify-center space-x-4'>
        <Button className='bg-myyellow text-black h-16 w-16'>1</Button>
        <Link href="/shop">
          <Button className='bg-lightyellow text-black h-16 w-16'>2</Button>
        </Link>
        <Link href="/shop">
          <Button className='bg-lightyellow text-black h-16 w-16'>3</Button>
        </Link>
        <Link href="/shop">
          <Button className='bg-lightyellow text-black h-16 w-24'>Next</Button>
        </Link>
      </div>
    </div>
  )
}

export default Page
