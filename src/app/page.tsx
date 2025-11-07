// You can place this in 'app/page.tsx' or 'app/home.tsx'
"use client";

import { useState } from "react";

import Image from "next/image";
import Navbar from "@/components/navbar";

// --- DUMMY DATA ---
const products = [
  {
    id: 1,
    name: "Natural Linen Fabric",
    price: "$25.00",
    image: "/fabricImage.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Cotton Floral Print",
    price: "$18.00",
    image: "/fabric-world-02.jpg",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Silk Charmeuse",
    price: "$45.00",
    image: "/fabricImage.jpg",
    tag: "Best Seller",
  },
  {
    id: 4,
    name: "Merino Wool Blend",
    price: "$32.00",
    image: "/fabric-world-02.jpg",
    tag: "Best Seller",
  },
];

const bannerProducts = [
  {
    id: 5,
    name: "Leather Wallet - Mauve",
    price: "$100.00",
    image: "/fabricImage.jpg",
  },
  {
    id: 6,
    name: "Suede Clutch - Dusty Pink",
    price: "$150.00",
    image: "/fabric-world-02.jpg",
  },
  {
    id: 7,
    name: "Compact Card Holder",
    price: "$75.00",
    image: "/fabricImage.jpg",
  },
  {
    id: 8,
    name: "Travel Pouch - Grey",
    price: "$120.00",
    image: "/fabric-world-02.jpg",
  },
];
const instagramImages = [
  { id: 1, src: "/fabricImage.jpg", alt: "Fabric on a textured surface" },
  { id: 2, src: "/fabric-world-02.jpg", alt: "Close-up of a woven fabric" },
  { id: 3, src: "/fabricImage.jpg", alt: "Colorful threads and yarns" },
  { id: 4, src: "/fabric-world-02.jpg", alt: "Sewing machine in action" },
  { id: 5, src: "/fabricImage.jpg", alt: "Stack of folded fabrics" },
  { id: 6, src: "/fabric-world-02.jpg", alt: "Person measuring fabric" },
];
// --- MAIN PAGE COMPONENT ---
export default function HomePage() {


  return (
    <div className="min-h-screen ">
     <Navbar/>
      <main className="relative flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] md:h-[calc(100vh-136px)] overflow-hidden">
      <Image
        src="/imag3.png"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
        <div className="relative flex flex-col items-center text-center px-4 z-10">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase text-white drop-shadow-lg">
            CUE THE FABRIC
          </h1>
          <a
            href="#"
            className="px-10 py-6 mt-12 text-sm tracking-wider text-white uppercase transition-colors duration-300 bg-transparent hover:bg-[#2d3915] font-sans border-[0.05rem] border-white"
          >
            Shop the collection
          </a>
        </div>
      </main>

      {/* Best Sellers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center uppercase tracking-[0.2em] text-stone-800">
            Best Sellers
          </h2>
          <div className="w-20 h-0.5 bg-stone-400 mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <a key={product.id} href="#" className="group relative text-center">
                <div className="relative w-full overflow-hidden bg-[#e4dfc7] pt-[125%]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-red-800 rounded-3xl text-white text-xs font-sans uppercase px-3 py-1.5">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-md text-stone-700 font-sans">{product.name}</h3>
                  <p className="text-md text-[#3d4d1d] font-sans font-medium mt-1">
                    {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="/shop" className="px-10 py-3 text-sm font-sans tracking-wider uppercase text-[#3d4d1d] border border-[#3d4d1d] hover:bg-[#3d4d1d] hover:text-white transition-colors duration-300">
              Shop All Products
            </a>
          </div>
        </div>
      </section>


    
<section className="py-16 md:py-24 bg-[#e4dfc7]">
      <div className="container mx-auto px-6 text-center">
        {/* --- Titles --- */}
        <h2 className="text-3xl font-serif uppercase tracking-[0.2em] text-black">
          Follow
        </h2>
        <p className="text-2xl font-serif uppercase tracking-widest text-black mt-2">
          FABRIC BY METER ON INSTAGRAM
        </p>
        <a
          href="#"
          // CHANGED: Added 'font-serif' and 'italic'
          className="font-serif italic text-3xl text-red-800 mt-5 mb-10 inline-block"
        >
          @fabricbymeter
        </a>

        {/* --- Image Gallery --- */}
        <div className="mt-12">
          <div className="flex overflow-x-auto md:grid md:grid-cols-6 gap-2 md:gap-4 pb-4 md:pb-0">
            {instagramImages.map((image) => (
              <a
                href="#"
                key={image.id}
                className="flex-shrink-0 w-2/3 md:w-full"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Features Section --- */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-stone-500"></div>
            {/* CHANGED: Added 'font-serif' and 'italic' */}
            <p className="mt-4 font-serif italic text-3xl text-red-800">Worldwide shipping</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-stone-500"></div>
            {/* CHANGED: Added 'font-serif' and 'italic' */}
            <p className="mt-4 font-serif italic text-3xl text-red-800">Easy 30 day returns</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-stone-500"></div>
            {/* CHANGED: Added 'font-serif' and 'italic' */}
            <p className="mt-4 font-serif italic text-3xl text-red-800">12 month warranty</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

// Product Banner Card Component (kept as separate component due to hover state)
function ProductBannerCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className="group relative text-center flex flex-col items-center p-6 md:p-10 w-full max-w-md" // Added max-width to keep it from getting too large
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* This container now scales and has a set aspect ratio */}
      <div className="relative w-full aspect-[4/5] bg-white p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105" // Use object-contain to show the full product
        />
      </div>
      <div className="mt-6">
        <h3 className="text-md text-stone-700 font-sans">{product.name}</h3>
        <div className="mt-2 h-8 flex items-center justify-center">
          {isHovered ? (
            <button className="text-sm font-sans uppercase tracking-wide text-[#3d4d1d] border border-[#3d4d1d] px-4 py-1.5 hover:bg-[#3d4d1d] hover:text-white transition-colors duration-200">
              View Details
            </button>
          ) : (
            <p className="text-md text-[#3d4d1d] font-sans font-medium">
              {product.price}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}