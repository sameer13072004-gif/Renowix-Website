
import React from 'react';

const team = [
  { name: "Sameer Qureshi", title: "Founder & Chief Strategist", bio: "Architect of the Renowix systems philosophy, ensuring every project follows elite global standards.", icon: "SQ" },
  { name: "Ar. Tuba Javed", title: "Lead Architect & Design Head", bio: "Technical visionary translating high-end aspirations into structural and aesthetic reality.", icon: "TJ" },
  { name: "Naushad Khan", title: "Head of Site Operations", bio: "Disciplined veteran managing elite construction teams with uncompromising timeline adherence.", icon: "NK" },
  { name: "Ashu Qureshi", title: "Chief Solution Consultant", bio: "Expert in structural forensics and environmental design roadmaps for high-value NCR properties.", icon: "AQ" },
  { name: "Zafar Ali", title: "Master Craftsman", bio: "Ensures furniture-grade joinery and woodwork finishes beyond the scope of traditional contractors.", icon: "ZA" },
  { name: "Kashif Khan", title: "Head of Digital Experience", bio: "Engineers the seamless client journey, integrating high-tech tracking with luxury service.", icon: "KK" }
];

const Team: React.FC = () => {
  return (
    <section className="py-32 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-28">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6">The Council</p>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tight">Meet The <span className="font-serif italic font-normal normal-case opacity-80 heading-fix">Experts</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto font-light text-lg">The architectural collective defining Noida's modern skyline.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group p-12 rounded-[2.5rem] bg-dark-800/40 border border-white/5 hover:border-brand-500/20 hover:bg-dark-800 transition-all duration-700 glass-morphism-dark">
              {/* Monotone Placeholder Portrait Styling */}
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-brand-500 font-serif italic font-bold flex items-center justify-center text-3xl mb-10 group-hover:scale-105 transition-transform overflow-hidden relative grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0">
                <span className="relative z-10">{member.icon}</span>
                <div className="absolute inset-0 bg-dark-900/40"></div>
              </div>
              
              <h3 className="text-2xl font-display font-black text-white mb-2 tracking-tight uppercase">{member.name}</h3>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">{member.title}</p>
              <p className="text-white/40 text-sm leading-relaxed font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
