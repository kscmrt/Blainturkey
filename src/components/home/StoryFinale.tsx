"use client";

import Link from "next/link";
import { motion, useReducedMotion, useTransform } from "motion/react";

import { useScrollProgress } from "./ScrollProgress";
import { FINALE_RANGE } from "./story";

/**
 * Perde 4 — final. İki başlık zıt yönlerden gelip birleşir; hikâyenin
 * kapanışı doğrudan bir eyleme (ürün kataloğu) bağlanır.
 */
export default function StoryFinale() {
  const progress = useScrollProgress();
  const reduceMotion = useReducedMotion();

  const [start, end] = FINALE_RANGE;

  const opacity = useTransform(progress, [start, start + 0.04], [0, 1]);
  const leftX = useTransform(progress, [start, end], ["-60vw", "0vw"]);
  const rightX = useTransform(progress, [start, end], ["60vw", "0vw"]);
  const ctaOpacity = useTransform(progress, [end - 0.03, end + 0.02], [0, 1]);
  const ctaY = useTransform(progress, [end - 0.03, end + 0.02], [24, 0]);

  const staticStyle = reduceMotion ? undefined : { opacity };

  return (
    <div className="absolute inset-x-6 bottom-[16svh] flex flex-col items-center gap-8 text-center sm:bottom-[18svh]">
      <div className="flex flex-col items-center justify-center gap-x-4 sm:flex-row">
        <motion.h2
          style={
            reduceMotion ? undefined : { ...staticStyle, x: leftX, willChange: "transform" }
          }
          className="text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold tracking-tight text-brand-600"
        >
          Zamanın Ötesinde
        </motion.h2>
        <motion.h2
          style={
            reduceMotion ? undefined : { ...staticStyle, x: rightX, willChange: "transform" }
          }
          className="text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold tracking-tight text-steel-900"
        >
          Performans
        </motion.h2>
      </div>

      <motion.div
        style={reduceMotion ? undefined : { opacity: ctaOpacity, y: ctaY }}
        className="pointer-events-auto flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
      >
        <Link href="/urunler" className="btn btn-primary w-full sm:w-auto">
          Tüm Ürünleri İncele
          <span aria-hidden>&rarr;</span>
        </Link>
        <Link href="/contact" className="btn btn-glass w-full sm:w-auto">
          Teknik Danışmanlık
        </Link>
      </motion.div>
    </div>
  );
}
