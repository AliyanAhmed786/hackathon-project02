import React from 'react'
import Image from 'next/image'
import LogIn from '@/components/LogIn'
import TextSection from '@/components/TextSection'
import BgImage from '@/components/BgImage'
import { ChevronRight } from 'lucide-react'

function account() {
  return (
    <div>
      <div className=''>
          <BgImage imageSrc={'/Rectangle 1.png'} heading={'My Account'} paragraph={'Home'} icon={<ChevronRight />} iconText={'My account'}/>
        </div>
        <div>
          <LogIn/>
        </div>
        <div>
          <TextSection/>
        </div>
    </div>
  )
}

export default account
