import type { LucideIcon } from 'lucide-react'
import {
  Cpu,
  Globe,
  TrendingUp,
} from 'lucide-react'

export interface Service {
  index: string
  number: string
  icon: LucideIcon
  title: string
  division: string
  category: string
  subtitle: string
  verb: 'GROW' | 'BUILD' | 'SCALE'
  verbLabel: string
  description: string
  features: string[]
  items: string[]
  accent: {
    border: string
    bg: string
    iconBg: string
    iconColor: string
    badgeBg: string
    badgeColor: string
    glow: string
  }
}

export const services: Service[] = [
  {
    index: '01',
    number: '01',
    icon: TrendingUp,
    title: 'Odify Growth',
    division: 'Odify Growth',
    category: 'Digital Marketing & Performance',
    subtitle: 'Digital Marketing & Performance',
    verb: 'GROW',
    verbLabel: 'Marketing & Advertising',
    description:
      'Data-driven performance marketing, high-intent customer acquisition funnels, and search dominance engineered to scale revenue predictably.',
    features: [
      'Google Ads',
      'Meta Ads',
      'SEO',
      'Local SEO',
      'Social Media Marketing',
      'Content Marketing',
    ],
    items: [
      'Google Ads',
      'Meta Ads',
      'SEO',
      'Local SEO',
      'Social Media Marketing',
      'Content Marketing',
    ],
    accent: {
      border: 'rgba(34, 197, 94, 0.28)',
      bg: '#ffffff',
      iconBg: '#f0fdf4',
      iconColor: '#16a34a',
      badgeBg: '#dcfce7',
      badgeColor: '#15803d',
      glow: 'rgba(34, 197, 94, 0.12)',
    },
  },
  {
    index: '02',
    number: '02',
    icon: Globe,
    title: 'Odify Web',
    division: 'Odify Web',
    category: 'Websites & Web Applications',
    subtitle: 'Websites & Web Applications',
    verb: 'BUILD',
    verbLabel: 'Websites & Applications',
    description:
      'Lightning-fast, conversion-optimized digital flagships and responsive web platforms built with cutting-edge architectures and fluid user experiences.',
    features: [
      'Business Websites',
      'Landing Pages',
      'E-commerce',
      'Booking Websites',
      'Custom Web Applications',
    ],
    items: [
      'Business Websites',
      'Landing Pages',
      'E-commerce',
      'Booking Websites',
      'Custom Web Applications',
    ],
    accent: {
      border: 'rgba(245, 158, 11, 0.28)',
      bg: '#ffffff',
      iconBg: '#fffbeb',
      iconColor: '#d97706',
      badgeBg: '#fef3c7',
      badgeColor: '#b45309',
      glow: 'rgba(245, 158, 11, 0.12)',
    },
  },
  {
    index: '03',
    number: '03',
    icon: Cpu,
    title: 'Odify Tech',
    division: 'Odify Tech',
    category: 'Software, Automation & SaaS',
    subtitle: 'Software, Automation & SaaS',
    verb: 'SCALE',
    verbLabel: 'Technology & Automation',
    description:
      'Bespoke software platforms, automated business operations, and enterprise systems that eliminate human friction and accelerate operational efficiency.',
    features: [
      'Custom Software',
      'Admin Panels',
      'CRM',
      'Business Automation',
      'API Integrations',
      'Mobile Apps',
    ],
    items: [
      'Custom Software',
      'Admin Panels',
      'CRM',
      'Business Automation',
      'API Integrations',
      'Mobile Apps',
    ],
    accent: {
      border: 'rgba(99, 102, 241, 0.28)',
      bg: '#ffffff',
      iconBg: '#eef2ff',
      iconColor: '#4f46e5',
      badgeBg: '#e0e7ff',
      badgeColor: '#3730a3',
      glow: 'rgba(99, 102, 241, 0.12)',
    },
  },
]
