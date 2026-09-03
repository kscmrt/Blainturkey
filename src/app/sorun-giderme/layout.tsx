import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sorun Giderme Kılavuzu',
  description:
    'Hidrolik asansörlerde sık karşılaşılan arızalar, valf ayarları ve çözüm yöntemleri rehberi.',
  alternates: {
    canonical: '/sorun-giderme',
  },
};

export default function SorunGidermeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
