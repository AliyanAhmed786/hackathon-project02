"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"; 
import { Menu, Search, Heart, ShoppingCart, User } from "lucide-react"; 

function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname(); // Use pathname to determine the current route

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Set navbar color based on the current route
  const navbarColor = pathname === "/" ? "bg-myyellow text-white" : "bg-white text-black";

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className={`flex justify-between items-center h-[100px] px-4 md:px-8 ${navbarColor}`}>
        {/* Navbar Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-6 items-center font-medium text-[20px]">
          {navItems.map((item, i) => (
            <li className="hover:text-yellow-500 z-10" key={i}>
              {item.link === "/" ? (
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/"; // Force a page reload when clicking on Home
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

        {/* Icons on the Right (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center z-10">
          <Link href="/account">
            <User className="cursor-pointer hover:text-yellow-500" />
          </Link>
          <Link href="/search">
            <Search className="cursor-pointer hover:text-yellow-500" />
          </Link>
          <Link href="/favorites">
            <Heart className="cursor-pointer hover:text-yellow-500" />
          </Link>
          <Link href="/cart">
            <ShoppingCart className="cursor-pointer hover:text-yellow-500" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
          <SheetTrigger className="md:hidden ml-auto">
            <Menu className="cursor-pointer" />
          </SheetTrigger>

          <SheetContent>
            <ul className="flex flex-col gap-4 p-4 list-none">
              {navItems.map((item, i) => (
                <li className="hover:text-yellow-500" key={i} onClick={() => setIsSheetOpen(false)}>
                  {item.link === "/" ? (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/"; // Force a page reload when clicking on Home
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
              {/* Mobile Icons */}
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/search">
                  <Search className="cursor-pointer hover:text-yellow-500" />
                </Link>
                <Link href="/favorites">
                  <Heart className="cursor-pointer hover:text-yellow-500" />
                </Link>
                <Link href="/cart">
                  <ShoppingCart className="cursor-pointer hover:text-yellow-500" />
                </Link>
                <Link href="/account">
                  <User className="cursor-pointer hover:text-yellow-500" />
                </Link>
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
