/**
 * Accent tone lookup.
 *
 * Every value is a complete, literal Tailwind class string — never assembled
 * from fragments — so the Tailwind v4 scanner can see each class it must emit.
 */
export const tones = {
  accent: {
    text: 'text-accent-400',
    iconWrap: 'border-accent-400/25 bg-accent-400/10 text-accent-400',
    chip: 'border-accent-400/25 bg-accent-400/[0.07] text-accent-200',
    chipHover: 'hover:border-accent-400/45 hover:text-accent-200',
    ring: 'hover:border-accent-400/40',
    rail: 'bg-accent-400',
    bar: 'bg-accent-400',
    dot: 'bg-accent-400',
  },
  iris: {
    text: 'text-iris-400',
    iconWrap: 'border-iris-400/25 bg-iris-400/10 text-iris-400',
    chip: 'border-iris-400/25 bg-iris-400/[0.07] text-iris-400',
    chipHover: 'hover:border-iris-400/45',
    ring: 'hover:border-iris-400/40',
    rail: 'bg-iris-400',
    bar: 'bg-iris-400',
    dot: 'bg-iris-400',
  },
  azure: {
    text: 'text-azure-400',
    iconWrap: 'border-azure-400/25 bg-azure-400/10 text-azure-400',
    chip: 'border-azure-400/25 bg-azure-400/[0.07] text-azure-400',
    chipHover: 'hover:border-azure-400/45',
    ring: 'hover:border-azure-400/40',
    rail: 'bg-azure-400',
    bar: 'bg-azure-400',
    dot: 'bg-azure-400',
  },
  gold: {
    text: 'text-gold-400',
    iconWrap: 'border-gold-400/25 bg-gold-400/10 text-gold-400',
    chip: 'border-gold-400/25 bg-gold-400/[0.07] text-gold-400',
    chipHover: 'hover:border-gold-400/45',
    ring: 'hover:border-gold-400/40',
    rail: 'bg-gold-400',
    bar: 'bg-gold-400',
    dot: 'bg-gold-400',
  },
  neutral: {
    text: 'text-mist-300',
    iconWrap: 'border-ink-600 bg-ink-800 text-mist-300',
    chip: 'border-ink-600 bg-ink-800/60 text-mist-300',
    chipHover: 'hover:border-ink-600 hover:text-mist-200',
    ring: 'hover:border-ink-600',
    rail: 'bg-ink-600',
    bar: 'bg-ink-600',
    dot: 'bg-ink-600',
  },
};

export function getTone(tone) {
  return tones[tone] ?? tones.neutral;
}
