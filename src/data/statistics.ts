export interface StatItem {
  id: string
  targetValue: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  description: string
}

export const statistics: StatItem[] = [
  {
    id: 'projects',
    targetValue: 50,
    suffix: '+',
    label: 'Digital Solutions Built',
    description: 'Modern web apps, mobile products, and AI workflows deployed successfully.',
  },
  {
    id: 'uptime',
    targetValue: 99.4,
    suffix: '%',
    decimals: 1,
    label: 'System Uptime & Reliability',
    description: 'High-availability infrastructure engineered for zero unplanned interruptions.',
  },
  {
    id: 'satisfaction',
    targetValue: 98,
    suffix: '%',
    label: 'Client Retention & Satisfaction',
    description: 'Long-term product partnerships supporting scalable technical growth.',
  },
  {
    id: 'speed',
    targetValue: 3.2,
    suffix: 'x',
    decimals: 1,
    label: 'Average Performance Gain',
    description: 'Lighthouse score and loading speed improvements across client platforms.',
  },
]
