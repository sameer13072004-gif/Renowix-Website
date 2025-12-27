
import React from 'react';

const WhatsAppCTA: React.FC = () => {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi Renowix, I'm looking for a renovation in Noida. Can we schedule a quick chat?");
    window.open(`https://wa.me/919211429635?text=${msg}`, '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-10 left-6 md:left-10 z-[60] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-white">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.491 1.2.533 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.177.211-.077.383.1.173.443.731.948 1.18.652.58 1.201.759 1.374.846.173.087.275.072.376-.043.101-.116.434-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
      </svg>
    </button>
  );
};

export default WhatsAppCTA;
