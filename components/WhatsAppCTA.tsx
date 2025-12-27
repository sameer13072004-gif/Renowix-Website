
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA: React.FC = () => {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi Renowix, I'm looking for a premium renovation in Noida/NCR. I'd like to schedule a survey.");
    window.open(`https://wa.me/919211429635?text=${msg}`, '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </button>
  );
};

export default WhatsAppCTA;
