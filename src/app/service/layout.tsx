import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknik Servis & İnteraktif Arıza Arama',
  description:
    'Blain valfleri için adım adım interaktif arıza tespit aracı, ayar kılavuzları ve Türkiye teknik destek hattı.',
  alternates: {
    canonical: '/service',
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
