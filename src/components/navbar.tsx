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
    <header className="md:relative sticky top-0 z-50 bg-[#e4dfc7] border-b border-gray-200">
      {/* Top Section - Logo and Icons */}
      <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-10 animate-[slideDown_0.5s_ease-out]">
        <div className="flex-1 text-left">
          <Search
            className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-300 hover:scale-110"
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
              className="mx-auto w-32 h-auto sm:w-40 md:w-48 lg:w-[200px] transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-3 sm:space-x-5">
          <div className="hidden space-x-4 md:flex">
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <Facebook className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <Instagram className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <Twitter className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
            </a>
          </div>
          <a href="#" className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex hover:text-gray-900 transition-all duration-300 hover:translate-y-[-2px]">
            <User className="w-5 h-5" strokeWidth={1.5} />
            <span>Log in</span>
          </a>
          <a href="#" className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex hover:text-gray-900 transition-all duration-300 hover:translate-y-[-2px]">
            <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
            <span>Cart (2)</span>
          </a>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileShopOpen(false);
              setActiveMobileCategory(null);
            }}
            className="md:hidden p-1 hover:bg-gray-200 rounded transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Main Navigation - Desktop Only */}
      <nav className="hidden items-center justify-center h-14 space-x-10 font-sans bg-white md:flex font-medium relative animate-[slideDown_0.6s_ease-out]">
        <div
          className="relative group"
          onMouseEnter={() => setIsShopDropdownOpen(true)}
          onMouseLeave={() => setIsShopDropdownOpen(false)}
        >
          <button className="flex items-center space-x-1 text-sm tracking-widest uppercase text-black py-2 transition-all duration-300 hover:text-gray-600 hover:translate-y-[-2px]">
            <span>SHOP</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isShopDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {/* Invisible bridge to keep dropdown open */}
          <div className="absolute left-0 right-0 h-8 top-full"></div>
        </div>
        <a href="#" className="text-sm tracking-widest uppercase text-black transition-all duration-300 hover:text-gray-600 hover:translate-y-[-2px]">OUR STORY</a>
        <a href="#" className="text-sm tracking-widest uppercase text-black transition-all duration-300 hover:text-gray-600 hover:translate-y-[-2px]">WHOLESALE</a>
        <a href="#" className="text-sm tracking-widest uppercase text-black transition-all duration-300 hover:text-gray-600 hover:translate-y-[-2px]">CONTACT</a>
        <a href="#" className="text-sm tracking-widest uppercase text-black transition-all duration-300 hover:text-gray-600 hover:translate-y-[-2px]">MY PROFILE</a>
      </nav>

      {/* Dropdown Content - Desktop Only */}
      <div
        className={`hidden md:block absolute top-[136px] left-0 w-full bg-white shadow-lg border-t border-gray-200
                  transition-all duration-300 ease-in-out
                  ${
                    isShopDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }`}
        style={{ height: "calc(65vh - 136px)" }}
        onMouseEnter={() => setIsShopDropdownOpen(true)}
        onMouseLeave={() => setIsShopDropdownOpen(false)}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className={`text-center mb-8 transition-all duration-500 ${
            isShopDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <h3 className="text-2xl text-gray-800 uppercase tracking-widest">BY CATEGORY</h3>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-5 gap-8 flex-1">
            {fabricCategories.map((category, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${
                  isShopDropdownOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isShopDropdownOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                <h4 className="font-semibold text-gray-800 mb-4 text-lg pb-2 uppercase tracking-widest">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className={`transition-all duration-300 ${
                        isShopDropdownOpen 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-2'
                      }`}
                      style={{ 
                        transitionDelay: isShopDropdownOpen 
                          ? `${(index * 50) + (itemIndex * 30)}ms` 
                          : '0ms' 
                      }}
                    >
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm hover:translate-x-1 inline-block"
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
      <div className={`fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white md:hidden overflow-y-auto z-40 transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 translate-x-0 visible' 
          : 'opacity-0 translate-x-full invisible'
      }`}>
        <nav className="flex flex-col h-full">
          {/* Main Menu Items */}
          <div className="flex-1 overflow-y-auto">
            {/* Shop All with Expandable Categories */}
            <div className={`border-b border-gray-300 mx-6 transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{ transitionDelay: '100ms' }}>
              
              {/* --- LEVEL 1 (Shop) --- */}
              <button
                className="flex items-center justify-between w-full py-4 text-left text-lg font-medium tracking-widest uppercase text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:pl-2"
                onClick={() => setMobileShopOpen(!mobileShopOpen)}
              >
                <span>SHOP</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileShopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Shop Categories Accordion */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                mobileShopOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {fabricCategories.map((category, index) => (
                  <div key={index}>
                    {/* --- LEVEL 2 (Cotton, Silk, etc.) --- */}
                    <button
                      className={`flex items-center justify-between w-full py-3 text-left text-base text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:pl-2 ${
                        mobileShopOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: mobileShopOpen ? `${index * 50}ms` : '0ms' }}
                      onClick={() =>
                        setActiveMobileCategory(
                          activeMobileCategory === index ? null : index
                        )
                      }
                    >
                      <span>{category.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeMobileCategory === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Category Items */}
                    <div className={`bg-white border-l-2 border-gray-800 overflow-hidden transition-all duration-400 ease-in-out ${
                      activeMobileCategory === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {category.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className={`block pl-4 py-2.5 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 hover:pl-6 ${
                            activeMobileCategory === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                          }`}
                          style={{ transitionDelay: activeMobileCategory === index ? `${itemIndex * 30}ms` : '0ms' }}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Navigation Items --- LEVEL 1 --- */}
            {['OUR STORY', 'WHOLESALE', 'CONTACT', 'MY PROFILE'].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`block mx-6 py-4 text-lg font-medium tracking-widest uppercase text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-all duration-300 hover:pl-2 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Bottom Section - User Actions & Social */}
          <div className={`border-t-2 border-gray-400 bg-white transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="px-6 py-4 space-y-3">
              <a
                href="#"
                className="flex items-center space-x-3 text-base text-gray-900 font-sans py-2 hover:text-gray-600 transition-all duration-300 hover:translate-x-2"
              >
                <User className="w-5 h-5" strokeWidth={1.5} />
                <span>Log in / Create Account</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-base text-gray-900 font-sans py-2 hover:text-gray-600 transition-all duration-300 hover:translate-x-2"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                <span>Cart (2)</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center space-x-6 px-6 py-4 border-t border-gray-300">
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Facebook className="w-5 h-5 text-gray-900" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Instagram className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Twitter className="w-5 h-5 text-gray-900" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}