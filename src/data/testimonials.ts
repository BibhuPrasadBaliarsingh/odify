export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  metrics?: string
  avatarInitial: string
}

export const testimonialsSectionData = {
  eyebrow: 'Client Testimonials',
  heading: 'What Our Clients Say About Us',
  subheading:
    'Real feedback from business owners, founders, and leaders who partnered with us for web development, technology, and digital marketing.',
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Prakash Sahoo',
    role: 'Founder',
    company: 'Infinity Space',
    quote:
      'Partnering with Odify has been a great decision for our business. From developing our website to handling SEO and digital marketing activities, the team has consistently delivered quality work. They took the time to understand our business and created strategies that improved our online visibility and helped us reach more potential customers.',
    metrics: '+240% Inbound Leads',
    avatarInitial: 'PS',
  },
  {
    id: '2',
    author: 'Ashish Agarwal',
    role: 'Founder',
    company: 'AeroBill Software',
    quote:
      'Odify developed our corporate website for both our mining and EV businesses. We wanted to improve our search visibility and attract more potential customers across India. The team delivered exceptional results with a high-performing web platform and targeted advertising that increased our qualified conversions significantly.',
    metrics: '+180% Web Inquiries',
    avatarInitial: 'AA',
  },
  {
    id: '3',
    author: 'Debasis Mishra',
    role: 'Director',
    company: 'Blue Edge Trade Venture Pvt. Ltd.',
    quote:
      'We needed a dependable, corporate digital platform that would represent our industrial mining and mineral trading footprint. Odify executed the project with utmost precision, delivering a fast, responsive, and search-optimized site that has earned praise from partners and stakeholders alike.',
    metrics: 'Enterprise Speed & Reliability',
    avatarInitial: 'DM',
  },
  {
    id: '4',
    author: 'Rajesh Patra',
    role: 'Owner',
    company: 'Divine Puri Tours Holidays',
    quote:
      'We wanted a website that would help tourists in Puri easily explore our services and book customized tour packages. Their team created a lightning-fast booking platform and local SEO strategy that brought in a steady stream of organic inquiries and high-intent bookings.',
    metrics: 'Rank #1 Local Searches',
    avatarInitial: 'RP',
  },
]
