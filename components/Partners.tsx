
import React from 'react';

const partners = [
  "Asian Paints", "CenturyPly", "Kohler", "Havells", "Kajaria", "Jaquar", "Hafele", "Somany", "Panasonic"
];

const Partners: React.FC = () => {
  return (
    <div className="bg-white py-16 border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[9px] font-black uppercase tracking-[0.5em] text-slate-300 mb-12">Authorized Premium Infrastructure Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {partners.map((p) => (
            <span key={p} className="text-lg md:text-xl font-display font-bold text-slate-300 hover:text-dark-900 transition-all duration-500 cursor-default tracking-tighter opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
