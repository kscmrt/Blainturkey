import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

/**
 * Bento yerleşimi — Server Component. İstemciye JavaScript göndermez;
 * yalnızca giriş animasyonu için `<Reveal>` sarmalayıcısı istemci tarafındadır.
 */

const HIGHLIGHTS = [
  {
    title: "Yumuşak duruş eğrisi",
    body: "Ayrı ayarlanabilen yavaşlama ve duruş rampaları ile kabin, yükten bağımsız aynı konforda oturur.",
  },
  {
    title: "Sıcaklık dengeleme",
    body: "Yağ viskozitesi değişse de valf aynı hızı korur; yazın ve kışın seyahat süresi sabit kalır.",
  },
  {
    title: "Kendini temizleyen filtre",
    body: "Kademeli filtre yapısı partikülleri tutar, bakım aralığını uzatır, arıza riskini düşürür.",
  },
];

export default function EngineeringBento() {
  return (
    <section
      aria-labelledby="engineering-title"
      className="bg-white px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">Mühendislik</p>
          <h2
            id="engineering-title"
            className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-bold"
          >
            Tek gövdede dört ayrı görev
          </h2>
          <p className="lede mt-4">
            Blain valfi yalnızca bir yön kontrol elemanı değil; hız, basınç,
            sıcaklık ve emniyeti aynı döküm gövde içinde yöneten bütünleşik bir
            hidrolik beyindir.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {/* Ana kart — iki satır kaplar, görsel ağırlıklı */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-card bg-brand-950 p-8 shadow-lift sm:p-10">
              <Image
                src="/images/EV-Series-2-1024x708.png"
                alt="Blain EV Serisi kontrol valfleri"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-45 transition-transform duration-700 ease-brand group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-brand-950 via-brand-950/70 to-transparent"
              />

              <div className="relative">
                <p className="eyebrow text-accent-400">Amiral gemisi</p>
                <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  EV100 Serisi
                </h3>
                <p className="mt-3 max-w-md text-steel-300">
                  3/4&quot; ile 3&quot; arası altı ölçüde; 630 kg&apos;dan 5.000
                  kg&apos;a kadar tüm hidrolik asansör sınıflarını tek platformla
                  karşılar.
                </p>
                <Link
                  href="/urunler"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Seriyi incele <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          </Reveal>

          {HIGHLIGHTS.slice(0, 2).map((item, index) => (
            <Reveal key={item.title} delay={0.08 * (index + 1)}>
              <article className="flex h-full flex-col justify-between rounded-card border border-steel-200 bg-steel-50 p-7 transition-colors duration-500 hover:border-brand-200 hover:bg-brand-50">
                <h3 className="text-xl font-semibold text-steel-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-steel-600">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <article className="rounded-card border border-steel-200 bg-steel-50 p-7">
            <h3 className="text-xl font-semibold text-steel-900">
              {HIGHLIGHTS[2].title}
            </h3>
            <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-steel-600">
              {HIGHLIGHTS[2].body}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
