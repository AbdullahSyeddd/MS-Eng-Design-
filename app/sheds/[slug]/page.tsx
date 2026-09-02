import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, PenTool, ClipboardList, AlertTriangle } from "lucide-react"; // Ensure lucide-react is installed

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
  // Graceful fallback in case a slug doesn't match
  const shed = shedsData[params.slug] || shedsData["farm-shed-6-bay"]; 

  return (
    <main className="min-h-screen bg-[#F9F8F4] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[13px] font-bold tracking-widest uppercase text-gray-500 hover:text-[#0F7A4D] transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all Farm Sheds
          </Link>
        </div>

        {/* TOP SECTION: Image & Specs */}
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] p-8 lg:p-12 mb-10 border border-gray-100">
          
          {/* Left: Big Image (.webp dynamic routing) */}
          <div className="lg:w-[55%] flex flex-col justify-center">
            <div className="relative h-[350px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-inner group">
              <Image 
                src={`/${shed.id}.webp`} 
                alt={shed.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
            </div>
          </div>

          {/* Right: Specifications & CTA */}
          <div className="lg:w-[45%] flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0D3B26] mb-6 leading-tight tracking-tight">{shed.name}</h1>
            
            {/* Pricing Area (Updated Label & Currency) */}
            <div className="mb-8 p-6 bg-[#F9F8F4] rounded-2xl border border-gray-100">
              <div className="text-[11px] text-[#8B7355] font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0F7A4D]"></span>
                Design Package
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl text-[#0D3B26] font-black tracking-tighter">{shed.price} NZD</span>
                
              </div>
            </div>

            {/* Spec Table */}
            <div className="space-y-4 border-t border-gray-100 pt-6 mb-8">
              <div className="flex justify-between border-b border-gray-50 pb-3">
                <span className="font-semibold text-gray-800 uppercase text-xs tracking-wider">Length</span>
                <span className="text-[#0D3B26] font-bold">{shed.length}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-3">
                <span className="font-semibold text-gray-800 uppercase text-xs tracking-wider">Depth</span>
                <span className="text-[#0D3B26] font-bold">{shed.depth}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-3">
                <span className="font-semibold text-gray-800 uppercase text-xs tracking-wider">Height</span>
                <span className="text-[#0D3B26] font-bold">{shed.height}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-3">
                <span className="font-semibold text-gray-800 uppercase text-xs tracking-wider">Bay Width</span>
                <span className="text-[#0D3B26] font-bold">{shed.bayWidth}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-3">
                <span className="font-semibold text-gray-800 uppercase text-xs tracking-wider">Structure</span>
                <span className="text-[#0D3B26] font-bold">{shed.poles}</span>
              </div>
            </div>

            {/* Design Enquiry Button */}
            <Link 
              href={`/design-your-shed?category=${params.slug}`}
              className="group relative flex items-center justify-center gap-2 w-full bg-[#0D3B26] text-white font-bold py-5 rounded-2xl shadow-[0_8px_20px_-6px_rgba(13,59,38,0.4)] transition-all hover:shadow-[0_8px_25px_-6px_rgba(15,122,77,0.6)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#0F7A4D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
                Start Your Design Form
              </span>
            </Link>
          </div>
        </div>

        {/* MIDDLE SECTION: Custom Info & PS1 Note */}
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] p-8 lg:p-14 border border-gray-100 mb-16">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0D3B26] mb-4">What's Included in This Package?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                MS Engineering Designs provides highly accurate, structural drawing-based planning tailored to this specific layout.
              </p>
            </div>

            {/* Client's Requested Information (Design & Drafting + Material Take-offs) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              <div className="bg-[#F9F8F4] p-8 rounded-2xl border border-[#E2E8D5] hover:border-[#8B7355] transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <PenTool className="w-6 h-6 text-[#0F7A4D]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0D3B26] mb-3">1. Design & Drafting</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Full structural design with daily drawing deliveries via my in-house drafting team.
                </p>
              </div>

              <div className="bg-[#F9F8F4] p-8 rounded-2xl border border-[#E2E8D5] hover:border-[#8B7355] transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <ClipboardList className="w-6 h-6 text-[#0F7A4D]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0D3B26] mb-3">2. Material Take-offs</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Complete schedules covering all timber members, plus all nails, screws, bolts, and fixings with precise quantities.
                </p>
              </div>

            </div>
            
            {/* Exact Required PS1 Limitation Note */}
            <div className="bg-[#FFF4F4] border border-[#FFA3A3] text-[#B71C1C] p-6 rounded-2xl flex items-start md:items-center gap-4 shadow-sm max-w-3xl mx-auto">
              <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5 md:mt-0" />
              <p className="font-bold text-lg">
                Note: We dont do PS1 ( producer statement 1 )
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Circular Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto pb-10">
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full border-4 border-[#F9F8F4] group-hover:border-[#0F7A4D] transition-colors flex items-center justify-center mb-4 bg-white shadow-sm">
              <span className="text-gray-400 group-hover:text-[#0F7A4D] font-black text-lg transition-colors">PLANS</span>
            </div>
            <h4 className="font-extrabold text-[#0D3B26] mb-2 uppercase tracking-wider text-sm">Clear Designs</h4>
            <p className="text-sm text-gray-500 font-medium px-4">Easy-to-read structural drawings for your builder.</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full border-4 border-[#F9F8F4] group-hover:border-[#0F7A4D] transition-colors flex items-center justify-center mb-4 bg-white shadow-sm">
              <span className="text-gray-400 group-hover:text-[#0F7A4D] font-black text-lg transition-colors">TOUGH</span>
            </div>
            <h4 className="font-extrabold text-[#0D3B26] mb-2 uppercase tracking-wider text-sm">High Durability</h4>
            <p className="text-sm text-gray-500 font-medium px-4">Engineered for high wind zones and snow loading.</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full border-4 border-[#F9F8F4] group-hover:border-[#0F7A4D] transition-colors flex items-center justify-center mb-4 bg-white shadow-sm">
              <span className="text-gray-400 group-hover:text-[#0F7A4D] font-black text-lg transition-colors">EXACT</span>
            </div>
            <h4 className="font-extrabold text-[#0D3B26] mb-2 uppercase tracking-wider text-sm">Material Takeoff</h4>
            <p className="text-sm text-gray-500 font-medium px-4">Precise quantity calculations to avoid wastage.</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full border-4 border-[#F9F8F4] group-hover:border-[#0F7A4D] transition-colors flex items-center justify-center mb-4 bg-white shadow-sm">
              <span className="text-gray-400 group-hover:text-[#0F7A4D] font-black text-lg transition-colors">STRONG</span>
            </div>
            <h4 className="font-extrabold text-[#0D3B26] mb-2 uppercase tracking-wider text-sm">Structural Stability</h4>
            <p className="text-sm text-gray-500 font-medium px-4">Precision-engineered framing for optimal strength.</p>
          </div>
        </div>

      </div>
    </main>
  );
}