import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blain Türkiye | Asansör Kontrol Valfleri",
  description: "Asansör kontrolünde Alman kalitesi, Türkiye güvencesi. Blain hidrolik asansör valfleri ve sistemleri.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      </body>
    </html>
  );
}
