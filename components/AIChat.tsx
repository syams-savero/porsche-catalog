'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { askPorscheExpert } from '@/app/actions';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChat({ carName }: { carName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // 1. Tampilkan chat user
    const userMsg = query;
    setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery("");
    setLoading(true);

    // 2. Panggil Server Action (Tanya AI)
    const result = await askPorscheExpert(carName, userMsg);

    // 3. Tampilkan jawaban AI
    setHistory(prev => [...prev, { role: 'ai', text: result.reply }]);
    setLoading(false);
  };

  return (
    <>
      {/* TOMBOL FLOATING (Pojok Kanan Bawah) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
      </button>

      {/* JENDELA CHAT (Muncul pas diklik) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-900 p-4 flex justify-between items-center border-b border-zinc-800">
              <div>
                <h3 className="font-bold text-white text-sm">Porsche Expert</h3>
                <p className="text-xs text-green-500">● Online</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-64 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
              {history.length === 0 && (
                <p className="text-zinc-500 text-xs text-center mt-10">
                  Tanyakan sesuatu tentang {carName}...
                </p>
              )}
              
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-xs ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-br-none' 
                      : 'bg-zinc-800 text-zinc-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-xl rounded-bl-none text-xs text-zinc-400 animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 border-t border-zinc-800 flex gap-2 bg-black">
              <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tanya spek, harga, atau rekomendasi..."
                className="flex-1 bg-zinc-900 text-white text-xs p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button type="submit" disabled={loading} className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition disabled:opacity-50">
                <Send size={16} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
