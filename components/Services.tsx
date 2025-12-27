
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServicesProps {
  limit?: number;
  navigateTo: (page: any) => void;
}

const services = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    title: "Home Renovation",
    description: "Complete architectural transformations for high-end NCR residences, ensuring a perfect balance of form and function."
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    title: "Kitchen Renovation",
    description: "Modern modular kitchen designs featuring ergonomic storage solutions and premium profile lighting accents."
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    title: "Bathroom Renovation",
    description: "Luxurious spa-grade bathroom renovations with fine Italian marble work and designer sanitary fixtures."
  },
  {
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
    title: "Floor Tiling",
    description: "Precision installation of premium marble, granite, and designer vitrified tiles with flawless joint finishing."
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    title: "False Ceiling",
    description: "Designer POP and Gypsum ceiling work with customized lighting integration for a modern, sophisticated ambiance."
  },
  {
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    title: "Custom Fabrications",
    description: "Tailored metal and glass architectural fabrications designed to elevate modern luxury spaces."
  },
  {
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
    title: "Woodwork",
    description: "Master-class teak woodwork, custom walk-in wardrobes, and bespoke furniture crafted for NCR's elite."
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    title: "Tile Work",
    description: "Intricate wall cladding, backsplash designs, and specialized decorative tile work for superior interior finishes."
  }
];

const Services: React.FC<ServicesProps> = ({ limit, navigateTo }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6 text-slate-900 tracking-tight uppercase">
          OUR <span className="gold-gradient-text">EXPERTISE</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed font-medium tracking-wider">
          Premium home renovation solutions tailored for Noida and Delhi NCR. 
          Uncompromising quality since 2010.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {displayedServices.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-500/20 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-display font-semibold mb-3 text-slate-900 group-hover:text-brand-600 transition-colors uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium tracking-wide">
                {service.description}
              </p>
              <button 
                onClick={() => navigateTo('contact')}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-600 group-hover:gap-4 transition-all"
              >
                Request Details <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
