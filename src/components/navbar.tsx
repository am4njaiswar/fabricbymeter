"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import {
  Search,
  User,
  ShoppingCart,
  Facebook,
  Instagram,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

// --- PINTEREST SVG COMPONENT ---
const PinterestIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

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

  // --- 1. DEFINE NAVIGATION LINKS EXPLICITLY ---
  const navLinks = [
    { name: "OUR STORY", href: "/ourstory" }, 
    { name: "WHOLESALE", href: "/wholesale" },
    { name: "CONTACT", href: "/contact" },
    { name: "MY PROFILE", href: "/profile" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsShopDropdownOpen(false);
    setMobileShopOpen(false);
    setActiveMobileCategory(null);
  };

  return (
    <header className="md:relative sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Section - Logo and Icons */}
      <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-10">
        
        {/* --- LEFT SIDE (HAMBURGER/SEARCH) --- */}
        <div className="flex-1 text-left">
          <button className="group transition-transform duration-300 hover:scale-110 hidden md:block">
            <Search
              className="w-5 h-5 text-gray-700 cursor-pointer group-hover:text-gray-900 transition-colors duration-300"
              strokeWidth={1.5}
            />
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileShopOpen(false);
              setActiveMobileCategory(null);
            }}
            className="md:hidden p-1 hover:bg-gray-200 rounded transition-all duration-300"
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

        {/* --- CENTER (LOGO) --- */}
        <div className="flex-[2] text-center">
          <Link href="/" onClick={closeMenu} className="text-4xl font-serif font-medium text-gray-800 inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src="/fabricByMeterLogo.jpeg"
              alt="Fabric By Meter Logo"
              width={200}
              height={80}
              className="mx-auto w-32 h-auto sm:w-40 md:w-48 lg:w-[190px]"
            />
          </Link>
        </div>

        {/* --- RIGHT SIDE (ICONS) --- */}
        <div className="flex items-center justify-end flex-1 space-x-3 sm:space-x-5">
          <div className="hidden space-x-4 md:flex">
            <a href="#" aria-label="Facebook" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
              <Facebook className="w-4 h-4 text-gray-700" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="Instagram" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
              <Instagram className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
              <PinterestIcon className="w-4 h-4 text-gray-700" />
            </a>
          </div>
          <Link href="/login" onClick={closeMenu} className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex hover:text-gray-900 transition-all duration-300 group">
            <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <span>Log in</span>
          </Link>

          {/* --- CHANGE: Switched from <a> to <Link> and added href="/cart" --- */}
          <Link href="/cart" onClick={closeMenu} className="hidden items-center space-x-1 text-sm text-gray-700 font-sans md:flex hover:text-gray-900 transition-all duration-300 group">
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <span>Cart (2)</span>
          </Link>

          {/* Search Button (Mobile Only) */}
          <button className="group transition-transform duration-300 hover:scale-110 md:hidden">
            <Search
              className="w-5 h-5 text-gray-700 cursor-pointer group-hover:text-gray-900 transition-colors duration-300"
              strokeWidth={1.5}
            />
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
          <Link href="/shop" onClick={closeMenu} className="flex items-center space-x-1 text-sm tracking-widest uppercase text-black py-2 transition-colors duration-300 hover:text-gray-600">
            <span>SHOP</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isShopDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
        </div>
        {/* --- 2. UPDATED DESKTOP LOOP --- */}
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={closeMenu}
            className="text-sm tracking-widest uppercase text-black transition-colors duration-300 hover:text-gray-600"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Dropdown Content - Desktop Only */}
      <div
        className={`hidden md:block absolute top-[136px] left-0 w-full bg-white shadow-lg 
                  transition-all duration-500 ease-out
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
          <div className={`text-center mb-8 transition-all duration-700 ${
            isShopDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <h3 className="text-2xl text-gray-800 uppercase tracking-widest">BY CATEGORY</h3>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-2 transition-all duration-500 origin-center"></div>
          </div>

          <div className="grid grid-cols-5 gap-8 flex-1">
            {fabricCategories.map((category, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  isShopDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isShopDropdownOpen ? `${index * 80}ms` : '0ms' }}
              >
                <h4 className="font-semibold text-gray-800 mb-4 text-lg pb-2 uppercase tracking-widest">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className={`transition-all duration-500 ${
                        isShopDropdownOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: isShopDropdownOpen ? `${(index * 80) + (itemIndex * 50)}ms` : '0ms' }}
                    >
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm inline-block hover:tracking-wider hover:scale-105"
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
      <div className={`fixed top-16 sm:top-20 left-0 w-5/6 max-w-md bottom-0 bg-white md:hidden overflow-y-auto z-40 shadow-lg transition-all duration-700 ease-out ${
        isMenuOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 -translate-x-full invisible'
      }`}>
        <nav className="flex flex-col h-full">
          {/* --- MAIN SCROLLING AREA --- */}
          <div className="flex-1 overflow-y-auto">
            <div className={`border-b border-gray-300 mx-6 transition-all duration-700 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{ transitionDelay: '100ms' }}>
              
              {/* --- SHOP SECTION --- */}
              <div className="flex items-center justify-between w-full py-4 text-left text-base font-medium tracking-widest uppercase text-gray-900 transition-colors duration-300">
                <Link 
                  href="/shop" 
                  onClick={closeMenu} 
                  className="flex-1 h-full" 
                >
                  SHOP
                </Link>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    setMobileShopOpen(!mobileShopOpen);
                  }}
                  className="p-2 -mr-2" 
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileShopOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-out ${
                mobileShopOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {fabricCategories.map((category, index) => (
                  <div key={index}>
                    <button
                      className={`flex items-center justify-between w-full py-3 text-left text-base text-gray-900 hover:bg-gray-200 transition-all duration-500 ${
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
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeMobileCategory === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div className={`bg-white border-l-2 border-gray-800 overflow-hidden transition-all duration-500 ease-out ${
                      activeMobileCategory === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href="#" 
                          onClick={closeMenu}
                          className={`block pl-4 py-2.5 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-500 ${
                            activeMobileCategory === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                          }`}
                          style={{ transitionDelay: activeMobileCategory === index ? `${itemIndex * 40}ms` : '0ms' }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- 3. UPDATED MOBILE LOOP --- */}
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`block mx-6 py-4 text-base font-medium tracking-widest uppercase text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-all duration-700 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={closeMenu}
              className={`block mx-6 py-4 text-sm font-normal text-gray-900 border-b border-gray-300 hover:bg-gray-200 transition-all duration-700 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: `${(navLinks.length + 2) * 100}ms` }}
            >
              Log in
            </Link>

            {/* --- SOCIAL ICONS --- */}
            <div className={`flex items-center justify-center border-b border-gray-300 mx-6 transition-all duration-700 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${(navLinks.length + 3) * 100}ms` }}
            >
              <a 
                href="#" 
                aria-label="Instagram" 
                className="flex-1 p-4 flex justify-center items-center border-l border-gray-300 transition-all duration-300 hover:bg-gray-100"
              >
                <Instagram className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="flex-1 p-4 flex justify-center items-center border-l border-r border-gray-300 transition-all duration-300 hover:bg-gray-100"
              >
                <Facebook className="w-5 h-5 text-gray-900" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="#" 
                aria-label="Pinterest" 
                className="flex-1 p-4 flex justify-center items-center border-r border-gray-300 transition-all duration-300 hover:bg-gray-100"
              >
                <PinterestIcon className="w-5 h-5 text-gray-900" />
              </a>
            </div>

          </div>

          {/* --- BOTTOM SECTION (CART ONLY) --- */}
          <div className={`border-t-2 border-gray-400 bg-white transition-all duration-700 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '500ms' }}>
            
            <div className="px-6 py-4 space-y-3">
              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-base text-gray-900 font-sans py-2 hover:text-gray-600 transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <span>Cart (2)</span>
              </Link>
            </div>
            
          </div>
        </nav>
      </div>
    </header>
  );
}