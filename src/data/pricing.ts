export interface PricingTier {
  id: string
  name: string
  tagline: string
  price: string
  period: string
  popular?: boolean
  features: string[]
  deliverables: string
  ctaText: string
  projectType: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'sprint',
    name: 'Design Sprint',
    tagline: 'Ideal for early-stage validation, UX audits, or rapid prototyping.',
    price: '₹49,000',
    period: 'one-time / 2 weeks',
    features: [
      'Comprehensive UX/UI audit & teardown',
      'High-fidelity interactive prototype (Figma)',
      'Design system tokens & components',
      'Actionable conversion optimization roadmap',
      'Async Loom walkthroughs & daily standups',
      'Full source file handoff & assets',
    ],
    deliverables: 'Delivered in 10 business days',
    ctaText: 'Book a Sprint',
    projectType: 'UI/UX',
  },
  {
    id: 'build',
    name: 'Full Product Build',
    tagline: 'End-to-end bespoke website or web app designed and engineered for scale.',
    price: '₹1,49,000',
    period: 'starting price / 4-6 weeks',
    popular: true,
    features: [
      'Bespoke brand identity & visual system',
      'Custom React / Next.js / TypeScript frontend',
      'Fluid Framer Motion micro-interactions',
      'CMS / Database integration of choice',
      'SEO optimization & Lighthouse 95+ score',
      'Cross-browser & responsive polish',
      '30-day post-launch warranty & support',
    ],
    deliverables: 'Turnkey launch in 4–6 weeks',
    ctaText: 'Start Full Build',
    projectType: 'Website',
  },
  {
    id: 'partner',
    name: 'Growth Partner',
    tagline: 'Dedicated ongoing design & engineering team for scaling companies.',
    price: '₹79,000',
    period: 'per month / pause anytime',
    features: [
      'Dedicated senior designer & frontend engineer',
      'Unlimited design & code requests (queued)',
      'Continuous conversion rate optimization',
      'New feature rollouts & landing pages',
      'Performance & security monitoring',
      'Slack connect channel & weekly strategy calls',
      'Priority turnaround on critical updates',
    ],
    deliverables: 'Rolling weekly sprints',
    ctaText: 'Retain Our Team',
    projectType: 'Automation',
  },
]
