"use client";

import { useState } from "react";
import { ChevronDown, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = () => {
    console.log("Subscribing with email:", email);
    setEmail("");
  };

  // --- LINK DATA ---
  // Manage all your links here. It updates both Desktop and Mobile views at once.
  const discoverLinks = [
    { name: "Our Story", href: "/ourstory" },
    { name: "FAQ's", href: "/faqs" },
    { name: "Wash Care Instructions", href: "/wash-care" },
    { name: "Wholesale & Bulk Order", href: "/discover/wholesale-bulk-order" },
    { name: "Contact Us", href: "/discover/contact-us" },
  ];

  const informationLinks = [
    { name: "Terms & Conditions", href: "/information/termsandcondition" },
    { name: "Privacy Policy", href: "/information/privacypolicy" },
    { name: "Return/Exchange", href: "/information/return-exchange" }, // <-- Added here
    { name: "Refund Policy", href: "/information/refund-policy" },
    { name: "Shipping Policy", href: "/information/shipping-policy" },
    { name: "Gift Cards", href: "/information/gift-cards" },
    { name: "Terms of Service", href: "/information/terms-of-service" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 font-sans">
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-4 gap-12">
            <div className="space-y-4 text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-black mb-6 font-sans font-medium">
                FabricByMeter
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                FabricByMeter is into the manufacturing of Silks and Silk
                Blends, Cottons, Viscose, velvets, Sustainable fabrics and more.
              </p>
              <div className="flex gap-4 pt-4 justify-center">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Pinterest"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Desktop Discover */}
            <div className="space-y-4 text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-black mb-6 font-sans font-medium">
                Discover
              </h3>
              <ul className="space-y-3">
                {discoverLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Information */}
            <div className="space-y-4 text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-black mb-6 font-sans font-medium">
                Information
              </h3>
              <ul className="space-y-3">
                {informationLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-black mb-6 font-sans font-medium">
                Sign Up & Save
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Subscribe to get special offers, new products etc! We will not
                spam you!
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-gray-300 placeholder:text-gray-700 focus:border-black focus:outline-none transition-colors duration-200 text-center"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full px-4 py-3 text-sm font-medium tracking-wider uppercase bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden">
        <div className="px-6 py-8">
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("factory")}
              className="w-full py-5 flex items-center justify-center relative text-center"
            >
              <span className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-black">
                FabricByMeter
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 absolute right-0 ${
                  openSection === "factory" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "factory" ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-gray-600 text-center px-4">
                FabricByMeter is into the manufacturing of Silks and Silk
                Blends, Cottons, Viscose, velvets, Sustainable fabrics and more.
              </p>
              <div className="flex gap-4 justify-center pt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Pinterest"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("discover")}
              className="w-full py-5 flex items-center justify-center relative text-center"
            >
              <span className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-black">
                Discover
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 absolute right-0 ${
                  openSection === "discover" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "discover" ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              {/* Mobile Discover Links */}
              <ul className="space-y-3 text-center">
                {discoverLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("information")}
              className="w-full py-5 flex items-center justify-center relative text-center"
            >
              <span className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-black">
                Information
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 absolute right-0 ${
                  openSection === "information" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "information" ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              {/* Mobile Information Links */}
              <ul className="space-y-3 text-center">
                {informationLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("signup")}
              className="w-full py-5 flex items-center justify-center relative text-center"
            >
              <span className="text-sm tracking-[0.15em] uppercase text-black font-sans font-medium">
                Sign Up & Save
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 absolute right-0 ${
                  openSection === "signup" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "signup" ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center px-4">
                Subscribe to get special offers, new products etc! We will not
                spam you!
              </p>
              <div className="space-y-3 px-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-gray-300 placeholder:text-gray-700 focus:border-black focus:outline-none transition-colors duration-200 text-center"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full px-4 py-3 text-sm font-medium tracking-wider uppercase bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-xs text-gray-500 tracking-wide">
          © 2025 FabricByMeter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}