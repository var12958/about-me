import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { useScrolled } from '../hooks/useScrolled.js';

/** Module-level constant so the scroll-spy effect gets a stable dependency. */
const NAV_SECTION_IDS = navItems.map((item) => item.id);

const DESKTOP_QUERY = '(min-width: 1024px)';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(8);
  const activeId = useActiveSection(NAV_SECTION_IDS);

  // Lock background scrolling while the mobile panel is open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Escape closes the mobile panel.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Drop the panel when the layout switches to the desktop nav.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-md py-1"
            aria-label={`${profile.name} — back to top`}
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-md border border-ink-700 bg-ink-900 font-mono text-[0.7rem] font-medium tracking-wider text-accent-400 transition-colors duration-200 group-hover:border-accent-400/40"
            >
              VUS
            </span>
            <span className="text-sm font-medium tracking-tight text-mist-200">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Section navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={[
                        'group relative inline-flex rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-200',
                        isActive ? 'text-mist-50' : 'text-mist-400 hover:text-mist-200',
                      ].join(' ')}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={[
                          'absolute inset-x-3 bottom-1 h-px origin-center transition-transform duration-300 ease-out',
                          isActive
                            ? 'scale-x-100 bg-accent-400'
                            : 'scale-x-0 bg-ink-600 group-hover:scale-x-100',
                        ].join(' ')}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="grid h-10 w-10 place-items-center rounded-md border border-ink-700 bg-ink-900/70 text-mist-200 transition-colors duration-200 hover:border-ink-600 hover:text-mist-50 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-800/80 bg-ink-950/95 backdrop-blur-md lg:hidden"
          >
            <nav aria-label="Section navigation" className="container-page py-3">
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? 'true' : undefined}
                        className={[
                          'flex items-center justify-between border-b border-ink-800/60 py-3 text-[0.9375rem] transition-colors duration-200 last:border-b-0',
                          isActive
                            ? 'text-accent-400'
                            : 'text-mist-300 hover:text-mist-50',
                        ].join(' ')}
                      >
                        {item.label}
                        {isActive ? (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-accent-400"
                          />
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
