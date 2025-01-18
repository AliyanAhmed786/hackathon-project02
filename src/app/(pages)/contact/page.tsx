"use client";

import BgImage from "@/components/BgImage";
import TextSection from "@/components/TextSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Clock, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
  <div className='mt-20'>
    <div className=''>
    <BgImage imageSrc={'/Rectangle 1.png'} heading={'Contact'} paragraph={'Home'} icon={<ChevronRight />} iconText={'Contact'}/>
        </div>
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col my-14 justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Get In Touch With Us</h1>
        <p className="text-[#9F9F9F] max-w-3xl mx-auto mb-8">
          For more information about our products & services, please feel free to
          drop us an email. Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      {/* Main Section - Left and Right Side */}
      <div className="flex flex-col md:flex-row justify-center gap-8">

        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-6 md:w-1/2">

          {/* Contact Info Block */}
          <div className="flex space-x-4">
            <Phone className="w-6 h-6" />
            <div className="flex flex-col w-56">
              <h3 className="text-2xl font-semibold">Address</h3>
              <p className="text-lg text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Address Block */}
          <div className="flex space-x-4">
            <Phone className="w-6 h-6" />
            <div className="flex flex-col w-56">
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p className="text-lg text-gray-600">
              Mobile: +(84) 546-6789
              Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Email Block */}
          <div className="flex space-x-4">
          <Clock className="h-6 w-6" />
            <div className="flex flex-col  w-56">
              <h3 className="text-2xl font-semibold">Working Time</h3>
              <p className="text-lg text-gray-600">Monday-Friday: 9:00 - 22:00
              Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <form>
            <label>Your name
            <Input
              type="text"
              placeholder="Abc"
              className="p-3 border my-4 border-gray-300 h-[75px] w-full rounded-md mb-4"
            />
            </label>
            <label>Email address
            <Input
              type="email"
              placeholder="Abc@def.com"
              className="p-3 border my-4 border-gray-300 h-[75px] w-full rounded-md mb-4"
            />
            </label>
            <label >Subject
            <Input
              type="text"
              placeholder="This is an optional"
              className="p-3 border my-4 border-gray-300 h-[75px] w-full rounded-md mb-4"
            />
            </label>
            <label >Message
            <textarea
              placeholder="Hi! i’d like to ask about"
              className="p-3 border my-4 border-gray-300 h-[150px] w-full rounded-md resize-none mb-4"
            ></textarea>
            </label>
            <Button
              variant="outline"
              type="submit"
              className="h-12 border-2 border-black w-full md:w-1/2 rounded-2xl mx-auto"
            >
              Submit
            </Button>
          </form>
        </div>

      </div>
    </div>
    <div>
      <TextSection/>
    </div>
    </div>
  );
}
