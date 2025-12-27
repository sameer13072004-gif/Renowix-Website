
import React, { useEffect, useState, useRef } from 'react';
import { ClipboardCheck, Palette, Layers, Settings, ShieldCheck, Key } from 'lucide-react';

const steps = [
  { icon: ClipboardCheck, title: "Initial Checkup", desc: "We audit your home's structure and check all service lines." },
  { icon: Palette, title: "3D Design", desc: "You get realistic 3D plans and a virtual walkthrough of your home." },
  { icon: Layers, title: "Materials", desc: "Pick premium finishes from our curated brand catalog." },
  { icon: Settings, title: "Building Phase", desc: "Expert teams start work with 24/7 supervision." },
  { icon: ShieldCheck, title: "Final Audit", desc: "A detailed 150-point quality check to ensure zero snags." },
  { icon: Key, title: "Project Handover", desc: "Professional cleaning and full key handover of your new space." }
];

const Process: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.45; // Adjusted to hit dots earlier
      const progress = Math.min(Math.max((triggerPoint - rect.top) / (rect.height - 200), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-dark-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6">The Renowix Method</p>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tight leading-none">Your Project <br /><span className="font-serif italic font-normal normal-case opacity-80">Roadmap</span></h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line - Extended to top dot */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
            <div className="w-full bg-brand-500 transition-all duration-300" style={{ height: `${scrollProgress * 100}%` }}></div>
          </div>

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, idx) => {
              const isActive = scrollProgress >= (idx / (steps.length - 1)) - 0.05;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Connector Node - Centered */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-white/20 md:-translate-x-1/2 z-20">
                    <div className={`absolute inset-0 bg-brand-500 rounded-full transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-0'}`}></div>
                  </div>

                  <div className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} pl-16 md:pl-0`}>
                    <div className="w-14 h-14 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center text-brand-500 mb-5">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-black mb-2 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-white/40 text-xs md:text-sm font-light max-w-sm">{step.desc}</p>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
