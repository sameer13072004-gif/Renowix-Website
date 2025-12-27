
import React from 'react';
import { Calendar, PhoneCall } from 'lucide-react';

interface MobileStickyBarProps {
  navigateTo: (page: any) => void;
}

const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ navigateTo }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-dark-900/90 backdrop-blur-xl border-t border-white/10 p-5 z-50 flex gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <button 
        onClick={() => navigateTo('contact')}
        className="flex-[1.5] bg-brand-500 text-dark-900 py-4.5 rounded-2xl flex items-center justify-center gap-4 font-black text-[11px] uppercase tracking-widest shadow-xl shadow-brand-500/10"
      >
        <Calendar size={18} strokeWidth={2.5} /> Site Audit
      </button>
      <a 
        href="tel:+919211429635"
        className="flex-1 bg-white/5 border border-white/10 text-white py-4.5 rounded-2xl flex items-center justify-center gap-4 font-black text-[11px] uppercase tracking-widest"
      >
        <PhoneCall size={18} strokeWidth={2.5} /> Call
      </a>
    </div>
  );
};

export default MobileStickyBar;
