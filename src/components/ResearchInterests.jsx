import { getIconElement } from '../lib/icons.jsx';
import { getTone } from '../lib/tones.js';
import { Section } from './ui/Section.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { researchInterests } from '../data/portfolio.js';

function InterestTile({ area }) {
  const tone = getTone(area.tone);
  const isPrimary = area.tone === 'accent';

  return (
    <div
      className={[
        'flex h-full flex-col rounded-xl border bg-ink-900 p-5 transition-colors duration-200',
        isPrimary ? 'border-accent-400/25 hover:border-accent-400/45' : 'border-ink-700',
        isPrimary ? '' : tone.ring,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={`grid h-9 w-9 place-items-center rounded-md border ${tone.iconWrap}`}>
        {getIconElement(area.icon)}
      </span>

      <h3 className="mt-4 text-[0.9375rem] font-medium tracking-tight text-mist-50">
        {area.title}
      </h3>

      <ul className="mt-3 space-y-1.5">
        {area.keywords.map((keyword) => (
          <li key={keyword} className="font-mono text-[0.68rem] leading-relaxed text-mist-500">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ResearchInterests() {
  return (
    <Section
      id="research"
      eyebrow="05 — Research Interests"
      title="Research Interests"
      description="Directions I want to keep building and studying in depth."
    >
      <Reveal>
        <p className="mt-10 max-w-3xl border-l-2 border-accent-400/40 pl-5 text-[0.95rem] leading-relaxed text-mist-300 sm:text-base">
          {researchInterests.statement}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {researchInterests.areas.map((area, index) => (
          <Reveal key={area.id} delay={0.05 * (index + 1)}>
            <InterestTile area={area} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
