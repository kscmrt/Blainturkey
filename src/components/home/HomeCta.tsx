import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

const PATHS = [
  {
    href: "/urunler",
    title: "Ürün ailesi",
    body: "EV100, KV1P, güç üniteleri ve emniyet valfleri.",
  },
  {
    href: "/modernization",
    title: "Modernizasyon",
    body: "Mevcut tesisatı sökmeden konfor ve verim kazanın.",
  },
  {
    href: "/downloads",
    title: "Dokümanlar",
    body: "Kataloglar, montaj kılavuzları ve teknik çizimler.",
  },
] as const;

export default function HomeCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-brand-950 px-5 py-24 text-white sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent-400">Nereden devam edelim?</p>
          <h2
            id="cta-title"
            className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-bold text-white"
          >
            Projenize uygun valfi birlikte seçelim
          </h2>
          <p className="lede mt-4 text-steel-300">
            Kabin yükü, kat sayısı ve debi bilgilerinizi paylaşın; Blain Türkiye
            teknik ekibi doğru seriyi ve ayar değerlerini önersin.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Teklif İsteyin
            </Link>
            <Link href="/service" className="btn btn-invert">
              Servis Desteği
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {PATHS.map((path, index) => (
            <Reveal key={path.href} delay={0.08 * index}>
              <Link
                href={path.href}
                className="group flex h-full flex-col rounded-card border border-white/10 bg-white/5 p-7 transition-colors duration-500 hover:border-accent-500/40 hover:bg-white/10"
              >
                <h3 className="flex items-center justify-between text-lg font-semibold text-white">
                  {path.title}
                  <span
                    aria-hidden
                    className="text-accent-400 transition-transform duration-500 ease-brand group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {path.body}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
