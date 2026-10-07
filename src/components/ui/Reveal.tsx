"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Animasyonlar bazı eski iOS cihazlarda (IntersectionObserver uyumsuzluğu nedeniyle)
 * içeriğin görünmez kalmasına yol açtığı için geçici olarak devre dışı bırakıldı.
 * Sadece standart bir <div> döndürür.
 */
export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
