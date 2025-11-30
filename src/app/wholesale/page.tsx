"use client";

import { useState } from "react";
import Image from "next/image";

export default function WholesalePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO SECTION: Minimal & Professional --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop"
          alt="Textile Warehouse"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <span className="text-white/80 text-xs md:text-sm tracking-[0.4em] uppercase font-light block mb-6">
            For Designers & Retailers
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[0.1em] uppercase text-white mb-8">
            The Trade Program
          </h1>
          <div className="w-20 h-px bg-white/60 mx-auto"></div>
        </div>
      </section>

      {/* --- INTRODUCTION: Split Layout --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="text-xs tracking-[0.4em] uppercase text-gray-400 font-light mb-6 block">
                Partnership
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-black mb-8 leading-tight">
                SOURCING FOR THE <br /> EXTRAORDINARY
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-sm md:text-base tracking-wide">
                We invite interior designers, architects, and fashion houses to join our exclusive Trade Program. Gain access to our complete library of premium linens, silks, and wools at preferred pricing.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-10 text-sm md:text-base tracking-wide">
                Whether sourcing for a boutique collection or a large-scale hospitality project, our dedicated trade team ensures your vision is met with uncompromising quality.
              </p>
              
              <ul className="space-y-4">
                {["Tiered Pricing Structure", "Priority Shipping", "Dedicated Account Manager", "Free Swatch Books"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm tracking-widest uppercase text-black font-light">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2 relative h-[500px] bg-gray-50 overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2670&auto=format&fit=crop"
                alt="Fabric Swatches"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATISTICS / SCALE --- */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Stock Available", value: "50k+" },
              { label: "Global Shipping", value: "120" },
              { label: "Trade Partners", value: "850+" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-serif text-4xl md:text-5xl font-light text-black mb-4">
                  {stat.value}
                  {idx === 1 && <span className="text-2xl align-top ml-1">Countries</span>}
                  {idx !== 1 && <span className="text-2xl align-top ml-1">Meters</span>}
                </span>
                <span className="text-xs tracking-[0.3em] uppercase text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION FORM SECTION --- */}
      <section className="py-24 md:py-32 bg-white relative" id="apply">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-gray-400 font-light mb-4 block">
              Application
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-black mb-6">
              Request Trade Account
            </h2>
            <p className="text-gray-500 font-light text-sm tracking-wide max-w-lg mx-auto">
              Please complete the form below. Our team reviews all applications within 24 hours.
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="bg-gray-50 p-12 text-center border border-gray-100 animate-fadeIn">
              <svg className="w-16 h-16 text-black mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-black mb-4">Application Received</h3>
              <p className="text-gray-600 font-light">Thank you for your interest. A member of our trade team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Company Details */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900 border-b border-gray-200 pb-2">
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="group">
                    <input 
                      type="text" 
                      required 
                      placeholder="Company Name"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="text" 
                      required 
                      placeholder="Tax ID / Resale Number"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="url" 
                      placeholder="Website / Portfolio URL"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide"
                    />
                  </div>
                  <div className="group">
                    <select 
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-400">Business Type</option>
                      <option value="interior_design">Interior Design</option>
                      <option value="retailer">Retailer / Boutique</option>
                      <option value="fashion">Fashion Brand</option>
                      <option value="hospitality">Hospitality</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900 border-b border-gray-200 pb-2">
                  Contact Person
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="group">
                    <input 
                      type="text" 
                      required 
                      placeholder="First Name"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="text" 
                      required 
                      placeholder="Last Name"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide"
                    />
                  </div>
                  <div className="group md:col-span-2">
                    <input 
                      type="email" 
                      required 
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide"
                    />
                  </div>
                  <div className="group md:col-span-2">
                    <textarea 
                      rows={3}
                      placeholder="Tell us about your sourcing needs..."
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wide resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="group relative inline-block px-16 py-4 text-xs tracking-[0.3em] uppercase text-black border border-black font-light overflow-hidden transition-all duration-500 hover:text-white disabled:opacity-50"
                >
                  <span className="relative z-10">
                    {formStatus === "submitting" ? "Processing..." : "Submit Application"}
                  </span>
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* --- CSS Animation --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}