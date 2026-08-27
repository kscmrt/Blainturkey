/**
 * Ana sayfa hikâyesinin tek veri kaynağı.
 *
 * `range` dört eşikten oluşur — [gir, tamGörünür, çıkmayaBaşla, çık] — ve
 * 0..1 aralığındaki scroll ilerlemesine karşılık gelir.
 *
 * ÖNEMLİ: Perdeler arasında bilerek boşluk bırakılmıştır. Valf, bir perdeden
 * diğerine ancak bu boşluklarda yer değiştirir; yani ekranda metin varken
 * yatay geçiş yapmaz. `valveMotion.ts` duraklarını doğrudan bu eşiklerden
 * türetir, dolayısıyla buradaki bir değişiklik sahneyi de günceller.
 */
export type StoryTone = "light" | "dark";

export type StoryChapterData = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  metric: { value: string; label: string };
  align: "left" | "right";
  tone: StoryTone;
  range: [number, number, number, number];
};

/** Açılış metninin tamamen silindiği eşik. */
export const INTRO_FADE_END = 0.05;

export const STORY_CHAPTERS: readonly StoryChapterData[] = [
  {
    id: "ride",
    eyebrow: "01 — Sürüş Konforu",
    title: "Kusursuz Seyahat",
    body: "Çift hızlı iniş kontrolü — pürüzsüz kalkış ve hassas duruş. Tüm yüklerde ve mevsim koşullarında, yolcular ivmeyi değil, sessizliği hisseder.",
    metric: { value: "50+ yıl", label: "kanıtlanmış güvenilirlik" },
    align: "left",
    tone: "light",
    range: [0.12, 0.2, 0.29, 0.35],
  },
  {
    id: "durability",
    eyebrow: "02 — Dayanıklılık",
    title: "On Yıllarca Dayanıklılık",
    body: "Hassas işlenmiş iç yüzeyler, yüksek basınç toleransı ve uzun ömürlü tasarım; bakım aralığını yıllara, gövde ömrünü on yıllara taşır.",
    metric: { value: "10+ yıl", label: "gövde ömrü" },
    align: "right",
    tone: "dark",
    range: [0.42, 0.5, 0.58, 0.64],
  },
  {
    id: "precision",
    eyebrow: "03 — Üretim Hassasiyeti",
    title: "Alman Mühendisliği",
    body: "Her gövde Almanya'da dökülür, işlenir ve tek tek test edilir. ISO 9001 sertifikalı hattan çıkan hiçbir valf basınç testinden geçmeden sevk edilmez.",
    metric: { value: "%100", label: "sevkiyat öncesi basınç testi" },
    align: "left",
    tone: "dark",
    range: [0.71, 0.78, 0.85, 0.9],
  },
] as const;

/** Finalin (çarpışan başlıklar + CTA) devreye girdiği eşik. */
export const FINALE_RANGE: [number, number] = [0.95, 1];
