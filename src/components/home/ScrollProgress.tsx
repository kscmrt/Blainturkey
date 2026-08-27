"use client";

import { createContext, useContext } from "react";
import type { MotionValue } from "motion/react";

/**
 * Hikâyenin tek ilerleme kaynağı.
 *
 * Bir `MotionValue` React state'i DEĞİLDİR: değeri değiştiğinde bileşen
 * yeniden render edilmez, yalnızca ona abone olan stil/`useFrame` okuması
 * güncellenir. Böylece 400vh'lik kaydırma boyunca tek bir React render'ı bile
 * tetiklenmeden hem DOM hem 3B sahne senkron ilerler.
 */
const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export const ScrollProgressProvider = ScrollProgressContext.Provider;

export function useScrollProgress(): MotionValue<number> {
  const progress = useContext(ScrollProgressContext);

  if (!progress) {
    throw new Error(
      "useScrollProgress, <ScrollProgressProvider> içinde kullanılmalıdır.",
    );
  }

  return progress;
}
