'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'EV100 ile EV40 arasında ne fark var?',
    answer:
      'EV100 mekanik bir kontrol sistemidir ve geleneksel asansörlerde kullanılır. EV40 ise elektronik kontrollü, VVVF teknolojisi kullanan modern bir sistemdir. EV40 daha az enerji tüketir (%60-65 tasarruf) ve daha hassas kontrol sağlar.',
  },
  {
    id: 2,
    question: 'Kurulum ne kadar sürer?',
    answer:
      'Standart bir EV100 kurulumu 4-6 saat sürer. Mevcut sistemin değiştirilmesi ise duruma göre 1-2 gün alabilir. Teknik ekibimiz kurulum sırasında tam destek sağlar.',
  },
  {
    id: 3,
    question: 'Ürün garantisi ne kadar?',
    answer:
      'Tüm Blain ürünleri 2 yıl fabrika garantisi ile gelir. Garanti süresi zarfında ekipman arızalarında ücretsiz tamir veya değiştirme yapılır. Uzatılmış garantiler de mevcuttur.',
  },
  {
    id: 4,
    question: 'Nereye kurulum yapıyorsunuz?',
    answer:
      'Blain Türkiye olarak İstanbul ve çevresine hizmet vermekteyiz. Ankara, İzmir ve diğer şehirler için bölge temsilcileriyle çalışıyoruz. Teknik destek için lütfen WhatsApp üzerinden iletişime geçiniz.',
  },
  {
    id: 5,
    question: 'Teknik destek saatleri nedir?',
    answer:
      'Pazartesi-Cuma 08:00-17:00 saatleri arasında teknik destek vermekteyiz. Acil arızalar için 24/7 WhatsApp destek hattımız aktiftir. Bize +90-536-025-6494 numarası üzerinden ulaşabilirsiniz.',
  },
  {
    id: 6,
    question: 'Modernizasyon hizmetleri neler kapsar?',
    answer:
      'Eski sistemlerinizi EV40 akıllı valf sistemi ile upgrade edebiliriz. Bu işlem mevcut kumanda panosunu değiştirmeden yapılır. Enerji tasarrufu, daha iyi kontrol ve uzun vade bahçesinde tasarruf sağlar.',
  },
];

export default function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xl text-slate-600">
            Blain ürünleri ve hizmetleri hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FAQItem
                item={item}
                isExpanded={expanded === item.id}
                onToggle={() => setExpanded(expanded === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">Başka sorunuz mu var?</h3>
          <p className="text-blue-100 mb-6">
            Cevabı bulamadığınız sorular için bize WhatsApp üzerinden ulaşabilirsiniz.
          </p>
          <a
            href="https://wa.me/905360256494?text=Merhaba,%20sorularım%20var"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp'ta İletişime Geç
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  item: (typeof FAQ_ITEMS)[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function FAQItem({ item, isExpanded, onToggle }: FAQItemProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="w-full text-left bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors p-6 group"
    >
      {/* Question */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {item.question}
        </h3>

        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <svg
            className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-slate-200"
          >
            <p className="text-slate-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
