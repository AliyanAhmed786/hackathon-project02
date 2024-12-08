import Link from 'next/link'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const footerSections = [
  {
    title: "Links",
    links: [
      { name: "Home", href: "#" },
      { name: "Shop", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
    ]
  },
  {
    title: "Help",
    links: [
      { name: "Payment Options", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Privacy Policies", href: "#" },
    ]
  },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-20 mx-14">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-2 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className='flex flex-col justify-center'>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-8 text-sm font-semibold text-[#9F9F9F] uppercase dark:text-white">{section.title}</h2>
              <ul className="text-black space-y-10 font-medium">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-4 mt-14">
                    <Link href={link.href} className="hover:underline">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className='text-[#9F9F9F]'>Newsletter</p>
            <div className="flex flex-col sm:flex-row w-full max-w-sm items-center space-x-2 mt-12">
              <Input className='w-full sm:w-[173px] rounded-none' type="email" placeholder="Enter Your Email Address" />
              <Button 
  variant="ghost" 
  className="text-black text-lg sm:text-xl text-[14px] border-b-2 rounded-none border-black w-[121px] h-12 mx-auto lg:mx-0">
  <span className="inline-block px-2 py-1 hover:bg-black hover:text-white transition-all">
    Subscribe
  </span>
</Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        2022 Meubel House. All rights reserved
      </div>
    </footer>
  )
}
