'use client';

import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Search, Heart, ShoppingCart, User, Image } from "lucide-react";
import { useStore } from "@/Store/usestore"; // Import Zustand store
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import Account from "@/components/Account";
import { Dropdown } from "react-day-picker";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

interface CartItem extends Product {
  quantity: number;
}

function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchSheetOpen, setIsSearchSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchError, setIsSearchError] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[] | any>([]);
  const [isCartSheetOpen, setIsCartSheetOpen] = useState(false);

  const { cartItems, wishlistItems, removeFromCart } = useStore();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const router = useRouter()


  const handleLogout = () => {
    alert('Logged out successfully!') // Replace this with actual logout logic
    router.push('/login') // Redirect user to login page after logout
  }

  const navbarColor = pathname === "/" ? "bg-myyellow text-black" : "bg-white text-black";

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);
  const toggleSearchSheet = () => setIsSearchSheetOpen(!isSearchSheetOpen);
  const toggleCartSheet = () => setIsCartSheetOpen(!isCartSheetOpen);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery)
    if (e.target.value.trim() === "") {
      setIsSearchError(false);
    }
    handleSearchSubmit()
  };

  const fetchSearchResults = async (product: string) => {
    try {
      const results = await client.fetch(`
        *[_type == "product" && name match "*${product}*"]{
          _id, name, price,
           "imageUrl": image.asset->url
        }
      `);
      console.log("Fetched Results:", results); // Debugging
      return results; // Return the fetched results
    } catch (error) {
      console.error("Error fetching search results:", error);
      return []; // Return an empty array in case of error
    }
  };
  
  

  const handleSearchSubmit = async () => {
    if (searchQuery.trim().length === 0) {
      setIsSearchError(true);
      console.log("Search submitted:", searchQuery);

    } else {
      setIsSearchError(false);
      const results = await fetchSearchResults(searchQuery);
      setSearchResults(results);
      console.log("Search submitted:", searchQuery);
      // Keep the search sheet open to display results
    }
  };

  const handleSearchKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await handleSearchSubmit();
    }
  };

  const handleQuantityChange = (item: CartItem, action: "increment" | "decrement") => {
    const newQuantity = action === "increment" ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity > 0) {
      // Call the store function to update quantity (assuming it exists in Zustand store)
      useStore.getState().updateQuantity(item._id, newQuantity);
    } else {
      removeFromCart(item._id);
    }
  };

  return (
    <div className="mb-16">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center h-[100px] px-4 md:px-8 ${navbarColor}`}>
          {/* Left-Side Menu */}
          <div className="flex justify-end flex-grow md:justify-center order-2 md:order-1">
            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
              <SheetTrigger>
                <Menu className="md:hidden cursor-pointer hover:text-yellow-500" />
              </SheetTrigger>
              <SheetContent className="bg-white text-black p-4">
                <ul className="space-y-4 text-lg">
                  {navItems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex space-x-8 items-center font-medium text-[20px]">
              {navItems.map((item, i) => (
                <li className="hover:text-yellow-500" key={i}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-Side Icons */}
          <div className="flex space-x-4 items-center order-1 md:order-2 md:space-x-6">
            <div>
            <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <User className="hover:text-yellow-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
            </div>
            <Search className="cursor-pointer hover:text-yellow-500" onClick={toggleSearchSheet} />
            <Link href="/wishlist">
              <div className="relative">
                <Heart className="cursor-pointer hover:text-red-600" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </div>
            </Link>
            <div onClick={toggleCartSheet} className="relative">
              <ShoppingCart className="cursor-pointer hover:text-yellow-500" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Sheet */}
{/* Search Sheet */}
<Sheet open={isSearchSheetOpen} onOpenChange={toggleSearchSheet}>
  <SheetContent className="bg-white text-black p-4 sm:p-6 max-h-[80vh] flex flex-col">
    <h3 className="text-xl font-semibold mb-4">Search</h3>
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      onKeyDown={handleSearchKeyPress} // Handle Enter key
      placeholder="Search products..."
      className="border p-2 rounded-md"
    />
    {isSearchError && <p className="text-red-500 mt-2">Please enter a search term.</p>}

    {/* Display Search Results */}
    {searchResults?.length && searchResults?.length > 0 && (
      <ul className="mt-4 space-y-4 max-h-[300px] overflow-y-auto">
        {searchResults.map((product: Product) => (
          <li key={product._id} className="flex items-center space-x-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    )}

    {/* No Results Found */}
    {searchResults?.length === 0 && searchQuery.trim() !== "" && !isSearchError && (
      <p className="mt-4 text-gray-500">No products found.</p>
    )}
  </SheetContent>
</Sheet>


      {/* Cart Sheet */}
      <Sheet open={isCartSheetOpen} onOpenChange={toggleCartSheet}>
        <SheetContent className="bg-white text-black p-4 sm:p-6 max-h-[80vh] flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-center text-sm sm:text-base flex-1">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4 sm:space-y-6 flex-1 overflow-y-auto">
              {cartItems.map((item) => (
                <li key={item._id} className="flex items-center justify-between space-x-4 border-b py-3 sm:py-4">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <span className="text-lg font-medium">{item.name}</span>
                    <span className="block text-sm text-gray-500">${item.price}</span>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 text-gray-700 rounded-md"
                        onClick={() => handleQuantityChange(item, "decrement")}
                      >
                        -
                      </button>
                      <span className="text-sm text-gray-500">{item.quantity}</span>
                      <button
                        className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 text-gray-700 rounded-md"
                        onClick={() => handleQuantityChange(item, "increment")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="text-red-500 text-sm sm:text-base hover:underline" onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 sm:mt-6 sticky bottom-0 left-0 right-0 bg-white py-4">
            <Link href='/cart'><Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg">CHECK OUT</Button>
          </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;

   