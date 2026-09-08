/**
 * Sahne koreografisi — saf fonksiyonlar.
 * 3B valfin scroll boyunca izlediği yol burada tanımlı.
 */
export type Keyframe = readonly [progress: number, value: number];

/** Ardışık iki anahtar kare arasında doğrusal örnekleme yapar. */
export function sample(progress: number, keyframes: readonly Keyframe[]): number {
  if (progress <= keyframes[0][0]) return keyframes[0][1];

  for (let i = 1; i < keyframes.length; i += 1) {
    const [toP, toV] = keyframes[i];
    if (progress > toP) continue;

    const [fromP, fromV] = keyframes[i - 1];
    const span = toP - fromP;
    const t = span === 0 ? 1 : (progress - fromP) / span;
    return fromV + (toV - fromV) * t;
  }

  return keyframes[keyframes.length - 1][1];
}

/* Masaüstü: valf, o an ekranda olan metin panelinin karşı tarafına kaçar. */
const DESKTOP_X: readonly Keyframe[] = [
  [0.0, 0],
  [0.1, 0],
  [0.17, 2.7], // 01 — metin solda
  [0.36, 2.7],
  [0.46, -2.7], // 02 — metin sağda
  [0.64, -2.7],
  [0.73, 2.4], // 03 — metin solda
  [0.86, 2.4],
  [0.93, 0], // final — merkeze döner
  [1.0, 0],
];

/* Açılışta valf alt üçte bire çekilir ki başlık nefes alsın. */
const DESKTOP_Y: readonly Keyframe[] = [
  [0.0, -2.15],
  [0.14, -0.4],
  [0.86, -0.4],
  [1.0, 0.55],
];

/* Mobil: Valf merkezde kalır; metin üstte, valf alt-orta yarıda ferahça görünür. */
const MOBILE_Y: readonly Keyframe[] = [
  [0.0, -1.8],
  [0.14, -0.6],
  [0.3, -0.6],
  [0.6, -0.6],
  [0.85, -0.6],
  [1.0, -0.3],
];

const SCALE: readonly Keyframe[] = [
  [0.0, 0.6],
  [0.14, 0.95],
  [0.86, 0.95],
  [1.0, 0.8],
];

export function valvePosition(progress: number, isMobile: boolean) {
  return {
    x: isMobile ? 0 : sample(progress, DESKTOP_X),
    y: sample(progress, isMobile ? MOBILE_Y : DESKTOP_Y),
  };
}

export function valveScale(progress: number): number {
  return sample(progress, SCALE);
}

/** Scroll'un tamamı boyunca iki tam tur. */
export const TOTAL_TURNS = 2;
