import type { Metadata } from 'next'; // Import Metadata type
import { Montserrat } from 'next/font/google';
import './globals.css';

// Import your components
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Set up your font (you should already have this)
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Add the Metadata type
export const metadata: Metadata = {
  title: 'Fabric By Meter',
  description: 'High-quality fabrics and textiles.',
};

// Add the type for children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        
        {/* Navbar will be at the top of every page */}
        <Navbar />

        {/* Your page content (like Terms &Conditions) goes here */}
        <main>
          {children}
        </main>
        
        {/* Footer will be at the bottom of every page */}
        <Footer />

      </body>
    </html>
  );
}