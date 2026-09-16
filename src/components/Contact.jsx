import { ArrowUpRight } from 'lucide-react';
import { getIconElement } from '../lib/icons.jsx';
import { Section } from './ui/Section.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { contact, profile } from '../data/portfolio.js';

const PLACEHOLDER_HINT = 'Awaiting details';

/**
 * Contact channel row.
 *
 * Entries still marked `isPlaceholder` render as a non-interactive panel with a
 * "Pending" marker instead of a broken `mailto:` or dead link. Replace the
 * values in src/data/portfolio.js and set `isPlaceholder: false` to activate.
 */
function ChannelCard({ channel }) {
  const isPlaceholder = channel.isPlaceholder || channel.href === '#';
  const isMail = channel.href.startsWith('mailto:');

  const contents = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-ink-700 bg-ink-850 text-mist-300 transition-colors duration-200 group-hover:border-ink-600 group-hover:text-accent-400">
        {getIconElement(channel.icon)}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-mist-500">
          {channel.label}
        </span>
        <span
          className={[
            'mt-1.5 block truncate text-[0.875rem]',
            isPlaceholder ? 'font-mono text-mist-500' : 'text-mist-200',
          ].join(' ')}
        >
          {channel.value}
        </span>
      </span>

      {isPlaceholder ? (
        <span
          className="shrink-0 self-center rounded-md border border-ink-700 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-mist-500"
          title={PLACEHOLDER_HINT}
        >
          Pending
        </span>
      ) : (
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="shrink-0 self-center text-mist-500 transition-colors duration-200 group-hover:text-accent-400"
        />
      )}
    </>
  );

  const baseClass =
    'group flex items-start gap-4 rounded-xl border border-ink-700 bg-ink-900 p-5 transition-colors duration-200';

  if (isPlaceholder) {
    return <div className={`${baseClass} border-dashed`}>{contents}</div>;
  }

  return (
    <a
      href={channel.href}
      className={`${baseClass} hover:border-ink-600 hover:bg-ink-850`}
      {...(isMail ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
    >
      {contents}
    </a>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="07 — Contact"
      title="Get in Touch"
      description="Open to conversations about projects, collaborations, and research directions."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-tight text-mist-50">
              {profile.name}
            </h3>
            <p className="mt-3 text-[0.95rem] font-medium text-accent-400">{profile.tagline}</p>

            <div className="mt-7 space-y-2 border-t border-ink-800 pt-6">
              <p className="text-[0.9rem] text-mist-200">{profile.institution}</p>
              <p className="text-[0.85rem] leading-relaxed text-mist-400">
                {profile.programme}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {contact.channels.map((channel, index) => (
              <li key={channel.id}>
                <Reveal delay={0.05 * (index + 1)}>
                  <ChannelCard channel={channel} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
