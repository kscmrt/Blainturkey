import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Signature } from "@/components/Signature";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

/* Gövde metni: yüksek okunabilirlik, Türkçe diyakritikler için latin-ext. */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

/* Başlıklar: geometrik, mühendislik hissi veren display fontu. */
const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.blain.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blain Türkiye | Asansör Kontrol Valfleri",
    /* Alt sayfalar sadece kendi başlığını yazar, marka otomatik eklenir. */
    template: "%s | Blain Türkiye",
  },
  description:
    "Asansör kontrolünde Alman kalitesi, Türkiye güvencesi. Blain hidrolik asansör valfleri, güç üniteleri ve modernizasyon çözümleri.",
  applicationName: "Blain Türkiye",
  keywords: [
    "asansör valfi",
    "hidrolik asansör",
    "Blain",
    "EV100",
    "KV1P",
    "asansör güç ünitesi",
    "asansör modernizasyonu",
  ],
  authors: [{ name: "Blain Hydraulics GmbH" }],
  creator: "Blain Hydraulics GmbH",
  publisher: "Blain Hydraulics GmbH",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Blain Türkiye",
    title: "Blain Türkiye | Asansör Kontrol Valfleri",
    description:
      "1971'den bu yana hidrolik asansör kontrolünde dünya standardı. EV100, KV1P ve güç ünitesi çözümleri.",
    images: [
      {
        url: "/images/EV-Series-2-1024x708.png",
        width: 1024,
        height: 708,
        alt: "Blain EV Serisi asansör kontrol valfleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blain Türkiye | Asansör Kontrol Valfleri",
    description:
      "Hidrolik asansör kontrolünde Alman mühendisliği. EV100, KV1P ve güç üniteleri.",
    images: ["/images/EV-Series-2-1024x708.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#003399",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blain Türkiye',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description: 'Asansör kontrolünde Alman kalitesi, Türkiye güvencesi. Blain hidrolik asansör valfleri, güç üniteleri ve modernizasyon çözümleri.',
    sameAs: [
      'https://www.blain.de',
      'https://www.linkedin.com/company/blain-hydraulics',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-536-025-6494',
      contactType: 'Customer Support',
      areaServed: 'TR',
      availableLanguage: ['tr', 'en', 'de'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Heilbronn',
      addressCountry: 'DE',
    },
    foundingDate: '1971',
    founder: {
      '@type': 'Person',
      name: 'Roy Blain',
    },
  };

  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          İçeriğe geç
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Signature />
        <CookieConsent />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
