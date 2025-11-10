"use client";

import { useState } from "react";
import { ChevronDown, Instagram, Facebook } from "lucide-react";

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

  return (
    <footer className="bg-white border-t border-gray-200 ">
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm tracking-[0.2em] uppercase text-black mb-6 font-serif font-semibold ">
                FabricByMeter
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                FabricByMeter is into the manufacturing of Silks and Silk
                Blends, Cottons, Viscose, velvets, Sustainable fabrics and more.
              </p>
              <div className="flex gap-4 pt-4">
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

            <div className="space-y-4">
              <h3 className="text-sm  tracking-[0.2em] uppercase text-black mb-6 font-serif font-semibold">
                Discover
              </h3>
              <ul className="space-y-3">
                {[
                  "Our Story",
                  "FAQ's",
                  "Wash Care Instructions",
                  "Wholesale & Bulk Order",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm  tracking-[0.2em] uppercase text-black mb-6 font-serif font-semibold">
                Information
              </h3>
              <ul className="space-y-3">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Return/Exchange",
                  "Refund Policy",
                  "Shipping Policy",
                  "Gift Cards",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm tracking-[0.2em] uppercase text-black mb-6 font-serif font-semibold">
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
                  className="w-full px-4 py-3 text-sm border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
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

      <div className="md:hidden">
        <div className="px-6 py-8">
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("factory")}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="text-sm font-serif  font-semibold tracking-[0.15em] uppercase text-black">
                FabricByMeter
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
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
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="text-sm font-serif  font-semibold tracking-[0.15em] uppercase text-black">
                Discover
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  openSection === "discover" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "discover" ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <ul className="space-y-3 text-center">
                {[
                  "Our Story",
                  "FAQ's",
                  "Wash Care Instructions",
                  "Wholesale & Bulk Order",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("information")}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="text-sm font-serif  font-semibold tracking-[0.15em] uppercase text-black">
                Information
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  openSection === "information" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "information" ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <ul className="space-y-3 text-center">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Return/Exchange",
                  "Refund Policy",
                  "Shipping Policy",
                  "Gift Cards",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection("signup")}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="text-sm  tracking-[0.15em] uppercase text-black font-serif font-semibold">
                Sign Up & Save
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
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
                  className="w-full px-4 py-3 text-sm border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 text-center"
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
