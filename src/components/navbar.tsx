"use client"

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
  const [activeMobileCategory, setActiveMobileCategory] = useState<number | null>(null);

  const fabricCategories = [
    { name: "Cotton", items: ["Organic Cotton", "Egyptian Cotton", "Canvas", "Denim"] },
    { name: "Silk", items: ["Charmeuse", "Chiffon", "Dupioni", "Habotai"] },
    { name: "Wool", items: ["Merino Wool", "Cashmere", "Tweed", "Flannel"] },
    { name: "Linen", items: ["Belgian Linen", "French Linen", "Blended Linen"] },
    { name: "Synthetic", items: ["Polyester", "Nylon", "Rayon", "Acetate"] },
  ];

  return (
    <header className="md:relative sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between h-20 md:h-24 px-6 lg:px-12 bg-[#e4dfc7]">
        <div className="flex-1 text-left">
          <button className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
            <Search
              className="w-5 h-5 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110"
              strokeWidth={1.2}
            />
          </button>
        </div>

        <div className="flex-[2] text-center">
          <a href="/" className="inline-block">
            <Image
              src="/fabric-by-meter-logo.png"
              alt="Fabric By Meter Logo"
              width={220}
              height={88}
              className="mx-auto w-40 h-auto md:w-52 lg:w-[220px] transition-all duration-500 hover:opacity-80"
              priority
            />
          </a>
        </div>

        <div className="flex items-center justify-end flex-1 gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
              <Facebook className="w-4 h-4 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="Instagram" className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
              <Instagram className="w-4 h-4 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" strokeWidth={1.2} />
            </a>
            <a href="#" aria-label="Twitter" className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
              <Twitter className="w-4 h-4 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" fill="currentColor" strokeWidth={0} />
            </a>
          </div>

          <div className="hidden lg:block w-px h-6 bg-gray-200"></div>

          <a href="#" className="hidden md:flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-gray-700 font-light hover:text-black transition-all duration-300 group">
            <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
            <span className="hidden lg:inline">Account</span>
          </a>

          <a href="#" className="hidden md:flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-gray-700 font-light hover:text-black transition-all duration-300 group">
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
            <span className="hidden lg:inline">Cart (2)</span>
          </a>

          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileShopOpen(false);
              setActiveMobileCategory(null);
            }}
            className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} 
                strokeWidth={1.2}
              />
              <X 
                className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
                strokeWidth={1.2}
              />
            </div>
          </button>
        </div>
      </div>

      <nav className="hidden md:flex items-center justify-center h-14 gap-12 font-light bg-white border-t border-gray-100">
        <div
          className="relative group"
          onMouseEnter={() => setIsShopDropdownOpen(true)}
          onMouseLeave={() => setIsShopDropdownOpen(false)}
        >
          <button className="flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-black py-2 transition-all duration-300 hover:text-gray-600">
            <span>Shop</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isShopDropdownOpen ? "rotate-180" : ""
              }`}
              strokeWidth={1.5}
            />
          </button>
          <div className="absolute left-0 right-0 h-8 top-full"></div>
        </div>
        <a href="#" className="text-xs tracking-[0.2em] uppercase text-black transition-all duration-300 hover:text-gray-600">Our Story</a>
        <a href="#" className="text-xs tracking-[0.2em] uppercase text-black transition-all duration-300 hover:text-gray-600">Wholesale</a>
        <a href="#" className="text-xs tracking-[0.2em] uppercase text-black transition-all duration-300 hover:text-gray-600">Contact</a>
      </nav>

      <div
        className={`hidden md:block fixed top-[136px] left-0 w-full bg-white shadow-2xl border-t border-gray-100
                  transition-all duration-500 ease-out
                  ${
                    isShopDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-4 invisible pointer-events-none"
                  }`}
        style={{ maxHeight: "calc(70vh - 136px)" }}
        onMouseEnter={() => setIsShopDropdownOpen(true)}
        onMouseLeave={() => setIsShopDropdownOpen(false)}
      >
        <div className="container mx-auto px-12 py-12 max-w-7xl">
          <div className={`text-center mb-12 transition-all duration-700 ${
            isShopDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light mb-3 block">
              Shop By
            </span>
            <h3 className="text-2xl font-serif font-light text-black uppercase tracking-[0.15em]">Category</h3>
            <div className="w-16 h-px bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-5 gap-12">
            {fabricCategories.map((category, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  isShopDropdownOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ 
                  transitionDelay: isShopDropdownOpen ? `${index * 80}ms` : '0ms' 
                }}
              >
                <h4 className="font-serif font-light text-black mb-6 text-base pb-3 uppercase tracking-[0.15em] border-b border-gray-200">
                  {category.name}
                </h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className={`transition-all duration-500 ${
                        isShopDropdownOpen 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: isShopDropdownOpen 
                          ? `${(index * 80) + (itemIndex * 40)}ms` 
                          : '0ms' 
                      }}
                    >
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-all duration-300 inline-block hover:tracking-wider font-light"
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

      <div className={`fixed top-20 left-0 right-0 bottom-0 bg-white md:hidden overflow-y-auto z-40 transition-all duration-500 ease-out ${
        isMenuOpen 
          ? 'opacity-100 translate-x-0 visible' 
          : 'opacity-0 translate-x-full invisible'
      }`}>
        <nav className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className={`border-b border-gray-100 pb-2 transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{ transitionDelay: '100ms' }}>
              <button
                className="flex items-center justify-between w-full py-3 text-left text-sm font-light tracking-[0.15em] uppercase text-black"
                onClick={() => setMobileShopOpen(!mobileShopOpen)}
              >
                <span>Shop</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileShopOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-out ${
                mobileShopOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                {fabricCategories.map((category, index) => (
                  <div key={index} className="mb-3">
                    <button
                      className={`flex items-center justify-between w-full py-2.5 text-left text-sm text-gray-800 font-light transition-all duration-300 ${
                        mobileShopOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: mobileShopOpen ? `${index * 60}ms` : '0ms' }}
                      onClick={() =>
                        setActiveMobileCategory(
                          activeMobileCategory === index ? null : index
                        )
                      }
                    >
                      <span>{category.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeMobileCategory === index ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>

                    <div className={` ml-3 rounded overflow-hidden transition-all duration-400 ease-out ${
                      activeMobileCategory === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      {category.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className={`block pl-4 py-2 text-sm text-gray-600 hover:text-black transition-all duration-300 font-light ${
                            activeMobileCategory === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                          }`}
                          style={{ transitionDelay: activeMobileCategory === index ? `${itemIndex * 40}ms` : '0ms' }}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {['Our Story', 'Wholesale', 'Contact'].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`block py-3 text-sm font-light tracking-[0.15em] uppercase text-black border-b border-gray-100 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className={`border-t border-gray-100 bg-white transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="px-6 py-6 space-y-4">
              <a href="#" className="flex items-center gap-3 text-sm text-black font-light py-2 hover:text-gray-600 transition-all duration-300">
                <User className="w-5 h-5" strokeWidth={1.2} />
                <span>Account</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-black font-light py-2 hover:text-gray-600 transition-all duration-300">
                <ShoppingCart className="w-5 h-5" strokeWidth={1.2} />
                <span>Cart (2)</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 px-6 py-6 border-t border-gray-100">
              <a href="#" aria-label="Facebook" className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
                <Facebook className="w-5 h-5 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" aria-label="Instagram" className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" strokeWidth={1.2} />
              </a>
              <a href="#" aria-label="Twitter" className="group p-2 hover:bg-gray-50 rounded-full transition-all duration-300">
                <Twitter className="w-5 h-5 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}