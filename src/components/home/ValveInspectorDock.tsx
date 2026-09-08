"use client";

import { useState } from "react";
import Link from "next/link";

export type AdjustmentGroup = "up" | "down" | "solenoid" | "safety";

export type ValveSpecItem = {
  id: string;
  tag: string;
  name: string;
  nameEn: string;
  group: AdjustmentGroup;
  angleY: number;
  angleX: number;
  clockwiseEffect: string;
  counterClockwiseEffect: string;
  officialFunction: string;
  factorySetting: string;
  solenoidCondition: string;
};

export const OFFICIAL_VALVE_DATA: ValveSpecItem[] = [
  // --- YUKARI YÖN AYARLARI (1 - 5) ---
  {
    id: "adj-1",
    tag: "Ayar 1",
    name: "By-pass (Yukarı Kalkış & Gecikme)",
    nameEn: "1 By-pass (Up Start Delay)",
    group: "up",
    angleY: 0.35,
    angleX: 0.1,
    clockwiseEffect: "İçe (sağa): By-pass basıncını artırır, kalkış gecikmesini kısaltır (daha çabuk kalkış).",
    counterClockwiseEffect: "Dışa (sola): By-pass basıncını düşürür, kalkış gecikmesini uzatır (motor yüksüz kalkar).",
    officialFunction:
      "Pompa motoru ilk çalıştığında yağın by-pass kanalı üzerinden tanka dönmesini ve motor nominal devrine ulaştığında kabinin sarsıntısız hareket etmesini sağlar.",
    factorySetting: "Vidayı tamamen içeri çevirip 2.5 tur dışarı açın.",
    solenoidCondition: "Motor: ÇALIŞIYOR | Bobinler: ENERJİSİZ",
  },
  {
    id: "adj-2",
    tag: "Ayar 2",
    name: "Yukarı İvmelenme (Hızlanma)",
    nameEn: "2 Up Acceleration",
    group: "up",
    angleY: 0.45,
    angleX: 0.15,
    clockwiseEffect: "İçe (sağa): Hızlanma süresini uzatır (daha yavaş ve yumuşak ivmelenme).",
    counterClockwiseEffect: "Dışa (sola): Hızlanma süresini kısaltır (tam hıza daha seri geçiş).",
    officialFunction:
      "Kabinin başlangıç hareketinden yukarı tam seyahat hızına (Up Full Speed) geçiş ivmesini ve yumuşaklığını düzenler.",
    factorySetting: "Vidayı tamamen içeri çevirip 1.5 tur dışarı açın.",
    solenoidCondition: "Motor: ÇALIŞIYOR | Bobinler: ENERJİSİZ",
  },
  {
    id: "adj-3",
    tag: "Ayar 3",
    name: "Yukarı Yavaşlama Rampası",
    nameEn: "3 Up Deceleration",
    group: "up",
    angleY: 0.55,
    angleX: -0.05,
    clockwiseEffect: "İçe (sağa): Yavaşlama mesafesini kısaltır (daha sert frenleme).",
    counterClockwiseEffect: "Dışa (sola): Yavaşlama mesafesini uzatır (daha yumuşak yavaşlama).",
    officialFunction:
      "A bobini enerjilendiğinde kabinin tam seyir hızından yukarı seviyeleme hızına (Up Leveling) geçiş mesafesini ve frenleme eğrisini ayarlar.",
    factorySetting: "Vidayı tamamen içeri çevirip 2 tur dışarı açın.",
    solenoidCondition: "Motor: ÇALIŞIYOR | Bobin A: ENERJİLİ",
  },
  {
    id: "adj-4",
    tag: "Ayar 4",
    name: "Yukarı Seviyeleme Hızı",
    nameEn: "4 Up Leveling Speed",
    group: "up",
    angleY: 0.65,
    angleX: -0.15,
    clockwiseEffect: "İçe (sağa): Yukarı seviyeleme hızını düşürür.",
    counterClockwiseEffect: "Dışa (sola): Yukarı seviyeleme hızını artırır.",
    officialFunction:
      "Kabinin yukarı yönde kat seviyesine yanaşırkenki düşük seviyeleme hızının (Up Leveling Speed) büyüklüğünü belirler.",
    factorySetting: "Nominal seviyeleme hızı 0.08 - 0.12 m/s.",
    solenoidCondition: "Motor: ÇALIŞIYOR | Bobin A: ENERJİLİ",
  },
  {
    id: "adj-5",
    tag: "Ayar 5",
    name: "Yukarı Yumuşak Duruş",
    nameEn: "5 Up Soft Stop",
    group: "up",
    angleY: 0.25,
    angleX: 0.2,
    clockwiseEffect: "İçe (sağa): Motor durduğunda duruşu sertleştirir.",
    counterClockwiseEffect: "Dışa (sola): Motor durduğunda duruşu yumuşatır ve sönümler.",
    officialFunction:
      "Pompa motorunun enerjisi kesildiğinde ana çekvalfin kapanma karakteristiğini kontrol ederek katta sarsıntısız duruş sağlar.",
    factorySetting: "Vidayı tamamen içeri çevirip 1.5 tur dışarı açın.",
    solenoidCondition: "Motor: DURDU | Çekvalf Kapanış Fazı",
  },

  // --- AŞAĞI YÖN AYARLARI (6 - 9) ---
  {
    id: "adj-6",
    tag: "Ayar 6",
    name: "Aşağı İvmelenme (Kalkış)",
    nameEn: "6 Down Acceleration",
    group: "down",
    angleY: -0.3,
    angleX: 0.1,
    clockwiseEffect: "İçe (sağa): Aşağı kalkışı geciktirir ve yumuşatır (daha yavaş hızlanma).",
    counterClockwiseEffect: "Dışa (sola): Aşağı kalkış ivmesini artırır (daha seri iniş başlangıcı).",
    officialFunction:
      "C ve B bobinleri enerjilendiğinde iniş ana sürgüsünün açılma hızını ve aşağı yöndeki kalkış konforunu düzenler.",
    factorySetting: "Vidayı tamamen içeri çevirip 2 tur dışarı açın.",
    solenoidCondition: "Motor: KAPALI | Bobin B + C: ENERJİLİ",
  },
  {
    id: "adj-7",
    tag: "Ayar 7",
    name: "Aşağı Tam Hız Debisi",
    nameEn: "7 Down Full Speed",
    group: "down",
    angleY: -0.45,
    angleX: 0.05,
    clockwiseEffect: "İçe (sağa): Maksimum iniş hızını azaltır.",
    counterClockwiseEffect: "Dışa (sola): Maksimum iniş hızını artırır.",
    officialFunction:
      "Aşağı yöndeki maksimum nominal seyir hızını (Down Full Speed) ana iniş sürgüsünün strokunu sınırlayarak belirler.",
    factorySetting: "Proje anma hızına göre ayarlanır.",
    solenoidCondition: "Motor: KAPALI | Bobin B + C: ENERJİLİ",
  },
  {
    id: "adj-8",
    tag: "Ayar 8",
    name: "Aşağı Yavaşlama Rampası",
    nameEn: "8 Down Deceleration",
    group: "down",
    angleY: -0.55,
    angleX: -0.1,
    clockwiseEffect: "İçe (sağa): Yavaşlama süresini uzatır (daha yumuşak ve uzun frenleme).",
    counterClockwiseEffect: "Dışa (sola): Yavaşlama süresini kısaltır (daha kısa mesafede yavaşlama).",
    officialFunction:
      "B bobininin enerjisi kesildiğinde (C bobini enerjili kalır) tam hızdan aşağı seviyeleme hızına geçiş yumuşaklığını ayarlar.",
    factorySetting: "Vidayı tamamen içeri çevirip 2.5 tur dışarı açın.",
    solenoidCondition: "Motor: KAPALI | Bobin C: ENERJİLİ, Bobin B: ENERJİSİZ",
  },
  {
    id: "adj-9",
    tag: "Ayar 9",
    name: "Aşağı Seviyeleme Hızı & Duruş",
    nameEn: "9 Down Leveling & Stop",
    group: "down",
    angleY: -0.65,
    angleX: -0.15,
    clockwiseEffect: "İçe (sağa): Aşağı seviyeleme hızını düşürür.",
    counterClockwiseEffect: "Dışa (sola): Aşağı seviyeleme hızını artırır.",
    officialFunction:
      "Aşağı yönde kat seviyesine yanaşma hızını (Down Leveling Speed) ve C bobini enerjisi kesildiğinde iniş duruş konforunu ayarlar.",
    factorySetting: "Nominal seviyeleme hızı 0.08 - 0.12 m/s.",
    solenoidCondition: "Motor: KAPALI | Bobin C: ENERJİLİ (Duruş anında enerjisiz)",
  },

  // --- SOLENOID BOBİNLER (A, B, C, D) ---
  {
    id: "sol-a",
    tag: "Bobin A",
    name: "Yukarı Yavaşlama Bobini",
    nameEn: "Solenoid A (Up Deceleration)",
    group: "solenoid",
    angleY: 0.1,
    angleX: 0.25,
    clockwiseEffect: "Elektromekanik pilot valf.",
    counterClockwiseEffect: "Sol valf kulesinde konumlanır.",
    officialFunction:
      "Yukarı seyirde kat yavaşlama noktasına gelindiğinde enerjilenir; by-pass pilotunu açarak hidrolik akışı kısar ve asansörü yukarı seviyeleme hızına geçirir.",
    factorySetting: "12V, 24V, 110V, 230V DC / AC seçenekleri.",
    solenoidCondition: "Yukarı Yavaşlama & Seviyeleme Fazı",
  },
  {
    id: "sol-b",
    tag: "Bobin B",
    name: "Aşağı Tam Hız Bobini",
    nameEn: "Solenoid B (Down Fast Speed)",
    group: "solenoid",
    angleY: -0.15,
    angleX: 0.25,
    clockwiseEffect: "C bobini ile birlikte çalışır.",
    counterClockwiseEffect: "Sağ valf kulesinde konumlanır.",
    officialFunction:
      "Aşağı yönde tam hızda iniş için C bobini ile eşzamanlı enerjilenir. Enerjisi kesildiğinde asansör aşağı yavaşlama fazına geçer.",
    factorySetting: "12V, 24V, 110V, 230V DC / AC seçenekleri.",
    solenoidCondition: "Aşağı Tam Hız Fazı",
  },
  {
    id: "sol-c",
    tag: "Bobin C",
    name: "Aşağı Başlama & Seviyeleme Bobini",
    nameEn: "Solenoid C (Down Start / Leveling)",
    group: "solenoid",
    angleY: -0.35,
    angleX: 0.2,
    clockwiseEffect: "Ana aşağı yön emniyet pilotu.",
    counterClockwiseEffect: "Sağ valf kulesinde konumlanır.",
    officialFunction:
      "Aşağı yöndeki tüm hareket boyunca enerjili kalır. Tek başına enerjilendiğinde aşağı seviyeleme hızı, B ile birlikte enerjilendiğinde tam hız iniş sağlar.",
    factorySetting: "12V, 24V, 110V, 230V DC / AC seçenekleri.",
    solenoidCondition: "Aşağı Kalkış, Hızlı ve Seviyeleme Fazları",
  },
  {
    id: "sol-d",
    tag: "Bobin D",
    name: "Yukarı Yumuşak Duruş Bobini",
    nameEn: "Solenoid D (Up Soft Stop)",
    group: "solenoid",
    angleY: 0.3,
    angleX: 0.22,
    clockwiseEffect: "Motor duruş sönümleme pilotu.",
    counterClockwiseEffect: "Sol blokta konumlanır.",
    officialFunction:
      "Yukarı yönde motor enerjisi kesildiği anda hidrolik basınç dalgalarını ve çekvalf çarpma şokunu sönümleyerek katta yumuşak duruş sağlar.",
    factorySetting: "EV100 standart / opsiyonel donanım.",
    solenoidCondition: "Yukarı Kat Seviyesinde Duruş Anı",
  },

  // --- EMNİYET & ACİL DURUM (RV, H, HP, KS) ---
  {
    id: "safe-rv",
    tag: "RV / S",
    name: "Basınç Emniyet Valfi (Relief Valve)",
    nameEn: "Main Relief Valve (S)",
    group: "safety",
    angleY: -0.7,
    angleX: -0.15,
    clockwiseEffect: "İçe (sağa): Emniyet açma basıncını yükseltir.",
    counterClockwiseEffect: "Dışa (sola): Emniyet açma basıncını düşürür.",
    officialFunction:
      "Sistemde aşırı basınç veya aşırı yük oluştuğunda hidrolik yağı doğrudan tanka tahliye ederek silindir, boru ve pompa donanımlarını korur.",
    factorySetting: "Nominal çalışma basıncının %140'ına ayarlanır ve mühürlenir.",
    solenoidCondition: "Aşırı Yük / Mekanik Blokaj Durumu",
  },
  {
    id: "safe-h",
    tag: "H",
    name: "Manuel Acil İndirme Vidası",
    nameEn: "Manual Lowering (H)",
    group: "safety",
    angleY: 0.05,
    angleX: -0.3,
    clockwiseEffect: "Saat yönü: İndirme kanalını kapatır (Normal çalışma konumu).",
    counterClockwiseEffect: "Saat yönü tersi: İndirme kanalını manuel olarak açar.",
    officialFunction:
      "Elektrik kesintisinde veya arıza anında kabin içindeki yolcuların en yakın kata yer çekimi ile güvenle tahliye edilmesini sağlar.",
    factorySetting: "Normalde kapalı ve yay baskılıdır.",
    solenoidCondition: "Manuel Acil Durum Tahliyesi",
  },
  {
    id: "safe-hp",
    tag: "HP",
    name: "El Pompası Bağlantı Portu",
    nameEn: "Hand Pump Connection (HP)",
    group: "safety",
    angleY: 0.4,
    angleX: -0.25,
    clockwiseEffect: "G 3/8\" veya G 1/2\" standart hidrolik port.",
    counterClockwiseEffect: "Dahili çekvalf korumalıdır.",
    officialFunction:
      "Elektriksiz acil durumlarda veya bakım sırasında kabini hidrolik olarak yukarı kaldırmak için Blain HP el pompasının bağlandığı porttur.",
    factorySetting: "Standart port dişi.",
    solenoidCondition: "Harici Manuel Hidrolik Giriş",
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
  const [activeGroup, setActiveGroup] = useState<AdjustmentGroup>("up");

  const groupItems = OFFICIAL_VALVE_DATA.filter((i) => i.group === activeGroup);
  const activePart =
    OFFICIAL_VALVE_DATA.find((p) => p.id === selectedPartId) ?? groupItems[0] ?? OFFICIAL_VALVE_DATA[0];

  if (!isOpen) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center p-2 sm:items-start sm:justify-end sm:p-6 lg:p-8">
      {/* Mobilde Bottom-Sheet, Masaüstünde Sağ Dock */}
      <aside
        aria-label="Blain EV100 Resmi Teknik Kılavuz Kartı"
        className="pointer-events-auto flex max-h-[75svh] w-full max-w-full flex-col overflow-hidden rounded-t-3xl border border-steel-200/80 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-steel-700/80 dark:bg-steel-900/95 sm:mt-14 sm:max-h-[86svh] sm:max-w-md sm:rounded-3xl lg:max-w-lg"
      >
        {/* Mobilde sürükleme / tutma çubuğu */}
        <div className="flex justify-center pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-steel-300 dark:bg-steel-700" />
        </div>

        {/* Üst Başlık */}
        <div className="flex items-center justify-between border-b border-steel-200/80 px-4 py-3 sm:px-5 sm:py-3.5 dark:border-steel-800">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-brand-600 font-mono text-xs font-bold text-white shadow-sm sm:size-8 sm:rounded-xl">
              EV
            </span>
            <div>
              <h3 className="text-[0.75rem] font-bold tracking-tight text-steel-900 uppercase sm:text-xs dark:text-white">
                Blain EV100 Ayar Rehberi
              </h3>
              <p className="text-[0.62rem] text-steel-500 sm:text-[0.68rem] dark:text-steel-400">
                Orijinal Teknik El Kitapçığı
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

        {/* Ana Kategori Sekmeleri */}
        <div className="grid grid-cols-4 border-b border-steel-200/70 bg-steel-50/70 text-center text-[0.68rem] font-semibold sm:text-[0.72rem] dark:border-steel-800 dark:bg-steel-950/50">
          <button
            type="button"
            onClick={() => {
              setActiveGroup("up");
              onSelectPart("adj-1");
            }}
            className={`py-2 transition-colors sm:py-2.5 ${
              activeGroup === "up"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Yukarı
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveGroup("down");
              onSelectPart("adj-6");
            }}
            className={`py-2 transition-colors sm:py-2.5 ${
              activeGroup === "down"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Aşağı
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveGroup("solenoid");
              onSelectPart("sol-a");
            }}
            className={`py-2 transition-colors sm:py-2.5 ${
              activeGroup === "solenoid"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Bobinler
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveGroup("safety");
              onSelectPart("safe-rv");
            }}
            className={`py-2 transition-colors sm:py-2.5 ${
              activeGroup === "safety"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Emniyet
          </button>
        </div>

        {/* Seçili Grubun Ayar Butonları */}
        <div className="flex gap-1.5 overflow-x-auto border-b border-steel-200/60 p-2 scrollbar-none sm:p-2.5 dark:border-steel-800">
          {groupItems.map((item) => {
            const isSelected = item.id === activePart.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPart(item.id)}
                className={`flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold transition-all sm:px-3 sm:py-1.5 sm:text-[0.72rem] ${
                  isSelected
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-steel-100 text-steel-700 hover:bg-steel-200/70 dark:bg-steel-800 dark:text-steel-300 dark:hover:bg-steel-700"
                }`}
              >
                <span>{item.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Detay Gövdesi (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 text-left text-steel-800 sm:p-5 dark:text-steel-200">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-brand-50 px-1.5 py-0.5 font-mono text-[0.64rem] font-bold text-brand-700 sm:text-[0.68rem] dark:bg-brand-950 dark:text-brand-300">
                  {activePart.tag}
                </span>
                <span className="text-[0.64rem] text-steel-400 sm:text-[0.68rem]">
                  {activePart.nameEn}
                </span>
              </div>
              <h4 className="mt-1 text-xs font-bold text-steel-950 sm:text-sm dark:text-white">
                {activePart.name}
              </h4>
            </div>

            {activePart.solenoidCondition && (
              <span className="shrink-0 rounded-lg bg-steel-100 px-2 py-0.5 font-mono text-[0.6rem] font-medium text-steel-700 sm:px-2.5 sm:py-1 sm:text-[0.65rem] dark:bg-steel-800 dark:text-steel-300">
                {activePart.solenoidCondition}
              </span>
            )}
          </div>

          {/* Orijinal Kitabi Fonksiyon Açıklaması */}
          <div className="mt-2.5 rounded-2xl border border-steel-200/80 bg-steel-50/70 p-3 text-[0.72rem] leading-relaxed sm:mt-3 sm:p-3.5 sm:text-[0.76rem] dark:border-steel-800 dark:bg-steel-950/60">
            <span className="font-bold text-steel-900 dark:text-white">
              Görevi:{" "}
            </span>
            <span className="text-steel-700 dark:text-steel-300">
              {activePart.officialFunction}
            </span>
          </div>

          {/* Orijinal Çevirme / Ayar Yönleri */}
          <div className="mt-2.5 space-y-1.5 rounded-2xl border border-steel-200/80 bg-white p-3 text-[0.7rem] sm:mt-3 sm:space-y-2 sm:p-3.5 sm:text-[0.74rem] dark:border-steel-800 dark:bg-steel-900">
            <div className="flex items-start gap-1.5">
              <span className="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">
                ↻ Saat Yönü:
              </span>
              <span className="text-steel-700 dark:text-steel-300">
                {activePart.clockwiseEffect}
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="shrink-0 font-bold text-sky-600 dark:text-sky-400">
                ↺ Ters Yön:
              </span>
              <span className="text-steel-700 dark:text-steel-300">
                {activePart.counterClockwiseEffect}
              </span>
            </div>
            <div className="border-t border-steel-100 pt-1.5 dark:border-steel-800">
              <span className="font-bold text-steel-900 dark:text-white">
                Fabrika Temel Ayarı:{" "}
              </span>
              <span className="font-mono text-steel-600 dark:text-steel-400">
                {activePart.factorySetting}
              </span>
            </div>
          </div>

          {/* Eylem Linkleri */}
          <div className="mt-3.5 flex items-center gap-2 sm:mt-4">
            <Link
              href="/service"
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand-600 py-2 text-[0.72rem] font-semibold text-white transition hover:bg-brand-700 sm:py-2.5 sm:text-[0.76rem]"
            >
              <span>Servis Arıza Tablosu</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/downloads"
              className="flex flex-1 items-center justify-center rounded-xl border border-steel-300 bg-white py-2 text-[0.72rem] font-medium text-steel-700 transition hover:bg-steel-100 sm:py-2.5 sm:text-[0.76rem] dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200 dark:hover:bg-steel-700"
            >
              Kılavuz PDF
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
