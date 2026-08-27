'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const powerUnits = [
  { model: 'BTD-55', stock_code: '152-0055-0-0', dead_zone: 12, total_oil: 57, height: 977.5, length: 255, width: 270, min_pump: 8, max_pump: 55, min_motor: 2.2, max_motor: 5.8, img: '/1-2-Photoroom.png', type: 'home', valves: 'KV Series, EV ¾"', description: 'Küçük ve orta ölçekli konut asansörleri için ideal kompakt güç ünitesi.' },
  { model: 'BTS-75', stock_code: '152-0075-0-0', dead_zone: 34, total_oil: 89, height: 885.8, length: 595, width: 344.8, min_pump: 8, max_pump: 75, min_motor: 2.2, max_motor: 7.7, img: '/1-2-Photoroom.png', type: 'home', valves: 'KV Series, EV ¾"', description: 'Konut asansörleri için uygun maliyetli ve güvenilir çözüm.' },
  { model: 'BTS-150', stock_code: '152-0150-0-0', dead_zone: 62, total_oil: 189, height: 1117.5, length: 750, width: 400, min_pump: 75, max_pump: 150, min_motor: 7.7, max_motor: 14.7, img: '/3-4-Photoroom.png', type: 'both', description: 'Konut ve yük asansörleri için yüksek performanslı güç ünitesi.' },
  { model: 'BTS-250', stock_code: '152-0250-0-0', dead_zone: 78, total_oil: 299, height: 1251, length: 880, width: 450, min_pump: 150, max_pump: 240, min_motor: 14.7, max_motor: 29.4, img: '/3-4-Photoroom.png', type: 'both', description: 'Yüksek kapasiteli asansör sistemleri için güçlü çözüm.' },
  { model: 'BTS-400', stock_code: '152-0400-0-0', dead_zone: 126, total_oil: 420, height: 1251, length: 1000, width: 550, min_pump: 240, max_pump: 380, min_motor: 29.7, max_motor: 44.1, img: '/5-6-7-8-Photoroom.png', type: 'goods', description: 'Yüksek hız ve kapasiteli asansörler için endüstriyel güç ünitesi.' },
  { model: 'BTS-600', stock_code: '152-0600-0-0', dead_zone: 185, total_oil: 639, height: 1388, length: 1100, width: 650, min_pump: 380, max_pump: 500, min_motor: 44.1, max_motor: 58.8, img: '/5-6-7-8-Photoroom.png', type: 'goods', description: 'İnsan ve yük taşımacılığı için optimal performans sağlayan sistem.' },
  { model: 'BTS-1000', stock_code: '152-1000-0-0', dead_zone: 342, total_oil: 1216, height: 1508.6, length: 1500, width: 800, min_pump: 500, max_pump: 1000, min_motor: 58.8, max_motor: 73.5, img: '/5-6-7-8-Photoroom.png', type: 'goods', description: 'Yüksek performanslı endüstriyel uygulamalar için tasarlanmış.' },
  { model: 'BTS-1800', stock_code: '152-1800-0-1', dead_zone: 483, total_oil: 1869, height: 1656, length: 1800, width: 900, min_pump: 500, max_pump: 1200, min_motor: 58.8, max_motor: 73.5, img: '/5-6-7-8-Photoroom.png', type: 'goods', description: 'En yüksek kapasiteli asansör sistemleri için premium çözüm.' }
];

const toGal = (l: number) => Math.round(l / 3.785);
const toIn = (mm: number) => Math.round(mm / 25.4);
const toHp = (kw: number) => Math.round(kw * 1.341);

export default function PowerUnitDetailPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = use(params);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const unit = powerUnits.find(u => u.model.toLowerCase() === model.toLowerCase());

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Ürün Bulunamadı</h1>
          <p className="text-slate-600 mb-6">Aradığınız güç ünitesi katalogumuzda bulunmamaktadır.</p>
          <Link href="/downloads" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Katalog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafb 50%, #f0f4f8 100%)',
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-100/20 rounded-full blur-3xl -mb-32" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mb-6 rounded-full" />
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                {unit.model}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
                {unit.description}
              </p>
              <div className="flex gap-3 mb-8">
                {(unit.type === 'home' || unit.type === 'both') && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    ✓ Konut Asansörleri
                  </span>
                )}
                {(unit.type === 'goods' || unit.type === 'both') && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                    ✓ Yük Asansörleri
                  </span>
                )}
              </div>
              <motion.a
                href={`https://wa.me/905424862821?text=Merhaba, ${unit.model} güç ünitesi hakkında detaylı bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all"
              >
                Fiyat Al
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center h-[300px] md:h-[450px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-sky-50/30 to-transparent rounded-3xl blur-2xl" />
              <img
                src={unit.img}
                alt={unit.model}
                className="relative max-w-full max-h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Specifications Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Teknik Özellikler</h2>
            <p className="text-lg text-slate-600">Detaylı ürün bilgileri ve spesifikasyonları</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'Tank Hacmi', value: `${unit.total_oil} L`, secondary: `${toGal(unit.total_oil)} gal` },
              { label: 'Boyutlar (U×G×Y)', value: `${Math.round(unit.length)}×${Math.round(unit.width)}×${Math.round(unit.height)} mm`, secondary: `${toIn(unit.length)}×${toIn(unit.width)}×${toIn(unit.height)} in` },
              { label: 'Debi Aralığı', value: `${unit.min_pump}-${unit.max_pump} l/min`, secondary: `${toGal(unit.min_pump)}-${toGal(unit.max_pump)} gpm` },
              { label: 'Motor Gücü', value: `${unit.min_motor}-${unit.max_motor} kW`, secondary: `${toHp(unit.min_motor)}-${toHp(unit.max_motor)} HP` },
              { label: 'Ölü Bölge', value: `${unit.dead_zone} L`, secondary: '' },
              { label: 'Uyumlu Valfler', value: unit.valves, secondary: '' },
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-slate-900">{spec.value}</p>
                {spec.secondary && <p className="text-sm text-slate-500 mt-2">{spec.secondary}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sisteminiz için Doğru Çözüm Mü?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              {unit.model} hakkında daha fazla bilgi veya teklif almak için bize ulaşın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`https://wa.me/905424862821?text=Merhaba, ${unit.model} güç ünitesi hakkında bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-all"
              >
                WhatsApp'ta İletişim Kurun
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.a>
              <Link
                href="/downloads"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all"
              >
                Kataloğa Dön
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
