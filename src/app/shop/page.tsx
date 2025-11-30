"use client";

import { useState } from "react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Fabrics" },
    { id: "silk", label: "Silk" },
    { id: "linen", label: "Linen" },
    { id: "wool", label: "Wool" },
    { id: "cotton", label: "Cotton" },
  ];

  const products = [
  {
    id: 1,
    name: "Heirloom Silk Charmeuse",
    category: "silk",
    price: 285,
    image: "https://images.pexels.com/photos/3713212/pexels-photo-3713212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "22 Momme · 114cm Width",
    colors: ["Ivory", "Noir", "Pearl"],
  },
  {
    id: 2,
    name: "Belgian Linen Canvas",
    category: "linen",
    price: 145,
    image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "100% European Flax · 150cm",
    colors: ["Natural", "Stone", "Ash"],
  },
  {
    id: 3,
    name: "Merino Wool Suiting",
    category: "wool",
    price: 320,
    image: "https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Super 150s · 152cm Width",
    colors: ["Charcoal", "Navy", "Camel"],
  },
  {
    id: 4,
    name: "Habotai Silk Lining",
    category: "silk",
    price: 95,
    image: "https://images.pexels.com/photos/6474459/pexels-photo-6474459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "8 Momme · 110cm Width",
    colors: ["Champagne", "Rose", "Dove"],
  },
  {
    id: 5,
    name: "Irish Linen Shirting",
    category: "linen",
    price: 165,
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Pure Linen · 140cm Width",
    colors: ["White", "Ecru", "Sky"],
  },
  {
    id: 6,
    name: "Cashmere Wool Blend",
    category: "wool",
    price: 425,
    image: "https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "80% Wool 20% Cashmere · 148cm",
    colors: ["Taupe", "Burgundy", "Forest"],
  },
  {
    id: 7,
    name: "Egyptian Cotton Poplin",
    category: "cotton",
    price: 125,
    image: "https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "120 Thread Count · 145cm",
    colors: ["Bright White", "Cream", "Slate"],
  },
  {
    id: 8,
    name: "Raw Silk Dupioni",
    category: "silk",
    price: 195,
    image: "https://images.pexels.com/photos/6473955/pexels-photo-6473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "100% Pure Silk · 112cm Width",
    colors: ["Copper", "Emerald", "Sapphire"],
  },
  {
    id: 9,
    name: "French Linen Voile",
    category: "linen",
    price: 185,
    image: "https://images.pexels.com/photos/5699485/pexels-photo-5699485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sheer Weight · 135cm Width",
    colors: ["Powder", "Mist", "Sand"],
  },
];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.55]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

        <div className="relative z-10 text-center px-6">
          <span className="text-white/70 text-xs md:text-sm tracking-[0.5em] uppercase font-light block mb-8 animate-fadeIn">
            Curated Collection
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white mb-6 animate-fadeIn">
            The Atelier
          </h1>
          <p className="text-white/80 font-light text-sm md:text-base tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeIn">
            Discover our meticulously sourced collection of world-class fabrics.
            Each piece represents the pinnacle of textile craftsmanship.
          </p>
          <div className="w-24 h-px bg-white/50 mx-auto animate-fadeIn"></div>
        </div>
      </section>

      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-6 py-2 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {cat.label}
                {selectedCategory === cat.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-black"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                className="group cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredProduct === product.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <button className="bg-white text-black px-8 py-3 text-xs tracking-[0.3em] uppercase font-light border border-white/20 hover:bg-black hover:text-white transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light block">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-black tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light tracking-wide">
                    {product.description}
                  </p>

                  <div className="flex justify-center gap-2 pt-2">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 rounded-full border border-gray-200 bg-gray-100 hover:scale-110 transition-transform cursor-pointer"
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="pt-4">
                    <span className="text-black font-light text-lg tracking-wider">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 text-xs ml-2">per meter</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: "✓", label: "Premium Quality", desc: "Hand-Selected" },
              { icon: "↻", label: "Free Returns", desc: "Within 30 Days" },
              { icon: "✈", label: "Global Shipping", desc: "2-5 Business Days" },
              { icon: "◇", label: "Swatch Service", desc: "Complimentary" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-2xl mb-4 text-black font-light">
                  {item.icon}
                </div>
                <h4 className="text-sm tracking-[0.2em] uppercase text-black font-light mb-2">
                  {item.label}
                </h4>
                <p className="text-xs text-gray-500 tracking-wide">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-gray-400 font-light mb-6 block">
            Personalized Service
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-black mb-8 leading-tight">
            Need Assistance Finding <br /> The Perfect Fabric?
          </h2>
          <p className="text-gray-600 font-light text-sm md:text-base tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
            Our fabric specialists are available to help you select the ideal
            material for your project. Request a consultation or order swatches
            to experience our quality firsthand.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative inline-block px-12 py-4 text-xs tracking-[0.3em] uppercase text-white bg-black font-light overflow-hidden transition-all duration-500 hover:bg-gray-900">
              <span className="relative z-10">Request Swatches</span>
            </button>
            <button className="group relative inline-block px-12 py-4 text-xs tracking-[0.3em] uppercase text-black border border-black font-light overflow-hidden transition-all duration-500 hover:text-white">
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

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
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}