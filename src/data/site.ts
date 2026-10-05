// Central, easily editable configuration for site-wide content.
// Update copy, links and contact details here rather than inside components.

export const site = {
  name: 'Odify',
  fullName: 'Odify Digital Growth & Technology',
  domain: 'odify.agency',
  email: 'odify.agency@gmail.com',
  phone: '+91 7377714888',
  phoneHref: 'tel:+917377714888',
  whatsappHref: 'https://wa.me/917377714888',
  tagline: 'Websites | Software | Google Ads | Meta Ads | SEO | Social Media Management',
  mission: 'A digital growth and technology agency helping businesses acquire customers, build better digital experiences, and automate their operations.',
  year: 2026,
} as const

export const capabilityPillars = [
  {
    verb: 'GROW',
    verbLabel: 'Marketing & Advertising',
    division: 'Odify Growth',
    subtitle: 'Digital Marketing & Performance',
  },
  {
    verb: 'BUILD',
    verbLabel: 'Websites & Applications',
    division: 'Odify Web',
    subtitle: 'Websites & Web Applications',
  },
  {
    verb: 'SCALE',
    verbLabel: 'Technology & Automation',
    division: 'Odify Tech',
    subtitle: 'Software, Automation & SaaS',
  },
] as const

export const servicePills = [
  'Websites',
  'Software',
  'Google Ads',
  'Meta Ads',
  'SEO',
  'Social Media Management',
] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/odify.agency?stkn=aHNnMjlhMTlqcjhw&utm_source=qr' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1GPGPxKM64/?mibextid=wwXIfr' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/odify' },
  { label: 'X', href: 'https://x.com/odifyagency' },
] as const

export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Divisions & Services',
    links: [
      { label: '01 Growth — Digital Marketing', href: '#services' },
      { label: '02 Web — Websites & Web Apps', href: '#services' },
      { label: '03 Tech — Software & Automation', href: '#services' },
      { label: 'Google & Meta Ads', href: '#services' },
      { label: 'SEO & Search Optimization', href: '#services' },
      { label: 'Custom Software & CRM', href: '#services' },
    ],
  },
] as const

// Placeholder brand marks for the trust bar — illustrative only, not real clients.
export const trustLogos = ['NOVA', 'VERTEX', 'LUMEN', 'AXIS', 'NEXA', 'ORBIT'] as const

export const differentiators = [
  {
    title: 'Customer Acquisition First',
    description: 'We align marketing, design, and tech around getting real, paying clients for your business.',
  },
  {
    title: 'Modern High-Conversion Web',
    description: 'Websites and web apps crafted for speed, search rankings, and effortless conversion.',
  },
  {
    title: 'Scalable Software & Automation',
    description: 'Custom tools, admin panels, and automated workflows that streamline your entire operation.',
  },
  {
    title: 'Full-Cycle Partnership',
    description: 'From initial ad campaign to scalable backend architecture, we grow alongside you.',
  },
] as const

export const projectTypes = [
  '01 Growth — Google Ads / Meta Ads / SEO / Social Media',
  '02 Web — Business Websites / Landing Pages / Web Apps',
  '03 Tech — Custom Software / Automation / CRM / APIs',
  'Full-Stack Growth & Technology Partnership',
  'Other',
] as const

