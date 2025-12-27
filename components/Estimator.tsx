
import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Elite Kitchens', rate: 250000, unit: 'base', min: '2.5L Base' },
  { name: 'Full Home Revamp', rate: 1200, unit: 'sqft', min: '₹1,200/sqft' },
  { name: 'Master Woodwork', rate: 1850, unit: 'sqft', min: '₹1,850/sqft' },
  { name: 'Premium Flooring', rate: 450, unit: 'sqft', min: '₹450/sqft' },
  { name: 'Designer Bathrooms', rate: 180000, unit: 'base', min: '1.8L Base' }
];

const Estimator: React.FC = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [area, setArea] = useState(1500);

  const calculateEstimate = () => {
    if (selected.unit === 'base') return selected.rate.toLocaleString('en-IN');
    return (selected.rate * area).toLocaleString('en-IN');
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-dark-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col md:flex-row glass-morphism-dark">
        <div className="p-8 md:p-12 md:w-2/5 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 bg-black/20">
          <div>
            <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center text-dark-900 mb-8 shadow-lg shadow-brand-500/20">
              <Calculator size={20} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black mb-4 uppercase tracking-tight leading-tight">INVESTMENT <br /><span className="text-brand-500">PLANNER</span></h3>
            <p className="text-white/40 text-[13px] leading-relaxed font-light">Get a quick estimate for your luxury renovation. Our pricing reflects elite materials and master craftsmanship standard in Renowix projects.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-[8px] font-black uppercase tracking-widest text-brand-500 mb-1">Portfolio Grade</p>
            <p className="text-xl font-display font-bold">Standard: Elite</p>
          </div>
        </div>
        
        <div className="p-8 md:p-12 md:w-3/5 bg-dark-800/40">
          <div className="space-y-8 md:space-y-10">
            <div>
              <label className="text-[9px] font-black uppercase tracking-widest text-white/20 block mb-4">Service Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button 
                    key={cat.name}
                    onClick={() => setSelected(cat)}
                    className={`px-4 py-3.5 rounded-xl text-[10px] font-bold border transition-all uppercase tracking-widest ${
                      selected.name === cat.name ? 'border-brand-500 bg-brand-500/5 text-brand-500' : 'border-white/5 text-white/40 hover:text-white/70'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {selected.unit === 'sqft' && (
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-white/20 block mb-4">Project Area (Sq. Ft.)</label>
                <input 
                  type="range" min="500" max="10000" step="100" value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full accent-brand-500 h-[1px] bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-3 text-[8px] font-black text-white/20 uppercase tracking-widest">
                  <span>500 sq.ft</span>
                  <span className="text-brand-500">{area} sq.ft</span>
                  <span>10,000 sq.ft</span>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">Estimated Investment</p>
                <p className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter">₹{calculateEstimate()}*</p>
              </div>
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-dark-900 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center justify-center gap-3">
                Site Audit <ArrowRight size={14} />
              </button>
            </div>
          </div>
          <p className="mt-8 text-[8px] text-white/10 font-black uppercase tracking-widest text-center italic">
            *Final quote shared after detailed on-site survey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estimator;
