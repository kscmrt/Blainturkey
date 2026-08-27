'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  onScrollProgress?: (progress: number) => void;
  whatsappLink?: string;
}

export default function ProductHero({
  title,
  subtitle,
  description,
  mainImage,
  onScrollProgress,
  whatsappLink,
}: ProductHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 100]);
  const blur = useTransform(scrollYProgress, [0, 0.6], [0, 10]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      onScrollProgress?.(v);
    });
  }, [scrollYProgress, onScrollProgress]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-[#fafafc] pt-32 md:pt-20"
      style={{ opacity }}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-sky-50 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div className="flex flex-col gap-6" style={{ y }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
                Premium Ürün
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-blue-600 font-medium mb-6 leading-relaxed">
                {subtitle}
              </p>
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {whatsappLink && (
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all w-fit"
              >
                Ürün Talep Et
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </motion.a>
            )}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-[300px] md:h-[500px] flex items-center justify-center"
            style={{ scale: imageScale, y: imageY }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/50 via-sky-50/30 to-transparent blur-2xl" />

            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              style={{ filter: blur.get() ? blur : 'blur(0px)' }}
            >
              <img
                src={mainImage}
                alt={title}
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-slate-600 font-medium">Kaydır</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </motion.section>
  );
}
