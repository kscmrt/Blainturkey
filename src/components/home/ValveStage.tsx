"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { motion, useReducedMotion, useTransform } from "motion/react";

import ValveModel from "./ValveModel";
import StageControls from "./StageControls";
import ValveInspectorDock, { OFFICIAL_VALVE_DATA } from "./ValveInspectorDock";
import { useScrollProgress } from "./ScrollProgress";
import { VALVE_MODELS, type MaterialId, type ValveId } from "./valveCatalog";
import {
  TEXT_BAND_CSS,
  buildGuardTimeline,
  useIsDesktopLayout,
} from "./safeZone";

const LEFT_GUARD = buildGuardTimeline("left");
const RIGHT_GUARD = buildGuardTimeline("right");

/* 3B model/HDR indirilirken sahne boş kalmasın diye — özellikle mobilde
   yavaş bağlantıda fark ediliyordu. `useProgress`, three.js'in global
   LoadingManager'ını okur; Canvas'a bağlı olmasa da aynı yükleri izler. */
function StageLoader() {
  const { active, progress } = useProgress();
  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="size-10 animate-spin rounded-full border-2 border-brand-600/25 border-t-brand-600" />
        <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-600/70">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

/* Model değişiminde bekleme olmasın diye hepsi önden yüklenir. */
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
  const [isDockOpen, setIsDockOpen] = useState(false);
  const [selectedPartId, setSelectedPartId] = useState("adj-1");
  const [isVisible, setIsVisible] = useState(true);

  const stageRef = useRef<HTMLDivElement>(null);

  const activePart =
    OFFICIAL_VALVE_DATA.find((p) => p.id === selectedPartId) ?? OFFICIAL_VALVE_DATA[0];

  /* Masaüstünde metin bantlarını kırpar; mobilde kırpma yapmaz, valf görünür kalır. */
  const leftGuard = useTransform(progress, LEFT_GUARD.xs, LEFT_GUARD.ys);
  const rightGuard = useTransform(progress, RIGHT_GUARD.xs, RIGHT_GUARD.ys);

  const clipPath = useTransform(() =>
    isDesktop
      ? `inset(0 calc(${rightGuard.get()} * ${TEXT_BAND_CSS}) 0 calc(${leftGuard.get()} * ${TEXT_BAND_CSS}))`
      : "none",
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
    <div ref={stageRef} className="relative size-full">
      {/* 3D Model Sahnesi */}
      <motion.div
        style={{ clipPath, willChange: "clip-path" }}
        className="size-full"
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
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
                angleOffsetY={isDockOpen ? activePart.angleY : 0}
                angleOffsetX={isDockOpen ? activePart.angleX : 0}
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

      <StageLoader />

      {/* Sağ Yan / Alt Parça İnceleme Paneli (Modal açıldığında alttaki kontrolleri gizlemez, üzerine biner ve alttan kapatır) */}
      <ValveInspectorDock
        isOpen={isDockOpen}
        selectedPartId={selectedPartId}
        onSelectPart={setSelectedPartId}
        onClose={() => setIsDockOpen(false)}
      />

      {/* Alt Kontrol Butonları (Ayar rehberi AÇIKKEN gizlenir, böylece üst üste binme imkansız hale gelir) */}
      <StageControls
        valveId={valveId}
        materialId={materialId}
        isDockOpen={isDockOpen}
        onValveChange={setValveId}
        onMaterialChange={setMaterialId}
        onToggleDock={() => setIsDockOpen((prev) => !prev)}
      />
    </div>
  );
}
