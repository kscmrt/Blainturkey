"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, useGLTF } from "@react-three/drei";
import { motion, useReducedMotion, useTransform } from "motion/react";

import ValveModel from "./ValveModel";
import StageControls from "./StageControls";
import { useScrollProgress } from "./ScrollProgress";
import { VALVE_MODELS, type MaterialId, type ValveId } from "./valveCatalog";
import {
  TEXT_BAND_CSS,
  buildAnyChapterTimeline,
  buildGuardTimeline,
  useIsDesktopLayout,
} from "./safeZone";

const LEFT_GUARD = buildGuardTimeline("left");
const RIGHT_GUARD = buildGuardTimeline("right");
const ANY_CHAPTER = buildAnyChapterTimeline();

/* Model değişiminde bekleme olmasın diye hepsi önden yüklenir.
   Sunucuda GLTFLoader'ı tetiklememek için tarayıcı kontrolü şart. */
if (typeof window !== "undefined") {
  VALVE_MODELS.forEach((model) => useGLTF.preload(`/${model.id}.glb`));
}

/**
 * Hikâyenin sabit (sticky) 3B sahnesi. Ekrandan çıktığında render döngüsü
 * durdurulur — alt bölümlerde okuma yaparken GPU boşuna çalışmaz.
 */
export default function ValveStage() {
  const progress = useScrollProgress();
  const reduceMotion = useReducedMotion() ?? false;
  const isDesktop = useIsDesktopLayout();

  const [valveId, setValveId] = useState<ValveId>("EV100_1_5_2");
  const [materialId, setMaterialId] = useState<MaterialId>("parlak");
  const [isVisible, setIsVisible] = useState(true);

  const stageRef = useRef<HTMLDivElement>(null);

  /* Perde tam görünürken 0→1→1→0: o taraf sahneden tamamen kırpılır. */
  const leftGuard = useTransform(progress, LEFT_GUARD.xs, LEFT_GUARD.ys);
  const rightGuard = useTransform(progress, RIGHT_GUARD.xs, RIGHT_GUARD.ys);
  const anyGuard = useTransform(progress, ANY_CHAPTER.xs, ANY_CHAPTER.ys);

  /* Valfin metne değmemesinin GERÇEK garantisi burada.
     `lg` üstünde (metin sol/sağ ayrık): aktif perdenin metin kutusuyla
     birebir aynı formülle hesaplanan bandı kırpar — konum animasyonu geç
     kalsa, sekse veya yanlış ölçeklense bile o pikseller hiç çizilmez.
     `lg` altında (metin tam genişlikte ortalı, ayrım yok): perde tam
     görünürken sahneyi tamamen kırpar; geçişlerde serbest bırakır. */
  const clipPath = useTransform(() =>
    isDesktop
      ? `inset(0 calc(${rightGuard.get()} * ${TEXT_BAND_CSS}) 0 calc(${leftGuard.get()} * ${TEXT_BAND_CSS}))`
      : `inset(0 0 ${anyGuard.get() * 100}% 0)`,
  );

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "10% 0px" },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    /* `z-index` bilerek verilmedi: kendi yığın bağlamını oluşturmasın ki
       içindeki kontrol paneli, kardeş metin katmanının üstünde kalabilsin. */
    <div ref={stageRef} className="relative size-full">
      {/* Valfin metne değmemesinin garanti edildiği sınır: bkz. `safeZone.ts`. */}
      <motion.div
        style={{ clipPath, willChange: "clip-path" }}
        className="size-full"
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          /* Retina'da 3x render etmek görsel kazanç sağlamıyor, maliyeti yüksek. */
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          frameloop={isVisible ? "always" : "never"}
        >
          <ambientLight intensity={0.6} />
          <spotLight
            position={[10, 20, 10]}
            angle={0.4}
            penumbra={1}
            intensity={2}
            color="#ffffff"
          />

          <Suspense fallback={null}>
            <Environment files="/studio.hdr" />

            <Float
              speed={reduceMotion ? 0 : 1.5}
              rotationIntensity={reduceMotion ? 0 : 0.1}
              floatIntensity={reduceMotion ? 0 : 0.5}
            >
              <ValveModel
                valveId={valveId}
                materialId={materialId}
                progress={progress}
                reduceMotion={reduceMotion}
              />
            </Float>

            <ContactShadows
              position={[0, -3.5, 0]}
              opacity={0.28}
              scale={15}
              blur={2.5}
              far={4}
              color="#000000"
            />
          </Suspense>
        </Canvas>
      </motion.div>

      <StageControls
        valveId={valveId}
        materialId={materialId}
        onValveChange={setValveId}
        onMaterialChange={setMaterialId}
      />
    </div>
  );
}
