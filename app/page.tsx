"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";

// 1. All 16 Sheds Data (NZD & "Kit" removed)
const shedsData = [
  { id: 1, title: "Farm Shed 6 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 21 Poles", desc: "Farm Shed | 6 Bay | 6m x 21.6m Depth: 6m | Bay width: 3.6m | Height: 3m - 3.6m 21 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-6-bay" },
  { id: 2, title: "Farm Shed 8 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 27 Poles", desc: "Farm Shed | 8 Bay | 6m x 28.8m Bay width: 3.6m | Height: 3m – 3.6m | Depth: 6m 27 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-8-bay" },
  { id: 3, title: "Farm Shed 9 Bay Gable", bayWidth: "3.6 m", specs: "16 m · 44 Poles", desc: "Centre Feeding Lane Calf Shed | Farm Shed | 9 Bay | Gable Bay width: 3.6m | Ridge height: 4.8m | Eve height: 3.5m | Width: 16m 44 pole structure", tags: ["Calving Barn", "Gable Roof"], price: "250", oldPrice: null, slug: "farm-shed-9-bay-gable" },
  { id: 4, title: "Hybrid Feed & Loafing Barn", bayWidth: "-", specs: "Composting barn", desc: "A full composting barn built for around 250 cows, feeding both sides with a central loafing and compost area. Delivered as a complete package, ready to put up on your site.", tags: ["Calving Barn"], price: "250", oldPrice: null, slug: "hybrid-feed-loafing-barn" },
  { id: 5, title: "Farm Shed 5 Bay 2 Enclosed", bayWidth: "3.6 m", specs: "6 m x 3.6 - 3 m", desc: "Farm Shed | 5 Bay | 2 Enclosed Depth: 6m | Bay width: 3.6m | Height: 3.6m - 3m PS1 engineered structure", tags: ["Enclosed", "Lifestyle", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-5-bay-2-enclosed" },
  { id: 6, title: "Farm Shed 2 Bay Lifestyle", bayWidth: "4.5 m", specs: "9 m x 3.8 - 3 m · 9 Poles", desc: "Lifestyle Shed | 2 Bay Mono Pitch | 9m x 9m Depth: 9m | Bay width: 4.5m | Height: 3.8 - 3m 9 pole structure", tags: ["Enclosed", "Lifestyle", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-2-bay-lifestyle" },
  { id: 7, title: "Farm Shed 3 Bay 1 Enclosed", bayWidth: "3.6 m", specs: "6 m x 3 - 3.6 m · 12 Poles", desc: "Farm Shed | 3 Bay 1 Enclosed| 6m x 10.8m Bay width: 3.6m | Height: 3- 3.6m | Depth: 6m 12 pole structure", tags: ["Enclosed", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-3-bay-1-enclosed" },
  { id: 8, title: "Farm Shed 3 Bay Enclosed", bayWidth: "4 m", specs: "9 m x 4 - 3.4m · 12 Poles", desc: "Lifestyle Shed | 3 Bay Enclosed | 9m x 12m Depth: 9m | Bay width: 4m | Height: 4m - 3.4m 12 pole structure", tags: ["Enclosed", "Lifestyle", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-3-bay-enclosed" },
  { id: 9, title: "Farm Shed 4 Bay Enclosed", bayWidth: "4.5 m", specs: "9 m x 3.9 - 3 m · 15 Poles", desc: "Lifestyle Shed | 4 Bay Mono Pitch | 9m x 18m Depth: 9m | Bay width: 4.5m | Height: 3m - 3.9m 15 pole structure", tags: ["Enclosed", "Lifestyle", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-4-bay-enclosed" },
  { id: 10, title: "Farm Shed 5 Bay Gable", bayWidth: "6 m", specs: "15 m x 4 - 5 m · 18 Poles", desc: "Farm Shed | 5 Bay Gable | 15m x 30m Depth: 15m | Bay width: 6m | Height: 4m - 5m 18 pole structure", tags: ["Gable Roof"], price: "250", oldPrice: null, slug: "farm-shed-5-bay-gable" },
  { id: 11, title: "Farm Shed 6 Bay Gable Clearspan", bayWidth: "6 m", specs: "15 m x 4 - 5 m · 14 Poles", desc: "Farm Shed | 6 Bay Gable Clearspan | 15m x 36m Depth: 15m | Bay width: 6m | Height: 4m - 5m 14 pole structure | NuSpan clearspan rafters", tags: ["Clearspan", "Gable Roof"], price: "250", oldPrice: null, slug: "farm-shed-6-bay-gable-clearspan" },
  { id: 12, title: "Farm Shed 7 Bay MonoPitch", bayWidth: "6 m", specs: "9 m x 4 - 4.8 m · 24 Poles", desc: "Lifestyle Shed | 7 Bay Mono Pitch | 9m x 42m Depth: 9m | Bay width: 6m | Height: 4m - 4.8m 24 pole structure", tags: ["Enclosed", "Lifestyle", "Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-7-bay-monopitch" },
  { id: 13, title: "Farm Shed 2 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 6 Poles", desc: "Farm Shed | 2 Bay | 6m x 7.2m Bay width: 3.6m | Height: 3m - 3.6m | Depth: 6m 9 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-2-bay" },
  { id: 14, title: "Farm Shed 3 Bay", bayWidth: "3.6 m", specs: "10.8 m x 6 m x 3 - 3.6 m · 12 Poles", desc: "Farm Shed | 3 Bay | 6m x 10.8m Bay width: 3.6m | Height: 3m – 3.6m | Depth: 6m 12 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-3-bay" },
  { id: 15, title: "Farm Shed 4 Bay", bayWidth: "3.6 m", specs: "6 m x 3 – 3.6 m · 15 Poles", desc: "Farm Shed | 4 Bay | 6m x 14.4m Bay width: 3.6m | Height: 3m – 3.6m | Depth: 6m 15 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-4-bay" },
  { id: 16, title: "Farm Shed 5 Bay", bayWidth: "3.6 m", specs: "6 m x 3 - 3.6 m · 18 Poles", desc: "Farm Shed | 5 Bay | 6m x 18m Depth: 6m | Bay width: 3.6m | Height: 3m - 3.6m 18 pole structure", tags: ["Mono Pitch"], price: "250", oldPrice: null, slug: "farm-shed-5-bay" }
];

const filters = ["All Sheds", "Calving Barn", "Clearspan", "Enclosed", "Gable Roof", "Lifestyle", "Mono Pitch"];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All Sheds");

  // Filtering Logic
  const filteredSheds = shedsData.filter(shed => 
    activeFilter === "All Sheds" || shed.tags.includes(activeFilter)
  );

  return (
    <main className="min-h-screen bg-[#F9F8F4]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[450px] md:h-[550px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero-section.jpg" 
            alt="Farm shed wide view" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        {/* Left Aligned Big Text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 mt-12">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-md leading-[1.1] mb-4 font-serif">
            Design<br />Done<br />Right.
          </h1>
          <p className="text-white text-lg md:text-xl font-medium drop-shadow-md">
            All the engineering. None of the stuffing around.
          </p>
        </div>
      </section>

      {/* 2. INFORMATION SECTION */}
      <section className="bg-white py-16 px-6 lg:px-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-3">
            <h2 className="text-[#A67C52] font-bold text-xl uppercase tracking-wide leading-tight mb-1">
              MS ENGINEERING
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900">
              Farm Sheds
            </h3>
          </div>

          <div className="md:col-span-5 space-y-6 text-gray-800">
            <div>
              <p className="font-bold text-lg text-gray-900">Simple, Natural, Built to Last.</p>
              <p className="leading-relaxed">
                Timeless design, tough build. This is the kind of structure you only buy once.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                Use them for calf shelters, feed storage, equipment cover, or general farm utility. These engineered designs are practical, durable, and structurally sound.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6 text-gray-800">
            <div>
              <p className="font-bold text-lg text-gray-900">Expert Engineering Plans.</p>
              <p className="leading-relaxed">
                Structural design and material takeoffs provided. A smart solution without delays or surprises.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <span className="font-bold">Available services:</span> Preliminary design, detailed pricing plans, and quantity material takeoffs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC SHEDS CATEGORIES & GRID SECTION */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        
        {/* Filter Navigation Bar */}
        <div className="bg-white rounded-full shadow-sm border border-gray-200 p-2 flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                activeFilter === filter 
                  ? "bg-[#5A4A3B] text-white shadow-md"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 16 Sheds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSheds.map((shed) => (
            <div 
              key={shed.id}
              className="bg-white rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow"
            >
              {/* Image Area - Updated to match public folder .webp format */}
              <Link href={`/sheds/${shed.slug}`} className="relative h-56 w-full bg-gray-200 block overflow-hidden group">
                <Image src={`/${shed.id}.webp`} alt={shed.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/sheds/${shed.slug}`}>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2 hover:text-[#0F7A4D] transition-colors">{shed.title}</h3>
                </Link>
                
                <p className="text-gray-600 mb-1 font-medium">Bay Width: <span className="font-normal">{shed.bayWidth}</span></p>
                <p className="text-gray-600 mb-4">{shed.specs}</p>
                
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {shed.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {shed.tags.map((tag, index) => (
                    <span key={index} className="border border-[#E5E5E5] text-[#8B8B8B] bg-[#FDFDFD] text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

{/* Price (NZD) and View Link Section */}
                <div className="pt-4 border-t border-gray-100 mt-auto flex items-end justify-between">
                  <div>
                    {/* New Design Package Label */}
                    <div className="text-[10px] text-[#0F7A4D] font-bold uppercase tracking-widest mb-1">
                      Design Package
                    </div>
                    <div className="flex items-baseline">
                      {shed.oldPrice && (
                        <span className="text-gray-400 line-through text-sm mr-2 font-medium">{shed.oldPrice} NZD</span>
                      )}
                      <span className="text-2xl font-extrabold text-gray-900">{shed.price} NZD</span>
                      
                    </div>
                  </div>
                  <Link href={`/sheds/${shed.slug}`} className="text-[#0F7A4D] font-bold text-sm hover:underline flex items-center mb-1">
                    View <span className="ml-1">→</span>
                  </Link>
                </div>              </div>
            </div>
          ))}
        </div>
        
        {filteredSheds.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No sheds found in this category.</p>
            <button onClick={() => setActiveFilter("All Sheds")} className="mt-4 text-[#0F7A4D] font-bold underline">
              View All Sheds
            </button>
          </div>
        )}
      </section>

      {/* ========================================= */}
      {/* NEW SECTION: EVERY PACKAGE INCLUDES */}
      {/* ========================================= */}
      <section className="bg-[#F9F8F4] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-[#8B7355] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Every Material Takeoff Includes
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D3B26]">
              All the Materials. None of the Stuffing Around.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <Check className="w-5 h-5 text-gray-800 mb-4 stroke-[2.5]" />
              <h3 className="text-[#0D3B26] text-xl font-bold mb-2">All Timber & Poles</h3>
              <p className="text-gray-500 text-sm">H5 treated NZ timber poles and framing, rafters, and purlins.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <Check className="w-5 h-5 text-gray-800 mb-4 stroke-[2.5]" />
              <h3 className="text-[#0D3B26] text-xl font-bold mb-2">Roofing & Cladding</h3>
              <p className="text-gray-500 text-sm">Corrugated zinc roofing and complete wall cladding schedules.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <Check className="w-5 h-5 text-gray-800 mb-4 stroke-[2.5]" />
              <h3 className="text-[#0D3B26] text-xl font-bold mb-2">All Fixings</h3>
              <p className="text-gray-500 text-sm">Galvanised bolts, brackets, screws, nails, and washers.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <Check className="w-5 h-5 text-gray-800 mb-4 stroke-[2.5]" />
              <h3 className="text-[#0D3B26] text-xl font-bold mb-2">Barge Flashings</h3>
              <p className="text-gray-500 text-sm">Complete weather protection and trimming at roof edges.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <Check className="w-5 h-5 text-gray-800 mb-4 stroke-[2.5]" />
              <h3 className="text-[#0D3B26] text-xl font-bold mb-2">Structural Designs</h3>
              <p className="text-gray-500 text-sm">Clear structural drawing-based planning and takeoff documents.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <Check className="w-5 h-5 text-gray-800 mb-4 stroke-[2.5]" />
              <h3 className="text-[#0D3B26] text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-500 text-sm">Quick delivery of engineering plans to get your project moving.</p>
            </div>

          </div>
        </div>
      </section>
      {/* ========================================= */}

    </main>
  );
}