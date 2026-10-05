export interface ProcessStep {
  index: string
  title: string
  description: string
  details: string
}

export const processSectionData = {
  eyebrow: 'Our Process',
  heading: 'A considered process, refined over every engagement',
  subheading:
    'Five deliberate stages that carry your business from first conversation to lasting growth.',
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    description: 'Understanding your business goals and challenges.',
    details: 'In-depth stakeholder interviews, requirements gathering, and target audience analysis.',
  },
  {
    index: '02',
    title: 'Plan',
    description: 'Creating a customized strategy and roadmap.',
    details: 'Architecture design, tech stack selection, milestone schedules, and wireframes.',
  },
  {
    index: '03',
    title: 'Build',
    description: 'Developing and implementing the solution.',
    details: 'Modern clean code, responsive component development, and agile sprint deliveries.',
  },
  {
    index: '04',
    title: 'Optimize',
    description: 'Improving performance through continuous analysis.',
    details: 'Speed audits, SEO fine-tuning, conversion tracking, and quality assurance.',
  },
  {
    index: '05',
    title: 'Grow',
    description: 'Supporting long-term business growth and scalability.',
    details: 'Ongoing maintenance, feature enhancements, search rank tracking, and tech support.',
  },
]
