import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ürün Güncellemeleri & Bültenler',
  description:
    'Blain hidrolik kontrol teknolojileri, teknik bültenler ve ürün geliştirmeleri hakkında en güncel haberler.',
  alternates: {
    canonical: '/updates',
  },
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
