"use client";

import { motion, useReducedMotion, useTransform } from "motion/react";

import { useScrollProgress } from "./ScrollProgress";
import type { StoryChapterData } from "./story";

/**
 * Tek bir hikâye perdesi. Konum, opaklık ve bulanıklık scroll ilerlemesine
 * bağlıdır; hiçbiri React state'i değildir, hepsi `MotionValue` üzerinden
 * doğrudan stile yazılır (layout tetiklemeyen transform + opacity).
 */
export default function StoryChapter({ chapter }: { chapter: StoryChapterData }) {
  const progress = useScrollProgress();
  const reduceMotion = useReducedMotion();

  const [enter, settled, leaving, exit] = chapter.range;
  const fromX = chapter.align === "left" ? -70 : 70;

  const opacity = useTransform(
    progress,
    [enter, settled, leaving, exit],
    [0, 1, 1, 0],
  );
  const x = useTransform(progress, [enter, settled, leaving, exit], [
    fromX,
    0,
    0,
    -fromX * 0.35,
  ]);
  const y = useTransform(progress, [enter, settled, leaving, exit], [
    48,
    0,
    0,
    -32,
  ]);
  const blur = useTransform(
    progress,
    [enter, settled, leaving, exit],
    ["blur(14px)", "blur(0px)", "blur(0px)", "blur(10px)"],
  );

  const isDark = chapter.tone === "dark";

  return (
    <motion.article
      aria-labelledby={`${chapter.id}-title`}
      style={
        reduceMotion
          ? undefined
          : { opacity, x, y, filter: blur, willChange: "transform, opacity" }
      }
      /* Dikey ortalama flex ile yapılır; `translate-y` kullanılsaydı motion'ın
         yazdığı transform ile çakışırdı. */
      className={`absolute inset-y-0 left-6 right-6 flex max-w-[min(30rem,84vw)] flex-col justify-center sm:left-10 sm:right-10 lg:left-[8vw] lg:right-[8vw] ${
        chapter.align === "right" ? "ml-auto lg:items-end lg:text-right" : ""
      }`}
    >
      <p
        className={`eyebrow mb-4 ${isDark ? "text-accent-400" : "text-brand-600"}`}
      >
        {chapter.eyebrow}
      </p>

      <h2
        id={`${chapter.id}-title`}
        className={`mb-5 text-[clamp(2.1rem,5.2vw,3.4rem)] font-bold ${
          isDark ? "text-white" : "text-steel-900"
        }`}
      >
        {chapter.title}
      </h2>

      <p
        className={`text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed ${
          isDark ? "text-steel-300" : "text-steel-600"
        }`}
      >
        {chapter.body}
      </p>

      {/* Perdenin tek sayısal kanıtı — iddiayı somutlaştırır. */}
      <div
        className={`mt-8 inline-flex flex-col gap-0.5 border-l-2 pl-4 ${
          chapter.align === "right"
            ? "lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4 lg:text-right"
            : ""
        } ${isDark ? "border-accent-500" : "border-brand-600"}`}
      >
        <span
          className={`font-display text-2xl font-bold tabular-nums ${
            isDark ? "text-white" : "text-brand-600"
          }`}
        >
          {chapter.metric.value}
        </span>
        <span
          className={`text-xs uppercase tracking-[0.14em] ${
            isDark ? "text-steel-400" : "text-steel-500"
          }`}
        >
          {chapter.metric.label}
        </span>
      </div>
    </motion.article>
  );
}
