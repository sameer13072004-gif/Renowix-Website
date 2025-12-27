
import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-6 text-slate-900 leading-[1] tracking-tight uppercase">
            Let's Start <br /><span className="gold-gradient-text italic">Creating.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed font-medium tracking-wide">
            C32, Sector 51, Noida. Book a consultation or call us directly to start your home transformation.
          </p>

          <div className="space-y-5 md:space-y-6">
            <a href="mailto:info@renowix.in" className="flex items-center gap-5 md:gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-lg group hover:border-brand-500/20 transition-all">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-brand-600 font-extrabold uppercase tracking-[0.3em] text-[8px] mb-1">Send an Inquiry</p>
                <p className="text-base md:text-lg font-bold text-slate-900 tracking-tight">info@renowix.in</p>
              </div>
            </a>
            <a href="tel:+919211429635" className="flex items-center gap-5 md:gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-lg group hover:border-brand-500/20 transition-all">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-brand-600 font-extrabold uppercase tracking-[0.3em] text-[8px] mb-1">Direct Hotline</p>
                <p className="text-base md:text-lg font-bold text-slate-900 tracking-tight">+91 92114 29635</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-2xl relative">
          <h3 className="text-xl font-display font-extrabold mb-8 text-slate-900 uppercase tracking-tight">Book A Site Audit</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 px-4 py-3 focus:outline-none transition-all font-bold text-slate-700" placeholder="Your Name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Phone</label>
                <input type="tel" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 px-4 py-3 focus:outline-none transition-all font-bold text-slate-700" placeholder="98765 43210" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Property Type</label>
              <select className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 px-4 py-3 focus:outline-none transition-all font-bold text-slate-700 appearance-none">
                <option>2BHK Apartment</option>
                <option>3BHK Apartment</option>
                <option>Luxury Villa</option>
                <option>Kitchen Only</option>
                <option>Commercial Space</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Message (Optional)</label>
              <textarea rows={2} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 px-4 py-3 focus:outline-none transition-all font-bold text-slate-700 resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button className="w-full py-4 bg-slate-900 text-brand-500 font-extrabold uppercase tracking-[0.25em] rounded-xl hover:bg-brand-500 hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3 mt-4">
              Request site survey <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
