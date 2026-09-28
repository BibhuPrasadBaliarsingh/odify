export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'How long does a typical project take from kickoff to launch?',
    answer:
      'Most full builds take between 4 to 6 weeks depending on scope and feature complexity. Focused design sprints or audits are delivered in 2 weeks. We set a strict milestone schedule at kickoff so you always know what to expect.',
    category: 'Process',
  },
  {
    id: '2',
    question: 'What technologies and frameworks do you build with?',
    answer:
      'We specialize in modern frontend ecosystems: React, Next.js, TypeScript, Tailwind CSS, and Framer Motion for high-performance interactive interfaces. For backends and CMS, we work with headless systems like Sanity, Supabase, Payload, or custom APIs.',
    category: 'Technology',
  },
  {
    id: '3',
    question: 'Do we own the intellectual property and code upon completion?',
    answer:
      '100% yes. Once the final milestone payment is completed, you own all design files (Figma), source code, design system tokens, assets, and documentation with zero vendor lock-in.',
    category: 'Engagement',
  },
  {
    id: '4',
    question: 'How do you handle revisions and feedback loops?',
    answer:
      'We run collaborative, async-first sprints. You have access to real-time Figma files, staging preview links, Loom walkthroughs, and a dedicated Slack channel. Revisions are incorporated continuously within each milestone sprint.',
    category: 'Collaboration',
  },
  {
    id: '5',
    question: 'What happens after our product goes live?',
    answer:
      'Every build comes with 30 days of complimentary post-launch support and bug fixes. For clients looking for ongoing expansion, experimentation, and maintenance, we offer our Growth Partner monthly retainer.',
    category: 'Support',
  },
]
