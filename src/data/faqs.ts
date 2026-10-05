export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqsSectionData = {
  eyebrow: 'Frequently Asked Questions',
  heading: 'Got Questions? We Have Answers',
  subheading:
    'Everything you need to know about our web development, digital marketing, timelines, pricing, and technology services in Odisha and India.',
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I choose the right IT services company in Odisha?',
    answer:
      'Focus on technical expertise, past portfolio quality, communication clarity, and the ability to understand your commercial business goals before selecting a technology partner. Review verified client testimonials, ensure they offer end-to-end capabilities from design to marketing, and confirm their post-launch support commitments.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'How much does website development cost in Bhubaneswar?',
    answer:
      'Website development costs vary based on design complexity, custom functionality, integrations (e.g. CRM, payment gateways), and content requirements. Standard business websites and bespoke enterprise platforms have distinct scopes. At Odify, we provide transparent, fixed-scope proposals with no hidden fees.',
    category: 'Web Development',
  },
  {
    id: 'faq-3',
    question: 'What services does a digital marketing agency in Bhubaneswar provide?',
    answer:
      'A comprehensive digital marketing agency provides Search Engine Optimization (SEO), Google Ads PPC management, Meta Ads (Facebook & Instagram), social media marketing, content creation, Google Business Profile local SEO, and conversion rate optimization to turn clicks into sales.',
    category: 'Marketing',
  },
  {
    id: 'faq-4',
    question: 'How long does it take to develop a business website?',
    answer:
      'The development timeline depends on the overall scope. A standard modern business website typically takes 2 to 4 weeks, while complex e-commerce stores, custom SaaS portals, or enterprise systems typically require 4 to 8 weeks with dedicated weekly sprint milestones.',
    category: 'Web Development',
  },
  {
    id: 'faq-5',
    question: 'Why is SEO important for business growth?',
    answer:
      'SEO improves your organic visibility on search engines when potential clients search for your services. It drives consistent, high-intent traffic, establishes long-term credibility, and generates qualified leads without the ongoing per-click expenses of paid ads.',
    category: 'SEO',
  },
  {
    id: 'faq-6',
    question: 'How long does SEO take to show results?',
    answer:
      'SEO is a compounding long-term investment. Initial technical indexing and local ranking signals typically appear within 3 to 6 weeks, while significant search rankings and sustainable organic traffic growth generally mature within 3 to 6 months depending on market competition.',
    category: 'SEO',
  },
  {
    id: 'faq-7',
    question: 'Can local SEO help my business get more customers?',
    answer:
      'Yes, absolutely. Local SEO optimizes your Google Business Profile and local citations so that when customers in Bhubaneswar, Cuttack, or anywhere in Odisha search for nearby services, your business appears prominently in Google Maps and local 3-pack search results.',
    category: 'SEO',
  },
  {
    id: 'faq-8',
    question: 'Which is better for my business: SEO or Google Ads?',
    answer:
      'Both serve vital, complementary purposes. Google Ads delivers immediate traffic and rapid customer acquisition from day one, while SEO builds compounding organic equity, lowering your blended customer acquisition cost over time. Many growing businesses see the highest ROI by pairing both.',
    category: 'Marketing',
  },
  {
    id: 'faq-9',
    question: 'Do I need both a website and digital marketing for business growth?',
    answer:
      'Yes. Your website serves as your 24/7 digital flagship where credibility is established and conversions happen, while digital marketing acts as the growth engine driving high-intent visitors to that platform. Combining both creates a complete, sustainable growth funnel.',
    category: 'General',
  },
]
