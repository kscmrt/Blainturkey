/** Tek kaynak: masaüstü ve mobil navigasyon aynı diziden beslenir. */
export type NavLink = {
  name: string;
  path: string;
  description: string;
};

export const NAV_LINKS: readonly NavLink[] = [
  { name: "Ana Sayfa", path: "/", description: "Blain Türkiye" },
  { name: "Ürünler", path: "/urunler", description: "Valfler ve güç üniteleri" },
  { name: "Modernizasyon", path: "/modernization", description: "Mevcut tesisatın yenilenmesi" },
  { name: "Servis", path: "/service", description: "Teknik destek ve devreye alma" },
  { name: "Dokümanlar", path: "/downloads", description: "Kataloglar ve kılavuzlar" },
  { name: "Hakkımızda", path: "/about-us", description: "1960'tan bu yana" },
] as const;

/** Ana sayfa yalnızca tam eşleşmede, diğerleri alt rotalarda da aktiftir. */
export function isLinkActive(pathname: string, path: string): boolean {
  return path === "/" ? pathname === "/" : pathname.startsWith(path);
}
