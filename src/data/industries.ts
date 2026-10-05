import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Briefcase,
  GraduationCap,
  HardHat,
  Home,
  Laptop,
  Palmtree,
  ShoppingBag,
} from 'lucide-react'

export interface Industry {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  color: string
  bg: string
  tags: string[]
}

export const industriesSectionData = {
  eyebrow: 'Sectors & Markets',
  heading: 'Industries We Serve',
  lead: 'From healthcare providers and educational institutions to real estate companies, e-commerce brands, manufacturers, and technology startups, we partner with organizations across multiple sectors to build stronger digital experiences. By combining innovative technology, strategic marketing, and industry-focused solutions, we help businesses improve visibility, engage customers, and achieve sustainable growth in an increasingly digital world.',
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    subtitle: 'Hospitals, clinics & diagnostic centers',
    description:
      'Patient booking portals, doctor directories, and HIPAA/local compliance-conscious websites that build trust and drive patient footfall.',
    icon: Activity,
    color: '#059669',
    bg: '#ecfdf5',
    tags: ['Patient Portals', 'Doctor Scheduling', 'Local SEO'],
  },
  {
    id: 'education',
    title: 'Education & EdTech',
    subtitle: 'Schools, colleges & e-learning',
    description:
      'Institutional websites, student admission management portals, fee payment gateways, and intuitive learning platforms.',
    icon: GraduationCap,
    color: '#2563eb',
    bg: '#eff6ff',
    tags: ['Admissions Portal', 'Fee Gateways', 'LMS Integration'],
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Interior Design',
    subtitle: 'Developers, builders & interior studios',
    description:
      'High-impact architectural showcase websites, virtual property tours, 3D project walkthroughs, and lead generation campaigns.',
    icon: Home,
    color: '#d97706',
    bg: '#fffbeb',
    tags: ['Property Showcases', 'Virtual Tours', 'Lead Ads'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    subtitle: 'Online stores & D2C brands',
    description:
      'High-conversion online shopping experiences with frictionless checkout, inventory sync, and multi-channel marketing.',
    icon: ShoppingBag,
    color: '#db2777',
    bg: '#fdf2f8',
    tags: ['Shopify / Custom', 'Payment Gateways', 'Cart Abandonment'],
  },
  {
    id: 'manufacturing',
    title: 'Mining & Industrial Manufacturing',
    subtitle: 'Mining, trading & industrial suppliers',
    description:
      'Authoritative corporate websites, B2B procurement portals, and catalog directories that reflect industrial leadership.',
    icon: HardHat,
    color: '#ea580c',
    bg: '#fff7ed',
    tags: ['B2B Catalogs', 'Inquiry Gateways', 'Corporate Credibility'],
  },
  {
    id: 'tech-startups',
    title: 'Technology Startups & SaaS',
    subtitle: 'Founders & scale-ups',
    description:
      'Modern SaaS product landing pages, MVP application engineering, responsive dashboards, and conversion-focused growth engines.',
    icon: Laptop,
    color: '#7c3aed',
    bg: '#f5f3ff',
    tags: ['MVP Development', 'SaaS Dashboards', 'Product Analytics'],
  },
  {
    id: 'hospitality',
    title: 'Travel, Tourism & Hospitality',
    subtitle: 'Tour operators, hotels & resorts',
    description:
      'Seamless tour booking engines, hotel reservation interfaces, local destination SEO, and inquiry automation.',
    icon: Palmtree,
    color: '#0284c7',
    bg: '#f0f9ff',
    tags: ['Tour Booking Engines', 'Local Search Maps', 'Instant Inquiries'],
  },
  {
    id: 'professional',
    title: 'Professional Services & Studios',
    subtitle: 'Consulting, legal & creative agencies',
    description:
      'Sleek portfolio presentations, booking workflows, client portals, and search optimization for specialized creative businesses.',
    icon: Briefcase,
    color: '#4f46e5',
    bg: '#eef2ff',
    tags: ['Portfolio Showcase', 'Client Scheduling', 'Brand Authority'],
  },
]
