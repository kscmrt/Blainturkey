import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blain Türkiye | Asansör Kontrol Valfleri",
  description: "Asansör kontrolünde Alman kalitesi, Türkiye güvencesi. Blain hidrolik asansör valfleri ve sistemleri.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Signature } from "@/components/Signature";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Signature />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
