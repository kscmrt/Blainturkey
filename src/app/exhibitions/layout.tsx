import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fuarlar & Etkinlikler',
  description:
    'Blain Hydraulics uluslararası ve yerel asansör teknolojileri fuar takvimi ve etkinlikleri.',
  alternates: {
    canonical: '/exhibitions',
  },
};

export default function ExhibitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
