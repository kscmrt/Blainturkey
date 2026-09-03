import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Müşteri Portalı & Hidrolik Hesaplama',
  description:
    'Fiyat teklifi oluşturma, hidrolik basınç ve debi hesaplama, teknik servis talebi ve bayi erişim portalı.',
  alternates: {
    canonical: '/portal',
  },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
