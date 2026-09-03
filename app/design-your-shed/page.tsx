"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { CheckCircle, UploadCloud, ArrowRight } from "lucide-react";

function ShedForm() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

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
  const [isSuccess, setIsSuccess] = useState(false);

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
        setIsSuccess(true);
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

  // Modern Figma-style input classes
  const inputClassName = "w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 bg-slate-50 hover:bg-white placeholder-slate-400 font-medium shadow-sm";
  const labelClassName = "block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 ml-1";

  // SUCCESS SCREEN UI (Premium Slate/Blue Theme)
  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto p-10 md:p-16 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-[3rem] my-20 text-center border border-slate-100">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Enquiry Submitted!</h2>
        <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Thank you for reaching out to MS Engineering Designs. Our team has received your detailed project requirements and will get back to you shortly with the next steps.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)] transition-all hover:shadow-[0_8px_25px_-6px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
          <span className="relative z-10 flex items-center gap-2">Return to Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
        </button>
      </div>
    );
  }

  // MAIN FORM UI
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-16 bg-white shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)] rounded-[3rem] my-10 border border-slate-100">
      
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Project Enquiry
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">Design Your Shed.</h1>
        <p className="text-slate-500 text-lg">Provide your precise requirements below. The more details you share, the faster we can draft your structural plans.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">

        {/* ================= 1. CONTACT DETAILS ================= */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-200 tracking-tight">1. Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClassName}>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClassName} placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className={labelClassName}>Company / Farm Name</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClassName} placeholder="e.g. John's Farm" />
            </div>
            <div>
              <label className={labelClassName}>Email Address *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClassName} placeholder="your@email.com" />
            </div>
            <div>
              <label className={labelClassName}>Phone Number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={inputClassName} placeholder="e.g. 021 123 4567" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClassName}>Full Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street, City, Region" className={inputClassName} />
            </div>
          </div>
        </div>

        {/* ================= 2. PROJECT REQUIREMENTS ================= */}
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-200 tracking-tight">2. Project Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className={labelClassName}>Service Required</label>
              <input type="text" name="serviceType" value={formData.serviceType} onChange={handleChange} placeholder="Pricing plan / Prelim design" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Construction Type</label>
              <input type="text" name="constructionType" value={formData.constructionType} onChange={handleChange} placeholder="e.g. Timber or Steel" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Shed Category</label>
              <input type="text" name="shedCategory" value={formData.shedCategory} onChange={handleChange} placeholder="e.g. Farm Shed 6 Bay" className={inputClassName} />
            </div>
          </div>

          {/* Dimensions */}
          <h3 className="text-lg font-black text-slate-900 mb-5">Dimensions & Sizing</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div>
              <label className={labelClassName}>Length</label>
              <input type="text" name="length" value={formData.length} onChange={handleChange} placeholder="e.g. 21.6m" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Width</label>
              <input type="text" name="width" value={formData.width} onChange={handleChange} placeholder="e.g. 6m" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Bays</label>
              <input type="text" name="bays" value={formData.bays} onChange={handleChange} placeholder="e.g. 6" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Bay Spacing</label>
              <input type="text" name="baySpacing" value={formData.baySpacing} onChange={handleChange} placeholder="e.g. 3.6m" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Knee Height</label>
              <input type="text" name="kneeHeight" value={formData.kneeHeight} onChange={handleChange} placeholder="e.g. 3m" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Apex Height</label>
              <input type="text" name="apexHeight" value={formData.apexHeight} onChange={handleChange} placeholder="e.g. 3.6m" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Pitch (°)</label>
              <input type="text" name="pitch" value={formData.pitch} onChange={handleChange} placeholder="e.g. 11°" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Clear Span</label>
              <input type="text" name="clearSpan" value={formData.clearSpan} onChange={handleChange} placeholder="Yes or No" className={inputClassName} />
            </div>
          </div>

          {/* Materials & Layout */}
          <h3 className="text-lg font-black text-slate-900 mb-5">Materials & Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className={labelClassName}>Floor Type</label>
              <input type="text" name="floorType" value={formData.floorType} onChange={handleChange} placeholder="e.g. Concrete or Gravel" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Timber Grade</label>
              <input type="text" name="timberGrade" value={formData.timberGrade} onChange={handleChange} placeholder="LVL or SG8" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Roof Cladding</label>
              <input type="text" name="roofCladding" value={formData.roofCladding} onChange={handleChange} placeholder="e.g. Corrugated Iron" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Wall Cladding</label>
              <input type="text" name="wallCladding" value={formData.wallCladding} onChange={handleChange} placeholder="e.g. Zinc / Timber" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Canopy</label>
              <input type="text" name="canopy" value={formData.canopy} onChange={handleChange} placeholder="Optional canopy length" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Overhang</label>
              <input type="text" name="overhang" value={formData.overhang} onChange={handleChange} placeholder="e.g. 500mm" className={inputClassName} />
            </div>
          </div>

          {/* Site Specifics (Blue Tinted Bento) */}
          <h3 className="text-lg font-black text-slate-900 mb-5">Site Engineering Specifics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100/50">
            <div>
              <label className={labelClassName}>Site Elevation</label>
              <input type="text" name="siteElevation" value={formData.siteElevation} onChange={handleChange} placeholder="e.g. 250m" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Wind Zone</label>
              <input type="text" name="windZone" value={formData.windZone} onChange={handleChange} placeholder="e.g. High / Very High" className={inputClassName} />
            </div>
            <div>
              <label className={labelClassName}>Importance Level</label>
              <input type="text" name="importanceLevel" value={formData.importanceLevel} onChange={handleChange} placeholder="e.g. Level 1" className={inputClassName} />
            </div>
          </div>

          {/* Attachments & Comments */}
          <div className="space-y-8">
            <div>
              <label className={labelClassName}>Additional Comments / Context</label>
              <textarea name="additionalComments" rows={4} value={formData.additionalComments} onChange={handleChange} placeholder="Any other specific requirements..." className={inputClassName}></textarea>
            </div>
            
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center hover:border-blue-500 hover:bg-blue-50/30 transition-colors group">
              <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-blue-500 mx-auto mb-4 transition-colors" />
              <label className="block text-sm font-bold text-slate-900 mb-3">Upload Attachments (Images, PDFs, Plans)</label>
              <input type="file" name="attachment" accept=".pdf, .jpg, .jpeg, .png" multiple className="mx-auto block text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all cursor-pointer" />
              <p className="text-xs font-medium text-slate-400 mt-4">Accepted formats: JPG, PNG, PDF. Max size: 5MB.</p>
            </div>
          </div>
        </div>

        {/* Submit Button (Giant Pill) */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`group relative flex items-center justify-center gap-2 w-full text-white font-bold py-6 rounded-full shadow-[0_10px_30px_-10px_rgba(15,23,42,0.5)] transition-all overflow-hidden text-sm uppercase tracking-widest ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1'}`}
        >
          {!isSubmitting && <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>}
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? 'Submitting Details...' : 'Submit Final Requirements'}
            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </span>
        </button>
      </form>
    </div>
  );
}

export default function DesignYourShedPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F8] py-12 px-4 selection:bg-blue-600 selection:text-white">
      <Suspense fallback={<div className="text-center py-20 font-bold text-slate-400 tracking-widest uppercase">Loading form...</div>}>
        <ShedForm />
      </Suspense>
    </main>
  );
}