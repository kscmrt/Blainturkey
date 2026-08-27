'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProductFeaturesProps {
  features: Feature[];
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-2xl border border-blue-200/50 group-hover:border-blue-300/50 transition-colors" />

      <div className="relative z-10">
        {feature.icon && (
          <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 text-blue-600 group-hover:from-blue-200 group-hover:to-sky-200 transition-colors">
            {feature.icon}
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {feature.title}
        </h3>

        <p className="text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
          {feature.description}
        </p>

        {/* Hover Accent Line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-sky-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -mr-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-20 -ml-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Öne Çıkan Özellikler
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl mx-auto leading-tight">
            Mühendisliğin Zirvesi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
