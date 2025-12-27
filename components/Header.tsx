
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
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button onClick={() => navigateTo('home')} className="flex items-center gap-4 group">
          <img src={LOGO_URL} alt="Renowix Logo" className="h-9 md:h-10 w-auto object-contain brightness-0 group-hover:brightness-100 transition-all" />
          <span className={`text-xl font-black tracking-[-0.05em] ${isScrolled ? 'text-dark-900' : 'text-white'} uppercase`}>
            RENOWIX
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => navigateTo(link.id)} 
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
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
            className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-2xl ${
              isScrolled 
                ? 'bg-brand-500 text-dark-900 shadow-brand-500/10 hover:bg-dark-900 hover:text-white' 
                : 'bg-white text-dark-900 hover:bg-brand-500'
            }`}
          >
            Book Site Audit <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-dark-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 py-16 px-10 flex flex-col gap-10 shadow-2xl border-t border-white/5 h-screen animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => { navigateTo(link.id); setMobileMenuOpen(false); }} 
              className={`text-5xl font-display font-black text-left uppercase tracking-tighter ${currentPage === link.id ? 'text-brand-500' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }}
            className="w-full py-6 bg-brand-500 text-dark-900 rounded-2xl font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-4 mt-8"
          >
            BOOK SITE AUDIT <ArrowUpRight size={20} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
