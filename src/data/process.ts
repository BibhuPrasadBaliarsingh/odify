export interface ProcessStep {
  index: string
  title: string
  description: string
  details: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    description: 'Deep-dive analysis into architecture requirements, user personas, technical bottlenecks, and commercial objectives.',
    details: 'Stakeholder interviews, system audits, and feasibility analysis.',
  },
  {
    index: '02',
    title: 'Plan',
    description: 'Defining technical milestones, technology stacks, sprint cadences, and clear product delivery roadmaps.',
    details: 'System architecture specs, sprint breakdowns, and deliverable timelines.',
  },
  {
    index: '03',
    title: 'Design',
    description: 'Crafting responsive design systems, interactive prototypes, and production UI components with micro-interactions.',
    details: 'Figma wireframes, design tokens, and user flow validation.',
  },
  {
    index: '04',
    title: 'Develop',
    description: 'Clean, type-safe engineering adhering to modular patterns, automated tests, and performance benchmarks.',
    details: 'Modern frameworks, clean APIs, continuous integration, and version control.',
  },
  {
    index: '05',
    title: 'Test',
    description: 'Rigorous end-to-end quality assurance, load testing, security audits, and cross-device performance testing.',
    details: 'Unit testing, responsive verification, and penetration tests.',
  },
  {
    index: '06',
    title: 'Launch',
    description: 'Zero-downtime deployment, infrastructure scaling, analytics monitoring, and proactive post-launch maintenance.',
    details: 'Automated CI/CD pipelines, analytics telemetry, and ongoing optimization.',
  },
]
