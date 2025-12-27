
import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Elite Kitchens', rate: 250000, unit: 'base', min: '2.5L Base' },
  { name: 'Full Villa Revamp', rate: 1200, unit: 'sqft', min: '₹1,200/sqft' },
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
      <div className="bg-dark-900 rounded-[3rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col md:flex-row glass-morphism-dark">
        <div className="p-14 md:w-2/5 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 bg-black/20">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center text-dark-900 mb-10 shadow-xl shadow-brand-500/20">
              <Calculator size={24} />
            </div>
            <h3 className="text-4xl font-display font-black mb-6 uppercase tracking-tight leading-tight">INVESTMENT <br /><span className="text-brand-500">PLANNER</span></h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">Secure a preliminary budget projection for your luxury renovation. Our estimates reflect the use of premium materials and master-grade labor.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-[9px] font-black uppercase tracking-widest text-brand-500 mb-2">Portfolio Grade</p>
            <p className="text-2xl font-display font-bold">Standard: Elite</p>
          </div>
        </div>
        
        <div className="p-14 md:w-3/5 bg-dark-800/40">
          <div className="space-y-12">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-6">Asset Category</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <button 
                    key={cat.name}
                    onClick={() => setSelected(cat)}
                    className={`px-6 py-4 rounded-2xl text-[11px] font-bold border transition-all uppercase tracking-widest ${
                      selected.name === cat.name ? 'border-brand-500 bg-brand-500/5 text-brand-500 shadow-lg shadow-brand-500/5' : 'border-white/5 hover:border-white/20 text-white/40'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {selected.unit === 'sqft' && (
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-6">Project Area (Sq. Ft.)</label>
                <input 
                  type="range" min="500" max="10000" step="100" value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full accent-brand-500 h-[2px] bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-5 text-[10px] font-black text-white/20 uppercase tracking-widest">
                  <span>500 sq.ft</span>
                  <span className="text-brand-500 bg-brand-500/10 px-4 py-2 rounded-lg">{area} sq.ft</span>
                  <span>10,000 sq.ft</span>
                </div>
              </div>
            )}

            <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Estimated Investment</p>
                <p className="text-5xl font-display font-black text-white tracking-tighter">₹{calculateEstimate()}*</p>
              </div>
              <button className="px-10 py-5 bg-brand-500 text-dark-900 rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-brand-500/10 hover:scale-105 transition-all flex items-center gap-4">
                Request Site Audit <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <p className="mt-10 text-[9px] text-white/20 font-black uppercase tracking-widest text-center italic opacity-50">
            *Final investment roadmap provided after technical on-site audit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estimator;
