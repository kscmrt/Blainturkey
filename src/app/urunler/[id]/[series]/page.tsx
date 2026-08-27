'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import CategoryNav from '../../../../components/ui/CategoryNav';
import { ecosystemProducts } from '../../../../data/ecosystemProducts';
import PowerUnitsCatalog from '../../../../components/products/PowerUnitsCatalog';
import ProductHero from '../../../../components/product/ProductHero';
import ProductFeatures from '../../../../components/product/ProductFeatures';
import ProductSpecs from '../../../../components/product/ProductSpecs';
import ProductGallery from '../../../../components/product/ProductGallery';

export default function ProductSeriesPage() {
  const { id, series } = useParams() as { id: string; series: string };

  const product = ecosystemProducts.find(p => p.slug === series && p.categorySlug === id);

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Ürün bulunamadı.</h1>
        <Link href="/urunler" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Ürünlere Dön</Link>
      </div>
    );
  }

  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>

      {/* Sub-Navigation */}
      <CategoryNav activeId={id as string} />

      {/* Hero Section with Scroll-Driven Animations */}
      <ProductHero
        title={product.title}
        subtitle={product.subtitle}
        description={product.description}
        mainImage={product.mainImage}
        onScrollProgress={setScrollProgress}
        whatsappLink={`https://wa.me/905424862821?text=${encodeURIComponent(`Merhaba, ${product.title} hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`)}`}
      />

      {/* Long Description */}
      {product.longDescription && (
        <section className="py-24 md:py-32 bg-white border-y border-slate-200/50">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 md:mb-12">
              Mühendisliğin Zirvesi
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>
        </section>
      )}

      {/* Features with Scroll Reveals */}
      {product.features && product.features.length > 0 && (
        <ProductFeatures
          features={product.features.map((f) => ({
            title: f.title,
            description: f.description,
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ),
          }))}
        />
      )}

      {/* Specs Matrix with Scroll Animation */}
      {product.matrix && product.matrix.length > 0 && (
        <ProductSpecs models={product.matrix} />
      )}

      {/* Image Gallery with Scroll Animation */}
      {product.imageGallery && product.imageGallery.length > 0 && (
        <ProductGallery images={product.imageGallery} productTitle={product.title} />
      )}

      {/* Downloads Section */}
      {product.downloads && product.downloads.length > 0 && (
        <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
                Dokümanlar
              </h2>
              <p className="text-4xl md:text-5xl font-bold text-slate-900">
                Teknik Belgeler
              </p>
            </div>

            <div className="flex justify-center gap-4 md:gap-6 flex-wrap max-w-2xl mx-auto">
              {product.downloads.map((doc, idx) => (
                <motion.a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex items-center gap-3 px-6 md:px-8 py-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 group-hover:text-blue-700">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Section */}
      {product.youtubeVideoId && (
        <section className="py-24 md:py-32 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-sm md:text-base font-semibold text-blue-400 tracking-widest uppercase mb-4">
                Video
              </h2>
              <p className="text-4xl md:text-5xl font-bold text-white">
                Ürün Tanıtımı
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${product.youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </div>
        </section>
      )}

    </main>
  );
}
