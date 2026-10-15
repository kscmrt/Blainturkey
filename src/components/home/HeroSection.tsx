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
    <section className="relative flex flex-col items-center justify-start bg-white pt-16 sm:pt-24 lg:pt-32">
      {/* BAŞLIK VE METİN */}
      <div className="z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <p className="eyebrow inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-700 animate-fade">
          ASANSÖR HİDROLİĞİNDE DÜNYA STANDARDI
        </p>
        <h1 className="mt-8 animate-rise text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-steel-900 leading-[1.05]">
          Kabinin içinde <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">
            hissedilmeyen mühendislik
          </span>
        </h1>
        <p className="lede mt-8 max-w-2xl animate-rise text-lg sm:text-xl leading-relaxed text-steel-600" style={{ animationDelay: "160ms" }}>
          1971'den bu yana Almanya'da tasarlanan Blain kontrol valfleri, hidrolik asansörün hızını, duruşunu ve sessizliğini tek gövdede yönetir.
        </p>
      </div>

      {/* 3D SAHNE - TAM GENİŞLİK */}
      <div className="relative z-10 mt-12 w-full h-[60vh] min-h-[500px] lg:h-[75vh] max-w-[1400px] mx-auto animate-rise" style={{ animationDelay: "300ms" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-steel-100/50 via-white to-white -z-10" />
        
        <Canvas
          camera={{ position: [0, 1, 12], fov: 40 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        >
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 20, 10]} angle={0.4} penumbra={1} intensity={2.5} color="#ffffff" castShadow />
          <spotLight position={[-10, 10, -10]} angle={0.4} penumbra={1} intensity={1} color="#e2e8f0" />
          
          <Suspense fallback={null}>
            <Environment files="/studio.hdr" />
            
            <Float speed={2} rotationIntensity={0.15} floatIntensity={0.8}>
              <ValveModelStandalone
                valveId={valveId}
                materialId={materialId}
              />
            </Float>
            
            <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={20} blur={2.5} far={4} color="#0f172a" />
          </Suspense>
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
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

      {/* HİKAYE BÖLÜMLERİ (GRID) */}
      <div className="relative z-20 -mt-8 w-full max-w-7xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {STORY_CHAPTERS.map((chapter, i) => (
            <div 
              key={chapter.id} 
              className="group rounded-3xl border border-steel-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-steel-900/5 animate-rise" 
              style={{ animationDelay: `${500 + i * 100}ms` }}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-xl font-black text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-steel-900">{chapter.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-steel-600">{chapter.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
