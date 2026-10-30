import Image from "next/image";
import Link from "next/link";

export default function EngineeringBento() {
  return (
    <section
      aria-labelledby="engineering-title"
      className="bg-white py-24 px-5 sm:px-8 dark:bg-steel-900"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Başlık Alanı */}
        <div className="max-w-2xl">
          <p className="eyebrow text-brand-600 dark:text-accent-400">
            MÜHENDİSLİK
          </p>
          <h2
            id="engineering-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-steel-900 leading-tight dark:text-white"
          >
            Tek Gövdede Dört Ayrı Görev
          </h2>
          <p className="mt-4 text-steel-600 text-sm sm:text-base leading-relaxed dark:text-steel-400">
            Blain EV100 valfi; yön kontrolü, hız regülasyonu ve güvenlik mekanizmalarını tek bir döküm gövde içinde birleştiren, 50+ yıl kanıtlanmış bir asansör kontrol sistemidir.
          </p>
        </div>

        {/* Bento Izgarası */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-12">
          {/* 1. Büyük Amiral Kart (8 kolon) */}
          <div className="md:col-span-3 lg:col-span-8 group relative overflow-hidden rounded-3xl bg-brand-950 p-8 sm:p-12 text-white shadow-lift flex flex-col justify-between min-h-[380px]">
            <div className="absolute right-0 top-0 h-full w-full lg:w-3/5 opacity-35 mix-blend-luminosity transition-transform duration-700 ease-brand group-hover:scale-105 pointer-events-none">
              <Image
                src="/images/EV-Series-2-1024x708.png"
                alt="Blain EV Serisi Kontrol Valfleri"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-right"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 px-3 py-1 text-xs font-bold text-accent-300">
                AMİRAL GEMİSİ
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                EV100 Serisi
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-300">
                ¾&quot; ile 2½&quot; arası ölçülerde; 10 ile 1530 l/min debi aralığında hidrolik asansör sınıflarını tek platformla karşılar. Kolay mekanik ayarlama ve sarsıntısız seyahat sunar.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/urunler/kontrol-valfleri/ev-serisi"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-brand-950 shadow-sm transition-all hover:bg-steel-100 hover:-translate-y-0.5"
              >
                <span>Seriyi İncele</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <span className="text-xs text-steel-400 font-medium">
                10 - 1530 l/min Akış Aralığı
              </span>
            </div>
          </div>

          {/* 2. Çift Hızlı İniş Kontrolü */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl border border-steel-200/90 bg-steel-50/80 p-8 shadow-soft flex flex-col justify-between dark:border-steel-800 dark:bg-steel-950">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-steel-900 dark:text-white">
                Çift Hızlı İniş Kontrolü
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel-600 dark:text-steel-400">
                Tüm EV modelleri, tam hız ve yavaşlama (seviyeleme) hızlarının ayrı ayarlanabilmesini sağlar — kolay mekanik ayarlama, sarsıntısız seyahat.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-200/60 dark:border-steel-800 text-xs font-semibold text-brand-600 dark:text-accent-400">
              Mekanik Bağımsız Ayar
            </div>
          </div>

          {/* 3. Pürüzsüz ve Güvenilir Çalışma */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl border border-steel-200/90 bg-white p-8 shadow-soft flex flex-col justify-between dark:border-steel-800 dark:bg-steel-950">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-steel-900 dark:text-white">
                Pürüzsüz ve Güvenilir Çalışma
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel-600 dark:text-steel-400">
                Zorlu yük ve sıcaklık koşullarında dahi, yolcular için güvenli ve konforlu bir deneyim — 50+ yıllık Alman mühendisliği kanıtı.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-200/60 dark:border-steel-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              50+ Yıllık Güvenilirlik
            </div>
          </div>

          {/* 4. Geniş Akış ve Basınç Aralığı */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl border border-steel-200/90 bg-white p-8 shadow-soft flex flex-col justify-between dark:border-steel-800 dark:bg-steel-950">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-steel-900 dark:text-white">
                Geniş Akış ve Basınç Aralığı
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel-600 dark:text-steel-400">
                ¾&quot; ile 2.5&quot; arası bağlantılarda 10-1530 l/min debi aralığında — tüm asansör konfigürasyonlarında kusursuz uyum.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-200/60 dark:border-steel-800 text-xs font-semibold text-blue-600 dark:text-blue-400">
              ¾&quot; ile 2.5&quot; Bağlantı Ölçüleri
            </div>
          </div>

          {/* 5. EV40 Akıllı VVVF Modernizasyonu */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl border border-steel-200/90 bg-white p-8 shadow-soft flex flex-col justify-between dark:border-steel-800 dark:bg-steel-950">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-steel-900 dark:text-white">
                EV40 Akıllı Valf Sistemi
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel-600 dark:text-steel-400">
                Akıllı telefon kontrollü ve VVVF entegrasyonlu gelişmiş valf. Enerji tüketimini %65&apos;e, yağ ısınmasını %50&apos;ye kadar azaltır.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-200/60 dark:border-steel-800 text-xs font-semibold text-amber-700 dark:text-amber-400">
              %65&apos;e Varan Enerji Tasarrufu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
