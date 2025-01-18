"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Search, Heart, ShoppingCart, User } from "lucide-react";

function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const navbarColor = pathname === "/" ? "bg-myyellow text-black" : "bg-white text-black";

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center h-[100px] px-4 md:px-8 ${navbarColor}`}>
          {/* Nav Items (Visible on Laptop/Desktop) */}
          <ul className="hidden md:flex flex-grow justify-center space-x-20 items-center font-medium text-[20px]">
            {navItems.map((item, i) => (
              <li className="hover:text-yellow-500 z-10" key={i}>
                {item.link === "/" ? (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link href={item.link}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>

          {/* Icons (Centered on All Screens) */}
          <div className="flex justify-center space-x-4 items-center z-10 md:space-x-6">
            <Link href="/account">
              <User className="cursor-pointer hover:text-yellow-500" />
            </Link>
            <Link href="/">
              <Search className="cursor-pointer hover:text-yellow-500" />
            </Link>
            <Link href="/">
              <Heart className="cursor-pointer hover:text-yellow-500" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="cursor-pointer hover:text-yellow-500" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="ml-auto md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
              <SheetTrigger>
                <Menu className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="bg-myyellow text-black">
                <ul className="flex flex-col gap-4 p-4 list-none">
                  {navItems.map((item, i) => (
                    <li className="hover:text-yellow-500" key={i} onClick={() => setIsSheetOpen(false)}>
                      {item.link === "/" ? (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/";
                          }}
                          href={item.link}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
