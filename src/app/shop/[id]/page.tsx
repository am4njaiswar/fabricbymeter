"use client";

import { products } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { Minus, Plus, Heart, ChevronDown, Share2 } from "lucide-react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  if (!product) {
    notFound();
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-400 font-light flex items-center gap-2">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-black font-normal">{product.name}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          
          {/* LEFT: Image Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="relative aspect-[4/5] bg-gray-50 md:col-span-2">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
              </div>
              {/* Secondary Images (Simulated for UI demo) */}
              <div className="relative aspect-[4/5] bg-gray-50 hidden md:block">
                 <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: `url('${product.image}')` }} />
              </div>
              <div className="relative aspect-[4/5] bg-gray-50 hidden md:block">
                 <div className="absolute inset-0 bg-cover bg-center scale-125" style={{ backgroundImage: `url('${product.image}')` }} />
              </div>
            </div>
          </div>

          {/* RIGHT: Product Info (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              
              {/* Header */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-light">
                    {product.category} Collection
                  </span>
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <Share2 size={18} strokeWidth={1} />
                  </button>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-end gap-3">
                  <p className="text-2xl font-light text-black">
                    ${product.price}.00
                  </p>
                  <span className="text-sm text-gray-500 mb-1 font-light">/ meter</span>
                </div>
              </div>

              <div className="h-px w-full bg-gray-100 mb-8"></div>

              {/* Color Selector */}
              <div className="mb-8">
                <span className="text-xs tracking-[0.2em] uppercase text-gray-900 font-medium block mb-4">
                  Color: <span className="text-gray-500 font-light ml-1">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border transition-all duration-300 relative group ${
                        selectedColor === color 
                          ? "ring-1 ring-offset-2 ring-black border-transparent" 
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      title={color}
                    >
                      <span 
                        className="absolute inset-1 rounded-full"
                        style={{ backgroundColor: color.toLowerCase() === 'ivory' ? '#fcfcfc' : color.toLowerCase() === 'noir' ? '#1a1a1a' : 'gray' }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col gap-4 mb-10">
                <span className="text-xs tracking-[0.2em] uppercase text-gray-900 font-medium">
                  Quantity (Meters)
                </span>
                <div className="flex gap-4 h-12">
                  {/* Quantity Input */}
                  <div className="flex items-center justify-between border border-gray-200 w-32 px-3">
                    <button onClick={decrementQty} className="text-gray-400 hover:text-black transition-colors p-1">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                    <button onClick={incrementQty} className="text-gray-400 hover:text-black transition-colors p-1">
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  {/* Add to Cart */}
                  <button className="flex-1 bg-black text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                    Add to Cart
                  </button>
                  
                  {/* Wishlist */}
                  <button className="w-12 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors">
                    <Heart size={20} strokeWidth={1} />
                  </button>
                </div>
              </div>

              {/* Accordions for Details */}
              <div className="border-t border-gray-100">
                {/* Description Accordion */}
                <div className="border-b border-gray-100">
                  <button 
                    onClick={() => toggleAccordion('details')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <span className="text-xs tracking-[0.2em] uppercase text-black group-hover:text-gray-600 transition-colors">
                      Fabric Details
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 text-gray-400 ${openAccordion === 'details' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 'details' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {product.description}
                      <br /><br />
                      A testament to quality craftsmanship, this fabric offers a superior hand-feel and exceptional durability. Sourced from the finest mills.
                    </p>
                  </div>
                </div>

                {/* Care Accordion */}
                <div className="border-b border-gray-100">
                  <button 
                    onClick={() => toggleAccordion('care')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <span className="text-xs tracking-[0.2em] uppercase text-black group-hover:text-gray-600 transition-colors">
                      Care Instructions
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 text-gray-400 ${openAccordion === 'care' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 'care' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <ul className="text-sm text-gray-600 font-light space-y-2">
                      <li>• Dry clean recommended</li>
                      <li>• Iron on low heat</li>
                      <li>• Do not bleach</li>
                    </ul>
                  </div>
                </div>

                {/* Shipping Accordion */}
                <div className="border-b border-gray-100">
                  <button 
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <span className="text-xs tracking-[0.2em] uppercase text-black group-hover:text-gray-600 transition-colors">
                      Shipping & Returns
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 text-gray-400 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 'shipping' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      Free worldwide shipping on orders over $500. Orders are processed within 1-2 business days. Returns accepted within 14 days of delivery.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="py-20 md:py-32 border-t border-gray-100 bg-gray-50/30">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 block mb-3">
                You May Also Like
              </span>
              <h3 className="font-serif text-3xl font-light text-black uppercase tracking-widest">
                Curated For You
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {similarProducts.map((simProduct) => (
                <Link href={`/shop/${simProduct.id}`} key={simProduct.id}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[3/4] bg-white overflow-hidden mb-6">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url('${simProduct.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="font-serif text-xl text-black font-light group-hover:text-gray-600 transition-colors">
                        {simProduct.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-light tracking-wide">
                        ${simProduct.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}