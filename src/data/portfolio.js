/**
 * Single source of truth for every piece of content on the site.
 *
 * CONTENT RULES
 * -------------
 * Only the facts supplied for this portfolio appear here. No internships,
 * publications, certifications, awards, metrics or skills have been invented.
 *
 * EDITING CHECKLIST
 * -----------------
 * 1. `contact.channels`  — replace the `[ADD EMAIL]` / `[ADD LINK]` placeholders
 *                          with real values and set `isPlaceholder: false`.
 * 2. `projects[].links`  — replace `'#'` with real repository / demo URLs.
 * Anything still marked as a placeholder is rendered as a disabled, clearly
 * labelled placeholder rather than a broken link.
 */

export const profile = {
  name: 'Varun U S',
  tagline: 'Blockchain & AI/ML Enthusiast',
  institution: 'Coimbatore Institute of Technology',
  programme: 'Five-year Integrated M.Sc. Artificial Intelligence and Machine Learning',
  programmeShort: 'Integrated M.Sc. AI & ML',
  cgpa: '7.95',
  intro:
    'AI/ML student exploring Blockchain, Web3, intelligent systems, and cybersecurity through independent projects and technical competitions.',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'research', label: 'Research Interests' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    'I am a student pursuing a Five-year Integrated M.Sc. in Artificial Intelligence and Machine Learning at Coimbatore Institute of Technology.',
    'My interests sit across Blockchain, Web3, Artificial Intelligence, Machine Learning, Cybersecurity, Distributed Systems, and Software Development. I enjoy independently learning emerging technologies and applying them to practical projects.',
  ],
  focusAreas: [
    'Blockchain',
    'Web3',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Distributed Systems',
    'Software Development',
  ],
  education: {
    institution: 'Coimbatore Institute of Technology',
    programme: 'Five-year Integrated M.Sc. Artificial Intelligence and Machine Learning',
    cgpa: '7.95',
    status: 'Currently pursuing',
  },
};

/**
 * `tone` selects the accent hue for a category.
 * Blockchain/Web3 uses the primary accent and is rendered as the featured card.
 */
