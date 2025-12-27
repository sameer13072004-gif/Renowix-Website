
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Process from './components/Process';
import Team from './components/Team';
import Estimator from './components/Estimator';
import WhatsAppCTA from './components/WhatsAppCTA';
import MobileStickyBar from './components/MobileStickyBar';

type Page = 'home' | 'services' | 'portfolio' | 'contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <div className="page-transition">
          <Hero navigateTo={navigateTo} />
          <Partners />
          
          <section id="services" className="py-24 bg-white reveal">
            <Services limit={4} navigateTo={navigateTo} />
            <div className="mt-16 text-center px-4">
              <button onClick={() => navigateTo('services')} className="px-10 py-4 bg-slate-900 text-brand-500 font-extrabold rounded-full hover:bg-brand-500 hover:text-slate-900 transition-all shadow-xl text-xs uppercase tracking-widest">
                View Specialized Services
              </button>
            </div>
          </section>

          <Process />
          
          <section className="py-24 bg-slate-50 reveal">
            <Estimator />
          </section>

          <section className="py-24 bg-white reveal">
            <Portfolio limit={4} navigateTo={navigateTo} />
          </section>

          <Team />

          <section className="py-24 bg-slate-50 reveal">
             <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 uppercase tracking-tight">Expert <span className="gold-gradient-text">Design Chat</span></h2>
                <p className="text-slate-500 max-w-2xl mx-auto font-medium">Instant architect-level advice for your NCR property.</p>
              </div>
              <AIAssistant />
            </div>
          </section>
        </div>
      );
    }

    switch (currentPage) {
      case 'services':
        return <div className="pt-24"><Services navigateTo={navigateTo} /><div className="py-24"><Contact /></div></div>;
      case 'portfolio':
        return <div className="pt-24"><Portfolio navigateTo={navigateTo} /><div className="py-24"><Contact /></div></div>;
      case 'contact':
        return <div className="pt-24"><Contact /></div>;
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-500 selection:text-slate-900">
      <Header isScrolled={isScrolled} navigateTo={navigateTo} currentPage={currentPage} />
      <main>{renderContent()}</main>
      <Footer navigateTo={navigateTo} />
      <WhatsAppCTA />
      <MobileStickyBar navigateTo={navigateTo} />
    </div>
  );
};

export default App;
