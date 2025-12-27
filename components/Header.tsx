
import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  navigateTo: (page: any) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, navigateTo, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Expertise', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const LOGO_URL = "https://renowix.in/wp-content/uploads/2025/12/Picsart_25-12-04_19-18-42-905-scaled.png";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md py-3 border-b border-slate-100 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button onClick={() => navigateTo('home')} className="flex items-center gap-3 group">
          <img 
            src={LOGO_URL} 
            alt="Renowix Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300" 
          />
          <span className={`text-lg md:text-xl font-black tracking-[-0.05em] ${isScrolled ? 'text-dark-900' : 'text-white'} uppercase`}>
            RENOWIX
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => navigateTo(link.id)} 
              className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all ${
                currentPage === link.id 
                  ? 'text-brand-500' 
                  : (isScrolled ? 'text-slate-500 hover:text-dark-900' : 'text-white/60 hover:text-white')
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => navigateTo('contact')}
            className={`px-7 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${
              isScrolled 
                ? 'bg-brand-500 text-dark-900 hover:bg-dark-900 hover:text-white' 
                : 'bg-white text-dark-900 hover:bg-brand-500'
            }`}
          >
            Book Audit <ArrowUpRight size={12} />
          </button>
        </nav>

        <button className={`md:hidden p-2 ${isScrolled ? 'text-dark-900' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 py-8 px-10 flex flex-col gap-4 shadow-2xl border-t border-white/5 h-screen animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => { navigateTo(link.id); setMobileMenuOpen(false); }} 
              className={`text-lg font-display font-black text-left uppercase tracking-tight ${currentPage === link.id ? 'text-brand-500' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }} className="w-full py-4 bg-brand-500 text-dark-900 rounded-xl font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-3 mt-2">
            BOOK AUDIT <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
