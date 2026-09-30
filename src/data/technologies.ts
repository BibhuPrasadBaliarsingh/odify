export interface TechnologyCategory {
  id: string
  name: string
  description: string
  items: {
    name: string
    role: string
    badge?: string
  }[]
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Modern, performant client-side frameworks for high-fidelity interactive user experiences.',
    items: [
      { name: 'React', role: 'UI Component Architecture', badge: 'Core' },
      { name: 'Next.js', role: 'Full-Stack SSR & Static Edge', badge: 'Popular' },
      { name: 'JavaScript', role: 'Modern ESNext & TypeScript', badge: 'Type-Safe' },
      { name: 'HTML', role: 'Semantic & Accessible Structure' },
      { name: 'CSS', role: 'Custom Animation & Design Tokens' },
      { name: 'Tailwind', role: 'Utility-First Styling System', badge: 'v4' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Scalable server-side architectures, API layers, and distributed database systems.',
    items: [
      { name: 'Node.js', role: 'High-Throughput Asynchronous Runtime', badge: 'Core' },
      { name: 'Express', role: 'RESTful & Microservices Framework' },
      { name: 'MongoDB', role: 'Document Database & Aggregations', badge: 'NoSQL' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    description: 'Native-feel iOS and Android applications with unified multi-platform codebases.',
    items: [
      { name: 'React Native', role: 'Cross-Platform Native Apps', badge: 'iOS & Android' },
      { name: 'Expo', role: 'Rapid Mobile Deployment & OTA Updates', badge: 'Ecosystem' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    description: 'Containerized infrastructure, media CDN distribution, and real-time backend services.',
    items: [
      { name: 'Docker', role: 'Containerization & Microservices', badge: 'DevOps' },
      { name: 'Firebase', role: 'Real-time Datastore & Auth Sync' },
      { name: 'Cloudinary', role: 'Optimized Media Delivery & CDN' },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'Next-generation artificial intelligence models, semantic search, and machine learning pipelines.',
    items: [
      { name: 'Gemini', role: 'Multimodal LLM Reasoning & Vision', badge: 'Next-Gen' },
      { name: 'NVIDIA AI APIs', role: 'Accelerated Model Inference & Compute', badge: 'Enterprise' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing & Analytics',
    description: 'Data analytics, conversion tracking, SEO infrastructure, and automated advertising pipelines.',
    items: [
      { name: 'Google Analytics 4', role: 'Event Telemetry & Funnel Tracking', badge: 'Analytics' },
      { name: 'Google Search Console', role: 'Technical SEO & Indexing Health', badge: 'SEO' },
      { name: 'Meta Ads & Pixel', role: 'Targeted Multi-Channel Acquisition', badge: 'Paid' },
      { name: 'PostHog', role: 'Product Analytics & Session Replay', badge: 'CRO' },
    ],
  },
]
