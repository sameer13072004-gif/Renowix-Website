
import React from 'react';
import { Ruler, Compass, PenTool, Layout, Layers, HardHat } from 'lucide-react';

const team = [
  { name: "Sameer Qureshi", title: "Founder & Chief Strategist", bio: "Architect of the Renowix systems philosophy, ensuring every project follows elite global standards.", icon: Compass },
  { name: "Ar. Tuba Javed", title: "Lead Architect & Design Head", bio: "Technical visionary translating high-end aspirations into structural and aesthetic reality.", icon: PenTool },
  { name: "Naushad Khan", title: "Head of Site Operations", bio: "Disciplined veteran managing elite construction teams with uncompromising timeline adherence.", icon: HardHat },
  { name: "Ashu Qureshi", title: "Chief Solution Consultant", bio: "Expert in structural forensics and environmental design roadmaps for high-value properties.", icon: Ruler },
  { name: "Zafar Ali", title: "Master Craftsman", bio: "Ensures furniture-grade joinery and woodwork finishes beyond traditional contractor standards.", icon: Layers },
  { name: "Kashif Khan", title: "Head of Digital Experience", bio: "Engineers the seamless client journey, integrating high-tech tracking with luxury service.", icon: Layout }
];

const Team: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6">The Council</p>
          <h2 className="text-3xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">Meet The <span className="font-serif italic font-normal normal-case opacity-80 heading-fix">Experts</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {team.map((member, i) => (
            <div key={i} className="group p-8 md:p-10 rounded-[2rem] bg-dark-800/40 border border-white/5 hover:border-brand-500/20 transition-all duration-700 glass-morphism-dark">
              <div className="w-16 h-16 rounded-[1.25rem] bg-brand-500/10 border border-brand-500/20 text-brand-500 flex items-center justify-center mb-8 group-hover:bg-brand-500 group-hover:text-dark-900 transition-all">
                <member.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-black text-white mb-1 tracking-tight uppercase">{member.name}</h3>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-brand-500 mb-6">{member.title}</p>
              <p className="text-white/40 text-[13px] leading-relaxed font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
