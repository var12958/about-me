import {
  Award,
  Blocks,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { GithubMark, LinkedinMark } from '../components/ui/BrandIcons.jsx';

const SIZE = 18;

/**
 * Icon registry — maps the string keys used in src/data/portfolio.js to
 * pre-rendered, size-stable elements.
 *
 * Deliberately holds *elements* rather than component types: selecting a
 * component type at runtime (`const C = map[key]`) forces React to remount the
 * subtree and defeats the React Compiler. Returning an already-created element
 * is stable, memo-friendly, and keeps the content layer declarative.
 *
 * lucide-react v1 dropped brand marks, so GitHub and LinkedIn come from the
 * local SVG components in ./BrandIcons.jsx.
 */
const registry = {
  award: <Award size={SIZE} aria-hidden="true" />,
  blocks: <Blocks size={SIZE} aria-hidden="true" />,
  brain: <BrainCircuit size={SIZE} aria-hidden="true" />,
  briefcase: <Briefcase size={SIZE} aria-hidden="true" />,
  code: <Code2 size={SIZE} aria-hidden="true" />,
  cpu: <Cpu size={SIZE} aria-hidden="true" />,
  database: <Database size={SIZE} aria-hidden="true" />,
  education: <GraduationCap size={SIZE} aria-hidden="true" />,
  git: <GitBranch size={SIZE} aria-hidden="true" />,
  github: <GithubMark size={SIZE} />,
  globe: <Globe size={SIZE} aria-hidden="true" />,
  linkedin: <LinkedinMark size={SIZE} />,
  mail: <Mail size={SIZE} aria-hidden="true" />,
  network: <Network size={SIZE} aria-hidden="true" />,
  shield: <ShieldCheck size={SIZE} aria-hidden="true" />,
  sparkles: <Sparkles size={SIZE} aria-hidden="true" />,
  trophy: <Trophy size={SIZE} aria-hidden="true" />,
};

const FALLBACK = registry.blocks;

export function getIconElement(name) {
  return registry[name] ?? FALLBACK;
}
