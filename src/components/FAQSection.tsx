'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    question: 'Teknik destek saatleri nedir?',
    answer:
      'Pazartesi-Cuma 08:00-17:00 saatleri arasında teknik destek vermekteyiz. Acil arızalar için 24/7 WhatsApp destek hattımız aktiftir. Bize +90-536-025-6494 numarası üzerinden ulaşabilirsiniz.',
  },
  {
    id: 5,
    question: 'Modernizasyon hizmetleri neler kapsar?',
    answer:
      'Eski sistemlerinizi EV40 akıllı valf sistemi ile upgrade edebiliriz. Bu işlem mevcut kumanda panosunu değiştirmeden yapılır. Enerji tasarrufu, daha iyi kontrol ve uzun vadede tasarruf sağlar.',
  },
];

export default function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-steel-50/70 py-24 md:py-32 px-5 sm:px-8 dark:bg-steel-950/60">
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow justify-center text-brand-600 dark:text-accent-400">
            MERAK EDİLENLER
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-steel-900 tracking-tight dark:text-white">
            Sık Sorulan Sorular
          </h2>
          <p className="mt-4 text-base text-steel-600 max-w-2xl mx-auto dark:text-steel-400">
            Blain ürünleri ve hizmetleri hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </motion.div>

        {/* Sorular */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <FAQItem
                item={item}
                isExpanded={expanded === item.id}
                onToggle={() => setExpanded(expanded === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>
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
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-2xl border transition-all duration-200 p-6 ${
        isExpanded
          ? "border-brand-300 bg-white shadow-md dark:border-brand-800 dark:bg-steel-900"
          : "border-steel-200/90 bg-white/90 hover:border-brand-200 hover:bg-white dark:border-steel-800 dark:bg-steel-900/80 dark:hover:border-steel-700"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base sm:text-lg font-bold text-steel-900 dark:text-white">
          {item.question}
        </h3>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <svg
            className={`w-5 h-5 transition-colors ${
              isExpanded ? "text-brand-600 dark:text-accent-400" : "text-steel-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 pt-4 border-t border-steel-100 text-xs sm:text-sm leading-relaxed text-steel-600 dark:border-steel-800 dark:text-steel-300"
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
