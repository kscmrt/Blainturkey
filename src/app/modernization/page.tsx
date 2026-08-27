'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

function FeatureCard({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300"
      style={{
        background: index % 2 === 0
          ? 'linear-gradient(135deg, #f8f9fa 0%, #f0f4f8 100%)'
          : 'linear-gradient(135deg, #fff 0%, #fafbfc 100%)',
        border: '1px solid rgba(0, 51, 153, 0.08)',
      }}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Accent Line */}
      <div className="absolute top-0 left-0 h-1 w-12 bg-gradient-to-r from-blue-600 to-sky-400 group-hover:w-24 transition-all duration-500" />

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>
        <div className="space-y-3">
          {description.split('\n').map((paragraph, idx) => (
            <p key={idx} className="text-base md:text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Modernization() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafb 50%, #f0f4f8 100%)',
        }}
      >
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-sky-100/20 rounded-full blur-3xl -mb-32" />

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
                EV40 Akıllı Valf
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed">
                Yeni EV40 akıllı valfimiz, hidrolik asansör sistemleri için akıllı telefon kontrollü, gelişmiş bir çözüm sunar.
              </p>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                EV40'ı seçerek, hidrolik sisteminizin verimliliğini ve kullanım ömrünü optimize ederken, müşterilerinize olağanüstü bir asansör deneyimi sunabilirsiniz.
              </p>

              <motion.a
                href="https://wa.me/905424862821?text=Merhaba, EV40 Akıllı Valf hakkında detaylı bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all"
              >
                Bilgi Al
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
                src="/images/EV40-1024x572.png"
                alt="EV40 Akıllı Valf"
                className="relative max-w-full max-h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -ml-32 -mt-32" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
              Modernizasyon Çözümü
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl mx-auto leading-tight">
              Verimlilik ve Güvenilirlik
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              index={0}
              title="Enerji Tüketimini %65'e Kadar Azaltabilir"
              description="En son VVVF (Değişken Voltaj Değişken Frekans) teknolojisini entegre eden EV40, enerji tüketimini %65'e kadar azaltabilir.\n\nAyrıca, motor-pompa kontrolü yağın ısınmasını %50'ye kadar düşürerek sistemin ömrünü uzatır ve yüksek enerji tüketen yağ soğutucularına olan ihtiyacı en aza indirir."
            />

            <FeatureCard
              index={1}
              title="Uygun Maliyetli ve Enerji Tasarruflu Çözüm"
              description="EV40 sistemi, yukarı yöndeki seyir için Yaskawa'nın L1000H VVVF sürücüsü ile kusursuz bir şekilde entegre olur.\n\nAşağı yönlü seyri ise doğrudan EV40 valfinin kendisi yöneterek, uygun maliyetli ve enerji tasarruflu bir çözüm sağlar."
            />

            <FeatureCard
              index={2}
              title="EV40'a Yükseltme Basit Bir İşlemdir"
              description="Blain olmayan bir valf, Blain EV40 ile kolayca değiştirilebilir.\n\nMevcut valf bir Blain EV100 ise, mevcut asansör kumanda panosunu değiştirmeye gerek kalmadan, bir eklenti (retrofit) kiti kullanılarak EV40'a hızlı bir şekilde yükseltilebilir."
            />

            <FeatureCard
              index={3}
              title="Kolay Kurulum ve Bakım"
              description="EV40 valflerinin kolay kurulumu ve bakımı, onları hem mevcut sistemlerin modernizasyonu hem de yeni kurulumlar için mükemmel bir seçim haline getirir.\n\nKurulumu kolay olan EV40'lar; dahili aşırı yük koruması ve farklı enerji tasarrufu modları ile aşırı yük ve sıcaklık değişimleri boyunca pürüzsüz, güvenilir ve hassas bir şekilde çalışır."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sisteminizi Modernize Edin
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              EV40 akıllı valfı ile enerji tasarrufu, güvenilirlik ve müşteri memnuniyetini bir arada elde edin.
            </p>

            <motion.a
              href="https://wa.me/905424862821?text=Merhaba, EV40 modernizasyon çözümü hakkında detaylı bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:shadow-2xl transition-all text-lg"
            >
              İletişime Geç
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
