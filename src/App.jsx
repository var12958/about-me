import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Achievements } from './components/Achievements.jsx';
import { ResearchInterests } from './components/ResearchInterests.jsx';
import { Leadership } from './components/Leadership.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-accent-400/40 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-mist-50"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <ResearchInterests />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
