import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Teklif Talebi',
  description:
    'Blain Türkiye ofis adresi, telefon numaraları, WhatsApp destek hattı ve teklif iletişim bilgileri.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
