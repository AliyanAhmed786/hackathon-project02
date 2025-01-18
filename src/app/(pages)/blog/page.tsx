import BgImage from "@/components/BgImage";
import { BlogCard } from "@/components/BlogCard";
import { RecentPost } from "@/components/RecentPost";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
  <div className='mt-20'>
    <div className=''>
    <BgImage imageSrc={'/Rectangle 1.png'} heading={'Blog'} paragraph={'Home'} icon={<ChevronRight />} iconText={'Blog'}/>        </div>
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10">
      {/* Blog Cards Section */}
      <div className="lg:w-2/3">
        <BlogCard />
      </div>

      {/* Right Side Content (Search, Categories, Recent Posts) */}
      <div className="lg:w-1/3">
        {/* Search Section */}
        <div className="flex mt-10 items-center gap-4 relative">
          <input
            type="text"
            id="field"
            placeholder="What are you looking for?"
            className="block w-full p-2 pr-10 pl-4 border border-gray-300 rounded-lg focus:ring-2"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Categories Section */}
        <div className="px-6 mt-8">
          <h1 className="my-8 text-3xl">Categories</h1>
          <div className="flex flex-col space-y-5">
            <div className="flex justify-between">
              <p>Crafts</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p>Design</p>
              <p>8</p>
            </div>
            <div className="flex justify-between">
              <p>Handmade</p>
              <p>7</p>
            </div>
            <div className="flex justify-between">
              <p>Interior</p>
              <p>1</p>
            </div>
            <div className="flex justify-between">
              <p>Wood</p>
              <p>6</p>
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="my-10">
          <div className="text-3xl">Recent Posts</div>
          <RecentPost />
        </div>
      </div>
    </div>
    </div>
  );
}
