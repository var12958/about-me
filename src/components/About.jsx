import { GraduationCap } from 'lucide-react';
import { Section } from './ui/Section.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { Tag } from './ui/Tag.jsx';
import { about } from '../data/portfolio.js';

/** Blockchain/Web3 and AI/ML get their accent hue; the rest stay quiet. */
const FOCUS_TONES = {
  Blockchain: 'accent',
  Web3: 'accent',
  'Artificial Intelligence': 'iris',
  'Machine Learning': 'iris',
};

function EducationCard() {
  const { institution, programme, cgpa, status } = about.education;

  return (
    <div className="rounded-xl border border-ink-700 bg-ink-900 p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md border border-accent-400/25 bg-accent-400/10 text-accent-400">
          <GraduationCap size={17} aria-hidden="true" />
        </span>
        <h3 className="text-sm font-medium text-mist-50">Education</h3>
      </div>

      <dl className="mt-6 space-y-5">
        <div>
          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist-500">
            Institution
          </dt>
          <dd className="mt-1.5 text-sm text-mist-200">{institution}</dd>
        </div>

        <div>
          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist-500">
            Programme
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-mist-200">{programme}</dd>
        </div>

        <div className="flex gap-10 border-t border-ink-800 pt-5">
          <div>
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist-500">
              CGPA
            </dt>
            <dd className="mt-1.5 font-mono text-sm text-accent-400">{cgpa}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist-500">
              Status
            </dt>
            <dd className="mt-1.5 text-sm text-mist-200">{status}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="Background & Focus"
      description="An AI/ML student with a strong interest in decentralized and intelligent systems."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="text-[0.95rem] leading-relaxed text-mist-300 sm:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="mt-10">
              <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-mist-500">
                Areas of Interest
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.focusAreas.map((area) => (
                  <li key={area}>
                    <Tag tone={FOCUS_TONES[area] ?? 'neutral'}>{area}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <EducationCard />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
