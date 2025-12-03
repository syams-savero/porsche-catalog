'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { porscheModels } from '@/data/cars';
import { ChevronLeft, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import AIChat from '@/components/AIChat';


export default function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const category = resolvedParams.slug;

  const cars = porscheModels[category];

  if (!cars) {
    notFound();
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCar = cars[currentIndex];

  const nextCar = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  // Fungsi buat kirim WA otomatis
  const handleOrder = () => {
    const message = `Halo, saya tertarik dengan ${currentCar.name} (${currentCar.specs.price}). Bisa minta info lebih lanjut?`;
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`; // Ganti nomor HP lu nanti
    window.open(waLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans relative">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <Link href="/#catalog-section" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs tracking-widest">BACK TO CATALOG</span>
      </Link>

      <div className="container mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-center relative z-10">
        
        {/* KIRI: GAMBAR MOBIL */}
        <div className="w-full md:w-2/3 relative flex items-center justify-center h-[40vh] md:h-[60vh]">
          <button onClick={prevCar} className="absolute left-0 z-50 p-4 bg-zinc-900/50 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md">
            <ChevronLeft size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCar.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="relative w-full h-full"
            >
               <Image 
                 src={currentCar.image} 
                 alt={currentCar.name} 
                 fill 
                 className="object-contain drop-shadow-2xl"
                 priority
               />
            </motion.div>
          </AnimatePresence>

          <button onClick={nextCar} className="absolute right-0 z-50 p-4 bg-zinc-900/50 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* KANAN: SPEK LENGKAP (UPDATED) */}
        <div className="w-full md:w-1/3 space-y-6 pl-0 md:pl-10 mt-4 md:mt-0">
          
          <motion.div 
            key={currentCar.id + "text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-zinc-500 tracking-[0.5em] text-xs uppercase mb-2 font-medium">{currentCar.category} SERIES</h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4 italic uppercase">
              {currentCar.name}
            </h1>
            <p className="text-sm md:text-base text-zinc-400 font-light italic border-l-2 border-red-600 pl-4 mb-6">
              {currentCar.tagline}
            </p>

            
          </motion.div>

          {/* GRID SPEK LEBIH LENGKAP */}
          <div className="grid grid-cols-2 gap-3">
            {/* Harga (Paling Penting) */}
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-green-900/50 col-span-2 flex justify-between items-center">
               <div className="text-xs text-green-500 uppercase font-bold">Starting Price</div>
               <div className="text-2xl font-black text-white">{currentCar.specs.price}</div>
            </div>

            {/* Spek Teknis */}
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase">Power</p>
              <p className="text-lg font-bold text-white">{currentCar.specs.hp}</p>
            </div>
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase">0-100 km/h</p>
              <p className="text-lg font-bold text-white">{currentCar.specs.acceleration}</p>
            </div>
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase">Top Speed</p>
              <p className="text-lg font-bold text-white">{currentCar.specs.topSpeed}</p>
            </div>
            {/* Engine (Baru Ditambah) */}
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase">Engine</p>
              <p className="text-sm font-bold text-white truncate">{currentCar.specs.engine}</p>
            </div>
          </div>

          {/* TOMBOL AKSI */}
          <div className="flex gap-3 pt-4">
             {/* Tombol WA */}
             <button 
               onClick={handleOrder}
               className="flex-1 py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors tracking-widest text-xs md:text-sm flex items-center justify-center gap-2"
             >
               <span>ORDER VIA WHATSAPP</span>
             </button>
             
             {/* Tombol Chat AI (Persiapan Besok) */}
             <button className="px-5 py-4 border border-zinc-700 rounded-lg hover:border-white transition-colors bg-zinc-900/50 text-white group relative">
               <MessageCircle size={20} />
               <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
             </button>
          </div>

        </div>

      </div>
                <AIChat carName={currentCar.name} />
    </main>
  );
}