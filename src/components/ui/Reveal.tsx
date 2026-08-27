"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  /** Sıralı girişler için gecikme (saniye). */
  delay?: number;
  className?: string;
};

/**
 * Görünür alana girince içeriği süzülerek getiren ince sarmalayıcı.
 *
 * `children` prop olarak geçtiği için sarmaladığı içerik Server Component
 * olarak kalır — istemciye yalnızca bu 30 satır iner.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
