import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  Code2,
  Cpu,
  Palette,
  Smartphone,
  TrendingUp,
  Workflow,
} from 'lucide-react'

export interface Service {
  index: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    index: '01',
    icon: Code2,
    title: 'Web Development',
    description:
      'High-performance web applications, scalable SaaS architectures, and modern web platforms built for speed, SEO, and enterprise reliability.',
    features: ['Next.js & React Ecosystem', 'High Speed & Technical SEO', 'Scalable Microservices API'],
  },
  {
    index: '02',
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android engineered with smooth 60fps animations, offline resilience, and intuitive gesture navigation.',
    features: ['React Native & Expo', 'iOS & Android Parity', 'Real-time State Sync'],
  },
  {
    index: '03',
    icon: BrainCircuit,
    title: 'AI Solutions',
    description:
      'Cutting-edge generative AI integrations, LLM workflows, custom agent architectures, and computer vision systems that unlock business intelligence.',
    features: ['Gemini & NVIDIA AI APIs', 'Custom RAG Pipelines', 'Automated Intelligence'],
  },
  {
    index: '04',
    icon: Cpu,
    title: 'Custom Software',
    description:
      'Tailored enterprise software, custom dashboards, internal tools, and high-throughput backend services designed around unique business logic.',
    features: ['Node.js & Distributed Systems', 'MongoDB & SQL Databases', 'Cloud Micro-architectures'],
  },
  {
    index: '05',
    icon: Palette,
    title: 'UI/UX Development',
    description:
      'Design systems, interactive prototypes, and production design implementations focused on friction-free customer conversion and user delight.',
    features: ['Interactive Prototypes', 'Modern Design Systems', 'Accessibility & Motion'],
  },
  {
    index: '06',
    icon: Workflow,
    title: 'Business Automation',
    description:
      'End-to-end workflow automation, data synchronization, API integrations, and event-driven pipelines that eliminate repetitive operational overhead.',
    features: ['API Integrations & Webhooks', 'Automated Operations', 'Real-time Monitoring'],
  },
  {
    index: '07',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Data-driven performance marketing, multi-channel growth campaigns, technical SEO, and conversion rate optimization (CRO) that turn digital traffic into measurable enterprise revenue.',
    features: ['Technical SEO & Organic Growth', 'Performance & Paid Campaigns', 'Conversion Rate Optimization (CRO)'],
  },
]
