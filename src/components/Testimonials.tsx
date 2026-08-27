'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    company: 'ABC Asansör A.Ş.',
    role: 'Teknik Direktör',
    text: 'Blain EV100 valfleri 15 yıldır kullanıyoruz. Hiç hiçbir sorun yaşamadık. Kalite ve destek harika.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 2,
    name: 'Fatima Kaya',
    company: 'İstanbul Elevator Ltd.',
    role: 'Operasyon Müdürü',
    text: 'EV40 modernizasyonuyla enerji tasarrufu harika. Müşterilerimiz de daha rahat bir sürüş deneyimi yaşıyor.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    id: 3,
    name: 'Mehmet Demir',
    company: 'Ankara Hidro Sistemleri',
    role: 'Kurucu',
    text: 'Blain Türkiye ekibi çok profesyonel. Herhangi bir sorun olduğunda hemen çözüm buluyorlar.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 4,
    name: 'Zeynep Arslan',
    company: 'Türkiye Asansör Birliği',
    role: 'Başkan Yardımcısı',
    text: 'Blain ürünleri sektörün en güvenilir seçeneği. 50+ yıllık deneyim ve kararlılıkları takdir edilemez.',
    rating: 5,
    image: '👩‍💼',
  },
];

const STATS = [
  { number: '50+', label: 'Yıl Deneyim' },
  { number: '100K+', label: 'Kurulu Sistem' },
  { number: '98%', label: 'Müşteri Memnuniyeti' },
  { number: '24/7', label: 'Destek' },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Müşterilerimiz Söylüyor
          </h2>
          <p className="text-xl text-slate-600">
            Blain ürün ve hizmetleriyle iş yapan müşterilerden gelen gerçek yorumlar
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-xs text-slate-500 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-slate-600 mb-6">
            Siz de Blain ile çalışmaya başlamak isteyiniz mi?
          </p>
          <a
            href="https://wa.me/905360256494?text=Merhaba,%20Blain%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hemen İletişim Kurun
          </a>
        </motion.div>
      </div>
    </section>
  );
}
