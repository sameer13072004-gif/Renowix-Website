
import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const LOGO_URL = "https://renowix.in/wp-content/uploads/2025/12/Picsart_25-12-04_19-18-42-905-scaled.png";

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-4 mb-8 group">
              <img src={LOGO_URL} alt="Renowix Logo" className="h-10 md:h-12 w-auto object-contain" />
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                RENOWIX
              </span>
            </button>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-medium text-lg">
              Modern Home Renovation specialized for the unique lifestyles of Noida and Delhi NCR.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-slate-900 transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-[0.25em] mb-8 text-brand-600">Company</h4>
            <ul className="space-y-4 text-slate-600 text-sm font-bold">
              <li><button onClick={() => navigateTo('home')} className="hover:text-brand-500 transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-brand-500 transition-colors">Expertise</button></li>
              <li><button onClick={() => navigateTo('portfolio')} className="hover:text-brand-500 transition-colors">Recent Work</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-brand-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-[0.25em] mb-8 text-brand-600">Headquarters</h4>
            <div className="space-y-6 text-slate-600 text-sm font-bold">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>Sector 62, Noida,<br />Uttar Pradesh 201301</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>+91 98710 55XXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <p>© {new Date().getFullYear()} RENOWIX RENOVATION. CRAFTING MODERNITY.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
