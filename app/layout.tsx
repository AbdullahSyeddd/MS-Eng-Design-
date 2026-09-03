import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react"; 
import Header from "./components/Header";

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
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#F7F7F8] selection:bg-blue-600 selection:text-white`}>
        
        {/* 1. TOP ANNOUNCEMENT BAR (Ultra-Minimal) */}
        <div className="bg-slate-900 text-slate-300 text-[10px] font-bold tracking-[0.25em] uppercase py-2.5 hidden md:block border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
            <span className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><MapPin className="w-3 h-3 text-blue-500" /> New Zealand</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-3 h-3 text-blue-500" /> msengineeringdesigns@gmail.com</span>
            </span>
            <span className="text-blue-400">Premium Shed Engineering</span>
          </div>
        </div>

        {/* 2. HEADER */}
        <Header />

        {/* 3. MAIN CONTENT */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 4. ULTRA-MODERN FIGMA FOOTER */}
        <div className="px-4 pb-4 mt-20">
          <footer className="bg-slate-900 text-slate-100 pt-20 pb-10 px-8 lg:px-20 rounded-[3rem] relative overflow-hidden shadow-2xl">
            
            {/* Giant Background Watermark Text Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
              <span className="text-[12vw] font-black whitespace-nowrap tracking-tighter">MS ENGINEERING</span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
              
              {/* Brand Column */}
              <div className="md:col-span-5">
                <Link href="/" className="inline-flex flex-col items-start mb-8 group">
                  <span className="text-5xl font-black text-white tracking-tighter leading-none group-hover:text-blue-400 transition-colors duration-300">
                    MS<span className="text-blue-500">ED.</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 tracking-[0.4em] uppercase mt-3 group-hover:text-slate-300 transition-colors">
                    Engineering Designs
                  </span>
                </Link>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                  Precision-built structural plans and material takeoffs. Designed for strength, engineered for New Zealand.
                </p>
              </div>

              {/* Links Column */}
              <div className="md:col-span-3 md:col-start-7">
                <h4 className="text-white text-xs font-bold mb-8 uppercase tracking-[0.2em] opacity-50">Explore</h4>
                <ul className="space-y-5">
                  <li><Link href="/" className="text-base font-medium text-slate-300 hover:text-white hover:translate-x-2 transition-all inline-block">Farm Sheds Catalog</Link></li>
                  <li><Link href="/design-your-shed" className="text-base font-medium text-slate-300 hover:text-white hover:translate-x-2 transition-all inline-block">Design Your Shed</Link></li>
                  <li><Link href="/contact" className="text-base font-medium text-slate-300 hover:text-white hover:translate-x-2 transition-all inline-block">Contact Us</Link></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="md:col-span-3">
                <h4 className="text-white text-xs font-bold mb-8 uppercase tracking-[0.2em] opacity-50">Connect</h4>
                <ul className="space-y-5">
                  <li>
                    <a href="mailto:msengineeringdesigns@gmail.com" className="group flex items-start gap-4 text-slate-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" />
                      </div>
                      <span className="font-medium mt-2.5 text-sm break-all">msengineeringdesigns@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <div className="group flex items-start gap-4 text-slate-300">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="font-medium mt-2.5 text-sm">New Zealand</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <p>&copy; {new Date().getFullYear()} MS Engineering. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span>Built for</span>
                <span className="text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-full">New Zealand</span>
              </div>
            </div>
          </footer>
        </div>

      </body>
    </html>
  );
}