
import React, { useEffect, useState, useRef } from 'react';
import { ClipboardCheck, Palette, Layers, Settings, ShieldCheck, Key } from 'lucide-react';

const steps = [
  { 
    icon: ClipboardCheck, 
    title: "Forensic Site Audit", 
    bullets: ["Structural Integrity Assessment", "Spatial Potential Mapping", "Service Line Verification"] 
  },
  { 
    icon: Palette, 
    title: "High-Fidelity 3D Design", 
    bullets: ["Photorealistic Visuals", "360° Virtual Walkthroughs", "Lighting Simulation"] 
  },
  { 
    icon: Layers, 
    title: "Curation & Selection", 
    bullets: ["Premium Finish Sourcing", "Durability Benchmarking", "Global Brand Catalog"] 
  },
  { 
    icon: Settings, 
    title: "Elite Execution", 
    bullets: ["Milestone-Based Tracking", "24/7 Site Supervision", "Modular Precision Fitting"] 
  },
  { 
    icon: ShieldCheck, 
    title: "Master Quality Audit", 
    bullets: ["150-Point Final Inspection", "Zero-Snag Guarantee", "Structural Certification"] 
  },
  { 
    icon: Key, 
    title: "Designer Handover", 
    bullets: ["Medical-Grade Sanitation", "Full Designer Walkthrough", "Maintenance Handover"] 
  }
];

const Process: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through this section
      const totalHeight = rect.height;
      const visibleFromTop = windowHeight - rect.top;
      const progress = Math.min(Math.max(visibleFromTop / totalHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-dark-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6">The Renowix Method</p>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tight">Systematic <span className="font-serif italic font-normal normal-case opacity-80">Transformation</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto font-light text-lg">Engineering precision meet high-end aesthetics. Our roadmap ensures a frictionless journey from survey to keys.</p>
        </div>
        
        <div className="relative">
          {/* Animated Scroll Line */}
          <div className="hidden md:block absolute left-[31px] top-0 bottom-0 w-[2px] bg-white/5">
            <div 
              className="w-full bg-brand-500 transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-start gap-6">
                  {/* Separate Number and Icon */}
                  <div className="relative flex flex-col items-center">
                    <div className="text-[11px] font-black text-white/20 mb-4 tracking-widest font-display">0{idx + 1}</div>
                    <div className="w-16 h-16 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-brand-500 group-hover:text-dark-900 transition-all duration-700 shadow-2xl">
                      <step.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex-1 pt-8">
                    <h3 className="text-lg font-display font-black mb-6 uppercase tracking-widest group-hover:text-brand-500 transition-colors">{step.title}</h3>
                    <ul className="space-y-3">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-white/40 text-[13px] font-medium flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-brand-500/40"></div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
