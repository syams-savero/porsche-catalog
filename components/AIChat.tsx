'use client';

import { useState, useEffect, useRef } from 'react'; // Tambah useEffect & useRef
import { X, Send } from 'lucide-react';
import { askPorscheExpert } from '@/app/actions';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChat({ 
  carName, 
  isOpen, 
  onClose 
}: { 
  carName: string; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // 1. Ref untuk elemen paling bawah chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 2. Fungsi untuk scroll ke bawah
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 3. Panggil scroll setiap kali history atau loading berubah
  useEffect(() => {
    scrollToBottom();
  }, [history, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery("");
    setLoading(true);

    const result = await askPorscheExpert(carName, userMsg);

    setHistory(prev => [...prev, { role: 'ai', text: result.reply }]);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[100] w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-zinc-900 p-4 flex justify-between items-center border-b border-zinc-800 shrink-0">
            <div>
              <h3 className="font-bold text-white text-sm">Porsche Expert AI</h3>
              <p className="text-[10px] text-green-500">● Live Assistant</p>
            </div>
            <button onClick={onClose} className="text-zinc-500 hover:text-white p-1">
              <X size={18} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-zinc-950/50 scroll-smooth">
              {history.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-2 opacity-50">
                  <p className="text-xs text-center">
                    Tanyakan performa, harga, atau<br/>keunggulan {carName}...
                  </p>
                </div>
              )}
              
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-br-none font-medium' 
                      : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-xl rounded-bl-none text-xs text-zinc-400 animate-pulse border border-zinc-700">
                    Typing...
                  </div>
                </div>
              )}

              {/* 4. Elemen Invisible buat target scroll */}
              <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-zinc-800 flex gap-2 bg-black shrink-0">
            <input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik pertanyaan..."
              className="flex-1 bg-zinc-900 text-white text-xs p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-600 placeholder-zinc-600"
            />
            <button type="submit" disabled={loading} className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition disabled:opacity-50">
              <Send size={16} />
            </button>
          </form>

        </motion.div>
      )}
    </AnimatePresence>
  );
}