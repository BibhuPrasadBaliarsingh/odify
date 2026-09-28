import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/data/site'

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-line-soft py-28 sm:py-36">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={620} />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] text-bone sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            Let's make it real.
          </h2>
          <p className="max-w-md text-balance text-lg leading-relaxed text-bone-dim">
            Tell us what you're building, where you're stuck, or where you want to go next.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center gap-5 sm:flex-row">
          <Button href="#contact">
            Start a Conversation
            <ArrowRight size={16} />
          </Button>
          <a
            href={`mailto:${site.email}`}
            className="font-display text-sm text-bone-dim underline decoration-line underline-offset-4 transition-colors hover:text-bone"
          >
            {site.email}
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
