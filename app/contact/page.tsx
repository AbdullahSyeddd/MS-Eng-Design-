import Link from "next/link";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react"; // Ensure lucide-react is installed

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-[#8B7355] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Reach Out To Us
          </h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D3B26] mb-6">
            Contact MS Engineering Designs
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our structural designs, pricing plans, or material takeoffs? 
            Get in touch with our engineering team today.
          </p>
        </div>

        {/* Contact Info Cards (No Phone Number Included) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F4F6ED] rounded-full flex items-center justify-center mb-6 text-[#0F7A4D]">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 mb-4 text-sm">We aim to respond to all engineering inquiries within 24 hours.</p>
            <a href="mailto:info@msengineeringdesigns.co.nz" className="text-[#0F7A4D] font-bold text-lg hover:underline transition-all">
              info@msengineeringdesigns.co.nz
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F4F6ED] rounded-full flex items-center justify-center mb-6 text-[#0F7A4D]">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-500 mb-4 text-sm">Proudly providing design structures for farms across the country.</p>
            <p className="text-[#0D3B26] font-bold text-lg">
              New Zealand
            </p>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F4F6ED] rounded-full flex items-center justify-center mb-6 text-[#0F7A4D]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-500 mb-4 text-sm">Our engineering team is available during standard business hours.</p>
            <p className="text-[#0D3B26] font-bold text-lg">
              Mon - Fri, 9am - 5pm
            </p>
          </div>
        </div>

        {/* Big CTA Section (Redirects to Design Your Shed) */}
        <div className="bg-[#0D3B26] rounded-3xl p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-[#E2E8D5] text-lg mb-10 max-w-2xl mx-auto">
              Skip the back-and-forth. Submit your exact shed requirements directly to our team, and we'll get started on your preliminary design and material takeoff.
            </p>
            <Link 
              href="/design-your-shed"
              className="inline-flex items-center justify-center gap-3 bg-[#0F7A4D] hover:bg-[#0B5C3A] text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-lg"
            >
              Go to Design Your Shed Form <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          
          {/* Decorative Background Glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0F7A4D] opacity-40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>

      </div>
    </main>
  );
}