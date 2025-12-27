
import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl md:text-8xl font-display font-extrabold mb-10 text-slate-900 leading-[1] tracking-tight uppercase">
            Let's Start <br /><span className="gold-gradient-text italic">Creating.</span>
          </h2>
          <p className="text-slate-600 text-xl mb-14 leading-relaxed font-medium tracking-wide">
            Whether it's a structural renovation in South Delhi or a modular kitchen in Noida, 
            our specialized team ensures world-class results.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-8 p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-brand-500/40 transition-all group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-brand-600 font-extrabold uppercase tracking-[0.3em] text-[9px] mb-2">Connect with us</p>
                <p className="text-xl font-bold text-slate-900 tracking-tight">hello@renowix.in</p>
              </div>
            </div>
            <div className="flex items-center gap-8 p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-brand-500/40 transition-all group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-slate-900 transition-all">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-brand-600 font-extrabold uppercase tracking-[0.3em] text-[9px] mb-2">Renovation Hotline</p>
                <p className="text-xl font-bold text-slate-900 tracking-tight">+91 98710 55XXX</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-[50px]"></div>
          <h3 className="text-2xl font-display font-extrabold mb-12 text-slate-900 uppercase tracking-tight">Book A Site Visit</h3>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 rounded-t-xl px-6 py-5 focus:outline-none transition-all font-bold text-slate-700" placeholder="Rahul Sharma" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Phone</label>
                <input type="tel" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 rounded-t-xl px-6 py-5 focus:outline-none transition-all font-bold text-slate-700" placeholder="+91 XXXX" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Service Category</label>
              <select className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 rounded-t-xl px-6 py-5 focus:outline-none transition-all font-bold text-slate-700 appearance-none">
                <option>Full Home Transformation</option>
                <option>Modular Kitchen Expert</option>
                <option>Bathroom Renovation</option>
                <option>Woodwork & Fabrication</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">About Your Project</label>
              <textarea rows={4} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-brand-500 rounded-t-xl px-6 py-5 focus:outline-none transition-all resize-none font-bold text-slate-700" placeholder="E.g. I need a 3BHK renovation in Noida..."></textarea>
            </div>
            <button className="group w-full py-6 bg-slate-900 text-brand-500 font-extrabold uppercase tracking-[0.25em] rounded-2xl hover:bg-brand-500 hover:text-slate-900 transition-all shadow-2xl shadow-slate-200 text-xs flex items-center justify-center gap-3">
              Request site survey <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
