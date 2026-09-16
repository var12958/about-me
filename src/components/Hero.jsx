import { ArrowRight, ChevronDown, GraduationCap } from 'lucide-react';
import { HeroVisual } from './HeroVisual.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { profile } from '../data/portfolio.js';

const FOCUS_KEYWORDS = ['Blockchain / Web3', 'AI / ML', 'Cybersecurity'];

/** Replaces a label's spaces with non-breaking ones so it never splits. */
const keepTogether = (label) => label.replace(/ /g, ' ');

/**
 * Separators carry a leading non-breaking space, so the only place this line
 * may wrap is *after* a "·" — never before one, and never mid-keyword.
 */
const FOCUS_LINE = FOCUS_KEYWORDS.map(keepTogether).join(' · ');

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      {/* Ambient backdrop: engineering grid + one very low-opacity accent wash */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0" />
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-500/[0.055] blur-[130px]" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/70 px-3 py-1.5 font-mono text-[0.7rem] tracking-wide text-mist-400">
                <GraduationCap size={13} className="text-accent-400" aria-hidden="true" />
                {profile.programmeShort} · {profile.institution}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1
                id="home-heading"
                className="mt-7 text-[2.75rem] font-semibold tracking-tight text-mist-50 sm:text-6xl lg:text-[4.25rem]"
              >
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-lg font-medium text-accent-400 sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-mist-400 sm:text-base">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-md bg-accent-400 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors duration-200 hover:bg-accent-300"
                >
                  View Projects
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-mist-200 transition-colors duration-200 hover:border-ink-600 hover:bg-ink-850 hover:text-mist-50"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-10 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mist-500">
                {FOCUS_LINE}
              </p>
            </Reveal>
          </div>

          {/* Decorative on desktop only — keeps the mobile hero light and fast */}
          <div className="hidden justify-center lg:flex">
            <HeroVisual />
          </div>
        </div>

        <div className="mt-16 hidden lg:block">
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist-500 transition-colors duration-200 hover:text-mist-300"
          >
            <ChevronDown size={14} aria-hidden="true" />
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
