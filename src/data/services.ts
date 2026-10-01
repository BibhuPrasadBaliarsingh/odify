import type { LucideIcon } from 'lucide-react'
import {
  Cloud,
  Code2,
  Layers,
  Palette,
  Smartphone,
  TrendingUp,
} from 'lucide-react'

export interface Service {
  index: string
  icon: LucideIcon
  title: string
  category: string
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

export const services: Service[] = [
  {
    index: '01',
    icon: Code2,
    title: 'Web Development',
    category: 'Web Development',
    description:
      'High-performance web applications, scalable SaaS architectures, and modern web platforms built for lightning speed, technical SEO, and enterprise reliability.',
    features: ['Next.js & React Ecosystem', 'High Speed & Technical SEO', 'Scalable Microservices API'],
    accent: {
      border: 'rgba(244, 63, 94, 0.22)',
      bg: '#ffffff',
      iconBg: '#fff1f2',
      iconColor: '#e11d48',
      badgeBg: '#ffe4e6',
      badgeColor: '#be123c',
    },
  },
  {
    index: '02',
    icon: Smartphone,
    title: 'Mobile Apps',
    category: 'Mobile Apps',
    description:
      'Native and cross-platform mobile apps for iOS and Android engineered with smooth 60fps gesture animations, offline resilience, and fluid user experiences.',
    features: ['React Native & Flutter', 'iOS & Android Parity', 'Real-time State & Cloud Sync'],
    accent: {
      border: 'rgba(14, 165, 233, 0.22)',
      bg: '#ffffff',
      iconBg: '#f0f9ff',
      iconColor: '#0284c7',
      badgeBg: '#e0f2fe',
      badgeColor: '#0369a1',
    },
  },
  {
    index: '03',
    icon: Cloud,
    title: 'Cloud & DevOps',
    category: 'Cloud & DevOps',
    description:
      'Resilient cloud architectures, CI/CD automated deployment pipelines, Kubernetes cluster management, and secure multi-region cloud infrastructures.',
    features: ['AWS & GCP Cloud Architecture', 'Docker & Kubernetes Pipelines', 'Zero-Downtime Deployments'],
    accent: {
      border: 'rgba(59, 130, 246, 0.22)',
      bg: '#ffffff',
      iconBg: '#eff6ff',
      iconColor: '#2563eb',
      badgeBg: '#dbeafe',
      badgeColor: '#1d4ed8',
    },
  },
  {
    index: '04',
    icon: Layers,
    title: 'Software Development',
    category: 'Software Development',
    description:
      'Tailored enterprise software, custom dashboards, internal tools, and high-throughput backend services designed to automate complex business workflows.',
    features: ['Node.js & Distributed Systems', 'PostgreSQL & Database Design', 'Custom Enterprise APIs'],
    accent: {
      border: 'rgba(139, 92, 246, 0.22)',
      bg: '#ffffff',
      iconBg: '#f5f3ff',
      iconColor: '#7c3aed',
      badgeBg: '#ede9fe',
      badgeColor: '#6d28d9',
    },
  },
  {
    index: '05',
    icon: Palette,
    title: 'UI/UX Design',
    category: 'UI/UX Design',
    description:
      'Human-centered product design, design systems, and clickable high-fidelity prototypes engineered for frictionless conversion and visual elegance.',
    features: ['Figma Design Systems', 'Interactive Prototypes', 'Conversion Rate Optimization'],
    accent: {
      border: 'rgba(236, 72, 153, 0.22)',
      bg: '#ffffff',
      iconBg: '#fdf2f8',
      iconColor: '#db2777',
      badgeBg: '#fce7f3',
      badgeColor: '#be185d',
    },
  },
  {
    index: '06',
    icon: TrendingUp,
    title: 'Digital Marketing',
    category: 'Digital Marketing',
    description:
      'Data-driven performance marketing, multi-channel growth campaigns, search engine optimization, and funnel optimization that turn digital visitors into long-term clients.',
    features: ['Technical SEO & Growth', 'Paid Acquisition & ROI', 'Funnel Analytics & Tracking'],
    accent: {
      border: 'rgba(34, 197, 94, 0.22)',
      bg: '#ffffff',
      iconBg: '#f0fdf4',
      iconColor: '#16a34a',
      badgeBg: '#dcfce7',
      badgeColor: '#15803d',
    },
  },
]

