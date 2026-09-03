import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknik Dokümanlar, Kataloglar & CAD Çizimleri',
  description:
    'Blain kontrol valfleri kullanım kılavuzları, montaj şemaları, 3D CAD (.igs/.sat) çizimleri ve sertifikalar.',
  alternates: {
    canonical: '/downloads',
  },
};

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
