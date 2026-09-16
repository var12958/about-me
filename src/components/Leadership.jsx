import { Briefcase } from 'lucide-react';
import { Section } from './ui/Section.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { leadership } from '../data/portfolio.js';

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="06 — Leadership"
      title="Entrepreneurship Development Cell"
      description="Alongside coursework and projects."
    >
      <Reveal>
        <div className="mt-12 rounded-xl border border-ink-700 bg-ink-900 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-accent-400/25 bg-accent-400/10 text-accent-400">
                  <Briefcase size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-medium tracking-tight text-mist-50">
                    {leadership.role}
                  </h3>
                  <p className="mt-0.5 text-[0.8rem] text-mist-400">
                    {leadership.organisation}
                  </p>
                </div>
              </div>

              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist-500">
                {leadership.institution}
              </p>
            </div>

            <p className="text-[0.9rem] leading-relaxed text-mist-300">
              {leadership.description}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
