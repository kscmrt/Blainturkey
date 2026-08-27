import Image from "next/image";
import Link from "next/link";

/**
 * Logo + ülke kilidi. Saf sunum bileşeni — durum tutmaz, bu yüzden
 * `'use client'` gerektirmez ve istemci paketine yalnızca sarmalayıcısı
 * üzerinden dahil olur.
 */
export default function BrandMark() {
  return (
    <Link
      href="/"
      aria-label="Blain Türkiye ana sayfa"
      className="group flex items-center gap-3"
    >
      {/* Logo her zaman ilk boyanan öğe: lazy değil, eager + yüksek öncelik. */}
      <Image
        src="/images/BHlogo-forweb-e1747046392803.png"
        alt="Blain Hydraulics"
        width={86}
        height={100}
        loading="eager"
        fetchPriority="high"
        className="h-9 w-auto transition-transform duration-500 ease-brand group-hover:scale-[1.04]"
      />
      <span className="border-l border-brand-600/20 pl-3 text-[0.68rem] font-semibold tracking-[0.18em] text-brand-600">
        TÜRKİYE
      </span>
    </Link>
  );
}
