import { getIconElement } from '../lib/icons.jsx';
import { getTone } from '../lib/tones.js';
import { Section } from './ui/Section.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { Tag } from './ui/Tag.jsx';
import { skillCategories } from '../data/portfolio.js';

const CATEGORY_ICONS = {
  blockchain: 'blocks',
  'ai-ml': 'brain',
  programming: 'code',
  tools: 'git',
  data: 'database',
};

function SkillCard({ category }) {
  const tone = getTone(category.tone);

  return (
    <div
      className={[
        'flex h-full flex-col rounded-xl border border-ink-700 bg-ink-900 p-6 transition-colors duration-200',
        tone.ring,
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-md border ${tone.iconWrap}`}
        >
          {getIconElement(CATEGORY_ICONS[category.id])}
        </span>
        <h3 className="text-sm font-medium text-mist-50">{category.title}</h3>
      </div>

      {category.blurb ? (
        <p className="mt-4 text-[0.85rem] leading-relaxed text-mist-400">{category.blurb}</p>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill}>
            <Tag tone={category.tone}>{skill}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Blockchain/Web3 leads the section: full-width, accent-framed, marked as primary. */
function FeaturedSkillCard({ category }) {
  const tone = getTone(category.tone);

  return (
    <div className="relative overflow-hidden rounded-xl border border-accent-400/30 bg-ink-900 p-6 transition-colors duration-200 hover:border-accent-400/50 sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/[0.07] blur-3xl"
      />

      <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-center lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-md border ${tone.iconWrap}`}
            >
              {getIconElement(CATEGORY_ICONS[category.id])}
            </span>
            <div>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent-400">
                Primary Focus
              </span>
              <h3 className="text-base font-medium text-mist-50">{category.title}</h3>
            </div>
          </div>
          {category.blurb ? (
            <p className="mt-5 text-[0.85rem] leading-relaxed text-mist-400">{category.blurb}</p>
          ) : null}
        </div>

        <ul className="flex flex-wrap gap-2.5 lg:justify-end">
          {category.skills.map((skill) => (
            <li key={skill}>
              <span className="inline-flex items-center rounded-md border border-accent-400/25 bg-accent-400/[0.07] px-3.5 py-2 font-mono text-[0.78rem] leading-none text-accent-200 transition-colors duration-200 hover:border-accent-400/45">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Skills() {
  const featured = skillCategories.find((category) => category.featured);
  const rest = skillCategories.filter((category) => !category.featured);

  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Technical Skills"
      description="Tools and concepts I work with across blockchain, machine learning, and software development."
    >
      <div className="mt-12 space-y-5">
        {featured ? (
          <Reveal>
            <FeaturedSkillCard category={featured} />
          </Reveal>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((category, index) => (
            <Reveal key={category.id} delay={0.05 * (index + 1)}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
