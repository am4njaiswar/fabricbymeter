"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function OurStoryPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-136px)] w-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
            alt="Our Heritage"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="relative h-full flex items-center justify-center px-6">
          <div className={`text-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <div className="w-1 h-20 bg-white/40 mx-auto mb-6"></div>
              <span className="text-white/80 text-xs tracking-[0.5em] uppercase font-light">
                Since 1985
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.15em] uppercase text-white mb-8">
              Our Story
            </h1>
            <p className="text-white/90 text-lg md:text-xl tracking-[0.2em] uppercase font-extralight max-w-2xl mx-auto">
              A legacy woven through generations
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light mb-6 block">
              The Beginning
            </span>
            <div className="w-24 h-px bg-black mx-auto mb-12"></div>
          </div>
          
          <div className="space-y-8 text-center">
            <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-gray-800 italic">
              "Every thread tells a story, every fabric holds a memory, and every creation carries the soul of craftsmanship."
            </p>
            
            <div className="pt-12">
              <p className="text-base md:text-lg leading-loose text-gray-600 font-light tracking-wide">
                Founded in the heart of textile heritage, Cue The Fabric emerged from a simple yet profound vision: to bridge the timeless art of traditional weaving with contemporary elegance. What began as a small workshop has evolved into a sanctuary for those who appreciate the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-20 md:mb-32">
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
                alt="Heritage Craftsmanship"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="bg-white flex items-center justify-center p-12 lg:p-20">
              <div className="max-w-md">
                <div className="mb-8">
                  <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">
                    Chapter One
                  </span>
                  <div className="w-16 h-px bg-black mt-4"></div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 tracking-wide text-black">
                  Heritage & Craft
                </h2>
                <p className="text-gray-600 leading-relaxed font-light text-base mb-6">
                  Our journey began with master artisans whose hands carried generations of knowledge. Each technique, carefully preserved and passed down, forms the foundation of our commitment to excellence.
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-base">
                  We honor these traditions while embracing innovation, creating fabrics that resonate with both history and modernity.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-black flex items-center justify-center p-12 lg:p-20 order-2 lg:order-1">
              <div className="max-w-md">
                <div className="mb-8">
                  <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">
                    Chapter Two
                  </span>
                  <div className="w-16 h-px bg-white mt-4"></div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 tracking-wide text-white">
                  Sustainable Luxury
                </h2>
                <p className="text-gray-500 leading-relaxed font-light text-base mb-6">
                  Luxury and responsibility are not opposing forces. We source our materials ethically, ensuring every fiber reflects our commitment to the planet and its people.
                </p>
                <p className="text-gray-500 leading-relaxed font-light text-base">
                  From organic cotton to peace silk, our collections celebrate beauty that doesn't compromise our values.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden group order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80"
                alt="Sustainable Materials"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light mb-6 block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.15em] uppercase mb-6 text-black">
              What We Believe
            </h2>
            <div className="w-24 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: "Quality Above All",
                desc: "Every fabric undergoes rigorous selection. We refuse to compromise on excellence, ensuring each piece meets our exacting standards."
              },
              {
                number: "02",
                title: "Artisan Partnership",
                desc: "We work directly with skilled craftspeople, fostering relationships built on respect, fair compensation, and shared passion for the craft."
              },
              {
                number: "03",
                title: "Timeless Design",
                desc: "Trends fade, but true elegance endures. We create textiles that transcend seasons, becoming cherished pieces in your collection."
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <span className="text-5xl font-serif font-extralight group-hover:text-gray-500 transition-colors duration-500 text-black">
                    {value.number}
                  </span>
                </div>
                <div className="w-12 h-px bg-black/20 mx-auto mb-6 group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-xl font-serif font-light mb-4 tracking-wide text-black">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light mb-6 block">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-black">
              Milestones
            </h2>
          </div>

          <div className="space-y-20">
            {[
              { year: "1985", title: "The Foundation", desc: "A small workshop opens with a vision to celebrate textile artistry." },
              { year: "1998", title: "Global Recognition", desc: "Our fabrics grace international runways, earning acclaim from leading designers." },
              { year: "2010", title: "Sustainable Commitment", desc: "Launch of our eco-conscious collection, setting new industry standards." },
              { year: "2024", title: "Digital Renaissance", desc: "Bringing our heritage to the world through seamless online experiences." }
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-32 text-center md:text-right">
                  <span className="text-4xl md:text-5xl font-serif font-extralight text-black">
                    {milestone.year}
                  </span>
                </div>
                <div className="hidden md:block w-px h-20 bg-gradient-to-b from-gray-500 to-transparent"></div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-serif font-light mb-3 tracking-wide text-black">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-lg">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=1920&q=80"
          alt="Visit Our Collection"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="w-1 h-16 bg-white/40 mx-auto mb-6"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-8 tracking-wide">
              Experience the Difference
            </h2>
            <p className="text-white/90 text-lg mb-12 font-light leading-relaxed tracking-wide">
              Discover fabrics that tell stories, crafted with passion, and designed to inspire.
            </p>
            <a
              href="/shop"
              className="group relative inline-block px-14 py-5 text-sm tracking-[0.3em] uppercase text-white border border-white/80 font-light overflow-hidden transition-all duration-500 hover:border-white"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Explore Collection
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}