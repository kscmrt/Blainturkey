"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";

import { NAV_LINKS, isLinkActive } from "./navigation";

/**
 * Masaüstü navigasyon. Marka metaforu: her bağlantının solunda bir kılavuz ray,
 * üzerinde de rayda gezinen tek bir asansör kabini var. Kabin `layoutId` ile
 * paylaşıldığı için bağlantılar arasında gerçekten "seyahat eder" —
 * her öğeye ayrı animasyon vermek yerine tek bir öğe taşınır.
 */
export default function DesktopNav({ pathname }: { pathname: string }) {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const activePath =
    NAV_LINKS.find((link) => isLinkActive(pathname, link.path))?.path ?? null;
  const focusedPath = hoveredPath ?? activePath;

  return (
    <LayoutGroup>
      <nav
        aria-label="Ana menü"
        className="hidden items-center gap-1 lg:flex"
        onMouseLeave={() => setHoveredPath(null)}
      >
        {NAV_LINKS.map((link) => {
          const isCurrent = link.path === activePath;
          const isFocused = link.path === focusedPath;

          return (
            <Link
              key={link.path}
              href={link.path}
              aria-current={isCurrent ? "page" : undefined}
              onMouseEnter={() => setHoveredPath(link.path)}
              onFocus={() => setHoveredPath(link.path)}
              className={`relative flex items-center py-2 pl-5 pr-3 text-[0.85rem] transition-colors duration-300 ${
                isFocused
                  ? "font-semibold text-brand-600"
                  : "font-medium text-steel-500 hover:text-steel-800"
              }`}
            >
              {/* Kılavuz ray */}
              <span
                aria-hidden
                className="absolute inset-y-1.5 left-2 w-px rounded-full bg-steel-900/10"
              />

              {/* Kabin — aynı anda tek bir öğede render edilir */}
              {isFocused && (
                <motion.span
                  aria-hidden
                  layoutId="nav-cabin"
                  /* Dikey ortalama transform yerine `top` ile: layout animasyonu
                     transform'u kendisi yönettiği için çakışma olmaz. */
                  className="absolute left-[calc(0.5rem-3.5px)] top-[calc(50%-5px)] h-2.5 w-2 rounded-[2px] bg-brand-600 shadow-[0_2px_6px_hsl(220_100%_30%/0.45)]"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 34, mass: 0.6 }
                  }
                />
              )}

              {link.name}
            </Link>
          );
        })}
      </nav>
    </LayoutGroup>
  );
}
