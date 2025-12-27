
import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const LOGO_URL = "https://renowix.in/wp-content/uploads/2025/12/Picsart_25-12-04_19-18-42-905-scaled.png";

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-3 mb-6 group">
              <img src={LOGO_URL} alt="Renowix Logo" className="h-10 md:h-11 w-auto object-contain" />
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">RENOWIX</span>
            </button>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium text-base md:text-lg">
              Modern Home Renovation specialized for the unique lifestyles of Noida and Delhi NCR.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-slate-900 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-brand-600 uppercase text-[9px] tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-3 text-slate-600 text-[13px] font-bold">
              <li><button onClick={() => navigateTo('home')} className="hover:text-brand-500 transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-brand-500 transition-colors">Expertise</button></li>
              <li><button onClick={() => navigateTo('portfolio')} className="hover:text-brand-500 transition-colors">Portfolio</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-brand-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-600 uppercase text-[9px] tracking-[0.2em] mb-6">Address</h4>
            <div className="space-y-4 text-slate-600 text-[13px] font-bold">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-500 shrink-0 mt-0.5" />
                <span>C32, Sector 51,<br />Noida, UP 201301</span>
              </div>
              <a href="tel:+919211429635" className="flex items-center gap-3 hover:text-brand-500 transition-colors group">
                <Phone size={16} className="text-brand-500 shrink-0" />
                <span>+91 92114 29635</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 text-center">
          <p>© {new Date().getFullYear()} RENOWIX RENOVATIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="mailto:info@renowix.in" className="hover:text-slate-900 transition-colors">info@renowix.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
