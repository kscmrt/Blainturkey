'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PromoVideoGenerator() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hydraulic_valve_1790229809723.jpg',
      title: 'Kusursuz Mühendislik',
      subtitle: 'Alman kalitesiyle üretilmiş hassas kontrol valfleri',
    },
    {
      image: '/images/german_engineering_1790229830675.jpg',
      title: 'Güvenilir Performans',
      subtitle: 'Asansör hidroliğinde 50+ yıllık kanıtlanmış teknoloji',
    },
    {
      image: '/images/luxury_elevator_1790229818416.jpg',
      title: 'Pürüzsüz Seyahat',
      subtitle: 'Yolcularınız için maksimum konfor ve güvenlik',
    },
    {
      image: '/images/EV-Series-2-1024x708.png',
      title: 'Blain Türkiye',
      subtitle: 'Projenize en uygun valfi birlikte seçelim\nwww.blainturkey.com.tr',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center font-sans">
      {/* Aspect Ratio Container for Vertical Video (9:16) */}
      <div className="relative w-full max-w-md h-full sm:h-[800px] sm:aspect-[9/16] bg-slate-900 shadow-2xl overflow-hidden rounded-none sm:rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={`object-cover transition-transform duration-[4000ms] ease-linear ${
                  currentSlide === index ? 'scale-110' : 'scale-100'
                }`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-20 text-center">
              <h2 className={`text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg transition-all duration-700 delay-300 transform ${
                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {slide.title}
              </h2>
              <p className={`text-xl font-medium text-slate-200 leading-snug drop-shadow transition-all duration-700 delay-500 transform ${
                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } whitespace-pre-line`}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex gap-1 p-4 z-50">
          {slides.map((_, index) => (
            <div key={index} className="flex-1 h-full bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all ease-linear"
                style={{ 
                  width: currentSlide > index ? '100%' : currentSlide === index ? '100%' : '0%',
                  transitionDuration: currentSlide === index ? '4000ms' : '0ms'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Watermark */}
        <div className="absolute top-8 left-6 z-40 opacity-80">
           <Image src="/images/BHlogo-forweb-e1747046392803.png" alt="Blain" width={80} height={40} className="drop-shadow-md" />
        </div>
      </div>
      
      {/* Instructions for Desktop */}
      <div className="absolute top-4 right-4 hidden sm:block bg-white/10 backdrop-blur-md text-white p-4 rounded-xl max-w-xs border border-white/20">
        <h3 className="font-bold mb-2">🎥 Video Kayıt Talimatı</h3>
        <p className="text-sm opacity-80 mb-2">Bu ekran otomatik olarak oynatılan bir video slayt gösterisidir.</p>
        <ol className="text-sm opacity-80 list-decimal pl-4 space-y-1">
          <li>Ekran kaydedicinizi (örn. OBS, Windows Snipping Tool veya CapCut) açın.</li>
          <li>Sadece ortadaki telefon görünümlü alanı seçin.</li>
          <li>Sayfayı yenileyin ve kaydı başlatın!</li>
        </ol>
      </div>
    </div>
  );
}
