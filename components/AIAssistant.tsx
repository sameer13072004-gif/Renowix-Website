
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, X, MessageSquareQuote } from 'lucide-react';
import { getProjectConsultation } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm the design consultant here at Renowix. How can I help with your property today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);
    const response = await getProjectConsultation(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[60] flex flex-col items-end">
      {showCallout && !isOpen && (
        <div className="relative bg-white px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 mb-4 animate-fade-in max-w-[200px] md:max-w-xs">
          <button 
            onClick={(e) => { e.stopPropagation(); setShowCallout(false); }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <X size={10} className="text-slate-500" />
          </button>
          <p className="text-xs font-bold text-slate-800 leading-tight">
            Hi, I am your design assistant. Chat with me!
          </p>
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
        </div>
      )}

      {isOpen && (
        <div className="w-[320px] md:w-[380px] h-[480px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col overflow-hidden mb-6 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-dark-900 p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-dark-900">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest">Renowix Advisor</h3>
                <p className="text-[8px] text-brand-500 font-bold uppercase tracking-widest">Consultant • Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' ? 'bg-dark-900 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl border border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-bold">
                  <Loader2 className="animate-spin" size={12} /> Typing...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 font-bold"
            />
            <button onClick={handleSend} className="bg-brand-500 p-3 rounded-xl text-dark-900">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => {setIsOpen(!isOpen); setShowCallout(false);}}
        className="w-14 h-14 md:w-16 md:h-16 bg-dark-900 text-brand-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all border-4 border-white"
      >
        {isOpen ? <X size={24} /> : <MessageSquareQuote size={28} />}
      </button>
    </div>
  );
};

export default AIAssistant;
