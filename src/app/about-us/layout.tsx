import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Blain Hydraulics Tarihçesi',
  description:
    "1971'den bu yana hidrolik asansör kontrolünde dünya standardı olan Blain Hydraulics ve Blain Türkiye hakkında bilgi edinin.",
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
