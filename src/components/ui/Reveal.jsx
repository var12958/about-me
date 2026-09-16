import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered entrance animation.
 *
 * Deliberately restrained: a short fade with a small vertical offset, played
 * once per element. When the user prefers reduced motion only the fade runs.
 */
export function Reveal({ children, delay = 0, y = 16, className = '' }) {
  const prefersReducedMotion = useReducedMotion();

  const hidden = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y };
  const shown = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: prefersReducedMotion ? 0.2 : 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
