import type { Metadata } from "next";
import dynamic from "next/dynamic";

import EngineeringBento from "@/components/home/EngineeringBento";
import HomeCta from "@/components/home/HomeCta";
import TrustStrip from "@/components/home/TrustStrip";
import NewsletterSignup from "@/components/NewsletterSignup";
import FAQSection from "@/components/FAQSection";

/**
 * Ana sayfa bir Server Component'tir. `'use client'` yalnızca gerçekten
 * tarayıcıda çalışması gereken tek parçada — scroll'a bağlı 3B hikâyede —
 * bulunur. Altındaki tüm bölümler sunucuda render edilir ve istemciye
 * JavaScript göndermez.
 */

/* WebGL sahnesi sunucuda anlamsız; ilk boyamayı bloklamaması için ayrı
   parçaya alınır. */
const ValveStory = dynamic(() => import("@/components/home/ValveStory"), {
  loading: () => (
    <div
      aria-hidden
      className="h-[70svh] w-full animate-pulse bg-steel-50"
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
      <ValveStory />
      <TrustStrip />
      <EngineeringBento />
      <NewsletterSignup />
      <FAQSection />
      <HomeCta />
    </>
  );
}
