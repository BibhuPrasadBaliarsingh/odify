export interface Project {
  index: string
  id: string
  name: string
  category: string
  filterCategory: 'All' | 'Fintech' | 'Commerce' | 'SaaS' | 'Growth'
  description: string
  fullSummary: string
  challenge: string
  solution: string
  results: { label: string; value: string }[]
  tags: string[]
  client: string
  year: string
  timeline: string
  hue: number
}

export const projects: Project[] = [
  {
    index: '01',
    id: 'nova-finance',
    name: 'Nova Finance',
    category: 'Fintech Website & Digital Experience',
    filterCategory: 'Fintech',
    description:
      'A high-trust financial platform rebuilt around clarity, speed and confident visual language.',
    fullSummary:
      'Nova Finance required a top-tier digital flagship to reposition their institutional asset platform for global retail expansion, elevating brand trust while keeping complex data accessible.',
    challenge:
      'Legacy financial terminology, cluttered navigation, and sluggish page loads caused high drop-off rates on demo bookings.',
    solution:
      'Designed an intuitive visual hierarchy with kinetic data widgets, an interactive interest calculator, and a sub-500ms lightweight web stack.',
    results: [
      { label: 'Conversion Uplift', value: '+148%' },
      { label: 'Page Load Speed', value: '0.42s' },
      { label: 'Demo Bookings', value: '3.1x' },
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Financial Data API'],
    client: 'Nova Global Ltd',
    year: '2026',
    timeline: '5 Weeks',
    hue: 231,
  },
  {
    index: '02',
    id: 'luma-retail',
    name: 'Luma',
    category: 'Brand Identity & E-commerce',
    filterCategory: 'Commerce',
    description:
      'A complete identity and storefront system designed to feel premium at every touchpoint.',
    fullSummary:
      'Luma needed a design-first luxury e-commerce experience to showcase their curated architectural lighting collection with tactile aesthetics.',
    challenge:
      'Standard template storefronts failed to communicate the craftsmanship and architectural value of the products, hurting average order value.',
    solution:
      'Crafted a bespoke editorial identity, dynamic 3D lighting configurator, and high-conversion frictionless checkout flow.',
    results: [
      { label: 'Avg. Order Value', value: '+34%' },
      { label: 'Cart Conversion', value: '3.4x' },
      { label: 'Mobile Bounce Rate', value: '-42%' },
    ],
    tags: ['Next.js', 'Shopify Storefront API', 'Tailwind', '3D Configurator'],
    client: 'Luma Studio',
    year: '2025',
    timeline: '6 Weeks',
    hue: 20,
  },
  {
    index: '03',
    id: 'vertex-saas',
    name: 'Vertex',
    category: 'SaaS Website & Product Design',
    filterCategory: 'SaaS',
    description:
      'A product marketing site and design system built to scale alongside a growing platform.',
    fullSummary:
      'Vertex provides cloud infrastructure observability for enterprise engineering teams. We engineered a scalable design system and marketing website.',
    challenge:
      'Engineering teams struggled to understand the unique architectural advantages of the platform through static whitepapers.',
    solution:
      'Built interactive live-sandbox previews, benchmark comparison matrices, and a developer-first documentation system.',
    results: [
      { label: 'Free Trial Signups', value: '+88%' },
      { label: 'Time On Site', value: '+3.2m' },
      { label: 'Dev Docs Engagement', value: '4.2x' },
    ],
    tags: ['TypeScript', 'Design System', 'Micro-interactions', 'Sanity CMS'],
    client: 'Vertex Cloud Inc',
    year: '2026',
    timeline: '4 Weeks',
    hue: 265,
  },
  {
    index: '04',
    id: 'astra-growth',
    name: 'Astra',
    category: 'Digital Strategy & Growth',
    filterCategory: 'Growth',
    description:
      'A long-term growth partnership spanning strategy, content and continuous optimization.',
    fullSummary:
      'Astra engaged Odify as an embedded design and engineering squad to systematically test and deploy conversion enhancements across their global presence.',
    challenge:
      'Rapid company growth led to fragmented sub-brands and inconsistent user journeys across different regional markets.',
    solution:
      'Unified the brand under a unified multi-region design language with continuous A/B testing and localized landing page generation.',
    results: [
      { label: 'Revenue Growth', value: '+₹35 Cr' },
      { label: 'A/B Win Rate', value: '71%' },
      { label: 'Localization Speed', value: '5x' },
    ],
    tags: ['Growth Strategy', 'A/B Testing', 'Design Tokens', 'Tailwind CSS'],
    client: 'Astra Global Media',
    year: '2025',
    timeline: 'Ongoing Retainer',
    hue: 165,
  },
]
