export interface Project {
  id?: string
  index: string
  name: string
  category: string
  description: string
  technologies: string[]
  hue: number
  stat?: string
  linkText?: string
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'Nova Finance',
    category: 'Fintech Platform & Real-Time Analytics',
    description:
      'A high-trust financial dashboard engineered around low-latency market data, automated compliance reporting, and intuitive transaction workflows.',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind', 'MongoDB'],
    hue: 215,
    stat: '99.99% Execution Uptime',
    linkText: 'View Case Study',
  },
  {
    id: '02',
    index: '02',
    name: 'Vertex Cloud',
    category: 'Enterprise SaaS & Developer Platform',
    description:
      'A scalable web infrastructure management portal featuring visual pipeline builders, multi-cloud monitoring, and team permission controls.',
    technologies: ['React Native', 'Docker', 'Express', 'Tailwind', 'Gemini AI'],
    hue: 35,
    stat: '4.2x Faster Deployments',
    linkText: 'View Platform',
  },
  {
    id: '03',
    index: '03',
    name: 'Luma Commerce',
    category: 'AI-Powered E-Commerce Architecture',
    description:
      'A headless omnichannel storefront built for high peak-volume sales, dynamic personalization engines, and frictionless checkout conversion.',
    technologies: ['Next.js', 'Cloudinary', 'Firebase', 'NVIDIA AI APIs'],
    hue: 270,
    stat: '+38% Cart Conversion',
    linkText: 'View Storefront',
  },
  {
    id: '04',
    index: '04',
    name: 'Astra Pulse',
    category: 'Intelligent Workflow Automation',
    description:
      'An enterprise operations hub that unifies cross-departmental APIs, automated customer triage, and AI-driven document intelligence.',
    technologies: ['React', 'Expo', 'Node.js', 'Gemini', 'Express'],
    hue: 160,
    stat: '65% Time Saved Weekly',
    linkText: 'Explore System',
  },
]
