"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ShedForm() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Removed default values so inputs are empty by default for typing
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    address: "",
    
    serviceType: "", 
    shedCategory: "",
    constructionType: "", 
    
    length: "",
    width: "",
    bays: "",
    baySpacing: "",
    kneeHeight: "", 
    apexHeight: "", 
    pitch: "",
    clearSpan: "", 
    
    floorType: "", 
    timberGrade: "", 
    roofCladding: "",
    wallCladding: "",
    canopy: "",
    overhang: "",
    
    siteElevation: "",
    windZone: "", 
    importanceLevel: "", 
    
    additionalComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      const formattedCategory = categoryParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setFormData((prev) => ({ ...prev, shedCategory: formattedCategory }));
    }
  }, [categoryParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submitData = new FormData();
    
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    const formElement = e.target as HTMLFormElement;
    const fileInput = formElement.elements.namedItem('attachment') as HTMLInputElement;
    
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      submitData.append('attachment', fileInput.files[0]);
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData, 
      });

      const result = await response.json();
      
      if (response.ok) {
        alert("Success! Your detailed enquiry has been submitted.");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common classes for all inputs to fix the visibility issue (added text-gray-900, bg-white, placeholder-gray-400)
  const inputClassName = "w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F7A4D] outline-none transition-shadow text-gray-900 bg-white placeholder-gray-400";

  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-12 bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] rounded-3xl my-10 border border-gray-100">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D3B26] mb-4">Design Your Shed</h1>
        <p className="text-gray-600 text-lg">Please provide your precise project requirements below. Include any reference attachments.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* ================= 1. CONTACT DETAILS ================= */}
        <div className="bg-[#F9F8F4] p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#0D3B26] mb-6 border-b border-gray-200 pb-3">1. Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              {/* Removed required */}
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClassName} placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Company / Farm Name</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClassName} placeholder="e.g. John's Farm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
              {/* ONLY EMAIL IS REQUIRED */}
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClassName} placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={inputClassName} placeholder="e.g. 021 123 4567" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street, City, Region" className={inputClassName} />
            </div>
          </div>
        </div>

        {/* ================= 2. PROJECT REQUIREMENTS ================= */}
        <div>
          <h2 className="text-2xl font-bold text-[#0D3B26] mb-6 border-b border-gray-200 pb-3">2. Project Requirements</h2>
          
          {/* General Specs - Selects changed to typing inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
              <input type="text" name="serviceType" value={formData.serviceType} onChange={handleChange} placeholder="Pricing plan / Prelim design" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Construction Type</label>
              <input type="text" name="constructionType" value={formData.constructionType} onChange={handleChange} placeholder="e.g. Timber or Steel" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Shed Category</label>
              <input type="text" name="shedCategory" value={formData.shedCategory} onChange={handleChange} placeholder="e.g. Farm Shed 6 Bay" className={inputClassName} />
            </div>
          </div>

          {/* Dimensions */}
          <h3 className="text-lg font-bold text-[#8B7355] mb-4">Dimensions & Sizing</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Length</label>
              <input type="text" name="length" value={formData.length} onChange={handleChange} placeholder="e.g. 21.6m" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Width</label>
              <input type="text" name="width" value={formData.width} onChange={handleChange} placeholder="e.g. 6m" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Bays</label>
              <input type="text" name="bays" value={formData.bays} onChange={handleChange} placeholder="e.g. 6" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Bay Spacing</label>
              <input type="text" name="baySpacing" value={formData.baySpacing} onChange={handleChange} placeholder="e.g. 3.6m" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Knee/Back Height</label>
              <input type="text" name="kneeHeight" value={formData.kneeHeight} onChange={handleChange} placeholder="e.g. 3m" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Apex/Front Height</label>
              <input type="text" name="apexHeight" value={formData.apexHeight} onChange={handleChange} placeholder="e.g. 3.6m" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pitch (Degrees)</label>
              <input type="text" name="pitch" value={formData.pitch} onChange={handleChange} placeholder="e.g. 11°" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Clear Span</label>
              <input type="text" name="clearSpan" value={formData.clearSpan} onChange={handleChange} placeholder="Yes or No" className={inputClassName} />
            </div>
          </div>

          {/* Materials & Layout */}
          <h3 className="text-lg font-bold text-[#8B7355] mb-4">Materials & Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Floor Type</label>
              <input type="text" name="floorType" value={formData.floorType} onChange={handleChange} placeholder="e.g. Concrete or Gravel" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Timber Grade</label>
              <input type="text" name="timberGrade" value={formData.timberGrade} onChange={handleChange} placeholder="LVL or SG8" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Roof Cladding Type</label>
              <input type="text" name="roofCladding" value={formData.roofCladding} onChange={handleChange} placeholder="e.g. Corrugated Iron" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Wall Cladding Type</label>
              <input type="text" name="wallCladding" value={formData.wallCladding} onChange={handleChange} placeholder="e.g. Zinc / Timber" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Canopy Details</label>
              <input type="text" name="canopy" value={formData.canopy} onChange={handleChange} placeholder="Optional canopy length" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Overhang Details</label>
              <input type="text" name="overhang" value={formData.overhang} onChange={handleChange} placeholder="e.g. 500mm overhang" className={inputClassName} />
            </div>
          </div>

          {/* Site Specifics */}
          <h3 className="text-lg font-bold text-[#8B7355] mb-4">Site Engineering Specifics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-[#F4F6ED] p-6 rounded-2xl border border-[#E2E8D5]">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Site Elevation</label>
              <input type="text" name="siteElevation" value={formData.siteElevation} onChange={handleChange} placeholder="e.g. 250m above sea level" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Wind Zone</label>
              <input type="text" name="windZone" value={formData.windZone} onChange={handleChange} placeholder="e.g. High / Very High" className={inputClassName} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Importance Level</label>
              <input type="text" name="importanceLevel" value={formData.importanceLevel} onChange={handleChange} placeholder="e.g. Level 1" className={inputClassName} />
            </div>
          </div>

          {/* Attachments & Comments */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Additional Comments / Context</label>
              <textarea name="additionalComments" rows={3} value={formData.additionalComments} onChange={handleChange} placeholder="Any other specific requirements..." className={inputClassName}></textarea>
            </div>
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#0F7A4D] transition-colors">
              <label className="block text-sm font-bold text-gray-700 mb-2">Upload Attachments (Images, PDFs, Plans)</label>
              <input type="file" name="attachment" accept=".pdf, .jpg, .jpeg, .png" multiple className="mx-auto block text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#EAF3EF] file:text-[#0F7A4D] hover:file:bg-[#D5E8DF] transition-colors" />
              <p className="text-xs text-gray-400 mt-2">Accepted formats: JPG, PNG, PDF. Maximum file size: 5MB.</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full text-white font-extrabold py-5 rounded-2xl shadow-lg transition-all text-xl ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0F7A4D] hover:bg-[#0B5C3A] hover:-translate-y-1'}`}
        >
          {isSubmitting ? 'Submitting Details...' : 'Submit Final Requirements'}
        </button>
      </form>
    </div>
  );
}

export default function DesignYourShedPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] py-10 px-4">
      <Suspense fallback={<div className="text-center py-20 font-bold text-gray-500">Loading form...</div>}>
        <ShedForm />
      </Suspense>
    </main>
  );
}