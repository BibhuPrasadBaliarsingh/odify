export interface StatItem {
  id: string
  targetValue: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  description: string
}

export const statisticsHeading = {
  eyebrow: 'Statistics Section',
  heading: 'Delivering exceptional results through innovation and dedication',
  subheading:
    'Our track record speaks for itself. We combine engineering excellence, user empathy, and digital strategy to produce impactful outcomes for clients across Odisha and India.',
}

export const statistics: StatItem[] = [
  {
    id: 'projects',
    targetValue: 150,
    suffix: '+',
    label: 'Projects Completed',
    description: 'High-performing websites, web apps, e-commerce stores, and software solutions deployed.',
  },
  {
    id: 'industries',
    targetValue: 15,
    suffix: '+',
    label: 'Industries Served',
    description: 'Healthcare, Real Estate, Mining, Retail, Education, Hospitality, and Technology sectors.',
  },
  {
    id: 'satisfaction',
    targetValue: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Committed to transparent communication, on-time delivery, and measurable long-term results.',
  },
  {
    id: 'experience',
    targetValue: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Proven track record of engineering scalable digital platforms and driving online growth.',
  },
]
