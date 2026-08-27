'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

function TimelineCard({ year, title, description, index }: { year: string; title: string; description: string; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12 pb-12"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2" />

      {/* Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl border border-blue-100/50 transition-all duration-300 group">
        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {year}
        </h4>
        <p className="text-base font-semibold text-blue-900 mb-3">{title}</p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function BioCard({ name, role, bio, image, imagePosition = 'left' }: {
  name: string;
  role: string;
  bio: string[];
  image: string;
  imagePosition?: 'left' | 'right';
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-20 ${imagePosition === 'right' ? 'md:auto-rows-start' : ''}`}
    >
      {/* Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`${imagePosition === 'right' ? 'md:col-start-3' : 'md:col-start-1'}`}
      >
        <div className="overflow-hidden rounded-2xl shadow-xl border-2 border-blue-100 group">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <p className="text-sm text-slate-500 mt-4 font-semibold text-center italic">{name}</p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: imagePosition === 'left' ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? 40 : -40 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`${imagePosition === 'right' ? 'md:col-start-1 md:col-end-3' : 'md:col-start-2 md:col-end-4'}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-blue-200">
          {name}, {role}
        </h3>
        <div className="space-y-4">
          {bio.map((paragraph, idx) => (
            <p
              key={idx}
              className={`leading-relaxed ${
                idx === bio.length - 1 ? 'text-blue-700 font-semibold' : 'text-slate-600'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutUs() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-[420px] md:h-[500px] bg-center bg-cover bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/images/DJI-optimized.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/85 to-slate-900/70" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full"
        >
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white leading-tight">
              BLAIN HYDRAULICS
            </h1>
            <p className="text-xl md:text-2xl italic text-blue-100 font-light">
              1971'den Beri En Yüksek Kaliteli Valfler
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Intro Section */}
      <section
        ref={introRef}
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -mr-48" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                Hakkımızda
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Hidrolik Asansörlerin Öncüsü
              </h3>

              <div className="space-y-5">
                <p className="text-lg text-blue-900 font-semibold leading-relaxed">
                  1971'den bu yana Blain, birinci sınıf asansör kontrol valfleri tasarlama ve üretme konusunda uzmanlaşmıştır. EV 100 serisi, bugün hala dünyadaki en başarılı asansör valfi olmaya devam etmektedir.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  Dünya çapında, Blain Hydraulics'in olağanüstü kalitesine ve güvenilirliğine inanan müşteriler tarafından binlerce EV 100 valf satın alınmaktadır. Almanya'nın Heilbronn kentinde bulunan modern üretim tesisimizde yaklaşık 80 kendini adamış profesyonel istihdam edilmektedir.
                </p>

                <p className="text-base text-blue-700 leading-relaxed font-semibold">
                  Sistemlerimizin güncel kalmasını ve en son teknik standartlara uymasını sağlamak için yeni geliştirmeler ve mevcut ürünlerde iyileştirmeler üzerinde sürekli çalışıyoruz.
                </p>
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={introInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                {videoPlaying ? (
                  <div className="aspect-video bg-black rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50">
                    <video
                      width="100%"
                      height="100%"
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    >
                      <source
                        src="https://blain.de/wp-content/uploads/2024/04/Blain-Hydraulics-Imagefilm-Deutsch.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div
                    onClick={() => setVideoPlaying(true)}
                    className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50 cursor-pointer"
                  >
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center group">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group-hover:scale-110"
                      >
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}

                {/* Info Badge */}
                {!videoPlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6 inline-block bg-white px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setVideoPlaying(true)}
                  >
                    <p className="text-sm font-semibold text-slate-900">Blain Hydraulics Kurulması Hikâyesi</p>
                    <p className="text-xs text-slate-600 mt-1">2:37 dakika</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History Banner */}
      <motion.section
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-12 md:py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-center shadow-lg overflow-hidden"
      >
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
            <defs>
              <pattern id="hist-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="1200" height="200" fill="url(#hist-pattern)" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Şirket Tarihçesi
          </h2>
          <p className="text-blue-100 text-lg mt-3">50+ Yıl Mühendislik Mükemmelliği</p>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -mb-48 -ml-32" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center"
          >
            Şirket Liderliği
          </motion.h3>

          <BioCard
            name="Roy W. Blain"
            role="Kurucusu"
            image="/images/Roy8.jpg"
            imagePosition="left"
            bio={[
              "Salford, Manchester'da doğan Roy W. Blain, altı yaşına kadar Ilford, Essex'te yaşadıktan sonra tekrar Manchester'a taşındı ve burada makine ve havacılık mühendisliği alanında teknik eğitimine devam etti.",
              "Ticaret Donanmasında iki yıl ve orduda iki yıl görev yaptıktan sonra endüstri mühendisliği alanında kariyerine devam etti ve sonunda Almanya, Fransa ve İsviçre'ye seyahat etti. 1960'ların ortalarında, İsviçre'de bir asansör şirketini yönetirken Bay Blain, hidrolik asansörler için yüksek kaliteli bileşenlere yönelik artan ihtiyacın farkına vardı.",
              "75'ten fazla ülkede müşterileri ve kurulumları bulunan Bay Blain, hidrolik asansörlerin dünya çapında standart bir çözüme dönüşmesinde hayati bir rol oynayan hidrolik asansör teknolojisinin gerçek bir öncüsüydü.",
            ]}
          />

          <BioCard
            name="Anja Blain"
            role="CEO"
            image="/images/Anja-Blain-2.jpg"
            imagePosition="right"
            bio={[
              "Şirkete 1991 yılında katılan Anja Blain, 2005 yılında CEO oldu. Endüstriyel İşletme Yönetimi diplomaları ve asansör sektörü hakkındaki uzmanlık bilgisiyle, şirketin başarıyla yönetilmesinde önemli rol oynamıştır.",
              "Kendini Roy Blain'in vizyonunu korumaya adayan Anja, profesyonel başarılarını dört çocuklu gururlu bir anne olarak kişisel hayatıyla dengeliyor. Aynı zamanda çok sıkı çalışma ve kararlılığını sergileyen tutkulu bir triatlettir.",
              "Onun liderliğinde Blain Hydraulics, güçlü duruşunu sürdürerek ve babasının şirkete aşıladığı değerleri koruyarak gelişmeye devam ediyor.",
            ]}
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -mr-32 -mt-32" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Kuruluşundan Günümüze
            </h2>
            <p className="text-slate-600 text-lg mt-4">50+ Yıl Başarı ve İnovasyon</p>
          </motion.div>

          <div className="space-y-2">
            <TimelineCard
              year="1971-1980"
              title="Kuruluş ve EV 100"
              description="1971'den itibaren Blain, birinci sınıf asansör kontrol valfleri tasarlamaya ve üretmeye başladı. Bu dönemde geliştirilen EV 100 serisi, bugün hala dünyanın en başarılı asansör valfi konumundadır."
              index={0}
            />

            <TimelineCard
              year="1981-1990"
              title="R10 Boru Patlama Valfi"
              description="R10 boru patlama valfi piyasaya sürüldü ve daha sonra 1999 yılında CE uygunluk sertifikası alan ilk valf olma özelliğine kavuştu."
              index={1}
            />

            <TimelineCard
              year="1991-2000"
              title="Global Ekspansiyon"
              description="İhracat hacmimiz rekor seviyelere ulaşmaya başladı ve bu da şirketin erişim alanını genişletmesini ve şu anda dünya çapında 75'ten fazla ülkeye hizmet vermesini sağladı."
              index={2}
            />

            <TimelineCard
              year="2001-2010"
              title="EV4 - VVVF Kontrol Valfi"
              description="YASKAWA ile yapılan ortak bir girişim sayesinde EV4'ü (VVVF kontrol valfi) piyasaya sürdük."
              index={3}
            />

            <TimelineCard
              year="2011-2020"
              title="Modernizasyon ve Türkiye"
              description="2017'de Blain Hydraulics, yeni UCM-A3 çözümleri olarak entegre iL10 ve L20 valflerini piyasaya sürdü. 2018 itibariyle Blain Türkiye'yi kurduk."
              index={4}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
