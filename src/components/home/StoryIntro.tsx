"use client";

import { motion, useReducedMotion, useTransform } from "motion/react";

import { useScrollProgress } from "./ScrollProgress";

/**
 * Perde 0 — açılış. Sayfa yüklendiğinde CSS animasyonuyla belirir, kaydırma
 * başlayınca scroll'a bağlı olarak süzülüp çıkar. Valf bu perdede sahnenin
 * alt üçte birine çekildiği için başlık sütunu üst yarıda serbest kalır.
 */
export default function StoryIntro() {
  const progress = useScrollProgress();
  const reduceMotion = useReducedMotion();

  const opacity = useTransform(progress, [0, 0.06], [1, 0]);
  const y = useTransform(progress, [0, 0.06], [0, -60]);

  return (
    <motion.div
      style={
        reduceMotion ? undefined : { opacity, y, willChange: "transform, opacity" }
      }
      className="absolute inset-x-6 top-[9svh] flex flex-col items-center text-center sm:top-[11svh]"
    >
      <p className="eyebrow animate-fade">Asansör hidroliğinde dünya standardı</p>

      <h1 className="mt-4 max-w-[16ch] animate-rise text-[clamp(2.4rem,6.4vw,4.6rem)] font-bold text-steel-900">
        Kabinin içinde
        <span className="block text-brand-600">hissedilmeyen mühendislik</span>
      </h1>

      <p
        className="lede mt-5 animate-rise text-center"
        style={{ animationDelay: "160ms" }}
      >
        1971&apos;den bu yana Almanya&apos;da tasarlanan Blain kontrol valfleri,
        hidrolik asansörün hızını, duruşunu ve sessizliğini tek gövdede yönetir.
      </p>

      <div
        aria-hidden
        className="mt-5 flex flex-col items-center gap-2 text-steel-400"
      >
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em]">
          Kaydırın
        </span>
        <span className="h-6 w-px animate-scroll-hint bg-linear-to-b from-brand-600 to-transparent" />
      </div>
    </motion.div>
  );
}
