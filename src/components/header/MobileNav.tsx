"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { NAV_LINKS, isLinkActive } from "./navigation";

type MobileNavProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export default function MobileNav({ open, pathname, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Arka planı karartıp odağı menüye veren örtü */}
          <motion.button
            type="button"
            aria-label="Menüyü kapat"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[var(--header-h)] z-[90] bg-steel-900/25 backdrop-blur-[2px] lg:hidden"
          />

          <motion.nav
            id="mobile-menu"
            aria-label="Mobil menü"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[var(--header-h)] z-[95] origin-top border-b border-steel-200 bg-white/95 py-3 shadow-lift backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((link) => {
              const isCurrent = isLinkActive(pathname, link.path);

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={onClose}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`flex flex-col gap-0.5 border-l-[3px] px-7 py-3.5 transition-colors ${
                    isCurrent
                      ? "border-brand-600 bg-brand-50 text-brand-600"
                      : "border-transparent text-steel-700 active:bg-steel-50"
                  }`}
                >
                  <span className="text-base font-semibold">{link.name}</span>
                  <span className="text-xs text-steel-400">
                    {link.description}
                  </span>
                </Link>
              );
            })}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
