import { ProjectCard } from './ProjectCard.jsx';
import { Section } from './ui/Section.jsx';
import { Reveal } from './ui/Reveal.jsx';
import { projects } from '../data/portfolio.js';

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Projects"
      description="Independent work across Web3 privacy infrastructure, blockchain-backed verification, and applied machine learning."
      action={
        <p className="max-w-[16rem] font-mono text-[0.68rem] leading-relaxed text-mist-500 sm:text-right">
          Repository and demo links are placeholders pending publication.
        </p>
      }
    >
      <div className="mt-12 space-y-5">
        {featured ? (
          <Reveal>
            <ProjectCard project={featured} />
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={0.06 * (index + 1)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
