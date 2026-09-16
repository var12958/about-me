import { getTone } from '../../lib/tones.js';

/**
 * Small pill used for skills, project concepts and interest keywords.
 * `tone` picks the accent hue; `neutral` is the quiet default.
 */
export function Tag({ children, tone = 'neutral', interactive = false, className = '' }) {
  const t = getTone(tone);

  return (
    <span
      className={[
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.7rem] leading-none transition-colors duration-200',
        t.chip,
        interactive ? t.chipHover : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
