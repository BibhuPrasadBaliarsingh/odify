import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { FAQ } from '@/components/sections/FAQ'
import { Hero } from '@/components/sections/Hero'
import { Industries } from '@/components/sections/Industries'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { Statistics } from '@/components/sections/Statistics'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyOdify } from '@/components/sections/WhyOdify'
import { Work } from '@/components/sections/Work'

export function Home() {
  return (
    <>
      {/* 1. Hero Section (Headline, Subheadline, Fast/Scalable/SEO Pills, Narrative card & Orbit) */}
      <Hero />

      {/* 2. Statistics Section (150+ Projects, 15+ Industries, 98% Satisfaction, 5+ Years) */}
      <Statistics />

      {/* 3. Solutions / Services Section (9 services grid + Get a Quote) */}
      <Services />

      {/* 4. Process Section (5 deliberate stages: Discover, Plan, Build, Optimize, Grow) */}
      <Process />

      {/* 5. Recent Projects / Work (Infinity Space, Blue Edge Trade, JC Enterprises, WWE Tattoo Studio) */}
      <Work />

      {/* 6. Industries We Serve (Healthcare, Education, Real Estate, E-Commerce, Mining, SaaS, etc.) */}
      <Industries />

      {/* 7. What Our Clients Say About Us (Client Testimonials) */}
      <Testimonials />

      {/* 8. Let's Grow Together / Why Choose Us + Live Growth Analytics Telemetry */}
      <WhyOdify />

      {/* 9. CTA Banner (Every successful business needs a strong digital foundation... Talk to Our Experts) */}
      <CTA />

      {/* 10. Frequently Asked Questions (9 interactive accordion FAQs) */}
      <FAQ />

      {/* 11. Contact Section & Newsletter Subscription */}
      <Contact />
    </>
  )
}
