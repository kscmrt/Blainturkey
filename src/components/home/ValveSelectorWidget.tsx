"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectType = "passenger" | "home" | "vvvf" | "heavy" | "safety";

interface Recommendation {
  id: ProjectType;
  tabLabel: string;
  tabIcon: string;
  valveName: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  specs: {
    flowRate: string;
    connection: string;
    application: string;
    controlType: string;
  };
  highlights: string[];
  productLink: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "passenger",
    tabLabel: "Yolcu & Standart Asansör",
    tabIcon: "🏢",
    valveName: "Blain EV100 Serisi",
    subtitle: "Mekanik Kontrol Valfi Serisi",
    badge: "Amiral Gemisi",
    image: "/images/EV-Series-2-1024x708.png",
    description:
      "Blain'in amiral gemisi niteliğindeki mekanik kontrol valfi serisi. Dayanıklılığı, verimliliği ve geniş ayarlanabilirlik aralığıyla bilinir, çeşitli ticari ve konut uygulamaları için uygundur.",
    specs: {
      flowRate: "10 - 1530 l/min",
      connection: "¾\" - 2½\" Ölçüler",
      application: "Konut ve Ticari Yolcu Asansörleri",
      controlType: "Mekanik Çift Hızlı Kontrol",
    },
    highlights: [
      "Tam hız ve yavaşlama (seviyeleme) hızlarının ayrı ayarlanabilmesi",
      "Kolay mekanik ayarlama ve sarsıntısız seyahat",
      "Zorlu yük ve sıcaklık koşullarında güvenli ve konforlu çalışma",
      "Dahili acil durum indirme ve emniyet by-pass sistemi",
    ],
    productLink: "/urunler/kontrol-valfleri/ev-serisi",
  },
  {
    id: "home",
    tabLabel: "Villa & Ev Asansörü",
    tabIcon: "🏡",
    valveName: "Blain KV Serisi (KV1P / KV2S)",
    subtitle: "Düşük Hızlı ve Ev Asansörleri İçin Kompakt Seri",
    badge: "MRL & Kompakt",
    image: "/images/KV-Series-1024x723.png",
    description:
      "Düşük hızlı ve ev asansörleri için tasarlanmış kompakt seri. Sağlam, kullanımı kolay ve makine dairesiz (MRL) kuyu içi kurulumları basitleştiren tasarımıyla öne çıkar.",
    specs: {
      flowRate: "10 - 80 l/min",
      connection: "Kompakt Entegre Gövde",
      application: "Ev Asansörleri & Engelli Platformları",
      controlType: "1 veya 2 Hızlı Kompakt Valf",
    },
    highlights: [
      "Makine dairesiz (MRL) kuyu içi montaja uygun kompakt ebatlar",
      "Kullanımı ve mekanik ayarı kolay sağlam tasarım",
      "Minimum yağ hacmi ile optimize hidrolik çalışma",
      "Entegre aşırı basınç tahliye ve acil indirme tertibatı",
    ],
    productLink: "/urunler/kontrol-valfleri/kv-serisi",
  },
  {
    id: "vvvf",
    tabLabel: "Akıllı VVVF & Enerji Tasarrufu",
    tabIcon: "⚡",
    valveName: "Blain EV40 Akıllı Valf",
    subtitle: "Akıllı Telefon Kontrollü ve VVVF Entegrasyonlu",
    badge: "%65'e Kadar Tasarruf",
    image: "/images/EV40-1024x572.png",
    description:
      "Akıllı telefon kontrollü ve VVVF entegrasyonlu gelişmiş valf. Enerji tüketimini %65'e kadar ve yağ ısınmasını %50'ye kadar önemli ölçüde azaltır.",
    specs: {
      flowRate: "Geniş VVVF Akış Aralığı",
      connection: "Yaskawa L1000H Uyumlu",
      application: "Modernizasyon ve Yeni Enerji Verimli Tesisler",
      controlType: "VVVF Değişken Frekanslı Dijital Kontrol",
    },
    highlights: [
      "Enerji tüketimini %65'e kadar azaltabilen VVVF mimarisi",
      "Motor-pompa kontrolüyle yağın ısınmasını %50'ye kadar düşürme",
      "Akıllı telefon uygulaması üzerinden kolay konfigürasyon",
      "Yaskawa L1000H VVVF sürücüsü ile yukarı yönde entegre çalışma",
    ],
    productLink: "/urunler/kontrol-valfleri/ev40",
  },
  {
    id: "heavy",
    tabLabel: "Ağır Yük & Otopark",
    tabIcon: "🚛",
    valveName: "Blain GV Valfi",
    subtitle: "Yüksek Kapasiteli Akış Valfi",
    badge: "Yüksek Kapasite",
    image: "/images/GV-1-1024x968.png",
    description:
      "Ağır tonajlı araç asansörleri, yük asansörleri ve devasa otopark sistemleri için özel olarak tasarlanmış yüksek kapasiteli akış valfi.",
    specs: {
      flowRate: "Yüksek Debi Kapasitesi",
      connection: "Flanşlı Endüstriyel Gövde",
      application: "Araç Asansörleri, Otopark & Ağır Sanayi",
      controlType: "Ağır Hizmet Akış Kontrolü",
    },
    highlights: [
      "Yüksek akış debilerinde güvenli ve dengeli hidrolik yönetim",
      "Ağır tonajlı yük ve araç asansörleri için optimize yapı",
      "Endüstriyel flanş bağlantıları ile sızdırmaz ve sağlam montaj",
      "Zorlu çalışma şartlarına karşı yüksek mukavemetli döküm",
    ],
    productLink: "/urunler/kontrol-valfleri/gv-valfi",
  },
  {
    id: "safety",
    tabLabel: "Güvenlik & UCM / A3",
    tabIcon: "🛡️",
    valveName: "Blain L Serisi (UCM/A3)",
    subtitle: "EN 81-20/50 Standartlarına Uyumlu Emniyet Valfi",
    badge: "EN 81-20/50 (A3)",
    image: "/images/L-series-1024x723.png",
    description:
      "İstenmeyen kabin hareketlerini (UCM) önlemek için geliştirilmiş, EN 81-20/50 standartlarına (A3) tam uyumlu güvenlik valfi serisi.",
    specs: {
      flowRate: "EV Serisi İle Tam Uyum",
      connection: "Doğrudan Valf Flanş Montajı",
      application: "EN 81-20 Standart Uyumu ve Modernizasyon",
      controlType: "Çift Emniyetli UCM Kilit Bloğu",
    },
    highlights: [
      "İstenmeyen kabin hareketlerini (UCM) mekanik olarak durdurma",
      "EN 81-20 ve EN 81-50 güvenlik standartlarına tam uyumluluk",
      "Mevcut Blain valf gövdelerine flanş ile doğrudan entegrasyon",
      "Hem yeni kurulumlar hem de modernizasyon projeleri için ideal",
    ],
    productLink: "/urunler/guvenlik-valfleri/l-serisi",
  },
];

