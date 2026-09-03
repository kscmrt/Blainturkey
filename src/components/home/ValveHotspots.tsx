"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";
import type { ValveId } from "./valveCatalog";

export type HotspotData = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  position: [number, number, number];
  valveCompat?: ValveId[];
};

export const HOTSPOTS_DATA: HotspotData[] = [
  {
    id: "up-speed",
    number: "1 & 2",
    title: "Yukarı Hız & İvmelenme Ayarı",
    category: "Hız Regülasyonu",
    description:
      "1 nolu ayar tam seyahat hızını, 2 nolu ayar ise kalkış ivmelenmesini belirler. Kabinin yumuşak ve sarsıntısız kalkmasını sağlar.",
    position: [0.65, 0.45, 0.55],
  },
  {
    id: "solenoids",
    number: "A/B",
    title: "Solenoid Kontrol Bobinleri",
    category: "Elektromekanik Kumanda",
    description:
      "Kumanda panosundan gelen sinyalle yön ve hız kademelerini devreye alır. 12V, 24V, 110V ve 230V seçenekleri mevcuttur.",
    position: [-0.55, 0.65, 0.45],
  },
  {
    id: "down-level",
    number: "3 & 4",
    title: "Yavaşlama & Seviyeleme Ayarı",
    category: "Konfor & Duruş",
    description:
      "Kata yaklaşırken yavaşlama hızını ve katta durma seviyesini milimetrik olarak ayarlar. Kat eşik farklarını sıfırlar.",
    position: [0.6, -0.25, 0.65],
  },
  {
    id: "relief-valve",
    number: "P",
    title: "Basınç Emniyet Valfi",
    category: "Güvenlik & Emniyet",
    description:
      "Sistemde aşırı basınç oluştuğunda hidrolik yağı doğrudan tanka tahliye ederek silindir ve hortum patlamalarını önler.",
    position: [-0.5, -0.5, 0.5],
  },
  {
    id: "manual-lowering",
    number: "M",
    title: "Manuel Acil İndirme Vidası",
    category: "Acil Durum Kurtarma",
    description:
      "Elektrik kesintisinde veya arıza anında kabini güvenle en yakın kata indirmek için kullanılan mekanik el vidası.",
    position: [0.1, -0.65, 0.75],
  },
];

type ValveHotspotsProps = {
  valveId: ValveId;
  showHotspots: boolean;
};

export default function ValveHotspots({
  valveId,
  showHotspots,
}: ValveHotspotsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (!showHotspots) return null;

  return (
    <group>
      {HOTSPOTS_DATA.map((spot) => {
        const isActive = activeId === spot.id;

        return (
          <group key={spot.id} position={spot.position}>
            <Html center distanceFactor={14} zIndexRange={[100, 0]}>
              <div className="relative flex items-center justify-center">
                {/* Hotspot Düğmesi */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(isActive ? null : spot.id);
                  }}
                  onMouseEnter={() => setActiveId(spot.id)}
                  aria-label={`${spot.title} detayını gör`}
                  className={`group relative flex size-7 items-center justify-center rounded-full text-[0.72rem] font-bold shadow-lg transition-all duration-300 ${
                    isActive
                      ? "scale-125 bg-brand-600 text-white ring-4 ring-brand-400/50"
                      : "bg-white/90 text-brand-700 ring-2 ring-brand-600/40 hover:scale-110 hover:bg-brand-600 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{spot.number}</span>
                  {/* Animasyonlu Halka */}
                  <span
                    className={`absolute inset-0 -z-10 animate-ping rounded-full bg-brand-400 opacity-60 duration-1000 ${
                      isActive ? "hidden" : "block"
                    }`}
                  />
                </button>

                {/* Açılır Bilgi Kartı */}
                {isActive && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{ animation: "fadeUp 0.25s ease-out forwards" }}
                    className="absolute bottom-9 left-1/2 z-50 w-64 -translate-x-1/2 rounded-2xl border border-white/80 bg-white/95 p-4 text-left shadow-2xl backdrop-blur-xl dark:border-steel-700 dark:bg-steel-900/95"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-steel-100 pb-2 dark:border-steel-800">
                      <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[0.68rem] font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                        {spot.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveId(null)}
                        className="text-xs text-steel-400 hover:text-steel-600 dark:text-steel-500"
                      >
                        ✕
                      </button>
                    </div>

                    <h4 className="mt-2 text-sm font-bold text-steel-900 dark:text-white">
                      {spot.title}
                    </h4>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-steel-600 dark:text-steel-300">
                      {spot.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between pt-2">
                      <a
                        href="/service"
                        className="text-[0.75rem] font-semibold text-brand-600 hover:underline dark:text-accent-400"
                      >
                        Arıza Rehberi →
                      </a>
                      <a
                        href="/downloads"
                        className="text-[0.75rem] font-medium text-steel-500 hover:text-steel-800 dark:text-steel-400"
                      >
                        Kılavuz
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
