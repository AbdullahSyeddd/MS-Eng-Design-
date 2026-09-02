import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MapPin, Mail, ArrowRight, Menu } from "lucide-react"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MS Engineering Designs",
  description: "Professional engineering and design services for farm sheds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#F9F8F4]`}>
        
        {/* 1. TOP ANNOUNCEMENT BAR (Sleek & Thin) */}
        <div className="bg-[#0D3B26] text-white text-[11px] font-medium tracking-widest uppercase py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center opacity-90">
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#8B7355]" /> New Zealand</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#8B7355]" /> info@msengineeringdesigns.co.nz</span>
            </span>
            
          </div>
        </div>

        {/* 2. PREMIUM CENTERED NAVBAR (Glassmorphism + Dive/Fade Transitions) */}
        <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 h-24">
            
            {/* Desktop Grid Layout (Perfectly Centered) */}
            <div className="hidden md:grid grid-cols-3 h-full items-center">
              
              {/* Left Navigation */}
              <nav className="flex justify-start gap-10">
                <Link href="/" className="group relative text-[13px] font-bold tracking-[0.15em] uppercase text-gray-800 hover:text-[#0F7A4D] transition-colors duration-300">
                  Services
                  {/* Dive in fade underline */}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-[#0F7A4D] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </Link>
                <Link href="/contact" className="group relative text-[13px] font-bold tracking-[0.15em] uppercase text-gray-800 hover:text-[#0F7A4D] transition-colors duration-300">
                  Contact
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-[#0F7A4D] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </Link>
              </nav>

              {/* Center Logo */}
              <div className="flex justify-center">
                <Link href="/" className="group flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-[#0D3B26] tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500 ease-out">
                    MS<span className="text-[#0F7A4D]">ED.</span>
                  </span>
                  <span className="text-[9px] font-bold text-[#8B7355] tracking-[0.35em] uppercase mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    Engineering Designs
                  </span>
                </Link>
              </div>

              {/* Right Navigation & CTA */}
              <div className="flex justify-end items-center gap-8">
                <Link 
                  href="/design-your-shed" 
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#0D3B26] text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden shadow-[0_8px_20px_-6px_rgba(13,59,38,0.4)] transition-all hover:shadow-[0_8px_25px_-6px_rgba(15,122,77,0.6)] hover:-translate-y-0.5"
                >
                  {/* Background fade effect on hover */}
                  <span className="absolute inset-0 bg-[#0F7A4D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-2">Design Shed <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
                </Link>
              </div>
            </div>

            {/* Mobile Layout (Flex Between) */}
            <div className="flex md:hidden h-full items-center justify-between">
              <Link href="/" className="flex flex-col items-start">
                <span className="text-2xl font-extrabold text-[#0D3B26] tracking-tighter leading-none">
                  MS<span className="text-[#0F7A4D]">E.</span>
                </span>
                <span className="text-[8px] font-bold text-[#8B7355] tracking-[0.3em] uppercase mt-1">
                  Engineering Designs
                </span>
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/design-your-shed" className="text-[10px] font-bold uppercase tracking-wider bg-[#0F7A4D] text-white px-4 py-2 rounded-full shadow-md">
                  Design
                </Link>
                <button className="text-[#0D3B26] p-1">
                  <Menu className="w-7 h-7" />
                </button>
              </div>
            </div>

          </div>
        </header>

        {/* 3. MAIN PAGE CONTENT */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 4. PREMIUM FOOTER (Kept consistent with the aesthetic requirement) */}
        <footer className="bg-[#0D3B26] text-[#E2E8D5] pt-20 pb-10 px-6 lg:px-20 mt-auto border-t-[6px] border-[#8B7355]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-5">
              <Link href="/" className="flex flex-col items-start mb-6">
                <span className="text-4xl font-extrabold text-white tracking-tighter leading-none">
                  MS<span className="text-[#8B7355]">E.</span>
                </span>
                <span className="text-[10px] font-bold text-[#8B7355] tracking-[0.35em] uppercase mt-2">
                  Engineering Designs
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                Premium structural design, pricing plans, and comprehensive material takeoffs engineered for New Zealand's toughest environments.
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white text-xs font-bold mb-6 uppercase tracking-[0.2em] opacity-80">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block font-medium">Farm Sheds</Link></li>
                <li><Link href="/design-your-shed" className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block font-medium">Design Your Shed</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block font-medium">Contact Us</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white text-xs font-bold mb-6 uppercase tracking-[0.2em] opacity-80">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-[#8B7355] mt-0.5 shrink-0" />
                  <span className="font-medium">info@msengineeringdesigns.co.nz</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#8B7355] mt-0.5 shrink-0" />
                  <span className="font-medium">New Zealand</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
            <p>&copy; {new Date().getFullYear()} MS Engineering Designs. All rights reserved.</p>
            <p className="flex items-center gap-1 uppercase tracking-widest">Designed for <span className="text-[#8B7355]">New Zealand</span></p>
          </div>
        </footer>

      </body>
    </html>
  );
}