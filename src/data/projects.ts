export interface Project {
  id?: string
  index: string
  name: string
  category: string
  year: string
  description: string
  technologies: string[]
  externalUrl: string
  hue: number
  stat?: string
  linkText?: string
}

export const projectsSectionData = {
  eyebrow: 'Our Works',
  heading: 'Recent Projects',
  subheading:
    'A curated look at recent work — websites, platforms and growth strategies built for businesses that wanted something better than the standard.',
}

export const projects: Project[] = [
  {
    id: '01',
    index: '01',
    name: 'INFINITY SPACE',
    category: 'Website · Digital Marketing',
    year: '2026',
    description:
      'Infinity Space is a modern interior design studio in Odisha, specializing in stylish, functional, and customized residential and commercial interiors.',
    technologies: ['Modern Web Architecture', 'SEO Optimization', 'Lead Capture Funnels', 'Digital Marketing'],
    externalUrl: 'https://infinityspaceodisha.com/',
    hue: 215,
    stat: '+240% Inbound Leads',
    linkText: 'View Project',
  },
  {
    id: '02',
    index: '02',
    name: 'BLUE EDGE TRADE VENTURE PVT. LTD',
    category: 'Corporate Website',
    year: '2026',
    description:
      'Blue Edge Trade Venture Pvt. Ltd. is a leading mining company in Odisha, providing reliable mining, mineral trading, and related industrial solutions.',
    technologies: ['Corporate Web Platform', 'Mobile Responsive', 'Industrial Solutions', 'Fast Load Times'],
    externalUrl: 'https://blueedgetrade.in/',
    hue: 38,
    stat: 'Mining & Mineral Footprint',
    linkText: 'View Project',
  },
  {
    id: '03',
    index: '03',
    name: 'JC ENTERPRISES',
    category: 'E-commerce · Digital Marketing',
    year: '2026',
    description:
      'J.C. Enterprise is a trusted supplier of electrical and electronic components, offering quality products and reliable solutions for various industrial and commercial needs.',
    technologies: ['E-Commerce Architecture', 'Product Catalog', 'Search Visibility', 'B2B Inquiries'],
    externalUrl: 'https://jcenterprise.co.in/',
    hue: 160,
    stat: '+180% Product Reach',
    linkText: 'View Project',
  },
  {
    id: '04',
    index: '04',
    name: 'WWE TATTOO STUDIO',
    category: 'Custom Software · Automation',
    year: '2026',
    description:
      'WWE Tattoo Studio is a professional tattoo studio in Bhubaneswar specializing in custom tattoos, portrait tattoos, cover-ups, tattoo removal, and piercing with a focus on creativity, precision, and hygiene.',
    technologies: ['Appointment Booking Engine', 'Automation CRM', 'Interactive Gallery', 'Mobile First'],
    externalUrl: 'https://wwetattoostudio.in/',
    hue: 275,
    stat: 'Automated Booking System',
    linkText: 'View Project',
  },
]
