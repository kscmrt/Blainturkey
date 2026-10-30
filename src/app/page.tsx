import type { Metadata } from "next";
import dynamic from "next/dynamic";

import QuickToolsBar from "@/components/home/QuickToolsBar";
import ValveSelectorWidget from "@/components/home/ValveSelectorWidget";
import ProductShowcase from "@/components/home/ProductShowcase";
import EngineeringBento from "@/components/home/EngineeringBento";
import ModernizationSpotlight from "@/components/home/ModernizationSpotlight";
import TrustStrip from "@/components/home/TrustStrip";
import FAQSection from "@/components/FAQSection";
import HomeCta from "@/components/home/HomeCta";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  loading: () => (
    <div
      aria-hidden
      className="h-[calc(100vh-var(--header-h))] w-full animate-pulse bg-steel-50 dark:bg-steel-900"
    />
  ),
});

export const metadata: Metadata = {
  title: "Blain Türkiye — Asansör Kontrol Valfleri & Hidrolik Sistemler",
  description:
    "Blain Türkiye — hidrolik asansörler için EV100, KV1P, EV40 kontrol valfleri, güç üniteleri ve modernizasyon çözümleri. Alman mühendisliği, Türkiye'de teknik destek, hızlı stok teslimatı.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickToolsBar />
      <ValveSelectorWidget />
      <ProductShowcase />
      <EngineeringBento />
      <ModernizationSpotlight />
      <TrustStrip />
      <FAQSection />
      <HomeCta />
    </>
  );
}
