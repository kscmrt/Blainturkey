"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import ValveStage from "./ValveStage";
import StoryChapter from "./StoryChapter";
import StoryFinale from "./StoryFinale";
import StoryIntro from "./StoryIntro";
import { ScrollProgressProvider } from "./ScrollProgress";
import { STORY_CHAPTERS } from "./story";

/**
 * Scroll-tied hikâyenin orkestratörü ve sayfadaki TEK istemci sınırı.
 *
 * Yüksek bir "ray" (track) boyunca kaydırma yapılır; içindeki sahne sabit
 * (sticky) kalır. `useScroll` bu ray üzerinden 0..1 arası tek bir ilerleme
 * üretir, `useSpring` ona ataleti verir ve context ile hem 3B sahneye hem
 * metin perdelerine dağıtılır.
 */
export default function ValveStory() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  /* Ham scroll değeri "yapışkan" hissettirir; yay ile yumuşatınca hareket
     mekanik olmaktan çıkıp hidrolik bir akışkanlık kazanır. */
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.35,
    restDelta: 0.0005,
  });

  /* Arka plan perdeyle birlikte döner: aydınlık → derin lacivert → aydınlık. */
  const background = useTransform(
    progress,
    [0, 0.3, 0.42, 0.82, 0.9, 1],
    [
      "hsl(210 40% 98%)",
      "hsl(210 40% 98%)",
      "hsl(222 60% 8%)",
      "hsl(222 60% 8%)",
      "hsl(0 0% 100%)",
      "hsl(0 0% 100%)",
    ],
  );

  return (
    <ScrollProgressProvider value={progress}>
      <motion.section
        ref={trackRef}
        aria-label="Blain kontrol valfi tanıtımı"
        style={{ background }}
        /* Ray yüksekliği = perde sayısı × okuma payı. Mobilde daha kısa,
           çünkü küçük ekranda uzun scroll yorucu. */
        className="relative h-[300svh] md:h-[440svh]"
      >
        <div className="sticky top-[var(--header-h)] h-[calc(100svh-var(--header-h))] overflow-hidden">
          <ValveStage />

          {/* Metin katmanı: tıklamalar 3B sahneye geçsin diye varsayılan
              olarak pointer-events kapalı, sadece bağlantılarda açılır. */}
          <div className="pointer-events-none absolute inset-0 z-20 px-2">
            <StoryIntro />

            {STORY_CHAPTERS.map((chapter) => (
              <StoryChapter key={chapter.id} chapter={chapter} />
            ))}

            <StoryFinale />
          </div>
        </div>
      </motion.section>
    </ScrollProgressProvider>
  );
}
