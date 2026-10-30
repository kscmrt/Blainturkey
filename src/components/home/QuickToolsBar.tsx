import Link from "next/link";

const TOOLS = [
  {
    id: "calculator",
    title: "Hidrolik & Valf Hesaplayıcı",
    subtitle: "Mühendislik Aracı",
    description:
      "Kabin yükü, seyir hızı, silindir çapı ve basınca göre debi, motor gücü ve önerilen valf modelini hesaplayın.",
    href: "/portal/calculator",
    badge: "Hesaplama",
    badgeColor: "bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800",
    icon: (
      <svg className="size-6 text-brand-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    actionText: "Hesaplamaya Başla",
  },
  {
    id: "troubleshoot",
    title: "Teknik Destek & Sorun Giderme",
    subtitle: "Saha Desteği",
    description:
      "Blain hidrolik asansör valfleri için detaylı arıza tespiti, ayar prosedürleri ve videolu çözüm rehberi.",
    href: "/sorun-giderme",
    badge: "Arıza Teşhis",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
    icon: (
      <svg className="size-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    actionText: "Sorun Giderme Rehberi",
  },
  {
    id: "downloads",
    title: "Kataloglar & Dokümanlar",
    subtitle: "Teknik Arşiv",
    description:
      "Tüm Blain kontrol valfleri için teknik kataloglar, kullanım kılavuzları, montaj şemaları ve broşürler.",
    href: "/downloads",
    badge: "PDF / Doküman",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800",
    icon: (
      <svg className="size-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    actionText: "Dokümanları İncele",
  },
  {
    id: "modernization",
    title: "Modernizasyon Çözümleri",
    subtitle: "Standart Uyumu",
    description:
      "EV40 akıllı valf sistemi ve EN 81-20/50 UCM-A3 güvenlik valfleri ile mevcut hidrolik sistemlerin yenilenmesi.",
    href: "/modernization",
    badge: "Modernizasyon",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
    icon: (
      <svg className="size-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    actionText: "Çözümleri İncele",
  },
];

export default function QuickToolsBar() {
  return (
    <section aria-labelledby="quick-tools-title" className="relative z-20 -mt-10 px-5 sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Başlık ve Açıklama Çubuğu */}
        <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow text-brand-600 dark:text-accent-400">
              HIZLI ERİŞİM
            </span>
            <h2 id="quick-tools-title" className="text-2xl font-bold tracking-tight text-steel-900 sm:text-3xl dark:text-white">
              Teknik Çözümler &amp; Araçlar
            </h2>
          </div>
          <p className="text-sm text-steel-500 dark:text-steel-400 sm:max-w-xs">
            Asansör profesyonelleri ve teknik ekipler için hızlı erişim bağlantıları.
          </p>
        </div>

        {/* 4'lü Araç Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-steel-200/90 bg-white/95 p-6 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 dark:border-steel-800 dark:bg-steel-900/90 dark:hover:border-brand-600"
            >
              <div>
                {/* Üst Kısım: İkon ve Rozet */}
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-steel-50 border border-steel-200/70 shadow-xs transition-colors group-hover:bg-brand-50 group-hover:border-brand-200 dark:bg-steel-800 dark:border-steel-700 dark:group-hover:bg-brand-950/70">
                    {tool.icon}
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>

                {/* Başlık ve Metin */}
                <h3 className="mt-4 text-lg font-bold text-steel-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-accent-400">
                  {tool.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel-600 dark:text-steel-400">
                  {tool.description}
                </p>
              </div>

              {/* Alt Eylem Bağlantısı */}
              <div className="mt-6 flex items-center justify-between border-t border-steel-100 pt-4 text-xs font-semibold text-brand-600 group-hover:text-brand-700 dark:border-steel-800 dark:text-accent-400">
                <span>{tool.actionText}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
