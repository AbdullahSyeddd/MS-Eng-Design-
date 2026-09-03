"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, ShieldCheck, Ruler } from "lucide-react";

// 1. All 16 Sheds Data
const shedsData = [
  { id: 1, title: "Farm Shed 6 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 21 Poles", desc: "Farm Shed | 6 Bay | 6m x 21.6m Depth: 6m | Bay width: 3.6m | Height: 3m - 3.6m 21 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-6-bay" },
  { id: 2, title: "Farm Shed 8 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 27 Poles", desc: "Farm Shed | 8 Bay | 6m x 28.8m Bay width: 3.6m | Height: 3m – 3.6m | Depth: 6m 27 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-8-bay" },
  { id: 3, title: "Farm Shed 9 Bay Gable", bayWidth: "3.6 m", specs: "16 m · 44 Poles", desc: "Centre Feeding Lane Calf Shed | Farm Shed | 9 Bay | Gable Bay width: 3.6m | Ridge height: 4.8m | Eve height: 3.5m | Width: 16m 44 pole structure", tags: ["Calving Barn", "Gable Roof"], price: "250", oldPrice: null, slug: "farm-shed-9-bay-gable" },
  { id: 4, title: "Hybrid Feed & Loafing Barn", bayWidth: "-", specs: "Composting barn", desc: "A full composting barn built for around 250 cows, feeding both sides with a central loafing and compost area. Delivered as a complete package, ready to put up on your site.", tags: ["Calving Barn"], price: "250", oldPrice: null, slug: "hybrid-feed-loafing-barn" },
  { id: 5, title: "Farm Shed 5 Bay 2 Enclosed", bayWidth: "3.6 m", specs: "6 m x 3.6 - 3 m", desc: "Farm Shed | 5 Bay | 2 Enclosed Depth: 6m | Bay width: 3.6m | Height: 3.6m - 3m PS1 engineered structure", tags: ["Enclosed", "Architecture", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-5-bay-2-enclosed" },
  { id: 6, title: "Farm Shed 2 Bay Architecture", bayWidth: "4.5 m", specs: "9 m x 3.8 - 3 m · 9 Poles", desc: "Architecture Shed | 2 Bay Mono Pitch | 9m x 9m Depth: 9m | Bay width: 4.5m | Height: 3.8 - 3m 9 pole structure", tags: ["Enclosed", "Architecture", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-2-bay-Architecture" },
  { id: 7, title: "Farm Shed 3 Bay 1 Enclosed", bayWidth: "3.6 m", specs: "6 m x 3 - 3.6 m · 12 Poles", desc: "Farm Shed | 3 Bay 1 Enclosed| 6m x 10.8m Bay width: 3.6m | Height: 3- 3.6m | Depth: 6m 12 pole structure", tags: ["Enclosed", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-3-bay-1-enclosed" },
  { id: 8, title: "Farm Shed 3 Bay Enclosed", bayWidth: "4 m", specs: "9 m x 4 - 3.4m · 12 Poles", desc: "Architecture Shed | 3 Bay Enclosed | 9m x 12m Depth: 9m | Bay width: 4m | Height: 4m - 3.4m 12 pole structure", tags: ["Enclosed", "Architecture", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-3-bay-enclosed" },
  { id: 9, title: "Farm Shed 4 Bay Enclosed", bayWidth: "4.5 m", specs: "9 m x 3.9 - 3 m · 15 Poles", desc: "Architecture Shed | 4 Bay Mono Pitch | 9m x 18m Depth: 9m | Bay width: 4.5m | Height: 3m - 3.9m 15 pole structure", tags: ["Enclosed", "Architecture", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-4-bay-enclosed" },
  { id: 10, title: "Farm Shed 5 Bay Gable", bayWidth: "6 m", specs: "15 m x 4 - 5 m · 18 Poles", desc: "Farm Shed | 5 Bay Gable | 15m x 30m Depth: 15m | Bay width: 6m | Height: 4m - 5m 18 pole structure", tags: ["Gable Roof"], price: "250", oldPrice: null, slug: "farm-shed-5-bay-gable" },
  { id: 11, title: "Farm Shed 6 Bay Gable Clearspan", bayWidth: "6 m", specs: "15 m x 4 - 5 m · 14 Poles", desc: "Farm Shed | 6 Bay Gable Clearspan | 15m x 36m Depth: 15m | Bay width: 6m | Height: 4m - 5m 14 pole structure | NuSpan clearspan rafters", tags: ["Clearspan", "Gable Roof"], price: "250", oldPrice: null, slug: "farm-shed-6-bay-gable-clearspan" },
  { id: 12, title: "Farm Shed 7 Bay MonoPitch", bayWidth: "6 m", specs: "9 m x 4 - 4.8 m · 24 Poles", desc: "Architecture Shed | 7 Bay Mono Pitch | 9m x 42m Depth: 9m | Bay width: 6m | Height: 4m - 4.8m 24 pole structure", tags: ["Enclosed", "Architecture", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-7-bay-monopitch" },
  { id: 13, title: "Farm Shed 2 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 6 Poles", desc: "Farm Shed | 2 Bay | 6m x 7.2m Bay width: 3.6m | Height: 3m - 3.6m | Depth: 6m 9 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-2-bay" },
  { id: 14, title: "Farm Shed 3 Bay", bayWidth: "3.6 m", specs: "10.8 m x 6 m x 3 - 3.6 m · 12 Poles", desc: "Farm Shed | 3 Bay | 6m x 10.8m Bay width: 3.6m | Height: 3m – 3.6m | Depth: 6m 12 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-3-bay" },
  { id: 15, title: "Farm Shed 4 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 15 Poles", desc: "Farm Shed | 4 Bay | 6m x 14.4m Bay width: 3.6m | Height: 3m – 3.6m | Depth: 6m 15 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-4-bay" },
  { id: 16, title: "Farm Shed 5 Bay", bayWidth: "3.6 m", specs: "6 m x 3 - 3.6 m · 18 Poles", desc: "Farm Shed | 5 Bay | 6m x 18m Depth: 6m | Bay width: 3.6m | Height: 3m - 3.6m 18 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-5-bay" }
];

const filters = ["All Sheds", "Calving Barn", "Clearspan", "Enclosed", "Gable Roof", "Architecture", "Mono Pitch"];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All Sheds");

  const filteredSheds = shedsData.filter(shed => 
    activeFilter === "All Sheds" || shed.tags.includes(activeFilter)
  );

  return (
    <main className="min-h-screen bg-[#F7F7F8] text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* 1. HERO SECTION (Figma Style Floating Hero) */}
      <section className="relative px-4 pt-4 pb-10 max-w-[1400px] mx-auto">
        <div className="relative w-full h-[75vh] min-h-[600px] rounded-[2.5rem] overflow-hidden">
          <Image 
            src="/hero-section.jpg" 
            alt="Premium Farm Shed" 
            fill 
            className="object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Premium NZ Engineering
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                Design <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">Done Right.</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-medium max-w-lg mb-8">
                All the engineering. None of the stuffing around. Precision-built structural plans for New Zealand farms.
              </p>
            </div>

            {/* Floating Glass Stat Box */}
            <div className="hidden lg:flex absolute bottom-16 right-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white max-w-xs shadow-2xl">
              <div>
                <Ruler className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Exact Material Takeoffs</h4>
                <p className="text-sm text-slate-300">Complete schedules with precise quantities, avoiding wastage and saving costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAGAZINE-STYLE INTRO SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-5/12 sticky top-32">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">The Standard</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Simple, Natural, <br /> Built to Last.
            </h3>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-xl font-bold mb-4">Timeless Design</h4>
              <p className="text-slate-500 leading-relaxed">
                This is the kind of structure you only buy once. Use them for calf shelters, feed storage, equipment cover, or general farm utility. Practical and highly durable.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-xl font-bold mb-4">Expert Plans</h4>
              <p className="text-slate-500 leading-relaxed">
                Structural design and material takeoffs provided. A smart solution without delays. Services include preliminary design and detailed pricing plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHED CATALOG (UPDATED TO MATCH SCREENSHOT) */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-[0_0_50px_-20px_rgba(0,0,0,0.05)] my-10">

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-4">Shed Catalog</h2>
              <p className="text-slate-500">Select a layout to view precise engineering specifications.</p>
            </div>

            {/* Custom Modern Filter Pill */}
            <div className="flex bg-slate-100 p-1.5 rounded-full overflow-x-auto w-full md:w-auto hide-scrollbar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter 
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Edge-to-Edge Cards (Updated Design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSheds.map((shed) => (
              <Link 
                href={`/sheds/${shed.slug}`} 
                key={shed.id}
                className="group flex flex-col bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  <Image src={`/${shed.id}.webp`} alt={shed.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Card Content Matching Screenshot */}
                <div className="flex flex-col flex-grow">
                  
                  {/* Title */}
                  <h3 className="text-[26px] font-black text-blue-600 mb-3 tracking-tight leading-none">{shed.title}</h3>
                  
                  {/* Bay Width */}
                  <p className="text-[13px] font-bold text-slate-600 uppercase tracking-widest mb-2">
                    BAY WIDTH: {shed.bayWidth}
                  </p>
                  
                  {/* Specs */}
                  <p className="text-slate-800 font-medium text-[17px] mb-4">
                    {shed.specs}
                  </p>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-[15px] mb-6 flex-grow leading-relaxed">
                    {shed.desc}
                  </p>

                  {/* Tags (Mono Pitch etc) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {shed.tags.map((tag, i) => (
                      <span key={i} className="border border-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider and Price Section */}
                  <div className="pt-6 border-t border-slate-100/80 mt-auto flex flex-col">
                    <div className="text-[11px] text-blue-600 font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Design Package
                    </div>
                    
                    <div className="flex items-baseline justify-between w-full">
                      <div className="flex items-baseline">
                        {shed.oldPrice && (
                          <span className="text-slate-400 line-through text-sm font-medium mr-2">{shed.oldPrice} NZD</span>
                        )}
                        <span className="text-3xl font-black tracking-tighter text-slate-900">{shed.price} NZD</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">+ GST</span>
                      </div>
                      <div className="text-blue-600 font-bold text-[15px] flex items-center hover:text-blue-800 transition-colors">
                        View <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {filteredSheds.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 mb-4">No sheds match this filter.</p>
              <button onClick={() => setActiveFilter("All Sheds")} className="text-blue-600 font-bold hover:underline">Reset Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* 4. THE "BENTO BOX" GRID SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The Material Takeoff.</h2>
          <p className="text-slate-500 text-lg max-w-2xl">All the materials. None of the stuffing around. What you get with every design package.</p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Big Featured Box */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32" />
            </div>
            <div className="relative z-10 mb-20">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3">All Timber & Poles</h3>
              <p className="text-slate-400 text-lg max-w-md">Complete schedules for H5 treated NZ timber poles, framing, rafters, and purlins.</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-[2rem] p-8 flex flex-col justify-end border border-blue-100">
            <Check className="w-6 h-6 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Roofing & Cladding</h3>
            <p className="text-slate-600 text-sm">Corrugated zinc roofing and complete wall cladding schedules.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
            <Check className="w-6 h-6 text-slate-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">All Fixings</h3>
            <p className="text-slate-500 text-sm">Galvanised bolts, brackets, screws, nails, and washers.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
            <Check className="w-6 h-6 text-slate-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Barge Flashings</h3>
            <p className="text-slate-500 text-sm">Complete weather protection and trimming at roof edges.</p>
          </div>

          <div className="bg-slate-100 rounded-[2rem] p-8 border border-slate-200">
            <Check className="w-6 h-6 text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Structural Designs</h3>
            <p className="text-slate-600 text-sm">Clear structural drawing-based planning and takeoff documents.</p>
          </div>

        </div>
      </section>

    </main>
  );
}