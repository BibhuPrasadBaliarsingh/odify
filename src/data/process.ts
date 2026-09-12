export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    description: 'Understand your business, audience, challenges and goals.',
  },
  {
    index: '02',
    title: 'Strategize',
    description: 'Define the right digital strategy and project direction.',
  },
  {
    index: '03',
    title: 'Design',
    description: 'Create the visual language and user experience.',
  },
  {
    index: '04',
    title: 'Build',
    description: 'Develop a fast, scalable and responsive digital experience.',
  },
  {
    index: '05',
    title: 'Launch',
    description: 'Test, optimize and launch with confidence.',
  },
  {
    index: '06',
    title: 'Grow',
    description: 'Continue improving performance and digital growth.',
  },
]
