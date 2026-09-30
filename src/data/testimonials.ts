export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  metrics?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Odify completely transformed our customer portal. The responsiveness, smooth transitions, and reliable AI integration directly elevated our enterprise client conversions.',
    author: 'Elena Vance',
    role: 'VP of Product',
    company: 'Nova Finance',
    metrics: '+140% user engagement',
  },
  {
    id: '2',
    quote:
      'The engineering quality was outstanding. They did not just deliver code; they built a scalable design system and bulletproof backend architecture that we can evolve for years.',
    author: 'Marcus Chen',
    role: 'Co-Founder & CTO',
    company: 'Vertex Cloud',
    metrics: '99.9% release uptime',
  },
  {
    id: '3',
    quote:
      'From custom workflow automations to our mobile app launch, the team worked as a true technical partner. Their attention to performance and detail is rare.',
    author: 'Sophia Lindqvist',
    role: 'Head of Digital Innovation',
    company: 'Luma Retail Group',
    metrics: '3.4x faster checkout',
  },
]
