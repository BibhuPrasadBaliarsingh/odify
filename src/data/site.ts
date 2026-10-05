// Central, easily editable configuration for site-wide content.
// Sequenced and structured around growwyldtech.com with Odify branding & details.

export const site = {
  name: 'Odify',
  shortName: 'Odify',
  fullName: 'Odify — IT Services & Digital Growth',
  domain: 'odify.agency',
  email: 'odify.agency@gmail.com',
  phone: '+91 7377714888',
  phoneDisplay: '+91 7377714888',
  phoneHref: 'tel:+917377714888',
  whatsappHref: 'https://wa.me/917377714888',
  location: 'Nayapalli, Bhubaneswar, Odisha, India',
  hours: 'Mon–Fri, 9:00–18:00 IST',
  tagline: 'We build websites that work as hard as you do.',
  subtagline: 'Fast, scalable, and search-ready platforms crafted for businesses in Bhubaneswar and beyond.',
  mission:
    'Odify is a trusted IT services and digital growth company in Odisha, India, offering web development, digital marketing, software solutions, and technology services for growing businesses.',
  heroNarrative:
    "Your website is more than just an online presence, it's often the first impression customers have of your business. A well-designed website builds trust, enhances user experience, and helps turn visitors into customers. As a Web Development Company in Bhubaneswar, we create websites and digital platforms designed around your business goals. Whether you need a corporate website, an e-commerce store, a custom web application, or a mobile-first solution, our focus is on building digital experiences that are fast, scalable, and easy to manage.",
  year: 2026,
} as const

export const heroHighlights = [
  {
    title: 'Fast',
    badge: '01',
    description: 'Optimized load times',
    detail: 'Sub-second rendering and lightweight code delivery for instant user interaction.',
    accent: '#10b981',
  },
  {
    title: 'Scalable',
    badge: '02',
    description: 'Built to grow with you',
    detail: 'Modular architecture designed to easily handle traffic spikes and business expansion.',
    accent: '#f59e0b',
  },
  {
    title: 'SEO',
    badge: '03',
    description: 'Search-ready by design',
    detail: 'Clean semantic structure, metadata optimization, and fast indexing from day one.',
    accent: '#6366f1',
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

export const trustLogos = ['NOVA', 'VERTEX', 'LUMEN', 'AXIS', 'NEXA', 'ORBIT'] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Our Works', href: '#work' },
  { label: 'Industries', href: '#industries' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact US', href: '#contact' },
] as const

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/odify.agency?stkn=aHNnMjlhMTlqcjhw&utm_source=qr' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1GPGPxKM64/?mibextid=wwXIfr' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/odify' },
  { label: 'X', href: 'https://x.com/odifyagency' },
] as const

export const footerColumns = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#growth' },
      { label: 'Services', href: '#services' },
      { label: 'Our Works', href: '#work' },
      { label: 'Industries', href: '#industries' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'Contact US', href: '#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile App Development', href: '#services' },
      { label: 'E-commerce Solutions', href: '#services' },
      { label: 'Cloud & DevOps', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
      { label: 'Enterprise Solutions', href: '#services' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Healthcare & Medical', href: '#industries' },
      { label: 'Education & EdTech', href: '#industries' },
      { label: 'Real Estate & Architecture', href: '#industries' },
      { label: 'E-Commerce & Retail', href: '#industries' },
      { label: 'Mining & Industrial', href: '#industries' },
      { label: 'Hospitality & Tourism', href: '#industries' },
    ],
  },
] as const

export const differentiators = [
  {
    title: 'Tailored Strategies',
    description: 'Customized web and software strategies engineered specifically around your industry and target customers.',
  },
  {
    title: 'End-to-End Expertise',
    description: 'Full stack development, UI/UX design, cloud infrastructure, and digital marketing unified in one team.',
  },
  {
    title: 'Results-Driven Approach',
    description: 'Focused on measurable performance, high Google search rankings, conversion rates, and revenue impact.',
  },
  {
    title: 'Transparent Collaboration',
    description: 'Clear sprint timelines, direct communication with technical leads, and zero hidden costs.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Future-ready architectures that smoothly scale with your business without requiring costly rebuilds.',
  },
  {
    title: 'Innovation Focused',
    description: 'Leveraging modern frameworks, fast CDN delivery, security best practices, and search intelligence.',
  },
] as const

export const projectTypes = [
  'Web Development & Corporate Websites',
  'Mobile App Development (iOS & Android)',
  'E-Commerce & Online Storefront',
  'Digital Marketing & SEO Dominance',
  'Custom Software & Cloud Solutions',
  'UI/UX Design & Branding',
] as const
