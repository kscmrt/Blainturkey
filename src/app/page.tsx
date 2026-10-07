import type { Metadata } from "next";
import dynamic from "next/dynamic";

import EngineeringBento from "@/components/home/EngineeringBento";
import HomeCta from "@/components/home/HomeCta";
import TrustStrip from "@/components/home/TrustStrip";
import FAQSection from "@/components/FAQSection";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  loading: () => (
    <div
      aria-hidden
      className="h-[calc(100vh-var(--header-h))] w-full animate-pulse bg-steel-50"
    />
  ),
});

export const metadata: Metadata = {
  title: "Asansör Kontrol Valfleri",
  description:
    "Blain Türkiye — hidrolik asansörler için EV100 ve KV1P kontrol valfleri, güç üniteleri ve modernizasyon çözümleri. Alman mühendisliği, Türkiye'de teknik destek.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <EngineeringBento />
      <FAQSection />
      <HomeCta />
    </>
  );
}
