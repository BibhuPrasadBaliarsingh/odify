import type { LucideIcon } from 'lucide-react'
import { Boxes, Compass, LineChart, MonitorSmartphone, Search, Sparkles } from 'lucide-react'

export interface Service {
  index: string
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    index: '01',
    icon: MonitorSmartphone,
    title: 'Web Design & Development',
    description:
      'High-performance websites that look exceptional and convert visitors into customers.',
  },
  {
    index: '02',
    icon: Sparkles,
    title: 'Brand Identity',
    description:
      'Distinctive visual identities that make businesses recognizable and memorable.',
  },
  {
    index: '03',
    icon: LineChart,
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns designed to increase visibility, engagement and growth.',
  },
  {
    index: '04',
    icon: Compass,
    title: 'UI/UX Design',
    description:
      'Intuitive digital experiences designed around real users and business goals.',
  },
  {
    index: '05',
    icon: Search,
    title: 'SEO & Growth',
    description:
      'Technical SEO, content strategy and optimization that build sustainable organic growth.',
  },
  {
    index: '06',
    icon: Boxes,
    title: 'Automation & Technology',
    description:
      'Smart digital systems and automation that reduce manual work and improve efficiency.',
  },
]
