import { ArrowUp } from 'lucide-react';
import { footer } from '../data/portfolio.js';

export function Footer() {
  return (
    <footer className="border-t border-ink-800/60 py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-[0.72rem] text-mist-500">{footer.copyright}</p>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-md border border-ink-700 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist-400 transition-colors duration-200 hover:border-ink-600 hover:text-mist-200"
        >
          <ArrowUp
            size={13}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
          Back to top
        </a>
      </div>
    </footer>
  );
}
