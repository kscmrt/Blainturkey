import Link from "next/link";

const QUICK_PATHS = [
  {
    href: "/urunler",
    title: "Ürün Kataloğu",
    body: "EV100, KV1P, EV40 ve güç ünitelerinin detaylı teknik verileri.",
    badge: "Katalog",
  },
  {
    href: "/portal/calculator",
    title: "Hesaplama Aracı",
    body: "Kabin yükü, seyir mesafesi ve debiye göre otomatik valf ve motor seçimi.",
    badge: "Mühendislik",
  },
  {
    href: "/sorun-giderme",
    title: "Arıza & Ayar Rehberi",
    body: "Saha teknisyenleri için adım adım valf ayarları ve sorun giderme kılavuzu.",
    badge: "Teknik Servis",
  },
  {
    href: "/modernization",
    title: "Modernizasyon",
    body: "Mevcut tesisatı sökmeden EN 81-20 / A3 standartlarına geçiş çözümleri.",
    badge: "EN 81-20",
  },
];

export default function HomeCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-brand-950 px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Arka Plan Işık Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-accent-500/20 via-brand-700/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Üst Kısım: Başlık, Açıklama ve Ana Butonlar */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-3.5 py-1 text-xs font-bold text-accent-300">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              BLAİN TÜRKİYE TEKNİK VE SATIŞ DESTEĞİ
            </span>
            <h2
              id="cta-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Projenize Uygun Valfi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-blue-400">
                Birlikte Belirleyelim
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-steel-300">
              Kabin yükü, kat sayısı ve debi bilgilerinizi paylaşın; Blain Türkiye teknik ekibi doğru seriyi ve ayar değerlerini önersin.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-brand-950 shadow-glow transition-all duration-300 hover:bg-accent-400 hover:-translate-y-0.5"
              >
                <span>Teklif İsteyin</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <a
                href="https://wa.me/905360256494?text=Merhaba,%20projemiz%20i%C3%A7in%20valf%20se%C3%A7imi%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                <svg className="size-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp ile Danışın</span>
              </a>
            </div>
          </div>

          {/* Sağ Kolon: İletişim Kartı */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              Doğrulanmış İletişim Bilgileri
            </h3>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-steel-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-steel-400">Telefon:</span>
                <a href="tel:02165920800" className="font-bold text-white hover:text-accent-400">
                  (0216) 592 08 00
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-steel-400">WhatsApp Destek:</span>
                <a href="https://wa.me/905360256494" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-accent-400">
                  +90 536 025 6494
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-steel-400">E-Posta:</span>
                <a href="mailto:info@blain.com" className="font-semibold text-white hover:text-accent-400">
                  info@blain.com
                </a>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="text-steel-400">Adres:</span>
                <span className="text-xs text-steel-200">
                  Battalgazi, AYTOP Gıdacılar Sitesi 2G17, 34934 Sultanbeyli / İstanbul
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım: 4 Hızlı Yönlendirme Kartı */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_PATHS.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-accent-500/50 hover:bg-white/10 hover:-translate-y-1"
            >
              <div>
                <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[0.65rem] font-bold text-accent-300">
                  {path.badge}
                </span>
                <h4 className="mt-3 flex items-center justify-between text-base font-bold text-white">
                  <span>{path.title}</span>
                  <span
                    aria-hidden="true"
                    className="text-accent-400 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-steel-400">
                  {path.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
