"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function OurStoryPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Simple intersection observer for fade-in elements
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] selection:bg-black selection:text-white">
      <header className="relative w-full h-[65vh] overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/fabric-world-02.jpg"
            alt="Fabric Texture Close up"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className={`inline-block mb-4 text-xs md:text-sm tracking-[0.4em] text-white/80 uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Est. 1985
          </span>
          <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wide mb-8 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            The Art of <br/> <span className="italic">Weaving</span>
          </h1>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white animate-bounce" />
        </div>
      </header>

      {/* --- Section 2: Editorial Intro (Asymmetrical) --- 
          Large typography contrasted with a smaller layout.
      */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="w-12 h-[1px] bg-black mb-6"></div>
            <h2 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-2">
              Our Philosophy
            </h2>
            <p className="font-serif text-3xl md:text-4xl leading-tight text-stone-900">
              "True luxury is not just about rarity, but the time dedicated to beauty."
            </p>
          </div>
          <div className="lg:col-span-1"></div> {/* Spacer */}
          <div className="lg:col-span-7 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            <p className="text-stone-600 text-lg leading-relaxed font-light mb-8">
              Founded in the quiet corners of a historic textile district, <strong>Cue The Fabric</strong> began with a solitary loom and a singular obsession: perfection. We realized early on that in a world of fast fashion, the revolutionary act was to slow down.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Today, our atelier bridges the gap between heritage craftsmanship and modern aesthetic requirements. We don't just sell fabric; we curate the canvas upon which designers paint their masterpieces.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Magazine Layout (Overlap Effect) --- 
          This structural alignment screams "Premium". 
          The image sits behind, and the text card floats over it.
      */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Block 1: Image Left, Text Right Overlay */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 mb-32 items-center">
            <div className="lg:col-span-8 h-[600px] relative reveal-on-scroll opacity-0 transition-opacity duration-1000">
              <Image
                src="/fabric2.jpg"
                alt="Artisan at work"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
            <div className="lg:col-span-5 lg:-ml-24 relative z-10 mt-[-100px] lg:mt-0 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
              <div className="bg-[#FDFBF7] p-10 md:p-16 shadow-xl border border-stone-100">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-4">Chapter 01</span>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Uncompromising Materiality</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-6">
                  We travel to the remote highlands of Peru for our Vicuña and the lush silk farms of Como. Every thread is inspected by hand. If it doesn't meet our exacting standards, it doesn't make the cut.
                </p>
                <div className="w-full h-[1px] bg-stone-200"></div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">
             <div className="hidden lg:block lg:col-span-5 lg:-mr-24 relative z-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
              <div className="bg-[#FDFBF7] p-10 md:p-16 shadow-xl border border-stone-100 text-right">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-4">Chapter 02</span>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Sustainable Heritage</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-6">
                  Preserving the earth is as important as preserving our craft. Our dyes are organic, our water is recycled, and our artisans are partners, not just employees.
                </p>
                <div className="w-full h-[1px] bg-stone-200"></div>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:col-start-6 h-[600px] relative reveal-on-scroll opacity-0 transition-opacity duration-1000">
              <Image
                src="/fabric3.jpg"
                alt="Sustainable Fabric"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>

            {/* Mobile Text Fallback (Visible only on small screens) */}
            <div className="lg:hidden mt-[-100px] relative z-10 px-4">
               <div className="bg-[#FDFBF7] p-10 shadow-xl border border-stone-100">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-4">Chapter 02</span>
                <h3 className="font-serif text-3xl text-stone-900 mb-6">Sustainable Heritage</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                   Preserving the earth is as important as preserving our craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Minimalist Milestones (Clean Grid) --- 
          Replacing the vertical timeline with a clean, horizontal grid 
          typically found in luxury branding.
      */}
      <section className="py-24 bg-stone-900 text-stone-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-serif text-4xl text-white mb-4">The Journey</h2>
            <div className="w-16 h-[1px] bg-stone-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-stone-800 pt-12">
            {[
              { year: "1985", title: "The Genesis", text: "A small loom in a family garage." },
              { year: "1998", title: "Paris Debut", text: "Featured in our first couture week." },
              { year: "2012", title: "Going Green", text: "100% Organic certification achieved." },
              { year: "2025", title: "Global Reach", text: "Serving 50+ countries worldwide." },
            ].map((item, idx) => (
              <div key={idx} className="group reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${idx * 100}ms` }}>
                <span className="block text-5xl font-serif text-stone-700 mb-4 group-hover:text-white transition-colors duration-500">{item.year}</span>
                <h4 className="text-white text-lg tracking-widest uppercase mb-2">{item.title}</h4>
                <p className="text-stone-500 font-light text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: The "Signature" Footer --- */}
      <section className="py-32 bg-[#FDFBF7] text-center px-6">
        <div className="max-w-4xl mx-auto reveal-on-scroll opacity-0 scale-95 transition-all duration-1000">
          <div className="mb-10">
            <Image 
               src="/fabric-world-02.jpg" // Replace with a small icon if you have one, or remove
               width={40} height={40} 
               alt="" 
               className="mx-auto opacity-20 mb-6" 
               style={{ display: 'none' }} // Remove this style if you have a real icon
            />
            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight mb-8">
              "We don't just design fabric.<br/> We design feeling."
            </h2>
            <p className="text-stone-500 italic font-serif text-xl">– The Founders</p>
          </div>
          
          <a
            href="/shop"
            className="inline-block border-b border-black pb-1 text-sm tracking-[0.3em] uppercase hover:text-stone-500 hover:border-stone-500 transition-all duration-300"
          >
            Explore the Collection
          </a>
        </div>
      </section>
    </div>
  );
}