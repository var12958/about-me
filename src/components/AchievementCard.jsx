import { getIconElement } from '../lib/icons.jsx';
import { getTone } from '../lib/tones.js';
import { Reveal } from './ui/Reveal.jsx';

/**
 * One entry on the achievements timeline.
 *
 * Rendered as a real `<li>` so the parent `<ol>` stays valid, with the reveal
 * wrapper nested inside it. The icon tile doubles as the timeline node and
 * carries a solid background so it sits cleanly over the rail.
 */
export function AchievementCard({ achievement, delay = 0 }) {
  const tone = getTone(achievement.tone);

  return (
    <li className="relative">
      <Reveal delay={delay} className="flex gap-5 sm:gap-6">
        <span
          className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-md border bg-ink-950 ${tone.iconWrap}`}
        >
          {getIconElement(achievement.icon)}
        </span>

        <div className="min-w-0 pt-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-base font-medium tracking-tight text-mist-50">
              {achievement.title}
            </h3>
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] ${tone.chip}`}
            >
              {achievement.kind}
            </span>
          </div>

          <p className="mt-2 text-[0.875rem] text-mist-400">{achievement.subtitle}</p>

          {achievement.description ? (
            <p className="mt-3 max-w-2xl text-[0.85rem] leading-relaxed text-mist-400">
              {achievement.description}
            </p>
          ) : null}
        </div>
      </Reveal>
    </li>
  );
}
