import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik ve Çerez Politikası',
  description:
    'Blain Türkiye web sitesi gizlilik, kişisel verilerin korunması ve çerez kullanım politikası.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
