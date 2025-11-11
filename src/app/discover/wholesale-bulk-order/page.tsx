"use client"; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 

export default function WholesaleBulkOrderPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [message, setMessage] = useState("");
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const errors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address.";
      isValid = false;
    }

    if (phone.trim() && !/^\d{10,}$/.test(phone.replace(/\s+/g, ''))) {
      errors.phone = "Phone number must be at least 10 digits.";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form is valid! Submitting...", { name, email, phone, message });
      
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFormErrors({ name: "", email: "", phone: "", message: "" }); 
    } else {
      console.log("Form is invalid. Please check errors.");
    }
  };

  return (
    <div className="font-sans bg-white relative">
      
      {/* --- CHAT POPUP --- */}
      <div 
        className={`fixed bottom-24 right-6 z-50 w-72 bg-white rounded-lg shadow-xl transition-all duration-300 ease-out
        ${isPopupOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <button
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-1 right-2 text-gray-400 hover:text-gray-600 text-2xl font-light"
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="p-6 text-center">
          {/* --- CHANGE: Added text-gray-900 --- */}
          <p className="text-lg font-semibold mb-2 text-gray-900">Hi, 👋</p>
          <p className="text-sm text-gray-600 mb-4">
            Greetings for the day! We are here to help you. Contact us for any support.
          </p>
          <a
            href="https://wa.me/919920878487" // The real WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsPopupOpen(false)} // Close popup on click
            className="block w-full bg-green-500 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            START CHAT
          </a>
          <p className="text-xs text-gray-400 mt-4">
            ⚡️ Powered by Engati.com
          </p>
        </div>
      </div>

      {/* --- WHATSAPP ICON (BUTTON) --- */}
      <button
  onClick={() => setIsPopupOpen(true)} // Toggles the popup
  className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
  aria-label="Open chat popup"
>
  {/* White WhatsApp SVG Icon */}
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.62C8.75 21.39 10.36 21.81 12.04 21.81C17.5 21.81 21.95 17.36 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.53 20.13 9.06 19.74 7.79 19L7.4 18.78L4.5 19.51L5.25 16.7L5.02 16.31C4.3 14.98 3.86 13.48 3.86 11.91C3.86 7.39 7.52 3.73 12.04 3.73C16.56 3.73 20.22 7.39 20.22 11.91C20.22 16.43 16.56 20.13 12.04 20.13ZM17.36 14.23C17.13 14.12 15.98 13.55 15.78 13.48C15.58 13.4 15.43 13.37 15.28 13.6C15.13 13.84 14.6 14.41 14.45 14.58C14.3 14.76 14.15 14.78 13.93 14.67C13.7 14.56 12.79 14.24 11.71 13.26C10.84 12.49 10.24 11.58 10.09 11.35C9.94 11.12 10.06 11 10.18 10.88C10.29 10.77 10.42 10.59 10.58 10.42C10.74 10.25 10.79 10.13 10.89 9.93C10.99 9.73 10.94 9.58 10.87 9.46C10.79 9.35 10.3 8.2 10.1 7.73C9.9 7.26 9.7 7.31 9.56 7.3C9.42 7.29 9.27 7.29 9.12 7.29C8.97 7.29 8.7 7.34 8.48 7.57C8.25 7.81 7.71 8.3 7.71 9.38C7.71 10.45 8.5 11.47 8.62 11.62C8.73 11.76 10.26 14.16 12.59 15.11C14.92 16.05 14.92 15.72 15.25 15.67C15.58 15.62 16.73 15.05 16.93 14.82C17.13 14.6 17.28 14.45 17.36 14.33C17.43 14.22 17.41 14.14 17.36 14.07V14.23Z" 
      fill="white"
    />
  </svg>
</button>

      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-96 flex items-center justify-center text-white bg-cover bg-center"
        // This is correct. Just make sure 'fabric-rolls-bg.jpg' is in your /public folder.
        style={{ backgroundImage: 'url("/wholesale.webp")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            WHOLESALE AND BULK ORDERS
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Ready With Your Inquiry
          </p>
          <button 
            onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            ENQUIRY NOW
          </button>
        </div>
      </div>

      {/* Breadcrumbs & Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">

        <div className="space-y-10 text-gray-700 text-sm md:text-base leading-relaxed">
          
          <div className="space-y-4">
            <p className="text-base text-gray-800">
              We at The Fabric By Meter can custom make:
            </p>
            <p className="pl-4">
              Any fabric for you (silks, brocades, cottons etc)
              <br />
              Digital prints or any other prints
              <br />
              Custom dye any dyeable fabric
            </p>
          </div>

          {/* Contact Us Form Section */}
          <div id="contact-form-section" className="space-y-6 pt-6">
            <h2 className="text-2xl font-normal uppercase text-gray-900 tracking-widest text-center mb-8">
              CONTACT US
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                  NAME
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full px-4 py-3 text-sm border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 ${formErrors.name ? 'focus:ring-red-500' : 'focus:ring-black'}`}
                />
                {formErrors.name && <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                  EMAIL
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full px-4 py-3 text-sm border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 ${formErrors.email ? 'focus:ring-red-500' : 'focus:ring-black'}`}
                />
                {formErrors.email && <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                  PHONE NUMBER
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-3 text-sm border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 ${formErrors.phone ? 'focus:ring-red-500' : 'focus:ring-black'}`}
                />
                {formErrors.phone && <p className="text-red-600 text-xs mt-1">{formErrors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                  MESSAGE
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={`w-full px-4 py-3 text-sm border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 ${formErrors.message ? 'focus:ring-red-500' : 'focus:ring-black'}`}
                />
                {formErrors.message && <p className="text-red-600 text-xs mt-1">{formErrors.message}</p>}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-black text-white font-medium uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors w-full"
                >
                  Send
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 pt-4 text-center">
              This site is protected by hCaptcha and the hCaptcha{" "}
              <Link href="/privacy-policy" className="underline hover:text-black">Privacy Policy</Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="underline hover:text-black">Terms of Service</Link>{" "}
              apply.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}