export const skillCategories = [
  {
    id: 'blockchain',
    title: 'Blockchain / Web3',
    tone: 'accent',
    featured: true,
    blurb: 'Primary area of interest and project focus.',
    skills: ['Blockchain Technology', 'Web3', 'Smart Contracts', 'Solidity'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    tone: 'iris',
    blurb: 'Academic foundation and project work.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'LLMs',
      'RAG',
      'Multi-Agent Systems',
      'NumPy',
      'Scikit-learn',
      'PyTorch',
      'Pandas',
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    tone: 'azure',
    skills: ['Python', 'SQL', 'Go', 'Data Structures & Algorithms'],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    tone: 'gold',
    skills: ['Git', 'GitHub', 'Docker'],
  },
  {
    id: 'data',
    title: 'Databases & Cloud',
    tone: 'azure',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
];

export const projects = [
  {
    id: 'knock-knock',
    title: 'Knock Knock',
    category: 'Privacy-First Web3 Messaging Platform',
    tone: 'accent',
    featured: true,
    badge: 'Primary Web3 Project',
    summary:
      'A privacy-focused Web3 messaging platform with anonymous identity verification.',
    details: [
      'Flare Confidential Compute',
      'Trusted Execution Environments (TEEs)',
      'Smart contracts',
      'Cryptographic proofs',
      'Anonymous identity verification',
      'End-to-end encrypted messaging',
      'Real-time messaging',
      'On-chain FLR tipping',
    ],
    tags: ['Flare', 'TEEs', 'Smart Contracts', 'Cryptographic Proofs', 'Encrypted Messaging'],
    metrics: [],
    links: { github: '#', demo: '#' },
  },
  {
    id: 'licenseit',
    title: 'LicenseIT',
    category: 'Web3 Digital License Management',
    tone: 'accent',
    featured: false,
    summary:
      'A blockchain-based digital license management system that uses smart contracts and cryptographic hashing to create tamper-resistant records and verify the authenticity of digital licenses.',
    details: [
      'Blockchain-based license management',
      'Smart contracts',
      'On-chain verification',
      'Cryptographic hashing',
      'Tamper-resistant records',
      'Ownership and validity tracking',
      'License history and authenticity verification',
    ],
    tags: ['Blockchain', 'Smart Contracts', 'Cryptographic Hashing', 'On-chain Verification'],
    metrics: [],
    links: { github: '#', demo: '#' },
  },
  {
    id: 'medicare',
    title: 'MediCare',
    category: 'ML-Based Hospital Triage & Queue Management',
    tone: 'iris',
    featured: false,
    summary:
      'An ML-powered hospital triage and queue management system that predicts diseases and prioritizes patients based on urgency and waiting time.',
    details: [
      'Disease prediction',
      'Dynamic patient prioritization',
      'Waiting-time based queue management',
      'Consultation delay estimation',
      'Real-time monitoring',
      'Role-based dashboards',
    ],
    tags: ['Machine Learning', 'Disease Prediction', 'Decision Support', 'Dashboards'],
    metrics: [
      { value: '36.44% → 86.72%', label: 'Top-1 prediction accuracy' },
      { value: '96%', label: 'Reduction in model size' },
    ],
    note: 'Decision-support and queue management tooling — not a diagnostic device.',
    links: { github: '#', demo: '#' },
  },
];

/** `icon` values map to components in src/components/ui/icons.js */
export const achievements = [
  {
    id: 'sentient-arena',
    title: 'Global Top 70',
    subtitle: 'Sentient Arena AI Competition',
    kind: 'Competition',
    icon: 'trophy',
    tone: 'iris',
  },
  {
    id: 'gdg-techsprint',
    title: 'Top 20 Finalist',
    subtitle: 'GDG Techsprint 2025, Coimbatore Institute of Technology',
    kind: 'Hackathon',
    icon: 'award',
    tone: 'accent',
  },
  {
    id: 'security-research',
    title: 'Security Research',
    subtitle: 'Amazon Kindle & Amazon Audible',
    description:
      'Discovered and reported security vulnerabilities in Amazon Kindle and Amazon Audible.',
    kind: 'Responsible Disclosure',
    icon: 'shield',
    tone: 'azure',
  },
  {
    id: 'zero-cup',
    title: '0G Zero Cup',
    subtitle: '0G Zero Cup Hackathon',
    description:
      'Participated in the 0G Zero Cup hackathon and built a cross-chain project on 0G.',
    kind: 'Hackathon',
    icon: 'blocks',
    tone: 'accent',
  },
  {
    id: 'technomind',
    title: 'TECHNOMIND2K26',
    subtitle: 'Karpagam Institute of Technology',
    description:
      'Project shortlisted for the national-level technical exhibition at Karpagam Institute of Technology.',
    kind: 'Technical Exhibition',
    icon: 'sparkles',
    tone: 'gold',
  },
];

export const researchInterests = {
  statement:
    'I am interested in research at the intersection of emerging technologies, intelligent systems, decentralized computing, security, and real-world applications.',
  areas: [
    {
      id: 'ai-ml',
      title: 'AI & ML',
      icon: 'brain',
      tone: 'iris',
      keywords: ['Machine Learning', 'Deep Learning', 'LLMs'],
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      icon: 'blocks',
      tone: 'accent',
      keywords: ['Distributed Ledgers', 'Smart Contracts'],
    },
    {
      id: 'web3',
      title: 'Web3',
      icon: 'globe',
      tone: 'accent',
      keywords: ['Decentralized Applications'],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: 'shield',
      tone: 'azure',
      keywords: ['Vulnerability Research'],
    },
    {
      id: 'distributed-systems',
      title: 'Distributed Systems',
      icon: 'network',
      tone: 'gold',
      keywords: ['Decentralized Computing'],
    },
  ],
};

export const leadership = {
  role: 'Finance Associate',
  organisation: 'Entrepreneurship Development Cell (EDC)',
  institution: 'Coimbatore Institute of Technology',
  description:
    'Contribute to entrepreneurship initiatives, startup activities, workshops, and student programmes while supporting students in developing and pursuing innovative ideas.',
};

/**
 * Replace the placeholder values below with real contact details.
 * While `isPlaceholder` is true the entry renders as a non-interactive
 * placeholder — no broken `mailto:` or dead links.
 */
export const contact = {
  channels: [
    {
      id: 'email',
      label: 'Email',
      value: '[ADD EMAIL]',
      href: '#',
      icon: 'mail',
      isPlaceholder: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: '[ADD LINK]',
      href: '#',
      icon: 'linkedin',
      isPlaceholder: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: '[ADD LINK]',
      href: '#',
      icon: 'github',
      isPlaceholder: true,
    },
  ],
};

export const footer = {
  copyright: '© 2026 Varun U S. Built with React.',
};
