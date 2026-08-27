'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface SpecsModel {
  img: string;
  name: string;
  desc?: string;
  flow?: string;
  inch?: string;
  pressure?: string;
  upSpeed?: string;
  downSpeed?: string;
  upStop?: string;
  oilVolume?: string;
  dimensions?: string;
}

interface ProductSpecsProps {
  models: SpecsModel[];
}

function SpecCard({ model, index }: { model: SpecsModel; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const specs = [
    { label: 'Bağlantı', value: model.inch },
    { label: 'Basınç', value: model.pressure },
    { label: 'Kalkış Hızı', value: model.upSpeed },
    { label: 'İniş Hızı', value: model.downSpeed },
    { label: 'Kalkış Duruşu', value: model.upStop },
    { label: 'Sıcaklık / Yağ', value: model.oilVolume },
    { label: 'Ağırlık', value: model.dimensions },
  ].filter((s) => s.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Spec Border */}
      <div className="absolute inset-0 rounded-3xl border border-slate-700/50 group-hover:border-blue-500/30 transition-colors" />

      <div className="relative z-10">
        {/* Image Container */}
        <div className="h-48 md:h-56 flex items-center justify-center mb-8 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-6">
          <img
            src={model.img}
            alt={model.name}
            className="max-w-full max-h-full object-contain drop-shadow-xl filter group-hover:drop-shadow-2xl transition-all"
          />
        </div>

        {/* Model Info */}
        <div className="mb-8 pb-8 border-b border-slate-700/50">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {model.name}
          </h3>
          {model.desc && (
            <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors">
              {model.desc}
            </p>
          )}
        </div>

        {/* Flow Metric */}
        {model.flow && (
          <div className="mb-8 pb-8 border-b border-slate-700/50">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">Akış Hızı</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                {model.flow.split(' ')[0]}
              </span>
              <span className="text-slate-400">{model.flow.split(' ')[1] || 'l/min'}</span>
            </div>
          </div>
        )}

        {/* Specifications Grid */}
        {specs.length > 0 && (
          <div className="grid grid-cols-2 gap-6">
            {specs.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: (index * 0.15 + 0.2 + idx * 0.05) }}
              >
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                  {spec.label}
                </p>
                <p className="text-sm md:text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProductSpecs({ models }: ProductSpecsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="specs" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-900 overflow-hidden">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm md:text-base font-semibold text-blue-400 tracking-widest uppercase mb-4">
            Teknik Özellikler
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Detaylı Modeller
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <SpecCard key={index} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
