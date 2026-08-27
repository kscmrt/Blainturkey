'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productTitle: string;
}

function GalleryImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  const xOffset = index % 2 === 0 ? -30 : 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-white aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6 md:p-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        {/* Image */}
        <motion.img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain z-10 transition-transform duration-300"
          animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
        />
      </div>

      {/* Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="text-center">
          <p className="text-white text-sm md:text-base font-semibold">{alt}</p>
        </div>
      </motion.div>

      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-3xl border border-blue-200/50 group-hover:border-blue-400/50 transition-colors" />
    </motion.div>
  );
}

export default function ProductGallery({ images, productTitle }: ProductGalleryProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900/5 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 -mr-48" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Ürün Görselleri
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl mx-auto leading-tight">
            Detaylı Inceleyin
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <GalleryImage
              key={index}
              src={img}
              alt={`${productTitle} Görsel ${index + 1}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
