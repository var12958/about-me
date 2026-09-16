import { AchievementCard } from './AchievementCard.jsx';
import { Section } from './ui/Section.jsx';
import { achievements } from '../data/portfolio.js';

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="04 — Achievements"
      title="Achievements"
      description="Competitions, hackathons, and security research alongside coursework."
    >
      <ol className="relative mt-12 space-y-8">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-5 top-6 w-px -translate-x-1/2 bg-ink-800"
        />

        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            delay={0.05 * index}
          />
        ))}
      </ol>
    </Section>
  );
}
