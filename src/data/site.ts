// Central, easily editable configuration for site-wide content.
// Update copy, links and contact details here rather than inside components.

export const site = {
  name: 'Odify',
  domain: 'odify.agency',
  email: 'odify.agency@gmail.com',
  phone: '+91 7377714888',
  phoneHref: 'tel:+917377714888',
  whatsappHref: 'https://wa.me/917377714888',
  tagline: 'Digital experiences for ambitious businesses.',
  year: 2026,
} as const

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
    heading: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile App Development', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'Custom Software', href: '#services' },
      { label: 'UI/UX Development', href: '#services' },
      { label: 'Business Automation', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
    ],
  },
] as const

// Placeholder brand marks for the trust bar — illustrative only, not real clients.
export const trustLogos = ['NOVA', 'VERTEX', 'LUMEN', 'AXIS', 'NEXA', 'ORBIT'] as const

export const differentiators = [
  {
    title: 'Strategy First',
    description: 'Every project starts with understanding the business, audience and goals.',
  },
  {
    title: 'Design That Matters',
    description: 'We combine aesthetics with usability and conversion.',
  },
  {
    title: 'Technology That Performs',
    description: 'Fast, scalable and maintainable digital experiences.',
  },
  {
    title: 'Built For Growth',
    description: 'We think beyond launch and focus on long-term results.',
  },
] as const

export const projectTypes = [
  'Web Development',
  'Mobile App Development',
  'AI Solutions',
  'Custom Software',
  'UI/UX Development',
  'Business Automation',
  'Digital Marketing',
  'SEO & Performance Growth',
  'Other',
] as const
