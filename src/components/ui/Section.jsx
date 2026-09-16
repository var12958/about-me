/**
 * Section shell: consistent vertical rhythm, a hairline divider between
 * sections, and a heading wired to the section's `aria-labelledby`.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  action = null,
  children,
  className = '',
  divided = true,
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={[
        'py-20 sm:py-24 lg:py-28',
        divided ? 'border-t border-ink-800/60' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container-page">
        {title ? (
          <SectionHeading
            id={headingId}
            eyebrow={eyebrow}
            title={title}
            description={description}
            action={action}
          />
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ id, eyebrow, title, description, action = null }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2
          id={id}
          className="mt-4 text-[1.75rem] font-semibold tracking-tight text-mist-50 sm:text-[2rem] lg:text-[2.25rem]"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-[0.95rem] leading-relaxed text-mist-400">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
