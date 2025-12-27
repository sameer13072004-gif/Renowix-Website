
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Loader2, MessageSquare } from 'lucide-react';
import { getProjectConsultation } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the Renowix design specialist. How can I help you transform your home today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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
    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
      <div className="bg-slate-50 p-6 flex items-center gap-4 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center text-slate-900 shadow-lg shadow-brand-500/20">
          <MessageSquare size={24} />
        </div>
        <div>
          <h3 className="font-black text-slate-900 uppercase tracking-tighter text-base">Renowix Designer</h3>
          <p className="text-[10px] text-brand-600 font-black uppercase tracking-[0.2em]">Expert Consultation</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="h-[450px] overflow-y-auto p-8 flex flex-col gap-6 scroll-smooth bg-white"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-brand-50 text-brand-600'
            }`}>
              {msg.role === 'user' ? <User size={18} /> : <Sparkles size={18} />}
            </div>
            <div className={`p-5 rounded-2xl max-w-[85%] text-[15px] leading-relaxed shadow-sm font-medium ${
              msg.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl rounded-tl-none animate-pulse flex items-center gap-3 text-slate-500 font-bold italic text-sm">
              <Loader2 className="animate-spin" size={16} />
              Typing...
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me about trends, materials or costs..."
          className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-500 transition-all font-bold text-slate-700"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-brand-500 text-slate-900 p-4 rounded-2xl hover:bg-brand-400 transition-all disabled:opacity-50 shadow-xl shadow-brand-500/20"
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
