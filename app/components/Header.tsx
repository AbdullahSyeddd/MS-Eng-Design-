"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react"; 
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] rounded-full px-4 lg:px-8 transition-all duration-500 mt-4 mx-4 xl:mx-auto">
      <div className="h-20">
        
        {/* Desktop Grid Layout (Perfectly Centered) */}
        <div className="hidden md:grid grid-cols-3 h-full items-center">
          <nav className="flex justify-start gap-10">
            <Link href="/" className="group relative text-[13px] font-bold tracking-[0.15em] uppercase text-slate-700 hover:text-blue-600 transition-colors duration-300">
              Services
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-blue-600 -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/contact" className="group relative text-[13px] font-bold tracking-[0.15em] uppercase text-slate-700 hover:text-blue-600 transition-colors duration-300">
              Contact
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-blue-600 -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </Link>
          </nav>

          <div className="flex justify-center">
            <Link href="/" className="group flex flex-col items-center">
              <span className="text-3xl font-black text-slate-900 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500 ease-out">
                MS<span className="text-blue-600">ED.</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.35em] uppercase mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Engineering Designs
              </span>
            </Link>
          </div>

          <div className="flex justify-end items-center gap-8">
            <Link 
              href="/design-your-shed" 
              className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)] transition-all hover:shadow-[0_8px_25px_-6px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-2">Design Shed <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
            </Link>
          </div>
        </div>

        {/* Mobile Layout (Flex Between) */}
        <div className="flex md:hidden h-full items-center justify-between px-2">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-2xl font-black text-slate-900 tracking-tighter leading-none">
              MS<span className="text-blue-600">E.</span>
            </span>
            <span className="text-[8px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">
              Engineering Designs
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/design-your-shed" className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-4 py-2 rounded-full shadow-md">
              Design
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-1 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN PANEL (Floating Card Style) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 mx-auto bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-100 rounded-3xl flex flex-col py-8 px-6 gap-6 z-50">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-900 font-black tracking-widest uppercase text-sm border-b border-slate-100 pb-4 hover:text-blue-600 transition-colors"
          >
            Services / Farm Sheds
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-900 font-black tracking-widest uppercase text-sm border-b border-slate-100 pb-4 hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
          <Link 
            href="/design-your-shed" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-blue-600 text-white text-center font-bold tracking-widest uppercase text-sm py-4 rounded-xl shadow-md mt-2"
          >
            Start Your Design
          </Link>
        </div>
      )}
    </header>
  );
}