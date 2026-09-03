import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kataloglar & Broşürler',
  description:
    'Blain hidrolik asansör kontrol valfleri ve güç üniteleri ürün ve teknik katalogları.',
  alternates: {
    canonical: '/kataloglar',
  },
};

export default function KataloglarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
