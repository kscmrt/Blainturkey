const STATS = [
  {
    value: "1971",
    label: "Kuruluş Yılı",
    description: "Heilbronn, Almanya merkezli 50+ yıllık mühendislik tecrübesi",
  },
  {
    value: "75+",
    label: "Ülkeye Sevkiyat",
    description: "Dünya genelinde hidrolik asansör sektöründe küresel erişim",
  },
  {
    value: "ISO 9001",
    label: "Sertifikalı Üretim",
    description: "TÜV onaylı kalite yönetim sistemi ve robotik üretim hattı",
  },
  {
    value: "%100",
    label: "Almanya'da Üretim",
    description: "Tüm gövdeler Almanya'da dökülür, işlenir ve basınç testinden geçer",
  },
];

const CERTIFICATES = [
  { name: "ISO 9001", desc: "Kalite Yönetim Sistemi" },
  { name: "TÜV Sertifikası", desc: "Tip İnceleme Onayı" },
  { name: "CE Uygunluğu", desc: "Avrupa Standartları" },
  { name: "EN 81-20 / EN 81-50", desc: "A3 / UCM Güvenlik Standardı" },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Blain Kalite Standartları ve Rakamlar"
      className="border-y border-steel-200/90 bg-steel-50/70 py-16 px-5 sm:px-8 dark:border-steel-800 dark:bg-steel-950/40"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* İstatistikler */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-600 dark:text-accent-400">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-bold text-steel-900 dark:text-white">
                {stat.label}
              </span>
              <p className="mt-1 text-xs leading-relaxed text-steel-500 dark:text-steel-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sertifikasyon ve Uyumluluk Bandı */}
        <div className="mt-12 pt-8 border-t border-steel-200/80 dark:border-steel-800 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-steel-400">
            Standartlar &amp; Sertifikalar:
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-lg border border-steel-200 bg-white px-3 py-1.5 shadow-2xs dark:border-steel-800 dark:bg-steel-900"
              >
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-steel-800 dark:text-steel-200">
                  {cert.name}
                </span>
                <span className="text-[0.68rem] text-steel-400 hidden sm:inline">
                  • {cert.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
