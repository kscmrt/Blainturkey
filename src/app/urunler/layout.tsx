import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hidrolik Asansör Kontrol Valfleri & Ürünler',
  description:
    'Blain Hydraulics kontrol valfleri (EV100, KV1P, EV40), güç üniteleri, emniyet valfleri ve yedek parçaları inceleyin.',
  alternates: {
    canonical: '/urunler',
  },
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
