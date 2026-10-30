import Image from "next/image";
import Link from "next/link";

const PERKS = [
  {
    title: "Enerji Tüketimini %65'e Kadar Azaltır",
    desc: "En son VVVF teknolojisini entegre eden EV40, enerji tüketimini %65'e kadar azaltabilir ve yağ ısınmasını %50'ye kadar düşürür.",
    icon: (
      <svg className="size-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Panoyu Değiştirmeden Kolay Yükseltme",
    desc: "Mevcut valf bir Blain EV100 ise, mevcut kumanda panosunu değiştirmeye gerek kalmadan retrofit kitiyle EV40'a yükseltilebilir.",
    icon: (
      <svg className="size-5 text-brand-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "EN 81-20 / EN 81-50 (A3) Güvenliği",
    desc: "L10 ve iL10-S güvenlik blokları, istem dışı kabin hareketini (UCM) önlemek için EN 81-20/50 standartlarına tam uyumludur.",
    icon: (
      <svg className="size-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Yaskawa VVVF Sürücü Entegrasyonu",
    desc: "Yukarı yöndeki seyir için Yaskawa L1000H VVVF sürücüsü ile entegre olur; aşağı yönlü seyri ise doğrudan EV40 valfi yönetir.",
    icon: (
      <svg className="size-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ModernizationSpotlight() {
  return (
    <section aria-labelledby="modernization-title" className="bg-steel-50/80 py-24 px-5 sm:px-8 dark:bg-steel-950">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Sol Kolon: Bilgiler ve Faydalar */}
          <div className="lg:col-span-7">
            <span className="eyebrow text-brand-600 dark:text-accent-400">
              MODERNİZASYON ÇÖZÜMLERİ
            </span>
            <h2 id="modernization-title" className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-steel-900 leading-tight dark:text-white">
              Hidrolik Sistemlerde <br className="hidden sm:block" />
              <span className="text-brand-600 dark:text-accent-400">Verimlilik ve Güvenilirlik</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel-600 dark:text-steel-300">
              Blain EV40 akıllı valfi ve L serisi güvenlik blokları, mevcut sistemlerin modernizasyonunu basitleştirir. Mevcut tesisat ve kumanda panosunu koruyarak enerji verimliliği ve standart uyumu kazanın.
            </p>

            {/* 4 Önemli Fayda Maddesi */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PERKS.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-steel-200/80 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-steel-800 dark:bg-steel-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-steel-50 border border-steel-100 dark:bg-steel-800 dark:border-steel-700">
                      {p.icon}
                    </div>
                    <h3 className="text-sm font-bold text-steel-900 dark:text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-steel-600 dark:text-steel-400">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Eylem Butonları */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/modernization"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
              >
                <span>Modernizasyon Sayfasını İncele</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <a
                href="https://wa.me/905360256494?text=Merhaba,%20EV40%20ve%20modernizasyon%20%C3%A7%C3%B6z%C3%BCmleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-steel-300 bg-white px-5 py-3 text-sm font-semibold text-steel-800 shadow-xs transition-all duration-300 hover:bg-steel-50 hover:border-brand-300 dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200"
              >
                <svg className="size-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Teknik Danışmanlık Al</span>
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Görsel Alanı */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl border border-steel-200 bg-white p-6 shadow-lift dark:border-steel-800 dark:bg-steel-900">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-steel-100 dark:bg-steel-800">
                <Image
                  src="/images/EV40-1024x572.png"
                  alt="Blain EV40 Akıllı VVVF Valfi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Alt Bilgi Bandı */}
              <div className="mt-5 rounded-xl bg-steel-50 p-4 border border-steel-100 dark:bg-steel-800/80 dark:border-steel-700">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-steel-900 dark:text-white">Blain EV40 &amp; VVVF Çözümü</span>
                    <p className="text-[0.7rem] text-steel-500 dark:text-steel-400">Akıllı Telefon Kontrollü Valf Sistemi</p>
                  </div>
                  <span className="rounded-full bg-brand-100 border border-brand-300 px-2.5 py-1 text-[0.68rem] font-bold text-brand-800 dark:bg-brand-950 dark:border-brand-800 dark:text-brand-300">
                    VVVF Teknolojisi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
