"use client";

import Link from "next/link";

export type ValvePartItem = {
  id: string;
  tag: string;
  name: string;
  category: string;
  angleY: number; // 3D model hedef açı ofseti (radyan)
  angleX: number;
  description: string;
  adjustmentTip: string;
  manualLink: string;
  troubleLink: string;
};

export const VALVE_PARTS: ValvePartItem[] = [
  {
    id: "up-speed",
    tag: "1 & 2",
    name: "Yukarı Hız & İvmelenme Vidaları",
    category: "Hız Regülasyonu",
    angleY: 0.35,
    angleX: 0.1,
    description:
      "1 nolu vida tam seyahat hızını (V-Max), 2 nolu vida ise kalkış anındaki ivmelenme süresini ayarlar.",
    adjustmentTip:
      "Ayar vidasını saat yönünde sıkmak hızı düşürür; gevşetmek hızı ve kalkış sertliğini artırır.",
    manualLink: "/downloads",
    troubleLink: "/service",
  },
  {
    id: "solenoids",
    tag: "A / B",
    name: "Solenoid Kontrol Bobinleri",
    category: "Elektromekanik Kumanda",
    angleY: -0.4,
    angleX: 0.15,
    description:
      "Kumanda panosundan aldığı elektrik sinyali ile yön ve hız kademelerini milisaniyeler içinde anahtarlar.",
    adjustmentTip:
      "Bobin soketlerindeki LED göstergeler sinyal durumunu doğrulamak için kontrol edilmelidir.",
    manualLink: "/downloads",
    troubleLink: "/service",
  },
  {
    id: "down-level",
    tag: "3 & 4",
    name: "Yavaşlama & Seviyeleme Ayarı",
    category: "Konfor & Duruş",
    angleY: 0.5,
    angleX: -0.1,
    description:
      "Kata yaklaşırken yavaşlama mesafesini ve seviyeleme hızını (Creep Speed) milimetrik hassasiyette belirler.",
    adjustmentTip:
      "Kat eşik farkı veya ani duruş hissedilirse 4 nolu seviyeleme vidası çeyrek tur döndürülerek hassas ayarlanır.",
    manualLink: "/downloads",
    troubleLink: "/service",
  },
  {
    id: "relief-valve",
    tag: "P-Max",
    name: "Basınç Emniyet Valfi (Relief)",
    category: "Güvenlik & Emniyet",
    angleY: -0.6,
    angleX: -0.1,
    description:
      "Sistemde oluşabilecek aşırı basınç durumunda hidrolik yağı anında tanka tahliye ederek sistemi korur.",
    adjustmentTip:
      "Fabrika ayarı nominal çalışma basıncının %140'ına kalibrelidir; mühürlü vidadır.",
    manualLink: "/downloads",
    troubleLink: "/service",
  },
  {
    id: "manual-lowering",
    tag: "M-Down",
    name: "Manuel Acil İndirme Vidası",
    category: "Acil Kurtarma",
    angleY: 0.1,
    angleX: -0.2,
    description:
      "Enerji kesintisi veya pano arızalarında kabinin yer çekimiyle güvenle en yakın kata indirilmesini sağlar.",
    adjustmentTip:
      "Kırmızı düğmeyi saat yönünün tersine çevirerek kontrollü hızda iniş sağlanır.",
    manualLink: "/downloads",
    troubleLink: "/service",
  },
];

type ValveInspectorDockProps = {
  isOpen: boolean;
  selectedPartId: string;
  onSelectPart: (id: string) => void;
  onClose: () => void;
};

export default function ValveInspectorDock({
  isOpen,
  selectedPartId,
  onSelectPart,
  onClose,
}: ValveInspectorDockProps) {
  const activePart =
    VALVE_PARTS.find((p) => p.id === selectedPartId) ?? VALVE_PARTS[0];

  if (!isOpen) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-start justify-end p-4 sm:p-6 lg:p-8">
      {/* Sağ Yan Panel / Dock */}
      <aside
        aria-label="Valf Parça İnceleme Paneli"
        className="pointer-events-auto mt-16 flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-steel-700/80 dark:bg-steel-900/90 sm:max-w-md"
      >
        {/* Başlık ve Kapatma */}
        <div className="flex items-center justify-between border-b border-steel-200/60 px-5 py-4 dark:border-steel-800">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <h3 className="text-xs font-bold tracking-tight text-steel-900 uppercase dark:text-white">
                Parça & Ayar Rehberi
              </h3>
              <p className="text-[0.7rem] text-steel-500 dark:text-steel-400">
                Detaylar için parça seçin
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Paneli Kapat"
            className="rounded-full p-1.5 text-steel-400 transition hover:bg-steel-100 hover:text-steel-700 dark:hover:bg-steel-800 dark:hover:text-steel-200"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Parça Seçim Sekmeleri */}
        <div className="flex gap-1.5 overflow-x-auto border-b border-steel-200/50 p-2.5 scrollbar-none dark:border-steel-800">
          {VALVE_PARTS.map((part) => {
            const isSelected = part.id === activePart.id;
            return (
              <button
                key={part.id}
                type="button"
                onClick={() => onSelectPart(part.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold transition-all ${
                  isSelected
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-steel-100/70 text-steel-600 hover:bg-steel-200/60 dark:bg-steel-800/60 dark:text-steel-300 dark:hover:bg-steel-700"
                }`}
              >
                <span className="opacity-80">{part.tag}</span>
                <span className="hidden sm:inline">{part.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Aktif Parça Detay Kartı */}
        <div className="flex flex-col gap-3.5 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[0.68rem] font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                {activePart.category}
              </span>
              <h4 className="mt-1.5 text-sm font-bold text-steel-900 dark:text-white">
                {activePart.name}
              </h4>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-steel-100 font-mono text-xs font-bold text-steel-800 dark:bg-steel-800 dark:text-steel-200">
              {activePart.tag}
            </span>
          </div>

          <p className="text-[0.78rem] leading-relaxed text-steel-600 dark:text-steel-300">
            {activePart.description}
          </p>

          {/* Ayar & Saha İpucu */}
          <div className="rounded-2xl border border-brand-200/60 bg-brand-50/60 p-3 text-[0.74rem] text-brand-950 dark:border-brand-900/40 dark:bg-brand-950/40 dark:text-brand-200">
            <span className="font-bold text-brand-700 dark:text-brand-400">
              Saha Ayar İpucu:{" "}
            </span>
            {activePart.adjustmentTip}
          </div>

          {/* Eylem Butonları */}
          <div className="flex items-center gap-2 pt-1">
            <Link
              href={activePart.troubleLink}
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand-600 py-2 text-[0.75rem] font-semibold text-white transition hover:bg-brand-700"
            >
              <span>Arıza Rehberi</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={activePart.manualLink}
              className="flex flex-1 items-center justify-center rounded-xl border border-steel-300 bg-white/80 py-2 text-[0.75rem] font-medium text-steel-700 transition hover:bg-steel-100 dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200 dark:hover:bg-steel-700"
            >
              Teknik Kılavuz
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
