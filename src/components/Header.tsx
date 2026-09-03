"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";

import BrandMark from "./header/BrandMark";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import ThemeToggle from "./header/ThemeToggle";

/**
 * Header kabuğu. Tek sorumluluğu durum yönetmek:
 *  - sayfa kaydırıldı mı (cam efektinin yoğunluğu için)
 *  - mobil menü açık mı
 * Görsel parçalar `./header/*` altında ayrı bileşenlerde.
 */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  /* Scroll değeri MotionValue olarak okunur. Aynı boolean tekrar set edilince
     React render'ı atlar; yani her karede değil, yalnızca eşik geçilince
     yeniden render olur. */
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  /* Menü açıkken arka plan kaymasın ve Esc ile kapansın. */
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-[100] h-[var(--header-h)] w-full border-b transition-[background-color,border-color,box-shadow] duration-500 ease-brand ${
          isScrolled
            ? "border-steel-900/8 bg-white/80 shadow-soft backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <BrandMark />

          <DesktopNav pathname={pathname} />

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />

            <Link
              href="/portal"
              className="rounded-full bg-brand-600 px-4 py-2 text-[0.8rem] font-medium tracking-tight text-white shadow-glow transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-brand-700 sm:px-5"
            >
              Müşteri Portalı
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 grid size-10 place-items-center rounded-full text-brand-600 transition-colors hover:bg-brand-50 lg:hidden"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden
              >
                {isMenuOpen ? (
                  <path d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={isMenuOpen}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
