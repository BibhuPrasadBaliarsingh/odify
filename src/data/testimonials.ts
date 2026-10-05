export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  metrics?: string
  avatarInitial: string
  tag?: string
}

export const testimonialsSectionData = {
  eyebrow: 'Client Testimonials',
  heading: 'What Our Clients Say About Us',
  subheading:
    'Real feedback from business leaders, founders, and executives who achieved measurable growth and technical transformation with Odify.',
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Rohan Jena',
    role: 'Managing Director',
    company: 'Kalinga Logistics & Freight',
    quote:
      'Odify built our custom operations portal and overhauled our B2B client acquisition funnels. Within three months of launch, our inbound quote requests doubled and customer onboarding time dropped by 65%. Their engineering discipline and responsiveness are unmatched.',
    metrics: '+210% B2B Inquiries',
    avatarInitial: 'RJ',
    tag: 'Custom Operations Portal & SEO',
  },
  {
    id: '2',
    author: 'Sneha Mohanty',
    role: 'Co-Founder & Creative Director',
    company: 'Aura Living Design Studio',
    quote:
      'From clean architectural UI to our consultation booking engine, Odify delivered a stunning, ultra-fast platform. Our organic search rankings have climbed to page one across Odisha, and our weekly consultation slots are consistently booked solid.',
    metrics: '3.4x Faster Page Speeds',
    avatarInitial: 'SM',
    tag: 'Web Architecture & Local SEO',
  },
  {
    id: '3',
    author: 'Dr. Vikramaditya Roy',
    role: 'Head of Operations',
    company: 'HealthPulse Diagnostics',
    quote:
      'We needed an intuitive patient test booking platform paired with hyper-targeted Google and Meta ad campaigns. Odify executed the entire digital funnel with precision. Our cost-per-patient acquisition dropped by 42% while monthly bookings reached record highs.',
    metrics: '-42% Patient Acquisition Cost',
    avatarInitial: 'VR',
    tag: 'Healthcare Portal & Paid Ads',
  },
  {
    id: '4',
    author: 'Ananya Priyadarshini',
    role: 'Founder & CEO',
    company: 'PureRoot Organic Living',
    quote:
      'Odify transformed our online retail storefront with high-performance headless architecture and automated inventory sync. Our mobile checkout abandonment plummeted, and repeat customer conversions surged by 175%. They operate as a true technical partner.',
    metrics: '+175% Repeat Conversions',
    avatarInitial: 'AP',
    tag: 'E-Commerce & Performance Funnels',
  },
]
