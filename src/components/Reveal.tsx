import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered fade + rise. Reusable wrapper for any block.
 * `amount: "some"` + once ensures it fires reliably as soon as any part
 * enters the viewport, so content never gets stuck invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
