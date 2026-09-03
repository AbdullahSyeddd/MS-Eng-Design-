import Link from "next/link";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react"; 

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F8] py-20 px-4 md:px-6 selection:bg-blue-600 selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Reach Out To Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
            Contact Us.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about our structural designs, pricing plans, or material takeoffs? 
            Get in touch with our engineering team today.
          </p>
        </div>

        {/* Contact Info Cards (Bento Grid Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Email Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Email Us</h3>
            <p className="text-slate-500 mb-6 text-sm font-medium leading-relaxed">We aim to respond to all engineering inquiries within 24 hours.</p>
            <a href="mailto:msengineeringdesigns@gmail.com" className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors mt-auto">
              msengineeringdesigns@gmail.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Location</h3>
            <p className="text-slate-500 mb-6 text-sm font-medium leading-relaxed">Proudly providing design structures for farms across the country.</p>
            <p className="text-slate-900 font-black text-lg tracking-tight mt-auto">
              New Zealand
            </p>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Hours</h3>
            <p className="text-slate-500 mb-6 text-sm font-medium leading-relaxed">Our engineering team is available during standard business hours.</p>
            <p className="text-slate-900 font-black text-lg tracking-tight mt-auto">
              Mon - Fri, 9am - 5pm
            </p>
          </div>
        </div>

        {/* Big CTA Section (Premium Slate Style) */}
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to start your project?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Skip the back-and-forth. Submit your exact shed requirements directly to our team, and we'll get started on your preliminary design and material takeoff.
            </p>
            <Link 
              href="/design-your-shed"
              className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-5 px-10 rounded-full shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] transition-all hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
                Go to Design Form <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          
          {/* Decorative Background Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        </div>

      </div>
    </main>
  );
}