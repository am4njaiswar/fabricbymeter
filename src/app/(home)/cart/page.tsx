"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react";

// --- DUMMY CART DATA ---
const initialCartItems = [
  {
    id: 1,
    name: "Heirloom Silk Charmeuse",
    category: "Silk",
    color: "Ivory",
    price: 285,
    quantity: 2,
    image: "https://images.pexels.com/photos/3713212/pexels-photo-3713212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Merino Wool Suiting",
    category: "Wool",
    color: "Charcoal",
    price: 320,
    quantity: 1,
    image: "https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0; 
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HEADER --- */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="container mx-auto px-6 py-6 md:py-12 max-w-7xl text-center relative">
          <h1 className="text-2xl md:text-4xl font-serif font-light uppercase tracking-widest text-black">
            Shopping Cart
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-6 max-w-7xl py-8 lg:py-20 pb-32 md:pb-20"> {/* Added extra bottom padding for mobile sticky footer */}
        {cartItems.length === 0 ? (
          // --- EMPTY STATE ---
          <div className="text-center py-20 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
                <ShoppingBag size={24} strokeWidth={1.5} />
            </div>
            <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6">Your cart is empty</h2>
            <Link 
              href="/shop"
              className="px-8 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* --- LEFT: CART ITEMS --- */}
            <div className="lg:col-span-8">
              <div className="hidden md:grid grid-cols-12 gap-4 text-xs uppercase tracking-[0.2em] text-gray-400 font-light border-b border-gray-100 pb-4">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              <div className="space-y-0 divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4 py-6 md:py-8 relative"
                  >
                    {/* Desktop Remove Button */}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="hidden md:block absolute top-8 right-0 text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <X size={18} />
                    </button>

                    {/* Product Info */}
                    <div className="md:col-span-6 flex gap-5">
                      <div className="relative w-24 h-32 md:w-24 md:h-32 bg-gray-50 flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1 flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1 block">
                              {item.category}
                            </span>
                            {/* Mobile Remove Button */}
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="md:hidden text-gray-400 hover:text-red-500 p-1 -mr-2"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          
                          <h3 className="font-serif text-lg text-black font-light mb-1 leading-tight">
                            <Link href={`/shop/${item.id}`} className="hover:text-gray-600 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-xs text-gray-500 font-light">
                            Color: {item.color}
                          </p>
                        </div>
                        
                        {/* Mobile Price & Quantity Row */}
                        <div className="flex justify-between items-end md:hidden mt-4">
                            <p className="text-base font-normal text-black">
                                ${item.price * item.quantity}
                            </p>
                            <div className="flex items-center border border-gray-200 h-8">
                                <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-full flex items-center justify-center text-gray-400 hover:text-black active:bg-gray-50"
                                >
                                <Minus size={12} />
                                </button>
                                <span className="text-xs font-medium w-8 text-center">{item.quantity}</span>
                                <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-full flex items-center justify-center text-gray-400 hover:text-black active:bg-gray-50"
                                >
                                <Plus size={12} />
                                </button>
                            </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Quantity Control */}
                    <div className="md:col-span-3 hidden md:flex md:justify-center">
                      <div className="flex items-center justify-between border border-gray-200 w-32 px-3 h-10">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-400 hover:text-black transition-colors p-1"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}m</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-400 hover:text-black transition-colors p-1"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Desktop Total Price */}
                    <div className="md:col-span-2 text-right hidden md:block">
                      <p className="text-base font-light text-black">
                        ${item.price * item.quantity}.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 hidden md:block">
                <Link href="/shop" className="text-xs tracking-[0.2em] uppercase text-black border-b border-gray-200 pb-1 hover:border-black transition-all">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* --- RIGHT: ORDER SUMMARY (Desktop) & INLINE (Mobile) --- */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50/50 p-6 md:p-8 sticky top-32">
                <h2 className="font-serif text-lg md:text-xl font-light uppercase tracking-widest mb-6 text-black">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm font-light">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-black">${subtotal}.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-light">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Calculated next</span>
                  </div>
                  <div className="h-px w-full bg-gray-200 my-3"></div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-medium text-black uppercase tracking-wider">Total</span>
                    <span className="text-lg font-serif text-black">${total}.00</span>
                  </div>
                </div>

                <div className="hidden md:block">
                    <button className="w-full bg-black text-white py-4 px-6 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Checkout
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-[10px] text-gray-400 font-light mt-4 text-center leading-relaxed">
                    Tax included. Shipping calculated at checkout.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
                    <ShieldCheck size={14} strokeWidth={1.5}/>
                    <span className="text-[10px] uppercase tracking-widest">Secure Checkout</span>
                    </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      {/* --- MOBILE STICKY CHECKOUT BAR --- */}
      {cartItems.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <div className="flex gap-4 max-w-lg mx-auto">
                  <div className="flex-1 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500">Total</span>
                      <span className="text-xl font-serif text-black">${total}.00</span>
                  </div>
                  <button className="flex-[2] bg-black text-white py-3 px-6 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2">
                      Checkout
                      <ArrowRight size={14} />
                  </button>
              </div>
          </div>
      )}
    </div>
  );
}