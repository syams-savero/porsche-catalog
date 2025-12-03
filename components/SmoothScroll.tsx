'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Durasi scroll (makin gede makin "licin/berat")
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Kurva fisika
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // Komponen ini gak nampilin apa-apa, cuma jalanin logika
}