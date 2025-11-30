import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="font-sans bg-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        <div className="text-sm text-gray-500 mb-4 text-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span>Contact Us</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-12 tracking-widest text-center">
          Contact Us
        </h1>

        {/* Body Content --- REMOVED text-center --- */}
        <div className="space-y-12 text-gray-700 text-sm md:text-base leading-relaxed">
          
          {/* Company Address Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold uppercase text-gray-900 tracking-wider">
              COMPANY ADDRESS
            </h2>
            {/* --- REMOVED max-w-md mx-auto --- */}
            <p>
              Shop No 2, Sunbeam CHS Pvt Ltd, Next to Nair’s Medical, Perry Cross Road, Bandra West, Mumbai, 400050, Maharashtra
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold uppercase text-gray-900 tracking-wider">
              CONTACT INFORMATION
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-gray-900">Email: </span>
                <a href="mailto:info@fabricbymeter.com" className="underline hover:text-black">
                  info@fabricbymeter.com
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-900">Contact Number: </span>
                <a href="tel:+919920878487" className="hover:text-black">
                  +91-9920878487
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}