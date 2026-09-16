import { useEffect, useState } from 'react';

/**
 * Must stay in sync with the `scroll-margin-top` applied to anchors in
 * src/index.css — the point at which a section counts as "reached".
 */
const ACTIVATION_OFFSET = 96;
const ACTIVATION_TOLERANCE = 8;
const BOTTOM_THRESHOLD = 96;

/**
 * Scroll spy for the sticky navbar.
 *
 * Picks the *last* section whose top edge has crossed the activation line —
 * i.e. the section currently being read.
 *
 * Choosing the topmost visible section instead would break on tall sections:
 * when a new section arrives, the tail of the previous one is often still
 * inside the viewport and would keep winning.
 *
 * `ids` must be referentially stable (a module-level array) — it is a
 * dependency of the effect.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const doc = document.documentElement;

      // Short trailing sections can never reach the activation line, so claim
      // the last one once the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - BOTTOM_THRESHOLD) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      const line = ACTIVATION_OFFSET + ACTIVATION_TOLERANCE;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = id;
        }
      }

      setActiveId(current);
    };

    // rAF-throttled: at most one layout read per frame, and React bails out of
    // re-rendering when the value is unchanged.
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  return activeId;
}
