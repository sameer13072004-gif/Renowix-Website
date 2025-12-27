
import React from 'react';

const partners = [
  "Asian Paints", "CenturyPly", "Kohler", "Havells", "Kajaria", "Jaquar", "Hafele", "Somany", "Panasonic"
];

const Partners: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-20 border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300 mb-4">Authorized Infrastructure Network</p>
          <div className="w-20 h-[1px] bg-brand-500 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {partners.map((p) => (
            <div key={p} className="px-6 py-4 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:border-brand-500/20 transition-all duration-500 cursor-default group">
              <span className="text-base md:text-lg font-display font-black text-slate-300 group-hover:text-dark-900 transition-colors tracking-tighter uppercase">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
