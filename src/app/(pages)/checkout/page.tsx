import BgImage from "@/components/BgImage";
import TextSection from "@/components/TextSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Checkout() {
  return (
    <div>
      <div className=''>
      <BgImage imageSrc={'/Rectangle 1.png'} heading={'Check Out'} paragraph={'Home'} icon={<ChevronRight />} iconText={'Check Out'}/>
        </div>
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Billing Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Billing Information */}
        <div className="lg:col-span-2 space-y-4">
          {/* Full Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                First Name
              </label>
              <Input
                id="first-name"
                type="text"
                className="mt-1 h-[75px] block w-full"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-base font-medium text-gray-700">
                Last Name
              </label>
              <Input
                id="last-name"
                type="text"
                className="mt-1 h-[75px] block w-full"
              />
            </div>
          </div>

          {/* Company Name (Optional) */}
          <div>
            <label htmlFor="company" className="block text-base font-medium text-gray-700">
              Company Name (Optional)
            </label>
            <Input
              id="company"
              type="text"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Country / Region */}
          <div>
            <label htmlFor="country" className="block text-base font-medium text-gray-700">
              Country / Region
            </label>
            <Input
              id="country"
              type="text"
              placeholder="Sri Lanka"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Street Address */}
          <div>
            <label htmlFor="street" className="block text-base font-medium text-gray-700">
              Street address
            </label>
            <Input
              id="street"
              type="text"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Town / City */}
          <div>
            <label htmlFor="city" className="block text-base font-medium text-gray-700">
              Town / City
            </label>
            <Input
              id="city"
              type="text"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Province */}
          <div>
            <label htmlFor="province" className="block text-base font-medium text-gray-700">
              Province
            </label>
            <Input
              id="province"
              type="text"
              placeholder="Western Province"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* ZIP Code */}
          <div>
            <label htmlFor="zip" className="block text-base font-medium text-gray-700">
              ZIP code
            </label>
            <Input
              id="zip"
              type="text"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700">
              Phone
            </label>
            <Input
              id="phone"
              type="text"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              className="mt-1 h-[75px] block w-full"
            />
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additional-info" className="block text-base font-medium text-gray-700">
              Additional Information
            </label>
            <Input
              id="additional-info"
              type="text"
              placeholder="Any additional information"
              className="mt-1 h-[75px] block w-full"
            />
          </div>
        </div>

        {/* Right Section - Product & Pricing */}
        <div className="space-y-6">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold text-gray-900">Product</h3>
            <h3 className="text-2xl font-bold text-gray-900">Subtotal</h3>
          </div>

          {/* Pricing */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-lg text-[#9F9F9F]">Asgaard sofa <span>* 1</span></p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-black">Subtotal </p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-black">Total </p>
              <p className="text-2xl text-[#B88E2F] font-semibold">Rs. 250,000.00</p>
            </div>
          </div>

          {/* Horizontal Divider */}
          <hr className="border-t border-gray-300" />

          {/* Bullet Points */}
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-black">• Direct Bank Transfer</span>
            </li>
            <li className="text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</li>
            <li className="flex items-center">
              <span className="text-[#9F9F9F]">• Direct Bank Transfer</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#9F9F9F]">• Cash On Delivery</span>
            </li>
            <li>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-black font-bold">privacy policy</span>.</li>
          </ul>
          <div className="flex justify-center"> 
          {/* Button */}
          <Button variant="outline" className="border-2 rounded-2xl  border-black w-full md:w-[215px] h-16">
          Place order
          </Button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <TextSection/>
    </div>
    </div>
  );
}

