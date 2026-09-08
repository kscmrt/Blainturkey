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
  allenKey: string;
  default34: string;
  default1525: string;
  fasterOrMore: string; // Saat yönü (İçeri) veya tersi
  slowerOrLess: string; // Dışarı
  procedure: string; // PDF'teki resmi adım adım ayarlama prosedürü
  bobinState: string; // Hangi bobinler takılı / enerjili
  idealTime?: string; // Örn: 2.5 saniye / 0.05 m/s
};

export const OFFICIAL_VALVE_DATA: ValveSpecItem[] = [
  // ==========================================
  // --- YUKARI ÇIKIŞ AYARLARI (1, 2, 4, 3, 5) ---
  // ==========================================
  {
    id: "adj-1",
    tag: "Ayar 1",
    name: "Pilot Basıncı Ayarı (Devir-daim Zamanı / By-pass)",
    nameEn: "1 Up By-pass & Pilot Pressure",
    group: "up",
    angleY: 0.35,
    angleX: 0.1,
    allenKey: "5 mm Allen",
    default34: "Flanş yüzünde (Sıfır)",
    default1525: "Flanş yüzünde (Sıfır)",
    fasterOrMore: "İçeri (Sağa): Kabin kalkışını başlatır/hızlandırır.",
    slowerOrLess: "Dışarı (Sola): By-pass basıncını düşürür, kalkışı durdurur/geciktirir.",
    procedure:
      "A bobinini çıkartın ve pompa motorunu çalıştırın. Eğer kabin yukarı tırmanıyorsa No.1 ayarı kabin duruncaya kadar dışarı çevrilmelidir. Eğer kabin hareket etmiyorsa, kabin harekete başlayıncaya kadar No.1 ayarı içeri çevrilmeli ve sonrasında kabin duruncaya kadar dışarı çevrilmelidir. Son ayar olarak No.1 ayarı yarım tur (1/2 tur) dışarı çevrilerek bırakılmalıdır.",
    bobinState: "A Bobini ÇIKARILMIŞ | Pompa Motoru ÇALIŞIYOR",
    idealTime: "DİKKAT: Bu ayar ile yukarı seviyeleme yapmayınız! Boş ve dolu kabin farkı aşırı olur.",
  },
  {
    id: "adj-2",
    tag: "Ayar 2",
    name: "Çıkış - Hızlanma (İvmelenme)",
    nameEn: "2 Up Acceleration",
    group: "up",
    angleY: 0.45,
    angleX: 0.15,
    allenKey: "3 mm Allen",
    default34: "1.5 tur dışarı",
    default1525: "2 tur dışarı",
    fasterOrMore: "İçeri (Sağa): Çok çabuk hızlanıyorsa 1/4 tur içeri çeviriniz (hızlanmayı yumuşatır).",
    slowerOrLess: "Dışarı (Sola): Çok yavaş hızlanıyorsa 1/4 tur dışarı çeviriniz (hızlanmayı serileştirir).",
    procedure:
      "A bobinini yerine takın. Pompa motorunu, A ve B bobinlerini enerjilendirin (çıkış komutu). Yukarı doğru hızlanmayı gözlemleyin. Eğer çok çabuk hızlanıyorsa No.2 ayarını 1/4 tur içeri doğru çeviriniz. Eğer çok yavaş hızlanıyorsa No.2 ayarını 1/4 tur dışarı doğru çeviriniz. Bu işlemi hızlanma istenen değere ulaşıncaya kadar tekrarlayınız.",
    bobinState: "Pompa Motoru + Bobin A + Bobin B ENERJİLİ (Çıkış Komutu)",
    idealTime: "Hedef Hızlanma Zamanı: Yaklaşık 2.5 saniye",
  },
  {
    id: "adj-4",
    tag: "Ayar 4",
    name: "Çıkış - Seviyeleme Hızı (Up Leveling)",
    nameEn: "4 Up Leveling Speed",
    group: "up",
    angleY: 0.65,
    angleX: -0.15,
    allenKey: "5 mm Allen",
    default34: "Flanş yüzünde (Sıfır)",
    default1525: "Flanş yüzünde (Sıfır)",
    fasterOrMore: "İçeri (Sağa): Seviyeleme hızı çok yüksek ise içeri doğru çevirerek hızı düşürünüz.",
    slowerOrLess: "Dışarı (Sola): Seviyeleme hızı çok düşük ise dışarı doğru çevirerek hızı artırınız.",
    procedure:
      "B bobinini yerinden çıkarın. Pompa motorunu ve A bobinini enerjilendirin (çıkış-seviyeleme komutu). No.4 ayarı flanş yüzü ile bir seviyede iken kabin normal olarak seviyeleme yapacaktır. Seviyeleme hızı çok yüksek ise No.4 ayarını içeri doğru çeviriniz; seviyeleme hızı çok düşük ise dışarı doğru çeviriniz.",
    bobinState: "B Bobini ÇIKARILMIŞ | Pompa Motoru + Bobin A ENERJİLİ",
    idealTime: "Tavsiye Edilen Seviyeleme Hızı: 0.05 m/s",
  },
  {
    id: "adj-3",
    tag: "Ayar 3",
    name: "Çıkış - Yavaşlama (Up Deceleration)",
    nameEn: "3 Up Deceleration",
    group: "up",
    angleY: 0.55,
    angleX: -0.05,
    allenKey: "3 mm Allen",
    default34: "1.5 tur dışarı",
    default1525: "2.5 tur dışarı",
    fasterOrMore: "İçeri (Sağa): Çok çabuk yavaşlıyorsa (sert fren) 1/4 tur içeri çeviriniz.",
    slowerOrLess: "Dışarı (Sola): Yavaşlama çok zaman alıyorsa (uzun fren) 1/4 tur dışarı çeviriniz.",
    procedure:
      "B bobini halen yerinden çıkmış durumda iken pompa motorunu ve A bobinini enerjilendirin (çıkış-seviyeleme). Kabin yukarı seviyeleme hızında hareket ederken önce No.3 ayarını seviyeleme hızı artıncaya kadar içeri, sonra eski seviyesine gelene kadar dışarı çeviriniz. B bobinini yerine takıp katlar arası normal seyahat yapın. Çok zaman alıyorsa No.3'ü 1/4 tur dışarı, çok çabuk yavaşlıyorsa 1/4 tur içeri çeviriniz.",
    bobinState: "Normal Seyahat (Motor + Bobin A + B) ve El ile Bobin B Kaldırma",
    idealTime: "Hedef Yavaşlama Zamanı: Yaklaşık 2.5 saniye",
  },
  {
    id: "adj-5",
    tag: "Ayar 5",
    name: "Çıkış - Yumuşak Durma (Up Soft Stop)",
    nameEn: "5 Up Soft Stop",
    group: "up",
    angleY: 0.25,
    angleX: 0.2,
    allenKey: "3 mm Allen",
    default34: "1.5 tur dışarı",
    default1525: "2.5 tur dışarı",
    fasterOrMore: "İçeri (Sağa): Duruş çok sert ise No.5 ayarını 1/4 tur içeri çeviriniz.",
    slowerOrLess: "Dışarı (Sola): Duruş çok yumuşak/gecikmeli ise No.5 ayarını 1/4 tur dışarı çeviriniz.",
    procedure:
      "A bobinini yerinden çıkarın. Pompa motorunu enerjilendirin (kabin hareket etmemelidir). No.5 ayarını kabin harekete başlayıncaya kadar içeri, duruncaya kadar dışarı çevirin. A bobinini yerine takıp motor ve A bobinini enerjilendirin (seviyeleme hızı). A bobinini el ile kaldırarak kabinin durmasını test edin. Durma çok sert ise 1/4 tur içeri, çok yumuşak ise 1/4 tur dışarı çeviriniz.",
    bobinState: "A Bobinini El ile Kaldırarak Durma Kontrolü",
    idealTime: "Katta sarsıntısız milimetrik duruş sağlar.",
  },

  // ==========================================
  // --- AŞAĞI İNİŞ AYARLARI (8, 6, 7, 9) ---
  // ==========================================
  {
    id: "adj-8",
    tag: "Ayar 8",
    name: "İniş - Yavaşlama (Down Deceleration & Stop)",
    nameEn: "8 Down Deceleration",
    group: "down",
    angleY: -0.55,
    angleX: -0.1,
    allenKey: "3 mm Allen",
    default34: "1 tur dışarı",
    default1525: "1.5 tur dışarı",
    fasterOrMore: "İçeri (Sağa): Yavaşlama süresi çok kısa ise (sert fren) 1/4 tur içeri çeviriniz.",
    slowerOrLess: "Dışarı (Sola): Yavaşlama süresi çok uzun ise 1/4 tur dışarı çeviriniz.",
    procedure:
      "C ve D bobinlerini enerjilendirin (iniş komutu). Kabin tam hıza ulaştığında C bobinini el ile yerinden kaldırarak kabinin yavaşlamasını gözlemleyiniz. Eğer yavaşlama süresi çok uzun ise No.8 ayarını 1/4 tur dışarı, çok kısa ise 1/4 tur içeri çeviriniz. Yavaşlama süresi istenen değere ulaşana kadar tekrarlayınız. (İniş-durma da 8 nolu ayara bağlı gerçekleşir).",
    bobinState: "C ve D Enerjili (İniş) -> C Bobinini El ile Yerinden Kaldırma",
    idealTime: "Hedef Yavaşlama Zamanı: Yaklaşık 2.5 saniye",
  },
  {
    id: "adj-6",
    tag: "Ayar 6",
    name: "İniş - Hızlanma (Down Acceleration)",
    nameEn: "6 Down Acceleration",
    group: "down",
    angleY: -0.3,
    angleX: 0.1,
    allenKey: "3 mm Allen",
    default34: "1.5 tur dışarı",
    default1525: "1.5 tur dışarı",
    fasterOrMore: "İçeri (Sağa): Hızlanma süresi çok kısa ise (ani kalkış) 1/4 tur içeri çeviriniz.",
    slowerOrLess: "Dışarı (Sola): Hızlanma süresi çok uzun ise 1/4 tur dışarı çeviriniz.",
    procedure:
      "No.6 ayarını tamamen içeri vidalayıp iniş komutu verin (C ve D bobinlerini enerjilendirin - kabin hareket etmeyecektir). No.6 ayarını yavaşça açarak kabinin aşağı doğru hızlanmasını sağlayınız. Eğer hızlanma süresi çok uzun ise 1/4 tur dışarı, çok kısa ise 1/4 tur içeri çeviriniz.",
    bobinState: "No.6 Kapalıdan Başlayarak C + D Enerjili İniş Testi",
    idealTime: "Hedef Hızlanma Zamanı: Yaklaşık 2.5 saniye",
  },
  {
    id: "adj-7",
    tag: "Ayar 7",
    name: "İniş - Tam Hız (Down Full Speed)",
    nameEn: "7 Down Full Speed",
    group: "down",
    angleY: -0.45,
    angleX: 0.05,
    allenKey: "5 mm Allen",
    default34: "Flanş yüzünde (Sıfır)",
    default1525: "Flanş yüzünde (Sıfır)",
    fasterOrMore: "İçeri (Sağa): Tam iniş hızını azaltır.",
    slowerOrLess: "Dışarı (Sola): Tam iniş hızını yükseltir/artırır.",
    procedure:
      "İniş komutu verin (C ve D bobinlerini enerjilendirin). Kabinin iniş hızını gözlemleyiniz. No.7 ayarını içeri doğru çevirerek tam hız azaltılır, dışarı doğru çevirerek tam hız yükseltilir.",
    bobinState: "C ve D Bobinleri ENERJİLİ (Tam İniş)",
    idealTime: "Proje nominal iniş hızına göre ayarlanır.",
  },
  {
    id: "adj-9",
    tag: "Ayar 9",
    name: "İniş - Seviyeleme Hızı (Down Leveling)",
    nameEn: "9 Down Leveling Speed",
    group: "down",
    angleY: -0.65,
    angleX: -0.15,
    allenKey: "5 mm Allen",
    default34: "Flanş yüzünde (Sıfır)",
    default1525: "Flanş yüzünde (Sıfır)",
    fasterOrMore: "İçeri (Sağa): Seviyeleme hızını azaltır/kısar.",
    slowerOrLess: "Dışarı (Sola): Seviyeleme hızını yükseltir/artırır.",
    procedure:
      "C bobinini çıkartın ve iniş komutu verin (D bobinini enerjilendirin). Kabin seviyeleme hızında hareket edecektir. No.9 ayarını içeri doğru çevirerek seviyeleme hızı azaltılır, dışarı doğru çevirerek seviyeleme hızı yükseltilir.",
    bobinState: "C Bobini ÇIKARILMIŞ | Sadece D Bobini ENERJİLİ",
    idealTime: "Tavsiye Edilen Seviyeleme Hızı: 0.05 m/s",
  },

  // ==========================================
  // --- SOLENOID BOBİNLER (A, B, C, D) ---
  // ==========================================
  {
    id: "sol-a",
    tag: "Bobin A",
    name: "Çıkış Yavaşlama / Seviyeleme Bobini",
    nameEn: "Solenoid A (Up Deceleration / Leveling)",
    group: "solenoid",
    angleY: 0.1,
    angleX: 0.25,
    allenKey: "Elektrik Soketi",
    default34: "Standart Bobin",
    default1525: "Standart Bobin",
    fasterOrMore: "Enerjili: By-pass pilotunu devreye sokar, seviyelemeye geçirir.",
    slowerOrLess: "El ile Kaldırma: Çıkışta kabinin durmasını test eder.",
    procedure:
      "Pompa motoru çalışırken A bobini enerjilendirildiğinde kabin yukarı seviyeleme hızında (0.05 m/s) hareket eder. Ayar 1, 2, 4 ve 5 kalibrasyonunda el ile kaldırılarak test edilir. (Enerjili bobin tüpten çıkarıldıktan 20 sn sonra ısınır, max 120°C).",
    bobinState: "12V / 24V / 110V / 230V DC / AC",
    idealTime: "Isınmayı önlemek için içine 14-17mm demir çubuk konulabilir.",
  },
  {
    id: "sol-b",
    tag: "Bobin B",
    name: "Çıkış Tam Hız Bobini",
    nameEn: "Solenoid B (Up Full Speed)",
    group: "solenoid",
    angleY: -0.15,
    angleX: 0.25,
    allenKey: "Elektrik Soketi",
    default34: "Standart Bobin",
    default1525: "Standart Bobin",
    fasterOrMore: "Enerjili: Motor ve A bobini ile birlikte yukarı tam hıza (V-Max) geçirir.",
    slowerOrLess: "El ile Kaldırma: Kabinin yavaşlama rampasını (No.3) test etmeyi sağlar.",
    procedure:
      "Pompa motoru ve A bobini ile birlikte enerjilendiğinde kabin yukarı tam hızda seyreder. Ayar 3 ve 4 sırasında yerinden sökülerek kabinin seviyeleme ve yavaşlama davranışı katlar arası seyahat etmeden tek noktada ayarlanır.",
    bobinState: "Çıkış Tam Hız Fazı",
    idealTime: "Hızlı ayarlama için el ile sökülüp takılabilir.",
  },
  {
    id: "sol-c",
    tag: "Bobin C",
    name: "İniş Başlama & Tam Hız Bobini",
    nameEn: "Solenoid C (Down Fast Speed)",
    group: "solenoid",
    angleY: -0.35,
    angleX: 0.2,
    allenKey: "Elektrik Soketi",
    default34: "Standart Bobin",
    default1525: "Standart Bobin",
    fasterOrMore: "Enerjili: D bobini ile birlikte aşağı tam hız inişi sağlar.",
    slowerOrLess: "El ile Kaldırma: Kabinin yavaşlamaya (No.8) geçmesini sağlar.",
    procedure:
      "D bobini ile birlikte enerjilendiğinde kabin tam hızda aşağı iner. Tam hızdayken C bobini el ile kaldırıldığında kabin anında Ayar 8 rampasına göre yavaşlar. C bobini çıkartılıp sadece D enerjilendiğinde iniş seviyeleme hızı (No.9) ayarlanır.",
    bobinState: "İniş Tam Hız Fazı",
    idealTime: "C enerjisi kesilince yavaş hıza geçer.",
  },
  {
    id: "sol-d",
    tag: "Bobin D",
    name: "İniş Seviyeleme & Pilot Bobini",
    nameEn: "Solenoid D (Down Leveling / Pilot)",
    group: "solenoid",
    angleY: 0.3,
    angleX: 0.22,
    allenKey: "Elektrik Soketi",
    default34: "Standart Bobin",
    default1525: "Standart Bobin",
    fasterOrMore: "Enerjili: İniş ana pilotunu açar, seviyeleme sağlar.",
    slowerOrLess: "Enerjisiz: 8 nolu ayara bağlı olarak kabini tamamen durdurur.",
    procedure:
      "Aşağı yöndeki tüm iniş hareketlerinde devrededir. Tek başına enerjilendiğinde kabin No.9 seviyeleme hızında (0.05 m/s) iner. Solenoid C enerjisizken D'nin enerjisi kesildiğinde kabin 8 nolu ayara bağlı olarak yumuşakça durur.",
    bobinState: "Tüm İniş Fazları",
    idealTime: "İniş duruşu 8 nolu ayara bağlıdır.",
  },

  // ==========================================
  // --- EMNİYET & VALFLER (S, KS, H) ---
  // ==========================================
  {
    id: "safe-s",
    tag: "S Valfi",
    name: "S Yüksek Basınç Emniyet Valfi (Relief Valve)",
    nameEn: "S High Pressure Relief Valve",
    group: "safety",
    angleY: -0.7,
    angleX: -0.15,
    allenKey: "3 mm Allen",
    default34: "1.5 tur dışarı (Baş 2 mm dışta)",
    default1525: "1.5 tur dışarı (Baş 2 mm dışta)",
    fasterOrMore: "İçeri (Sağa): Valf emniyet basıncını artırır.",
    slowerOrLess: "Dışarı (Sola): Valf emniyet basıncını düşürür.",
    procedure:
      "S vidasını vida başı 2 mm dışarı çıkacak şekilde dışarı çevirin. Silindir hattındaki küresel vanayı kapatın ve manuel alçaltma vanasını (H) açarak iç basıncı sıfırlayın. Çıkış komutu vererek pompa motoru, A ve B bobinlerini enerjilendirin. Basınç manometreden okunur. Basıncı artırmak için S vidasını içeri çevirin; düşürmek için dışarı çevirip pompa çalışıyorken manuel vanayı 1/2 sn açarak iç basıncı giderin.",
    bobinState: "Küresel Vana Kapalı | Motor + A + B Enerjili",
    idealTime: "Manometreden okuma yaparak kalibre ediniz.",
  },
  {
    id: "safe-ks",
    tag: "KS Valfi",
    name: "KS Gevşek Halat Valfi (Slack Rope Valve)",
    nameEn: "KS Slack Rope Valve",
    group: "safety",
    angleY: 0.4,
    angleX: -0.25,
    allenKey: "3 mm Allen",
    default34: "K vidası tampon ayarlı",
    default1525: "K vidası tampon ayarlı",
    fasterOrMore: "İçeri (Sağa): Yüksek basınçlar için içeri çevrilir.",
    slowerOrLess: "Dışarı (Sola): Alçak basınçlar için dışarı çevrilir.",
    procedure:
      "KS 3mm allen anahtar yardımıyla K vidası ayarlanır. Kabin tamponlar üzerine oturduktan sonra K vidası tamamen içeri sıkılır ve sonrasında piston aşağı inmeye başlayana kadar dışarı çevrilir. Sonrasında yağ soğuk iken kabinin istenildiği gibi alçalmasına olanak sağlamak için yarım tur (1/2 tur) içeri çevrilmelidir.",
    bobinState: "Kabin Tampon Üzerinde Otururken Ayarlanır",
    idealTime: "Halat gevşemesini ve pistonun boşa inmesini önler.",
  },
  {
    id: "safe-h",
    tag: "H Vanası",
    name: "Manuel Acil Alçaltma Vanası (Hand Down)",
    nameEn: "H Manual Lowering Valve",
    group: "safety",
    angleY: 0.05,
    angleX: -0.3,
    allenKey: "Manuel El Vidası / Buton",
    default34: "Yay Baskılı Kapalı",
    default1525: "Yay Baskılı Kapalı",
    fasterOrMore: "Saat Yönü: Kapatır (Normal seyir konumu).",
    slowerOrLess: "Saat Yönü Tersi: Manuel acil iniş kanalını açar.",
    procedure:
      "Elektrik kesintisinde veya arıza anında kabini yer çekimiyle en yakın kata indirmek için kullanılır. Manuel olarak yapılan alçalma hızı ile D bobini ile gerçekleştirilen seviyeleme hızı (0.05 m/s) tamamen aynıdır.",
    bobinState: "Elektriksiz Manuel Acil Tahliye",
    idealTime: "Manuel iniş hızı D bobini seviyeleme hızı ile eşittir.",
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
    <div className="pointer-events-none absolute inset-0 z-50 flex items-end justify-center sm:items-start sm:justify-end sm:p-6 lg:p-8">
      {/* Mobilde ekranın altından açılan tam genişlikli kart, masaüstünde sağ yan panel */}
      <aside
        aria-label="Blain EV100 Hızlı Ayarlama Kılavuzu"
        className="pointer-events-auto flex max-h-[85svh] w-full flex-col overflow-hidden rounded-t-[2rem] border border-steel-200/90 bg-white/98 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-steel-700/80 dark:bg-steel-900/98 sm:mt-14 sm:max-h-[88svh] sm:max-w-md sm:rounded-3xl lg:max-w-lg"
      >
        {/* Mobilde sürükleme / tutma çizgisi */}
        <div className="flex justify-center pt-2.5 pb-1 sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-steel-300 dark:bg-steel-700" />
        </div>

        {/* Üst Başlık */}
        <div className="flex items-center justify-between border-b border-steel-200/80 px-4 py-3 sm:px-5 sm:py-3.5 dark:border-steel-800">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-brand-600 font-mono text-xs font-bold text-white shadow-sm sm:size-8 sm:rounded-xl">
              EV
            </span>
            <div>
              <h3 className="text-[0.78rem] font-bold tracking-tight text-steel-900 uppercase sm:text-xs dark:text-white">
                Blain EV 100 Hızlı Ayar Kılavuzu
              </h3>
              <p className="text-[0.62rem] text-steel-500 sm:text-[0.68rem] dark:text-steel-400">
                Orijinal Blain Hydraulics GmbH Teknik Verileri
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Paneli Kapat"
            className="rounded-full bg-steel-100 p-1.5 text-steel-600 transition hover:bg-steel-200 hover:text-steel-900 dark:bg-steel-800 dark:text-steel-300 dark:hover:bg-steel-700"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Ana Kategori Sekmeleri */}
        <div className="grid grid-cols-4 border-b border-steel-200/70 bg-steel-50/70 text-center text-[0.72rem] font-semibold dark:border-steel-800 dark:bg-steel-950/50">
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
            Çıkış (1-5)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveGroup("down");
              onSelectPart("adj-8");
            }}
            className={`py-2.5 transition-colors ${
              activeGroup === "down"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            İniş (6-9)
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
              onSelectPart("safe-s");
            }}
            className={`py-2.5 transition-colors ${
              activeGroup === "safety"
                ? "border-b-2 border-brand-600 bg-white font-bold text-brand-700 dark:bg-steel-900 dark:text-brand-300"
                : "text-steel-600 hover:text-steel-900 dark:text-steel-400"
            }`}
          >
            Emniyet (S/KS)
          </button>
        </div>

        {/* Seçili Grubun Ayar Butonları */}
        <div className="flex gap-1.5 overflow-x-auto border-b border-steel-200/60 p-2.5 scrollbar-none dark:border-steel-800">
          {groupItems.map((item) => {
            const isSelected = item.id === activePart.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPart(item.id)}
                className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold transition-all ${
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
          {/* Başlık & Allen Anahtar */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-brand-50 px-1.5 py-0.5 font-mono text-[0.66rem] font-bold text-brand-700 sm:text-[0.68rem] dark:bg-brand-950 dark:text-brand-300">
                  {activePart.tag}
                </span>
                <span className="rounded-md bg-steel-100 px-1.5 py-0.5 font-mono text-[0.62rem] font-medium text-steel-700 dark:bg-steel-800 dark:text-steel-300">
                  🔧 {activePart.allenKey}
                </span>
              </div>
              <h4 className="mt-1 text-xs font-bold text-steel-950 sm:text-sm dark:text-white">
                {activePart.name}
              </h4>
            </div>

            {activePart.idealTime && (
              <span className="shrink-0 rounded-lg bg-emerald-50 px-2 py-0.5 text-right font-mono text-[0.6rem] font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                ⏱️ {activePart.idealTime}
              </span>
            )}
          </div>

          {/* Standart Çıkış / İniş Ön Ayar Tablosu Değerleri */}
          <div className="mt-3 grid grid-cols-2 gap-2 rounded-2xl border border-steel-200/80 bg-steel-50/80 p-2.5 text-[0.72rem] dark:border-steel-800 dark:bg-steel-950/60">
            <div>
              <span className="text-[0.65rem] text-steel-500 uppercase tracking-wider block">
                Ön Ayar (EV 100 ¾”):
              </span>
              <span className="font-mono font-bold text-steel-900 dark:text-white">
                {activePart.default34}
              </span>
            </div>
            <div>
              <span className="text-[0.65rem] text-steel-500 uppercase tracking-wider block">
                Ön Ayar (EV 100 1½”–2½”):
              </span>
              <span className="font-mono font-bold text-steel-900 dark:text-white">
                {activePart.default1525}
              </span>
            </div>
          </div>

          {/* Resmi Hızlı Ayarlama Prosedürü */}
          <div className="mt-3 rounded-2xl border border-brand-200/70 bg-brand-50/40 p-3.5 text-[0.74rem] leading-relaxed dark:border-brand-900/40 dark:bg-brand-950/30">
            <div className="mb-1 flex items-center gap-1.5 font-bold text-brand-900 dark:text-brand-300">
              <span>📋 Resmi Ayar Prosedürü:</span>
            </div>
            <p className="text-steel-800 dark:text-steel-200">
              {activePart.procedure}
            </p>
            <div className="mt-2.5 rounded-xl border border-brand-200/80 bg-white/80 px-2.5 py-1.5 font-mono text-[0.68rem] text-brand-900 dark:border-brand-800/60 dark:bg-steel-900/80 dark:text-brand-300">
              ⚡ Durum: {activePart.bobinState}
            </div>
          </div>

          {/* Çevirme Yönleri ve Etkileri */}
          <div className="mt-3 space-y-1.5 rounded-2xl border border-steel-200/80 bg-white p-3 text-[0.72rem] dark:border-steel-800 dark:bg-steel-900">
            <div className="flex items-start gap-1.5">
              <span className="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">
                ↻ İçeri (Sağa):
              </span>
              <span className="text-steel-700 dark:text-steel-300">
                {activePart.fasterOrMore}
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="shrink-0 font-bold text-sky-600 dark:text-sky-400">
                ↺ Dışarı (Sola):
              </span>
              <span className="text-steel-700 dark:text-steel-300">
                {activePart.slowerOrLess}
              </span>
            </div>
          </div>

          {/* Eylem Linkleri */}
          <div className="mt-4 flex items-center gap-2">
            <Link
              href="/service"
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand-600 py-2.5 text-[0.74rem] font-semibold text-white transition hover:bg-brand-700 sm:text-[0.76rem]"
            >
              <span>Arıza Çözümleri</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/downloads"
              className="flex flex-1 items-center justify-center rounded-xl border border-steel-300 bg-white py-2.5 text-[0.74rem] font-medium text-steel-700 transition hover:bg-steel-100 sm:text-[0.76rem] dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200 dark:hover:bg-steel-700"
            >
              Kılavuz İndir
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
