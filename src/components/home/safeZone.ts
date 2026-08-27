"use client";

import { useSyncExternalStore } from "react";

import { STORY_CHAPTERS, type StoryChapterData } from "./story";

/**
 * Valfin hiçbir zaman metne değmemesi için "sert" bir garanti.
 *
 * Önceki sürüm valfi metnin ekrandaki karşı tarafına *taşımaya çalışıyordu*
 * (keyframe'lerle tahmini bir konum) — bu bir hedefti, garanti değildi:
 * yay (spring) geride kalırsa, model farklı ölçeklenirse veya perdeler
 * arası geçiş zamanlaması kayarsa valf metnin üzerinden geçebilirdi.
 *
 * Bu dosya bunun yerine geometrik bir dışlama alanı üretir: 3B sahne,
 * `StoryChapter`'ın gerçek CSS kutusuyla BİREBİR AYNI formülle hesaplanan
 * bir `clip-path` ile kırpılır. Bir perde tam görünürken (settled), o
 * perdenin metin kutusunu kapsayan bant sahneden tamamen kesilir — valf o
 * pikselleri hiç çizemez. Kamera/dünya-birimi matematiğine güvenmez, JS ile
 * ölçüm yapmaz; salt CSS kutu modeline dayanır, bu yüzden yanlış olamaz.
 */

/** `StoryChapter`'daki `max-w-[min(30rem,84vw)]` ile birebir + güvenlik payı. */
export const TEXT_BAND_CSS = "(min(30rem, 84vw) + 2.5rem)";

/** Tailwind'in `lg` kırılımıyla birebir aynı — üstünde sol/sağ ayrımı var. */
const DESKTOP_QUERY = "(min-width: 1024px)";

export type AxisBreakpoints = { xs: number[]; ys: number[] };

/**
 * Belirli bir hizalamadaki (`left`/`right`) perdeler için 0→1→1→0 yamuk
 * (trapezoid) kırpma zaman çizelgesi üretir. Perde tam görünürken (settled
 * → leaving) değer 1'dir: o taraf tamamen kırpılır. Perdeler arasında
 * (hikâyenin geri kalanında) değer 0'dır: sahne serbestçe görünür.
 */
export function buildGuardTimeline(align: StoryChapterData["align"]): AxisBreakpoints {
  const xs: number[] = [0];
  const ys: number[] = [0];

  for (const chapter of STORY_CHAPTERS) {
    if (chapter.align !== align) continue;

    const [enter, settled, leaving, exit] = chapter.range;
    xs.push(enter, settled, leaving, exit);
    ys.push(0, 1, 1, 0);
  }

  xs.push(1);
  ys.push(0);

  return { xs, ys };
}

/**
 * Herhangi bir perde tam görünürken 1 olan birleşik zaman çizelgesi.
 * Mobilde (yatay ayrım yokken) valfi tamamen gizlemek için kullanılır.
 */
export function buildAnyChapterTimeline(): AxisBreakpoints {
  const xs: number[] = [0];
  const ys: number[] = [0];

  for (const chapter of STORY_CHAPTERS) {
    const [enter, settled, leaving, exit] = chapter.range;
    xs.push(enter, settled, leaving, exit);
    ys.push(0, 1, 1, 0);
  }

  xs.push(1);
  ys.push(0);

  return { xs, ys };
}

/**
 * `lg` kırılımının canlı durumu. Sahnenin hangi kırpma stratejisini
 * kullanacağını seçer: yatay bant (masaüstü, metin sol/sağ ayrık) ya da
 * tam gizleme (mobil, metin tam genişlikte ortalı).
 *
 * Varsayılan `false`'dur — hidrasyon tamamlanmadan önce "güvenli" taraf
 * budur: yanlış varsayım en kötü ihtimalle valfi bir an fazladan gizler,
 * asla metnin üstüne düşürmez.
 */
function subscribe(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/* Sunucuda `window` yok — sunucu anlık görüntüsü daima güvenli varsayılan
   olan `false`'tur (bkz. yukarıdaki dokümantasyon). */
const getServerSnapshot = () => false;
const getClientSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;

export function useIsDesktopLayout(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
