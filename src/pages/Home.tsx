import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { Statement } from '@/components/sections/Statement'
import { Statistics } from '@/components/sections/Statistics'
import { Technologies } from '@/components/sections/Technologies'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustBar } from '@/components/sections/TrustBar'
import { WhyOdify } from '@/components/sections/WhyOdify'
import { Work } from '@/components/sections/Work'

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Technologies />
      <Statement />
      <Work />
      <Statistics />
      <WhyOdify />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
