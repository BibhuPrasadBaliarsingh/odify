import { useState } from 'react'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { FAQ } from '@/components/sections/FAQ'
import { Hero } from '@/components/sections/Hero'
import { Pricing } from '@/components/sections/Pricing'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { Statement } from '@/components/sections/Statement'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustBar } from '@/components/sections/TrustBar'
import { WhyOdify } from '@/components/sections/WhyOdify'
import { Work } from '@/components/sections/Work'

export function Home() {
  const [selectedProjectType, setSelectedProjectType] = useState<string | undefined>(undefined)

  const handleSelectProjectType = (type: string) => {
    setSelectedProjectType(type)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Stats />
      <Statement />
      <Work onSelectProjectType={handleSelectProjectType} />
      <WhyOdify />
      <Process />
      <Pricing onSelectProjectType={handleSelectProjectType} />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Contact selectedProjectType={selectedProjectType} />
    </>
  )
}
