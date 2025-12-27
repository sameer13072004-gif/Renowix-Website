
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  navigateTo: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600" 
          alt="Luxury Interior Design" 
          className="w-full h-full object-cover opacity-60 scale-100 animate-fade-in"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-16">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 animate-slide-right backdrop-blur-md">
            <MapPin size={12} className="text-brand-500" />
            <span>Noida & Delhi NCR • Elite Estates</span>
          </div>
          
          <h1 className="text-5xl md:text-[88px] leading-[1.05] mb-10 text-white tracking-tight uppercase">
            <span className="font-serif italic lowercase font-normal opacity-80 block mb-2 normal-case">Redefining</span>
            <span className="font-display font-black tracking-[-0.03em] block">MODERN LIVING</span>
            <span className="font-display font-black tracking-[-0.03em] text-brand-500 block">PRECISION.</span>
          </h1>
          
          <p className="text-white/60 text-base md:text-xl max-w-xl mb-14 leading-relaxed font-light tracking-wide">
            Architectural mastery for the NCR's elite. We transform high-end residences with a systems-first approach that guarantees perfection.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={() => navigateTo('contact')}
              className="group relative px-10 py-5 bg-brand-500 text-dark-900 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white shadow-2xl shadow-brand-500/10 flex items-center gap-4"
            >
              Book Site Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigateTo('services')}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md"
            >
              The Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