export default function ValveSelectorWidget() {
  const [activeTab, setActiveTab] = useState<ProjectType>("passenger");

  const current = RECOMMENDATIONS.find((r) => r.id === activeTab) || RECOMMENDATIONS[0];

  return (
    <section aria-labelledby="assistant-title" className="bg-steel-50/70 py-20 px-5 sm:px-8 dark:bg-steel-950/60">
      <div className="mx-auto max-w-[1280px]">
        {/* Başlık Bloğu */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center text-brand-600 dark:text-accent-400">
            PROJE SEÇİM REHBERİ
          </p>
          <h2 id="assistant-title" className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-steel-900 dark:text-white">
            Uygulamanıza Göre Valf Serisini İnceleyin
          </h2>
          <p className="mt-4 text-steel-600 text-sm sm:text-base leading-relaxed dark:text-steel-400">
            Asansör tipinizi seçerek Blain kontrol valfi serilerini, temel teknik verilerini ve kullanım alanlarını görüntüleyin.
          </p>
        </div>

        {/* Tab Seçim Çubuğu */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {RECOMMENDATIONS.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center gap-2.5 rounded-full px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-brand-600 text-white shadow-glow scale-[1.02]"
                    : "border border-steel-200 bg-white text-steel-700 hover:border-brand-200 hover:bg-steel-50 dark:border-steel-800 dark:bg-steel-900 dark:text-steel-300 dark:hover:border-steel-700"
                }`}
              >
                <span className="text-base">{item.tabIcon}</span>
                <span>{item.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Seçilen Model Detay Kartı */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-steel-200/90 bg-white shadow-lift dark:border-steel-800 dark:bg-steel-900">
          <div className="grid lg:grid-cols-12 items-center">
            {/* Sol: Görsel Alanı */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-8 lg:p-12 bg-gradient-to-b from-steel-50/80 via-white to-steel-50/50 dark:from-steel-950 dark:to-steel-900 border-b lg:border-b-0 lg:border-r border-steel-100 dark:border-steel-800 min-h-[340px]">
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-950 dark:border-brand-800 dark:text-brand-300">
                  {current.badge}
                </span>
              </div>

              <div className="relative w-full max-w-[320px] aspect-[4/3] flex items-center justify-center">
                <Image
                  src={current.image}
                  alt={current.valveName}
                  width={420}
                  height={320}
                  className="object-contain max-h-[280px] drop-shadow-xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              <p className="mt-4 text-[0.75rem] text-steel-400 font-medium tracking-wide text-center">
                Blain Hydraulics GmbH • Heilbronn, Almanya
              </p>
            </div>

            {/* Sağ: Bilgi ve Özellikler */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-accent-400">
                  {current.subtitle}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-steel-900 dark:text-white">
                  {current.valveName}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-steel-600 dark:text-steel-300">
                  {current.description}
                </p>

                {/* 4'lü Teknik Metrik Izgarası */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-steel-100 py-5 dark:border-steel-800">
                  <div>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-steel-400 font-semibold">Debi Aralığı</span>
                    <span className="mt-1 block text-sm font-bold text-steel-900 dark:text-white">{current.specs.flowRate}</span>
                  </div>
                  <div>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-steel-400 font-semibold">Bağlantı / Ölçü</span>
                    <span className="mt-1 block text-sm font-bold text-steel-900 dark:text-white">{current.specs.connection}</span>
                  </div>
                  <div>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-steel-400 font-semibold">Uygulama Alanı</span>
                    <span className="mt-1 block text-sm font-bold text-steel-900 dark:text-white truncate" title={current.specs.application}>{current.specs.application}</span>
                  </div>
                  <div>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-steel-400 font-semibold">Kontrol Şekli</span>
                    <span className="mt-1 block text-sm font-bold text-brand-600 dark:text-accent-400 truncate" title={current.specs.controlType}>{current.specs.controlType}</span>
                  </div>
                </div>

                {/* Önemli Maddeler */}
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-steel-500">Öne Çıkan Özellikler</span>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {current.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-[0.82rem] text-steel-700 dark:text-steel-300">
                        <svg className="size-4 shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alt Eylem Butonları */}
              <div className="mt-8 pt-6 border-t border-steel-100 dark:border-steel-800 flex flex-wrap items-center gap-3">
                <Link
                  href={current.productLink}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
                >
                  <span>Seri Detaylarını İncele</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                <Link
                  href="/portal/calculator"
                  className="inline-flex items-center gap-2 rounded-full border border-steel-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-steel-800 shadow-xs transition-all duration-300 hover:bg-steel-50 hover:border-brand-300 dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200 dark:hover:bg-steel-700"
                >
                  <svg className="size-4 text-brand-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Hesaplama Aracıyla Boyutlandır</span>
                </Link>

                <a
                  href={`https://wa.me/905360256494?text=Merhaba,%20${encodeURIComponent(current.valveName)}%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 transition-all duration-300 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-300"
                >
                  <span>Teknik Destek &amp; Bilgi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
