export interface Project {
  index: string
  name: string
  category: string
  description: string
  // hue used to generate a distinct abstract gradient mockup per project
  hue: number
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'Nova Finance',
    category: 'Fintech Website & Digital Experience',
    description:
      'A high-trust financial platform rebuilt around clarity, speed and confident visual language.',
    hue: 231,
  },
  {
    index: '02',
    name: 'Luma',
    category: 'Brand Identity & E-commerce',
    description:
      'A complete identity and storefront system designed to feel premium at every touchpoint.',
    hue: 20,
  },
  {
    index: '03',
    name: 'Vertex',
    category: 'SaaS Website & Product Design',
    description:
      'A product marketing site and design system built to scale alongside a growing platform.',
    hue: 265,
  },
  {
    index: '04',
    name: 'Astra',
    category: 'Digital Strategy & Growth',
    description:
      'A long-term growth partnership spanning strategy, content and continuous optimization.',
    hue: 165,
  },
]
