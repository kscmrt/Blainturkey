"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
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
    <section className="relative flex flex-col items-center justify-start bg-white pt-12 sm:pt-20 lg:pt-24 dark:bg-steel-950">
      {/* BAŞLIK, METİN VE EYLEM BUTONLARI */}
      <div className="z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        {/* Üst Rozet */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-xs backdrop-blur-sm dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-300">
          <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>1971&apos;DEN BU YANA ALMAN MÜHENDİSLİĞİ</span>
          <span className="text-brand-300 dark:text-brand-700">|</span>
          <span className="text-brand-900 font-bold dark:text-white">BLAİN TÜRKİYE</span>
        </div>

        {/* Ana Başlık */}
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-[4.75rem] font-extrabold tracking-tight text-steel-900 leading-[1.08] max-w-5xl dark:text-white">
          Kabinin içinde <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-accent-500">
            hissedilmeyen mühendislik
          </span>
        </h1>

        {/* Alt Açıklama */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-steel-600 dark:text-steel-300">
          1971&apos;den bu yana Almanya&apos;da tasarlanan Blain kontrol valfleri, hidrolik asansörün hızını, duruşunu ve sessizliğini tek gövdede yönetir.
        </p>

        {/* Hızlı Eylem Butonları */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#urun-ekosistemi"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
          >
            <span>Ürün Ailesini İncele</span>
            <span aria-hidden="true">&rarr;</span>
          </a>

          <Link
            href="/portal/calculator"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-steel-300 bg-white/95 px-6 py-3.5 text-sm font-semibold text-steel-800 shadow-xs backdrop-blur-sm transition-all duration-300 hover:bg-steel-50 hover:border-brand-300 hover:-translate-y-0.5 dark:border-steel-700 dark:bg-steel-800 dark:text-steel-200 dark:hover:bg-steel-700"
          >
            <svg className="size-4 text-brand-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Hidrolik Hesaplama Aracı</span>
          </Link>

          <a
            href="https://wa.me/905360256494?text=Merhaba,%20Blain%20valfleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-5 py-3.5 text-sm font-semibold text-emerald-800 shadow-xs transition-all duration-300 hover:bg-emerald-100 hover:-translate-y-0.5 dark:border-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300"
          >
            <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Teknik Destek &amp; WhatsApp</span>
          </a>
        </div>

        {/* Gerçek Doğrulanmış Rozetler */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-steel-500 dark:text-steel-400">
          <span className="flex items-center gap-1.5">
            <span>🇩🇪</span> %100 Almanya Üretimi (Heilbronn)
          </span>
          <span className="hidden sm:inline text-steel-300 dark:text-steel-700">•</span>
          <span className="flex items-center gap-1.5">
            <span>🛡️</span> EN 81-20 / EN 81-50 Uyumlu
          </span>
          <span className="hidden sm:inline text-steel-300 dark:text-steel-700">•</span>
          <span className="flex items-center gap-1.5">
            <span>🌍</span> 75&apos;ten Fazla Ülkeye İhracat
          </span>
          <span className="hidden sm:inline text-steel-300 dark:text-steel-700">•</span>
          <span className="flex items-center gap-1.5">
            <span>🏅</span> ISO 9001 Sertifikalı Üretim
          </span>
        </div>
      </div>

      {/* 3D SAHNE - TAM GENİŞLİK */}
      <div className="relative z-10 mt-8 w-full h-[52vh] min-h-[460px] lg:h-[68vh] max-w-[1400px] mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-steel-100/60 via-white to-white -z-10 dark:from-steel-900/60 dark:via-steel-950 dark:to-steel-950" />

        {/* 3D İpucu Rozeti */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-steel-200/90 bg-white/85 px-3.5 py-1 text-[0.72rem] font-semibold text-steel-700 shadow-xs backdrop-blur-md dark:border-steel-700 dark:bg-steel-800/85 dark:text-steel-200">
            <span className="size-2 rounded-full bg-brand-500 animate-pulse" />
            3D İnteraktif Valf Modeli: Döndürün, İnceleyin &amp; Ayarları Görün
          </span>
        </div>
        
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
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
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

      {/* HİKAYE BÖLÜMLERİ (STORY_CHAPTERS) */}
      <div className="relative z-20 -mt-6 w-full max-w-7xl px-6 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {STORY_CHAPTERS.map((chapter, i) => (
            <div 
              key={chapter.id} 
              className="group rounded-3xl border border-steel-200/90 bg-white/90 p-8 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-200 dark:border-steel-800 dark:bg-steel-900/90 dark:hover:border-brand-700" 
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-black text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950 dark:text-accent-400">
                0{i + 1}
              </div>
              <span className="text-[0.72rem] font-bold uppercase tracking-wider text-steel-400">
                {chapter.eyebrow}
              </span>
              <h3 className="mt-1 text-xl font-bold text-steel-900 dark:text-white">{chapter.title}</h3>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-steel-600 dark:text-steel-300">{chapter.body}</p>

              {/* story.ts içerisindeki orijinal resmi metrik */}
              <div className="mt-6 pt-4 border-t border-steel-100 flex items-center justify-between dark:border-steel-800">
                <span className="text-[0.7rem] uppercase tracking-wider text-steel-400 font-semibold">{chapter.metric.label}</span>
                <span className="text-sm font-bold text-brand-600 dark:text-accent-400">{chapter.metric.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
