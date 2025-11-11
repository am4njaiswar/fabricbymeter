"use client";

import { useState } from "react";
import Image from "next/image";
// import Navbar from "@/components/navbar"; // --- DELETED THIS
// import Footer from "@/components/footer"; // --- DELETED THIS

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

const instagramImages = [
  { id: 1, src: "/fabricImage.jpg", alt: "Fabric on a textured surface" },
  { id: 2, src: "/fabric-world-02.jpg", alt: "Close-up of a woven fabric" },
  { id: 3, src: "/fabricImage.jpg", alt: "Colorful threads and yarns" },
  { id: 4, src: "/fabric-world-02.jpg", alt: "Sewing machine in action" },
  { id: 5, src: "/fabricImage.jpg", alt: "Stack of folded fabrics" },
  { id: 6, src: "/fabric-world-02.jpg", alt: "Person measuring fabric" },
];

export default function HomePage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> --- DELETED THIS --- */}
      <main className="relative flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] md:h-[calc(100vh-136px)] overflow-hidden">
        <Image
          src="/imag3.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="relative flex flex-col items-center text-center px-4 z-20 max-w-5xl">
          <div className="w-16 h-px bg-white/60 mb-8 animate-fadeIn"></div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.25em] uppercase text-white mb-6 animate-fadeIn">
            Cue The Fabric
          </h1>
          
          <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase font-light mb-12 max-w-2xl animate-fadeIn">
            Discover premium textiles crafted for elegance
          </p>
          
          <a
            href="#"
            className="group relative px-12 py-4 text-xs md:text-sm tracking-[0.3em] text-white uppercase font-light border border-white/80 overflow-hidden transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Shop the collection
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>
      </main>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block">
              <span className="text-xs tracking-[0.4em] uppercase text-gray-400 font-light mb-4 block">
                Curated Selection
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light uppercase tracking-[0.2em] text-black mb-6">
                Best Sellers
              </h2>
              <div className="w-24 h-px bg-black mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative w-full overflow-hidden bg-gray-50 mb-6">
                  <div className="relative w-full pt-[130%]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-black text-white text-[10px] tracking-[0.2em] uppercase px-4 py-2 font-light">
                        {product.tag}
                      </span>
                    )}
                    
                    <div className={`absolute inset-x-0 bottom-0 bg-white py-4 transform transition-all duration-500 ${
                      hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}>
                      <button className="w-full text-xs tracking-[0.3em] uppercase font-light text-black hover:text-gray-600 transition-colors">
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-sm tracking-[0.1em] uppercase text-gray-800 font-light group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm tracking-wider text-black font-normal">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/shop"
              className="group relative inline-block px-12 py-4 text-xs tracking-[0.3em] uppercase text-black border border-black font-light overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">Shop All Products</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-1"></div>
      
      <section className="py-20 md:py-32 bg-[#e4dfc7]">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <div className="mb-16 md:mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gray-400 font-light mb-4 block">
              Follow Us
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-[0.2em] text-black mb-4">
              Fabric By Meter
            </h2>
            <a
              href="#"
              className="inline-block text-lg md:text-xl font-serif italic text-black hover:text-gray-600 transition-colors mt-2"
            >
              @fabricbymeter
            </a>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {instagramImages.map((image) => (
                <a
                  href="#"
                  key={image.id}
                  className="group relative aspect-square overflow-hidden bg-gray-100"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { title: "Worldwide Shipping", desc: "Delivered to your doorstep" },
              { title: "Easy 30 Day Returns", desc: "Hassle-free exchange" },
              { title: "12 Month Warranty", desc: "Quality guaranteed" }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-12 h-px bg-black/20 mb-6 transform group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-base md:text-lg font-serif font-light tracking-[0.1em] text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> --- DELETED THIS --- */}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}