"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The only entrance motion on the site: opacity plus a 12px rise, once.
 * Nothing bounces and nothing travels far. When the visitor asks for reduced
 * motion the element is rendered plainly, because the CSS override in
 * globals.css cannot stop JS-driven transforms.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger step for lists. A few frames apart, never a cascade. */
export const staggerStep = 0.06;
