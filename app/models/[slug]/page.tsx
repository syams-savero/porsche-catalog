'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { porscheModels } from '@/data/cars';
import { ChevronLeft, ChevronRight, ArrowLeft, MessageCircle, Gauge, Wind, Cog, Scale } from 'lucide-react'; // Tambah icon baru
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
  const [isChatOpen, setIsChatOpen] = useState(false);

  const nextCar = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleOrder = () => {
    const message = `Hello im intrested with ${currentCar.name} (${currentCar.specs.price}). Can i get more information?`;
    const waLink = `https://wa.me/6288225078659?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  // Data dummy untuk mobil rekomendasi (ambil 2 mobil pertama dari kategori lain, misal '911' kalau lagi di '718')
  // Logika simpel: Ambil kategori selain yang sekarang
  const otherCategories = Object.keys(porscheModels).filter(c => c !== category);
  const recommendationKey = otherCategories[0] || category; // Fallback
  const recommendedCars = porscheModels[recommendationKey].slice(0, 2);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans relative pb-20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <Link href="/#catalog-section" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs tracking-widest">BACK TO CATALOG</span>
      </Link>

      {/* === MAIN SHOWCASE SECTION === */}
      <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row items-center justify-center relative z-10 pt-20 md:pt-0">
        
        {/* KIRI: GAMBAR MOBIL */}
        <div className="w-full md:w-2/3 relative flex items-center justify-center h-[40vh] md:h-[60vh]">
          <button onClick={prevCar} className="absolute left-0 z-50 p-4 bg-zinc-900/50 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group">
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform"/>
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

          <button onClick={nextCar} className="absolute right-0 z-50 p-4 bg-zinc-900/50 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group">
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        {/* KANAN: SPEK UTAMA */}
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
              "{currentCar.tagline}"
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-green-900/50 col-span-2 flex justify-between items-center shadow-[0_0_20px_rgba(34,197,94,0.05)]">
               <div className="text-xs text-green-500 uppercase font-bold tracking-wider">Starting Price</div>
               <div className="text-2xl font-black text-white">{currentCar.specs.price}</div>
            </div>
            {/* Kotak Spek Utama */}
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Gauge size={14} className="text-zinc-500"/>
                <p className="text-[10px] text-zinc-500 uppercase">Power</p>
              </div>
              <p className="text-lg font-bold text-white">{currentCar.specs.hp}</p>
            </div>
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Wind size={14} className="text-zinc-500"/>
                <p className="text-[10px] text-zinc-500 uppercase">0-100 km/h</p>
              </div>
              <p className="text-lg font-bold text-white">{currentCar.specs.acceleration}</p>
            </div>
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                 <Scale size={14} className="text-zinc-500"/>
                 <p className="text-[10px] text-zinc-500 uppercase">Top Speed</p>
              </div>
              <p className="text-lg font-bold text-white">{currentCar.specs.topSpeed}</p>
            </div>
            <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                 <Cog size={14} className="text-zinc-500"/>
                 <p className="text-[10px] text-zinc-500 uppercase">Engine</p>
              </div>
              <p className="text-sm font-bold text-white truncate">{currentCar.specs.engine}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
             <button 
               onClick={handleOrder}
               className="flex-1 py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg shadow-white/10"
             >
               <span>ORDER</span>
             </button>
             
             <button 
               onClick={() => setIsChatOpen(true)}
               className="px-5 py-4 border border-zinc-700 rounded-lg hover:border-white transition-colors bg-zinc-900/50 text-white group relative"
             >
               <MessageCircle size={20} />
               <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
             </button>
          </div>
        </div>
      </div>

      {/* === NEW SECTION: TECHNICAL DATA & DESC === */}
      <div className="container mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Deskripsi */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tighter text-zinc-200">PHILOSOPHY</h3>
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                    {currentCar.description}
                </p>
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
            </div>

            {/* Detail Tambahan (Static Dummy Data for Aesthetic) */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tighter text-zinc-200">TECHNICAL DATA</h3>
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                        <span className="text-zinc-500 text-sm">Drivetrain</span>
                        <span className="text-white text-sm font-mono">Rear-Wheel Drive</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                        <span className="text-zinc-500 text-sm">Transmission</span>
                        <span className="text-white text-sm font-mono">7-Speed PDK</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                        <span className="text-zinc-500 text-sm">Body Type</span>
                        <span className="text-white text-sm font-mono">Coupe</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                        <span className="text-zinc-500 text-sm">Warranty</span>
                        <span className="text-white text-sm font-mono">4 Years / 50k Miles</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* === NEW SECTION: SIMILAR MODELS === */}
      <div className="container mx-auto px-6 py-10">
         <h3 className="text-zinc-600 text-sm uppercase tracking-widest mb-8">YOU MAY ALSO LIKE ({recommendationKey.toUpperCase()})</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {recommendedCars.map((car) => (
                 <Link href={`/models/${recommendationKey}`} key={car.id} className="group block relative h-64 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all">
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"/>
                     <Image src={car.image} alt={car.name} fill className="object-cover object-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                     <div className="absolute bottom-6 left-6 z-20">
                         <h4 className="text-2xl font-bold italic text-white">{car.name}</h4>
                         <p className="text-xs text-zinc-400 tracking-wider mt-1">VIEW MODEL &rarr;</p>
                     </div>
                 </Link>
             ))}
         </div>
      </div>

      <AIChat 
        carName={currentCar.name} 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </main>
  );
}