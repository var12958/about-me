import { ArrowUpRight } from 'lucide-react';
import { GithubMark } from './ui/BrandIcons.jsx';
import { getTone } from '../lib/tones.js';
import { Tag } from './ui/Tag.jsx';

/** `#` marks a link the author has not published yet — never a dead end. */
const isPlaceholderLink = (href) => !href || href === '#';

function ProjectActions({ links, title }) {
  const actions = [
    { key: 'github', label: 'GitHub', href: links?.github },
    { key: 'demo', label: 'Live Demo', href: links?.demo },
  ].filter((action) => action.href);

  if (actions.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {actions.map((action) => {
        const placeholder = isPlaceholderLink(action.href);

        return (
          <li key={action.key}>
            <a
              href={placeholder ? '#' : action.href}
              aria-disabled={placeholder ? 'true' : undefined}
              title={placeholder ? 'Link not published yet' : `${action.label} — ${title}`}
              onClick={placeholder ? (event) => event.preventDefault() : undefined}
              {...(placeholder ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 bg-ink-850 px-3.5 py-2 text-[0.8125rem] font-medium text-mist-200 transition-colors duration-200 hover:border-ink-600 hover:bg-ink-800 hover:text-mist-50"
            >
              {action.key === 'github' ? (
                <GithubMark size={15} />
              ) : (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
              {action.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Detail-list column counts, spelled out so Tailwind can see each class. */
const DETAIL_COLUMNS = {
  1: '',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
};

function DetailList({ items, tone, columns = 1 }) {
  const t = getTone(tone);

  return (
    <ul className={['grid gap-x-8 gap-y-2.5', DETAIL_COLUMNS[columns] ?? ''].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.875rem] text-mist-300">
          <span
            aria-hidden="true"
            className={`mt-[0.5rem] h-1 w-1 shrink-0 rounded-full ${t.dot}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function MetricTiles({ metrics, tone }) {
  if (!metrics || metrics.length === 0) return null;

  const t = getTone(tone);

  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-lg border border-ink-700 bg-ink-850/60 p-4">
          <dd className={`font-mono text-[0.95rem] font-medium ${t.text}`}>{metric.value}</dd>
          <dt className="mt-1 text-[0.75rem] leading-snug text-mist-400">{metric.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export function ProjectCard({ project }) {
  const tone = getTone(project.tone);
  const { featured } = project;

  // Metrics and notes live in a second column; without either, the details get
  // the full card width instead of leaving a dead half.
  const hasSideContent = (project.metrics?.length ?? 0) > 0 || Boolean(project.note);

  return (
    <article
      className={[
        'group relative flex h-full flex-col overflow-hidden rounded-xl border bg-ink-900 p-6 transition-all duration-300 sm:p-8',
        'motion-reduce:hover:translate-y-0',
        featured
          ? 'border-accent-400/30 hover:border-accent-400/50'
          : 'border-ink-700 hover:-translate-y-1 hover:border-ink-600',
      ].join(' ')}
    >
      {featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-500/[0.07] blur-3xl"
        />
      ) : null}

      <div className="relative flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          {project.badge ? (
            <span className="inline-flex items-center rounded-full border border-accent-400/30 bg-accent-400/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent-300">
              {project.badge}
            </span>
          ) : null}
          <span className={`font-mono text-[0.68rem] uppercase tracking-[0.14em] ${tone.text}`}>
            {project.category}
          </span>
        </div>

        <h3
          className={[
            'mt-4 font-semibold tracking-tight text-mist-50',
            featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-[1.375rem]',
          ].join(' ')}
        >
          {project.title}
        </h3>

        <p className="mt-4 max-w-2xl text-[0.9rem] leading-relaxed text-mist-400">
          {project.summary}
        </p>

        <div
          className={[
            'mt-7 grid flex-1 gap-7',
            featured && hasSideContent
              ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12'
              : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div>
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mist-500">
              {featured ? 'What it covers' : 'Key aspects'}
            </h4>
            <div className="mt-4">
              <DetailList
                items={project.details}
                tone={project.tone}
                columns={featured ? (hasSideContent ? 2 : 3) : 1}
              />
            </div>
          </div>

          {hasSideContent ? (
            <div className="flex flex-col gap-6">
              <MetricTiles metrics={project.metrics} tone={project.tone} />

              {project.note ? (
                <p className="rounded-lg border border-ink-700 bg-ink-850/40 p-4 text-[0.78rem] leading-relaxed text-mist-400">
                  {project.note}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-ink-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag tone={project.tone}>{tag}</Tag>
              </li>
            ))}
          </ul>
          <div className="shrink-0">
            <ProjectActions links={project.links} title={project.title} />
          </div>
        </div>
      </div>
    </article>
  );
}
