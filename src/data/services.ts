import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Building2,
  Cloud,
  Code2,
  Database,
  Globe,
  Palette,
  Smartphone,
  TrendingUp,
} from 'lucide-react'

export interface Service {
  index: string
  number: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  accent: {
    border: string
    bg: string
    iconBg: string
    iconColor: string
    badgeBg: string
    badgeColor: string
  }
}

export const servicesSectionData = {
  eyebrow: 'Our Services',
  heading: 'Solutions designed around your business goals',
  subheading:
    'A full-stack technology partner for ambitious businesses — from first sketch to scaled product, we build, design and grow the systems your company runs on.',
  ctaText: 'Get a Quote',
}

export const services: Service[] = [
  {
    index: '01',
    number: '01',
    icon: Globe,
    title: 'Web Development',
    subtitle: 'Fast, responsive & search-optimized',
    description:
      'Custom corporate websites, dynamic web portals, and scalable web apps engineered for blistering speed, accessibility, and high conversion.',
    features: ['Corporate Websites', 'Custom Web Applications', 'CMS & Portals', 'Performance Optimization'],
    accent: {
      border: 'rgba(16, 185, 129, 0.25)',
      bg: '#ffffff',
      iconBg: '#ecfdf5',
      iconColor: '#059669',
      badgeBg: '#d1fae5',
      badgeColor: '#065f46',
    },
  },
  {
    index: '02',
    number: '02',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'iOS & Android native & hybrid',
    description:
      'User-centric, high-performance mobile applications that deliver smooth navigation, offline capabilities, and seamless operating system integrations.',
    features: ['iOS & Android Apps', 'Cross-Platform Flutter/React Native', 'App Store Optimization', 'API Integration'],
    accent: {
      border: 'rgba(59, 130, 246, 0.25)',
      bg: '#ffffff',
      iconBg: '#eff6ff',
      iconColor: '#2563eb',
      badgeBg: '#dbeafe',
      badgeColor: '#1e40af',
    },
  },
  {
    index: '03',
    number: '03',
    icon: Code2,
    title: 'E-commerce Solutions',
    subtitle: 'High-converting online storefronts',
    description:
      'Robust digital retail experiences with fast product filtering, secure payment gateways, inventory synchronization, and optimized checkout funnels.',
    features: ['Custom Storefronts', 'Payment Gateway Integration', 'Inventory Management', 'Checkout Optimization'],
    accent: {
      border: 'rgba(245, 158, 11, 0.25)',
      bg: '#ffffff',
      iconBg: '#fffbeb',
      iconColor: '#d97706',
      badgeBg: '#fef3c7',
      badgeColor: '#92400e',
    },
  },
  {
    index: '04',
    number: '04',
    icon: Cloud,
    title: 'Cloud & DevOps',
    subtitle: 'Reliable, scalable infrastructure',
    description:
      'Modern cloud architecture, CI/CD automated deployment pipelines, Docker containerization, and 99.9% uptime infrastructure management.',
    features: ['AWS & Google Cloud Setup', 'CI/CD Automation', 'Docker & Kubernetes', 'Security & Backup Audits'],
    accent: {
      border: 'rgba(139, 92, 246, 0.25)',
      bg: '#ffffff',
      iconBg: '#f5f3ff',
      iconColor: '#7c3aed',
      badgeBg: '#ede9fe',
      badgeColor: '#5b21b6',
    },
  },
  {
    index: '05',
    number: '05',
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'Human-centered digital aesthetics',
    description:
      'Intuitive user interfaces, cohesive design systems, and engaging interactive prototypes that build brand credibility and delight users.',
    features: ['User Research & Wireframing', 'Figma Interactive Prototypes', 'Design Systems & Tokens', 'Conversion Rate UX'],
    accent: {
      border: 'rgba(236, 72, 153, 0.25)',
      bg: '#ffffff',
      iconBg: '#fdf2f8',
      iconColor: '#db2777',
      badgeBg: '#fce7f3',
      badgeColor: '#9d174d',
    },
  },
  {
    index: '06',
    number: '06',
    icon: TrendingUp,
    title: 'Digital Marketing',
    subtitle: 'Targeted customer acquisition',
    description:
      'Performance-driven marketing strategies including SEO, Google Ads, Meta Ads, and social media campaigns tailored to drive measurable leads.',
    features: ['Search Engine Optimization (SEO)', 'Google & Meta Ads', 'Local SEO & Google Maps', 'Social Media Management'],
    accent: {
      border: 'rgba(16, 185, 129, 0.25)',
      bg: '#ffffff',
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      badgeBg: '#d1fae5',
      badgeColor: '#065f46',
    },
  },
  {
    index: '07',
    number: '07',
    icon: BarChart3,
    title: 'Data & Analytics',
    subtitle: 'Insight-driven decision making',
    description:
      'Actionable reporting dashboards, user funnel tracking, event analytics, and behavioral data to uncover growth opportunities.',
    features: ['Google Analytics 4 & Tag Manager', 'Custom Dashboard Reporting', 'Conversion Funnel Audits', 'User Behavior Heatmaps'],
    accent: {
      border: 'rgba(14, 165, 233, 0.25)',
      bg: '#ffffff',
      iconBg: '#f0f9ff',
      iconColor: '#0284c7',
      badgeBg: '#e0f2fe',
      badgeColor: '#075985',
    },
  },
  {
    index: '08',
    number: '08',
    icon: Building2,
    title: 'Enterprise Solutions',
    subtitle: 'Scalable corporate architectures',
    description:
      'Custom ERP systems, internal management platforms, and multi-tenant architectures tailored to support large enterprise operations.',
    features: ['Custom ERP & CRM', 'Multi-tenant Systems', 'Role-Based Access Control', 'Enterprise System Integration'],
    accent: {
      border: 'rgba(99, 102, 241, 0.25)',
      bg: '#ffffff',
      iconBg: '#eef2ff',
      iconColor: '#4f46e5',
      badgeBg: '#e0e7ff',
      badgeColor: '#3730a3',
    },
  },
  {
    index: '09',
    number: '09',
    icon: Database,
    title: 'Business Applications',
    subtitle: 'Automated workflow software',
    description:
      'Bespoke operational tools, automated client portals, billing platforms, and internal dashboards that eliminate manual repetitive tasks.',
    features: ['Billing & Invoicing Tools', 'Customer Portals', 'Automated Workflows', 'Database Management'],
    accent: {
      border: 'rgba(234, 88, 12, 0.25)',
      bg: '#ffffff',
      iconBg: '#fff7ed',
      iconColor: '#ea580c',
      badgeBg: '#ffedd5',
      badgeColor: '#9a3412',
    },
  },
]
