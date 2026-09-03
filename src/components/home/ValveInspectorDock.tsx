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
  factoryDefault: string;
  adjustmentRule: string;
  description: string;
  troubleshooting: string;
  solenoidState?: string;
};

export const OFFICIAL_VALVE_DATA: ValveSpecItem[] = [
  // --- YUKARI SEYİR AYARLARI (1 - 5) ---
  {
    id: "adj-1",
    tag: "Ayar 1",
    name: "Bypass / Yukarı Boşta Kalkış",
    nameEn: "Bypass / Up Start",
    group: "up",
    angleY: 0.35,
    angleX: 0.1,
    factoryDefault: "Düz tornavida ile içe sıkılıp 2.5 tur dışa",
    adjustmentRule:
      "İçe (sağa) sıkmak kalkışı hızlandırır; dışa (sola) gevşetmek kalkışı geciktirir ve motorun yüksüz kalkmasını sağlar.",
    description:
      "Motor start aldığında yağın önce tanka dönmesini, motor devrini aldıktan sonra kabinin sarsıntısız kalkmasını sağlar.",
    troubleshooting:
      "Motor zorlanarak kalkıyorsa vidayı 1/2 tur sola açın; kalkış çok gecikiyorsa 1/2 tur sağa sıkın.",
    solenoidState: "Motor: ON | Bobinler: OFF",
  },
  {
    id: "adj-2",
    tag: "Ayar 2",
    name: "Yukarı İvmelenme",
    nameEn: "Up Acceleration",
    group: "up",
    angleY: 0.45,
    angleX: 0.15,
    factoryDefault: "İçe kapalıdan 1.5 tur açık",
    adjustmentRule:
      "İçe (sağa) çevirmek hızlanma süresini uzatır (daha yumuşak); dışa (sola) çevirmek tam hıza geçişi serileştirir.",
    description:
      "Kabinin kalkıştan tam nominal seyahat hızına (V-Max) ulaşma ivmesini ve yumuşaklığını belirler.",
    troubleshooting:
      "Tam hıza geçerken silkeleme oluyorsa vidayı sağa çevirerek ivmeyi yumuşatın.",
    solenoidState: "Motor: ON | Bobinler: OFF",
  },
  {
    id: "adj-3",
    tag: "Ayar 3",
    name: "Yukarı Yavaşlama Rampası",
    nameEn: "Up Deceleration",
    group: "up",
    angleY: 0.55,
    angleX: -0.05,
    factoryDefault: "İçe kapalıdan 2 tur açık",
    adjustmentRule:
      "İçe (sağa) sıkmak yavaşlama mesafesini kısaltır (daha sert fren); dışa (sola) açmak yavaşlamayı uzatır ve yumuşatır.",
    description:
      "A Bobini enerjilendiğinde tam hızdan yavaş seviyeleme hızına geçiş frenleme konforunu ayarlar.",
    troubleshooting:
      "Kata yaklaşırken ani frenleme yapıyorsa vidayı 1/4 tur sola açın.",
    solenoidState: "Motor: ON | Bobin A: ON",
  },
  {
    id: "adj-4",
    tag: "Ayar 4",
    name: "Yukarı Seviyeleme Yavaş Hızı",
    nameEn: "Up Leveling Speed",
    group: "up",
    angleY: 0.65,
    angleX: -0.15,
    factoryDefault: "0.08 - 0.12 m/s",
    adjustmentRule:
      "İçe (sağa) sıkmak seviyeleme hızını düşürür; dışa (sola) açmak seviyeleme hızını artırır.",
    description:
      "Katta duruş öncesi kat eşiğine yanaşma hızının büyüklüğünü belirler. Milimetrik duruş hassasiyeti sağlar.",
    troubleshooting:
      "Kabin kata varmadan duruyorsa vidayı sola açın; katta duruşta zıplama varsa sağa kısın.",
    solenoidState: "Motor: ON | Bobin A: ON",
  },
  {
    id: "adj-5",
    tag: "Ayar 5",
    name: "Yukarı Yumuşak Duruş",
    nameEn: "Up Soft Stop",
    group: "up",
    angleY: 0.25,
    angleX: 0.2,
    factoryDefault: "İçe kapalıdan 1.5 tur açık",
    adjustmentRule:
      "İçe (sağa) sıkmak duruşu sertleştirir; dışa (sola) açmak motor durduğunda duruşu yumuşatır.",
    description:
      "Motor enerjisi kesildiğinde veya D bobini devreye girdiğinde kabinin sarsıntısız durmasını temin eder.",
    troubleshooting:
      "Duruş anında geri kayma veya vuruntu varsa vidayı hassas şekilde optimize edin.",
    solenoidState: "Motor: STOP | Bobin D: Darbeli",
  },

  // --- AŞAĞI SEYİR AYARLARI (6 - 9) ---
  {
    id: "adj-6",
    tag: "Ayar 6",
    name: "Aşağı İvmelenme (Kalkış)",
    nameEn: "Down Acceleration",
    group: "down",
    angleY: -0.3,
    angleX: 0.1,
    factoryDefault: "İçe kapalıdan 2 tur açık",
    adjustmentRule:
      "İçe (sağa) sıkmak iniş kalkışını geciktirir ve yumuşatır; dışa (sola) açmak inişe geçişi serileştirir.",
    description:
      "Kabin aşağı yönde start aldığında iniş sürgüsünün açılma ivmesini ve konforunu yönetir.",
    troubleshooting:
      "Aşağı kalkışta boşluk hissi veya ani düşme oluyorsa vidayı 1/2 tur sağa sıkın.",
    solenoidState: "Motor: OFF | Bobin C + B: ON",
  },
  {
    id: "adj-7",
    tag: "Ayar 7",
    name: "Aşağı Tam Hız Debisi",
    nameEn: "Down Full Speed",
    group: "down",
    angleY: -0.45,
    angleX: 0.05,
    factoryDefault: "Nominal hıza göre debimetre ayarlı",
    adjustmentRule:
      "İçe (sağa) sıkmak maksimum iniş hızını düşürür; dışa (sola) açmak iniş hızını artırır.",
    description:
      "Aşağı yöndeki ana akış sürgüsünün maksimum strokunu sınırlayarak nominal iniş hızını (V-Max Down) belirler.",
    troubleshooting:
      "Kabin aşağı yönde nominal hızından hızlı iniyorsa vidayı sağa çevirerek kısın.",
    solenoidState: "Motor: OFF | Bobin C + B: ON",
  },
  {
    id: "adj-8",
    tag: "Ayar 8",
    name: "Aşağı Yavaşlama Rampası",
    nameEn: "Down Deceleration",
    group: "down",
    angleY: -0.55,
    angleX: -0.1,
    factoryDefault: "İçe kapalıdan 2.5 tur açık",
    adjustmentRule:
      "İçe (sağa) sıkmak iniş yavaşlamasını uzatır/yumuşatır; dışa (sola) açmak yavaşlama mesafesini kısaltır.",
    description:
      "Bobin B enerjisi kesildiğinde tam iniş hızından yavaş seviyeleme hızına geçiş konforunu ayarlar.",
    troubleshooting:
      "Aşağı yavaşlamada kabin silkeliyorsa vidayı çeyrek tur sağa çevirin.",
    solenoidState: "Motor: OFF | Bobin C: ON | Bobin B: OFF",
  },
  {
    id: "adj-9",
    tag: "Ayar 9",
    name: "Aşağı Seviyeleme Yavaş Hızı",
    nameEn: "Down Leveling Speed",
    group: "down",
    angleY: -0.65,
    angleX: -0.15,
    factoryDefault: "0.08 - 0.12 m/s",
    adjustmentRule:
      "İçe (sağa) sıkmak iniş yavaş hızını azaltır; dışa (sola) açmak iniş yavaş hızını artırır.",
    description:
      "Aşağı yönde kat seviyesine yaklaşırken kabinin son yanaşma hızını ayarlar.",
    troubleshooting:
      "Katta duruş anında eşik farkı kalıyorsa seviyeleme hızını 9 nolu vidadan kalibre edin.",
    solenoidState: "Motor: OFF | Bobin C: ON | Bobin B: OFF",
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
    factoryDefault: "12V / 24V / 110V / 230V DC",
    adjustmentRule: "Elektromekanik pilot tahliye kumandası.",
    description:
      "Yukarı yönde motor çalışırken enerjilenir; bypass pilotunu kısarak yağın bir kısmını tanka döker ve kabini yavaş hıza geçirir.",
    troubleshooting:
      "Bobin soketindeki LED sinyalini ve bobin direncini multimetre ile ölçün.",
    solenoidState: "Yukarı Yavaşlama Fazı",
  },
  {
    id: "sol-b",
    tag: "Bobin B",
    name: "Aşağı Tam Hız Bobini",
    nameEn: "Solenoid B (Down Fast Speed)",
    group: "solenoid",
    angleY: -0.15,
    angleX: 0.25,
    factoryDefault: "12V / 24V / 110V / 230V DC",
    adjustmentRule: "C bobini ile eşzamanlı devreye girer.",
    description:
      "Aşağı tam hız için Bobin C ile birlikte enerjilenir. Enerjisi kesildiğinde iniş yavaş hız kademesine geçilir.",
    troubleshooting:
      "Aşağı yönde hızlıya geçmiyorsa B bobini soket gerilimini kontrol edin.",
    solenoidState: "Aşağı Tam Hız Fazı",
  },
  {
    id: "sol-c",
    tag: "Bobin C",
    name: "Aşağı Başlama & Yavaş Hız Bobini",
    nameEn: "Solenoid C (Down Start / Leveling)",
    group: "solenoid",
    angleY: -0.35,
    angleX: 0.2,
    factoryDefault: "12V / 24V / 110V / 230V DC",
    adjustmentRule: "Ana iniş emniyet ve seviyeleme pilotu.",
    description:
      "Aşağı yönde tüm hareket boyunca devrededir. Tek başına enerjilendiğinde aşağı yavaş hız, B ile birlikte tam hız iniş sağlar.",
    troubleshooting:
      "Kabin aşağı hiç inmiyorsa C bobini ve acil iniş mekanik kilidini kontrol edin.",
    solenoidState: "Tüm Aşağı Fazlar",
  },
  {
    id: "sol-d",
    tag: "Bobin D",
    name: "Yukarı Yumuşak Duruş Bobini",
    nameEn: "Solenoid D (Soft Stop)",
    group: "solenoid",
    angleY: 0.3,
    angleX: 0.22,
    factoryDefault: "Opsiyonel / Standart Konfigürasyon",
    adjustmentRule: "Motor stop anında mikro-darbe kontrolü.",
    description:
      "Yukarı yönde motor durduğunda oluşan hidrolik şok dalgalarını sönümleyerek kat seviyesinde kusursuz konfor sağlar.",
    troubleshooting:
      "Yukarı duruşta sarsıntı varsa pano üzerindeki D bobini zamanlama rölesini test edin.",
    solenoidState: "Yukarı Katta Duruş Anı",
  },

  // --- EMNİYET & ACİL DURUM (RV, H, HP, KS) ---
  {
    id: "safe-rv",
    tag: "RV",
    name: "Basınç Emniyet Valfi (Relief)",
    nameEn: "Main Relief Valve",
    group: "safety",
    angleY: -0.7,
    angleX: -0.15,
    factoryDefault: "Nominal Basıncın %140'ı (Mühürlü)",
    adjustmentRule:
      "Manometre vanası açıkken, kabin en üstte mekanik stoptayken ayarlanır. Saat yönü basıncı artırır.",
    description:
      "Sistemde aşırı basınç veya mekanik sıkışma anında tüm pompalama debisini anında tanka tahliye ederek patlamayı önler.",
    troubleshooting:
      "Kabin yüklüyken yukarı kalkmıyorsa ve motor baypass sesindeyse RV ayar basıncını manometre ile doğrulayın.",
    solenoidState: "Statik & Dinamik Aşırı Yük Koruma",
  },
  {
    id: "safe-h",
    tag: "H",
    name: "Manuel Acil İndirme Vidası",
    nameEn: "Manual Lowering Valve",
    group: "safety",
    angleY: 0.05,
    angleX: -0.3,
    factoryDefault: "Yay baskılı kapalı konum",
    adjustmentRule:
      "Kırmızı manuel vidayı sola çevirerek kontrollü hızda açılır.",
    description:
      "Elektrik kesintisi veya elektronik arızada kabin içindeki yolcuları en yakın kata yer çekimiyle güvenle tahliye eder.",
    troubleshooting:
      "İndirme sonrası vidanın tam kapalı olduğundan emin olunmalıdır; aksi halde asansör aşağı kaçırabilir.",
    solenoidState: "Mekanik El Kumandası",
  },
  {
    id: "safe-hp",
    tag: "HP",
    name: "Acil Durum El Pompası Bağlantısı",
    nameEn: "Hand Pump Connection",
    group: "safety",
    angleY: 0.4,
    angleX: -0.25,
    factoryDefault: "G 3/8\" Dişli Port",
    adjustmentRule: "Harici Blain HP el pompası bağlanır.",
    description:
      "Acil durumlarda veya kuyu dibi bakımında kabini hidrolik olarak yukarı kaldırmak için el pompası portu.",
    troubleshooting:
      "El pompası çekvalfinde yabancı partikül sızıntısı olup olmadığını kontrol edin.",
    solenoidState: "Harici Manuel Giriş",
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
    <div className="pointer-events-none absolute inset-0 z-30 flex items-start justify-end p-3 sm:p-6 lg:p-8">
      <aside
        aria-label="Blain EV100 Teknik ve Ayar El Kitabı"
        className="pointer-events-auto mt-14 flex max-h-[86svh] w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-steel-700/80 dark:bg-steel-900/95 sm:max-w-md lg:max-w-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-steel-200/70 px-5 py-3.5 dark:border-steel-800">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-xl bg-brand-600 font-mono text-xs font-bold text-white shadow-sm">
              EV
            </span>
            <div>
              <h3 className="text-xs font-bold tracking-tight text-steel-900 uppercase dark:text-white">
                Blain EV100 Teknik Ayar Rehberi
              </h3>
              <p className="text-[0.68rem] text-steel-500 dark:text-steel-400">
                Resmi Mühendislik El Kitapçığı Verileri
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
        <div className="grid grid-cols-4 border-b border-steel-200/60 bg-steel-50/60 text-center text-[0.72rem] font-semibold dark:border-steel-800 dark:bg-steel-950/40">
          <button
            type="button"
            onClick={() => {
              setActiveGroup("up");
              onSelectPart("adj-1");
            }}
            className={`py-2.5 transition-colors ${
              activeGroup === "up"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Yukarı (1-5)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveGroup("down");
              onSelectPart("adj-6");
            }}
            className={`py-2.5 transition-colors ${
              activeGroup === "down"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Aşağı (6-9)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveGroup("solenoid");
              onSelectPart("sol-a");
            }}
            className={`py-2.5 transition-colors ${
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
            className={`py-2.5 transition-colors ${
              activeGroup === "safety"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Emniyet
          </button>
        </div>

        {/* Seçili Grubun Ayar Numaraları / Butonları */}
        <div className="flex gap-1.5 overflow-x-auto border-b border-steel-200/50 p-2.5 scrollbar-none dark:border-steel-800">
          {groupItems.map((item) => {
            const isSelected = item.id === activePart.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPart(item.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold transition-all ${
                  isSelected
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-steel-100 text-steel-700 hover:bg-steel-200/70 dark:bg-steel-800 dark:text-steel-300 dark:hover:bg-steel-700"
                }`}
              >
                <span>{item.tag}</span>
                <span className="hidden sm:inline font-normal opacity-85">
                  · {item.name.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detay Gövdesi (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 text-left text-steel-800 dark:text-steel-200">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-brand-50 px-2 py-0.5 font-mono text-[0.68rem] font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                  {activePart.tag}
                </span>
                <span className="text-[0.68rem] text-steel-400">
                  {activePart.nameEn}
                </span>
              </div>
              <h4 className="mt-1 text-sm font-bold text-steel-950 dark:text-white">
                {activePart.name}
              </h4>
            </div>

            {activePart.solenoidState && (
              <span className="shrink-0 rounded-lg bg-steel-100 px-2.5 py-1 font-mono text-[0.65rem] font-medium text-steel-700 dark:bg-steel-800 dark:text-steel-300">
                {activePart.solenoidState}
              </span>
            )}
          </div>

          <p className="mt-2.5 text-[0.78rem] leading-relaxed text-steel-600 dark:text-steel-300">
            {activePart.description}
          </p>

          {/* Fabrika & Kural Kartı */}
          <div className="mt-3.5 space-y-2 rounded-2xl border border-steel-200/70 bg-steel-50/70 p-3 text-[0.74rem] dark:border-steel-800 dark:bg-steel-950/60">
            <div>
              <span className="font-bold text-steel-900 dark:text-white">
                ⚙️ Ayar Kuralı:{" "}
              </span>
              <span className="text-steel-700 dark:text-steel-300">
                {activePart.adjustmentRule}
              </span>
            </div>
            <div>
              <span className="font-bold text-steel-900 dark:text-white">
                📐 Fabrika Referansı:{" "}
              </span>
              <span className="font-mono text-steel-600 dark:text-steel-400">
                {activePart.factoryDefault}
              </span>
            </div>
          </div>

          {/* Arıza & Saha İpucu */}
          <div className="mt-3 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-3 text-[0.74rem] text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-200">
            <span className="font-bold text-amber-800 dark:text-amber-400">
              🛠️ Saha Arıza İpucu:{" "}
            </span>
            {activePart.troubleshooting}
          </div>

          {/* Eylem Linkleri */}
          <div className="mt-4 flex items-center gap-2">
            <Link
              href="/service"
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand-600 py-2.5 text-[0.76rem] font-semibold text-white transition hover:bg-brand-700"
            >
              <span>Arıza Simülatörüne Git</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/downloads"
              className="flex flex-1 items-center justify-center rounded-xl border border-steel-300 bg-white py-2.5 text-[0.76rem] font-medium text-steel-700 transition hover:bg-steel-100 dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200 dark:hover:bg-steel-700"
            >
              Teknik Çizim / PDF
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
