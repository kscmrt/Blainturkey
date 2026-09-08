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
      className="absolute inset-x-4 top-[4svh] flex flex-col items-center text-center sm:inset-x-6 sm:top-[9svh]"
    >
      <p className="eyebrow text-xs sm:text-sm animate-fade">Asansör hidroliğinde dünya standardı</p>

      <h1 className="mt-2 sm:mt-4 max-w-[18ch] animate-rise text-[clamp(1.75rem,5.5vw,4.6rem)] font-bold tracking-tight text-steel-900 leading-tight">
        Kabinin içinde{" "}
        <span className="block text-brand-600">hissedilmeyen mühendislik</span>
      </h1>

      <p
        className="lede mt-2.5 sm:mt-5 max-w-[34ch] sm:max-w-xl animate-rise text-center text-[0.82rem] sm:text-base leading-snug sm:leading-relaxed text-steel-600"
        style={{ animationDelay: "160ms" }}
      >
        1971&apos;den bu yana Almanya&apos;da tasarlanan Blain kontrol valfleri,
        hidrolik asansörün hızını, duruşunu ve sessizliğini tek gövdede yönetir.
      </p>

      <div
        aria-hidden
        className="mt-3 sm:mt-5 flex flex-col items-center gap-1.5 text-steel-400"
      >
        <span className="text-[0.6rem] sm:text-[0.66rem] font-semibold uppercase tracking-[0.2em]">
          Kaydırın
        </span>
        <span className="h-4 sm:h-6 w-px animate-scroll-hint bg-linear-to-b from-brand-600 to-transparent" />
      </div>
    </motion.div>
  );
}
