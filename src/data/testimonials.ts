export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatarText: string
  rating: number
  highlightMetric: string
  metricLabel: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Odify completely transformed our digital presence. Within 60 days of launching the new platform, our inbound qualified leads increased by 148%, and our sales cycle shortened noticeably.',
    author: 'Elena Rostova',
    role: 'Chief Marketing Officer',
    company: 'Nova Finance',
    avatarText: 'ER',
    rating: 5,
    highlightMetric: '+148%',
    metricLabel: 'Inbound Pipeline',
  },
  {
    id: '2',
    quote:
      'Working with the Odify team felt like having an elite internal squad. Their design sensibility combined with technical execution is rare. They delivered on time without compromising an inch on craft.',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Luma Retail',
    avatarText: 'MV',
    rating: 5,
    highlightMetric: '3.4x',
    metricLabel: 'Storefront Conversion',
  },
  {
    id: '3',
    quote:
      'The design system and frontend architecture Odify built for Vertex allowed our product team to ship features twice as fast. They set the benchmark for our brand for the next 5 years.',
    author: 'Sarah Chen',
    role: 'VP of Product',
    company: 'Vertex SaaS',
    avatarText: 'SC',
    rating: 5,
    highlightMetric: '2x',
    metricLabel: 'Shipping Velocity',
  },
  {
    id: '4',
    quote:
      'From strategy sessions to the final rollout, Odify treated our goals as their own. The aesthetic quality and micro-interactions they introduced made our brand stand head and shoulders above legacy competitors.',
    author: 'David Thorne',
    role: 'Managing Director',
    company: 'Astra Group',
    avatarText: 'DT',
    rating: 5,
    highlightMetric: '99.8%',
    metricLabel: 'Uptime & Performance',
  },
]
