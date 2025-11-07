"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  User,
  ShoppingCart,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<number | null>(
    null
  );

  const fabricCategories = [
    { name: "Cotton", items: ["Organic Cotton", "Egyptian Cotton", "Canvas", "Denim"] },
    { name: "Silk", items: ["Charmeuse", "Chiffon", "Dupioni", "Habotai"] },
    { name: "Wool", items: ["Merino Wool", "Cashmere", "Tweed", "Flannel"] },
    { name: "Linen", items: ["Belgian Linen", "French Linen", "Blended Linen"] },
    { name: "Synthetic", items: ["Polyester", "Nylon", "Rayon", "Acetate"] },
  ];

  return (
    <header className="md:relative sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Section - Logo and Icons */}
      <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-10">
        <div className="flex-1 text-left">
          <Search
            className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-[2] text-center">
          <a href="#" className="text-4xl font-serif font-medium text-gray-800">
            <Image
              src="/fabric-by-meter-logo.png"
              alt="Fabric By Meter Logo"
              width={200}
              height={80}
              className="mx-auto w-32 h-auto sm:w-40 md:w-48 lg:w-[200px]"
            />
          </a>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-3 sm:space-x-5">
          <div className="hidden space-x-4 md:flex">
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <Facebook className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <Instagram className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
              <Twitter className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
            </a>
          </div>
          <a href="#" className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex hover:text-gray-900 transition-colors">
            <User className="w-5 h-5" strokeWidth={1.5} />
            <span>Log in</span>
          </a>
          <a href="#" className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex hover:text-gray-900 transition-colors">
            <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
            <span>Cart (2)</span>
          </a>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileShopOpen(false);
              setActiveMobileCategory(null);
            }}
            className="md:hidden p-1 hover:bg-gray-200 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Main Navigation - Desktop Only */}
      <nav className="hidden items-center justify-center h-14 space-x-10 font-sans bg-white md:flex font-medium relative">
        <div
          className="relative"
          onMouseEnter={() => setIsShopDropdownOpen(true)}
          onMouseLeave={() => setIsShopDropdownOpen(false)}
        >
          <button className="flex items-center space-x-1 text-sm tracking-widest uppercase text-black py-2">
            <span className="">SHOP</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isShopDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <a href="#" className="text-sm tracking-widest uppercase text-black">OUR STORY</a>
        <a href="#" className="text-sm tracking-widest uppercase text-black">WHOLESALE</a>
        <a href="#" className="text-sm tracking-widest uppercase text-black">CONTACT</a>
        <a href="#" className="text-sm tracking-widest uppercase text-black">MY PROFILE</a>
      </nav>

      {/* Dropdown Content - Desktop Only */}
      <div
        className={`hidden md:block absolute top-[136px] left-0 w-full bg-white shadow-lg 
                  transition-all duration-300 ease-in-out
                  ${
                    isShopDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-4 invisible"
                  }`}
        style={{ height: "calc(65vh - 136px)" }}
        onMouseEnter={() => setIsShopDropdownOpen(true)}
        onMouseLeave={() => setIsShopDropdownOpen(false)}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-800 uppercase tracking-widest">BY CATEGORY</h3>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-5 gap-8 flex-1">
            {fabricCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-800 mb-4 text-lg pb-2 uppercase tracking-widest">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white md:hidden overflow-y-auto z-40">
          <nav className="flex flex-col h-full">
            {/* Main Menu Items */}
            <div className="flex-1 overflow-y-auto">
              {/* Shop All with Expandable Categories */}
              <div className="border-b border-gray-300 mx-6">
                
                {/* --- LEVEL 1 (Shop) --- */}
                <button
                  className="flex items-center justify-between w-full py-4 text-left text-lg font-medium tracking-widest uppercase text-gray-900 hover:bg-gray-200 transition-colors"
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                >
                  <span>SHOP</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileShopOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Shop Categories Accordion */}
                {mobileShopOpen && (
                  <div>
                    {fabricCategories.map((category, index) => (
                      <div key={index}>
                        {/* --- LEVEL 2 (Cotton, Silk, etc.) --- */}
                        <button
                          className="flex items-center justify-between w-full py-3 text-left text-base text-gray-900 hover:bg-gray-200 transition-colors"
                          onClick={() =>
                            setActiveMobileCategory(
                              activeMobileCategory === index ? null : index
                            )
                          }
                        >
                          <span>{category.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeMobileCategory === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Category Items */}
                        {activeMobileCategory === index && (
                          <div className="bg-white border-l-2 border-gray-800">
                            {category.items.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href="#"
                                // --- LEVEL 3 (Organic Cotton, etc.) ---
                                className="block pl-4 py-2.5 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Navigation Items --- LEVEL 1 --- */}
              <a
                href="#"
                className="block mx-6 py-4 text-lg font-medium tracking-widest uppercase text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-colors"
              >
                OUR STORY
              </a>
              <a
                href="#"
                className="block mx-6 py-4 text-lg font-medium tracking-widest uppercase text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-colors"
              >
                WHOLESALE
              </a>
              <a
                href="#"
                className="block mx-6 py-4 text-lg font-medium tracking-widest uppercase text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-colors"
              >
                CONTACT
              </a>
              <a
                href="#"
                className="block mx-6 py-4 text-lg font-medium tracking-widest uppercase text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-colors"
              >
                MY PROFILE
              </a>
            </div>

            {/* Bottom Section - User Actions & Social */}
            <div className="border-t-2 border-gray-400 bg-white">
              <div className="px-6 py-4 space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-base text-gray-900 font-sans py-2 hover:text-gray-600 transition-colors"
                >
                  <User className="w-5 h-5" strokeWidth={1.5} />
                  <span>Log in / Create Account</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-base text-gray-900 font-sans py-2 hover:text-gray-600 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                  <span>Cart (2)</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center space-x-6 px-6 py-4 border-t border-gray-300">
                <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                  <Facebook className="w-5 h-5 text-gray-900" fill="currentColor" strokeWidth={0} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                  <Instagram className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
                  <Twitter className="w-5 h-5 text-gray-900" fill="currentColor" strokeWidth={0} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}