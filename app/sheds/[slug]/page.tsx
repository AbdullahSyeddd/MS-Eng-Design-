import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, PenTool, ClipboardList, AlertTriangle, ArrowRight } from "lucide-react";

// 1. Updated Data matching Homepage (All 16 Sheds with IDs for .webp images and 250 NZD price)
const shedsData: Record<string, any> = {
  "farm-shed-6-bay": { id: 1, name: "Farm Shed 6 Bay", price: "250", length: "21.6 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "21 Poles" },
  "farm-shed-8-bay": { id: 2, name: "Farm Shed 8 Bay", price: "250", length: "28.8 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "27 Poles" },
  "farm-shed-9-bay-gable": { id: 3, name: "Farm Shed 9 Bay Gable", price: "250", length: "16 m", depth: "Custom", height: "4.8 m (Ridge) / 3.5m (Eve)", bayWidth: "3.6 m", poles: "44 Poles" },
  "hybrid-feed-loafing-barn": { id: 4, name: "Hybrid Feed & Loafing Barn", price: "250", length: "Custom", depth: "Custom", height: "Custom", bayWidth: "-", poles: "Custom" },
  "farm-shed-5-bay-2-enclosed": { id: 5, name: "Farm Shed 5 Bay 2 Enclosed", price: "250", length: "Custom", depth: "6 m", height: "3.6 - 3 m", bayWidth: "3.6 m", poles: "Custom" },
  "farm-shed-2-bay-lifestyle": { id: 6, name: "Farm Shed 2 Bay Lifestyle", price: "250", length: "9 m", depth: "9 m", height: "3.8 - 3 m", bayWidth: "4.5 m", poles: "9 Poles" },
  "farm-shed-3-bay-1-enclosed": { id: 7, name: "Farm Shed 3 Bay 1 Enclosed", price: "250", length: "10.8 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "12 Poles" },
  "farm-shed-3-bay-enclosed": { id: 8, name: "Farm Shed 3 Bay Enclosed", price: "250", length: "12 m", depth: "9 m", height: "4 - 3.4 m", bayWidth: "4 m", poles: "12 Poles" },
  "farm-shed-4-bay-enclosed": { id: 9, name: "Farm Shed 4 Bay Enclosed", price: "250", length: "18 m", depth: "9 m", height: "3.9 - 3 m", bayWidth: "4.5 m", poles: "15 Poles" },
  "farm-shed-5-bay-gable": { id: 10, name: "Farm Shed 5 Bay Gable", price: "250", length: "30 m", depth: "15 m", height: "4 - 5 m", bayWidth: "6 m", poles: "18 Poles" },
  "farm-shed-6-bay-gable-clearspan": { id: 11, name: "Farm Shed 6 Bay Gable Clearspan", price: "250", length: "36 m", depth: "15 m", height: "4 - 5 m", bayWidth: "6 m", poles: "14 Poles" },
  "farm-shed-7-bay-monopitch": { id: 12, name: "Farm Shed 7 Bay MonoPitch", price: "250", length: "42 m", depth: "9 m", height: "4 - 4.8 m", bayWidth: "6 m", poles: "24 Poles" },
  "farm-shed-2-bay": { id: 13, name: "Farm Shed 2 Bay", price: "250", length: "7.2 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "6 Poles" },
  "farm-shed-3-bay": { id: 14, name: "Farm Shed 3 Bay", price: "250", length: "10.8 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "12 Poles" },
  "farm-shed-4-bay": { id: 15, name: "Farm Shed 4 Bay", price: "250", length: "14.4 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "15 Poles" },
  "farm-shed-5-bay": { id: 16, name: "Farm Shed 5 Bay", price: "250", length: "18 m", depth: "6 m", height: "3 - 3.6 m", bayWidth: "3.6 m", poles: "18 Poles" },
};

export default function ShedDetailsPage({ params }: { params: { slug: string } }) {
  const shed = shedsData[params.slug] || shedsData["farm-shed-6-bay"]; 

  return (
    <main className="min-h-screen bg-[#F7F7F8] text-slate-900 selection:bg-blue-600 selection:text-white pb-24">
      
      {/* 1. MINIMALIST BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-4">
        <Link href="/" className="inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </Link>
      </div>

      {/* 2. HERO SPLIT SECTION (Premium Agency Style) */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-6 mb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left: Huge Floating Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group">
              <Image 
                src={`/${shed.id}.webp`} 
                alt={shed.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              />
              {/* Glassmorphism Floating Tag */}
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Design Package</span>
              </div>
            </div>
          </div>

          {/* Right: Typography & Bento Specs */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-6 lg:py-0">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-[1.05]">
              {shed.name}
            </h1>
            
            <div className="flex items-baseline gap-3 mb-10 pb-10 border-b border-slate-200">
              <span className="text-5xl lg:text-6xl font-black text-blue-600 tracking-tighter">{shed.price}</span>
              <span className="text-xl font-bold text-slate-400 uppercase tracking-widest">NZD <span className="text-sm">+ GST</span></span>
            </div>

            {/* Mini Bento-Grid for Specs */}
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Engineering Specs</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-center hover:-translate-y-1 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Length</span>
                <span className="text-lg font-black text-slate-900">{shed.length}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-center hover:-translate-y-1 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Depth</span>
                <span className="text-lg font-black text-slate-900">{shed.depth}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-center hover:-translate-y-1 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Height</span>
                <span className="text-lg font-black text-slate-900">{shed.height}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-center hover:-translate-y-1 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Bay Width</span>
                <span className="text-lg font-black text-slate-900">{shed.bayWidth}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-center md:col-span-2 hover:-translate-y-1 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Structure</span>
                <span className="text-lg font-black text-slate-900">{shed.poles}</span>
              </div>
            </div>

            {/* Giant CTA */}
            <Link 
              href={`/design-your-shed?category=${params.slug}`}
              className="group relative flex items-center justify-between w-full bg-slate-900 text-white font-bold p-2 pl-8 rounded-full shadow-[0_10px_30px_-10px_rgba(15,23,42,0.5)] transition-all hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] hover:bg-blue-600 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Start Your Design</span>
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MAGAZINE-STYLE INFO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)] border border-slate-100">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The Package Details.</h2>
            <p className="text-slate-500 text-lg md:text-xl">
              Highly accurate, structural drawing-based planning tailored to this layout. No guesswork, just precision.
            </p>
          </div>

          {/* Asymmetric Info Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Dark Box */}
            <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[2rem] flex flex-col justify-between group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <PenTool className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">Design & Drafting</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Full structural design with daily drawing deliveries via my in-house drafting team.
                </p>
              </div>
            </div>

            {/* Light Box */}
            <div className="bg-blue-50 text-slate-900 p-10 md:p-14 rounded-[2rem] border border-blue-100 flex flex-col justify-between group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <ClipboardList className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">Material Take-offs</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Complete schedules covering all timber members, plus all nails, screws, bolts, and fixings with precise quantities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Elegant PS1 Warning */}
          <div className="bg-red-50/50 border border-red-100 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-center md:text-left">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h4 className="text-red-900 font-black text-xl mb-1 tracking-tight">Important Note</h4>
              <p className="text-red-700/80 font-medium">
                We provide comprehensive design and material schedules, but we do not issue PS1 (Producer Statement 1).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER BADGES (Sleek Grid) */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { tag: "PLANS", title: "Clear Designs", desc: "Easy-to-read structural drawings." },
            { tag: "TOUGH", title: "High Durability", desc: "For high wind and snow loading." },
            { tag: "EXACT", title: "Material Takeoff", desc: "Precise quantity calculations." },
            { tag: "STRONG", title: "Structural Stability", desc: "Optimal strength framing." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-[2rem] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.02)] border border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                {item.tag}
              </span>
              <h4 className="font-black text-slate-900 mb-2 tracking-tight">{item.title}</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}