import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asansör Modernizasyonu & EV40 Akıllı Valf',
  description:
    'Mevcut hidrolik asansör tesisatını sökmeden konfor, enerji verimliliği ve sessizlik kazanın. Blain EV40 modernizasyon çözümleri.',
  alternates: {
    canonical: '/modernization',
  },
};

export default function ModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
