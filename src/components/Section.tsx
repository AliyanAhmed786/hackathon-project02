import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/dist/client/link";

function Section() {
  return (
    <div className="bg-[#fAf4f4] py-[20px]">
      <div className="mx-4 sm:mx-8 lg:mx-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* First Section - Granite Side Table */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex-wrap">
              <Image
                src="/Granite square side table 1sub.png"
                width={500}
                height={500}
                alt="Granite Side Table"
                className="object-contain"
              />
            </div>
            <div className="mt-4 px-4 lg:px-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                Side Table
              </h3>
              <Link href="/shop">
                <Button
                  variant="ghost"
                  className="text-black text-lg sm:text-xl lg:text-2xl border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12 mx-auto lg:mx-0"
                >
                  View More
                </Button>
              </Link>
            </div>
          </div>

          {/* Second Section - Cloud Sofa */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="flex-wrap">
              <Image
                src="/Cloud sofa three seater + ottoman_3 1.png"
                width={500}
                height={500}
                alt="Cloud Sofa"
                className="object-contain"
              />
            </div>
            <div className="mt-4 px-4 lg:px-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                Cloud Sofa
              </h3>
              <Link href="/shop">
                <Button
                  variant="ghost"
                  className="text-black text-lg sm:text-xl lg:text-2xl border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12 mx-auto lg:mx-0"
                >
                  View More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
