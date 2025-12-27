
import React from 'react';

interface PortfolioProps {
  limit?: number;
  navigateTo: (page: any) => void;
}

const projects = [
  { title: "Sector 48 Modernization", category: "Interior Architecture", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", location: "Sector 48, Noida" },
  { title: "JM Florence Penthouse", category: "Kitchen & Bath", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", location: "Greater Noida West" },
  { title: "Ghitorni Estate", category: "Bespoke Culinary", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800", location: "South Delhi" },
  { title: "Sector 128 Luxury Villa", category: "Full Home Transformation", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", location: "Sector 128, Noida" }
];

const Portfolio: React.FC<PortfolioProps> = ({ limit, navigateTo }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-4">Masterpieces</p>
        <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-dark-900 tracking-tight uppercase">
          SIGNATURE <span className="font-serif italic font-normal normal-case opacity-60 heading-fix">Portfolio</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base font-light">
          A collection of elite transformations across the NCR's most prestigious sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {displayedProjects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] mb-6 shadow-xl shadow-slate-200/50">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" />
              <div className="absolute top-6 left-6 px-4 py-2 bg-dark-900/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-brand-500/90 border border-white/10">
                {project.location}
              </div>
            </div>
            <div className="flex justify-between items-end px-2">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-black text-dark-900 group-hover:text-brand-500 transition-colors tracking-tight uppercase">{project.title}</h3>
                <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest mt-1">{project.category}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-dark-900 group-hover:border-dark-900 group-hover:text-white transition-all">
                <div className="text-base">→</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
