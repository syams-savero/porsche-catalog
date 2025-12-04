'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog-section');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#050505] text-white overflow-x-hidden selection:bg-red-900 selection:text-white font-sans">
      
      {/* === HERO SECTION (VERSI TYPOGRAPHIC) === */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none opacity-60" />

        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-40"
          >
            <h2 className="text-zinc-500 tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-medium">
              The Ultimate Collection
            </h2>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 py-4 leading-tight">
              PORSCHE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-20 z-40"
          >
            <button 
              onClick={scrollToCatalog}
              className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <span className="text-[10px] tracking-[0.4em] text-zinc-500 group-hover:text-white transition-colors">
                EXPLORE THE GARAGE
              </span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 via-zinc-500 to-transparent overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-white/50 animate-rain" />
              </div>
            </button>
          </motion.div>
        </div>
      </section>


      {/* === CATALOG GRID (VERSI FINAL: FULL COVER & LINK) === */}
      <section id="catalog-section" className="min-h-screen w-full bg-[#0a0a0a] py-24 relative z-20">
        <div className="container mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 border-b border-zinc-800 pb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">SELECT YOUR MACHINE</h2>
            <p className="text-zinc-500 max-w-xl text-lg font-light">Engineering perfection. Choose your driving experience.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            
            {/* 1. 911 (Lebar) */}
            <Link href="/models/911" className="lg:col-span-2 block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                <Image src="/cars/911-bg.avif" alt="911" fill className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="text-5xl font-black tracking-tighter mb-1 italic group-hover:text-white transition-colors">911</h3>
                  <p className="text-zinc-400 tracking-widest text-xs font-mono border-l-2 border-red-600 pl-3 group-hover:text-zinc-300">TIMELESS MACHINE</p>
                </div>
              </motion.div>
            </Link>

            {/* 2. 718 (Kecil) */}
            <Link href="/models/718" className="block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                <Image src="/cars/718-bgg.avif" alt="718" fill className="object-cover object-center opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute top-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-4xl font-black tracking-tighter mb-1 group-hover:text-white transition-colors">718</h3>
                  <span className="text-[10px] border border-white/50 bg-white px-3 py-1 rounded-full text-black font-bold tracking-widest shadow-lg">MID-ENGINE</span>
                </div>
              </motion.div>
            </Link>

            {/* 3. Taycan (Kecil) */}
            <Link href="/models/taycan" className="block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                <Image src="/cars/taycan-bg.avif" alt="Taycan" fill className="object-cover object-center opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-4xl font-black tracking-tighter mb-1 text-blue-100 group-hover:text-blue-50 transition-colors">TAYCAN</h3>
                  <p className="text-blue-400/80 tracking-widest text-xs font-mono">SOUL ELECTRIFIED</p>
                </div>
              </motion.div>
            </Link>

            {/* 4. Panamera (Lebar) */}
            <Link href="/models/panamera" className="lg:col-span-2 block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                <Image src="/cars/panamera-bg.avif" alt="Panamera" fill className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 right-0 p-8 z-20 text-right">
                  <h3 className="text-5xl font-black tracking-tighter mb-1 group-hover:text-white transition-colors">PANAMERA</h3>
                  <p className="text-zinc-400 tracking-widest text-xs font-mono border-r-2 border-white pr-3 group-hover:text-zinc-300">SPORT LIMOUSINE</p>
                </div>
              </motion.div>
            </Link>

            {/* 5. Cayenne (Lebar) */}
            <Link href="/models/cayenne" className="lg:col-span-2 block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                <Image src="/cars/cayene-bg.jpeg" alt="Cayenne" fill className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="text-5xl font-black tracking-tighter mb-1 group-hover:text-white transition-colors">CAYENNE</h3>
                  <p className="text-zinc-400 tracking-widest text-xs font-mono border-l-2 border-white pl-3 group-hover:text-zinc-300">PERFORMANCE SUV</p>
                </div>
              </motion.div>
            </Link>

             {/* 6. Macan (Kecil) */}
             <Link href="/models/macan" className="block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
                <Image src="/cars/macan-bg.avif" alt="Macan" fill className="object-cover object-bottom opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute top-0 left-0 p-6 z-20 w-full h-full flex flex-col justify-between">
                  <span className="text-[10px] border border-white/50 bg-white px-3 py-1 rounded-full text-black font-bold tracking-widest shadow-lg w-fit">COMPACT SUV</span>
                  <h3 className="text-4xl font-black tracking-tighter mb-1 text-right group-hover:text-white transition-colors">MACAN</h3>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

      {/* === ENDING SECTION (QUOTE & FOOTER) === */}
      <section className="w-full bg-black border-t border-zinc-900 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-xl md:text-3xl font-serif italic text-zinc-400 leading-relaxed max-w-4xl mx-auto">
              "In the beginning I looked around and could not find quite the car I dreamed of. So I decided to build it myself."
            </p>
            <p className="text-zinc-600 mt-6 text-sm tracking-[0.2em] uppercase font-bold">— Ferry Porsche</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-xs text-zinc-500 border-t border-zinc-900 pt-10">
            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-widest mb-4">MODELS</h4>
              <p className="hover:text-white cursor-pointer transition-colors">911</p>
              <p className="hover:text-white cursor-pointer transition-colors">718</p>
              <p className="hover:text-white cursor-pointer transition-colors">Taycan</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-widest mb-4">EXPERIENCE</h4>
              <p className="hover:text-white cursor-pointer transition-colors">Porsche Drive</p>
              <p className="hover:text-white cursor-pointer transition-colors">Motorsport</p>
              <p className="hover:text-white cursor-pointer transition-colors">Porsche Design</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-widest mb-4">COMPANY</h4>
              <p className="hover:text-white cursor-pointer transition-colors">At a Glance</p>
              <p className="hover:text-white cursor-pointer transition-colors">Sustainability</p>
              <p className="hover:text-white cursor-pointer transition-colors">Careers</p>
            </div>
            <div className="flex flex-col justify-between">
              <button onClick={scrollToTop} className="text-white border border-zinc-700 px-6 py-3 rounded hover:bg-white hover:text-black transition-all self-start uppercase tracking-widest text-[10px]">
                Back to Top ↑
              </button>
              <p className="mt-auto">© 2025 Porsche Catalog.<br/>Unofficial Concept by Syams.</p>
            </div>
          </div>
        </div>

        <h1 className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-[15rem] font-black text-zinc-900/30 pointer-events-none whitespace-nowrap z-0">
          PORSCHE
        </h1>
      </section>

    </main>
  );
}