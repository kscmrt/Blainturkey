"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";
import ValveModelStandalone from "./ValveModelStandalone";
import StageControls from "./StageControls";
import ValveInspectorDock from "./ValveInspectorDock";
import { type ValveId, type MaterialId } from "./valveCatalog";
import { STORY_CHAPTERS } from "./story";

export default function HeroSection() {
  const [valveId, setValveId] = useState<ValveId>("EV100_1_5_2");
  const [materialId, setMaterialId] = useState<MaterialId>("parlak");
  const [isDockOpen, setIsDockOpen] = useState(false);
  const [selectedPartId, setSelectedPartId] = useState("adj-1");

  return (
    <section className="relative flex min-h-[calc(100vh-var(--header-h))] flex-col items-center justify-between overflow-hidden bg-steel-50 pt-8 lg:flex-row lg:pt-16">
      {/* METİN BÖLÜMÜ */}
      <div className="z-10 flex w-full flex-col px-6 pb-12 pt-8 lg:w-1/2 lg:pl-16 lg:pb-0 xl:pl-24">
        <p className="eyebrow text-xs sm:text-sm text-brand-600 animate-fade">Asansör hidroliğinde dünya standardı</p>
        <h1 className="mt-4 max-w-[15ch] animate-rise text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-tight text-steel-900 leading-tight">
          Kabinin içinde <span className="block text-brand-600">hissedilmeyen mühendislik</span>
        </h1>
        <p className="lede mt-4 sm:mt-6 max-w-xl animate-rise text-[0.95rem] sm:text-base leading-relaxed text-steel-600" style={{ animationDelay: "160ms" }}>
          1971'den bu yana Almanya'da tasarlanan Blain kontrol valfleri, hidrolik asansörün hızını, duruşunu ve sessizliğini tek gövdede yönetir.
        </p>

        <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-8">
          {STORY_CHAPTERS.map((chapter, i) => (
            <div key={chapter.id} className="animate-rise flex flex-col gap-1.5 sm:gap-2 border-l-2 border-brand-600 pl-4" style={{ animationDelay: `${300 + i * 150}ms` }}>
              <h3 className="text-lg sm:text-xl font-bold text-steel-900">{chapter.title}</h3>
              <p className="text-[0.85rem] sm:text-sm text-steel-600 max-w-md">{chapter.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3D SAHNE */}
      <div className="relative w-full h-[65vh] min-h-[500px] lg:h-[80vh] lg:w-1/2 bg-gradient-to-b from-transparent to-white/50 lg:bg-none">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 20, 10]} angle={0.4} penumbra={1} intensity={2} color="#ffffff" />
          
          <Suspense fallback={null}>
            <Environment files="/studio.hdr" />
            
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
              <ValveModelStandalone
                valveId={valveId}
                materialId={materialId}
              />
            </Float>
            
            <ContactShadows position={[0, -2.0, 0]} opacity={0.28} scale={15} blur={2.5} far={4} color="#000000" />
          </Suspense>
          
          {/* Scroll yerini OrbitControls aldı, kullanıcı kendi çevirebilir */}
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>

        {/* KONTROLLER */}
        <StageControls
          valveId={valveId}
          materialId={materialId}
          isDockOpen={isDockOpen}
          onValveChange={setValveId}
          onMaterialChange={setMaterialId}
          onToggleDock={() => setIsDockOpen((prev) => !prev)}
        />

        <ValveInspectorDock
          isOpen={isDockOpen}
          selectedPartId={selectedPartId}
          onSelectPart={setSelectedPartId}
          onClose={() => setIsDockOpen(false)}
        />
      </div>
    </section>
  );
}
