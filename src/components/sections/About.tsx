import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-line-soft py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-12">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-medium leading-[1.15] text-bone sm:text-4xl lg:text-[2.75rem]">
            We don't just build websites.
            <br />
            We build digital momentum.
          </h2>
          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-bone-dim">
            <p>
              Odify was founded on a simple belief: digital work should earn its place, not just
              occupy space. We operate as an extension of your team — combining strategy,
              design and engineering into one connected process instead of handing off pieces
              along the way.
            </p>
            <p>
              Every engagement starts with the same question: what does this business actually
              need to grow? From there, we build the strategy, identity, product and systems
              that support that answer — and stay close to the results once it's live.
            </p>
            <p>
              We measure our work by the outcomes it creates for the businesses we partner
              with, not by the awards it might collect along the way.
            </p>
          </div>
          <div className="mt-10">
            <Button href="#contact" variant="secondary">
              More About Odify
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl border border-line bg-surface">
            <GlowOrb className="right-0 top-0" size={260} />
            <div className="grid-field absolute inset-0 opacity-60" />
            <div className="absolute inset-10 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="h-14 w-14 rounded-2xl border border-line-soft bg-ink/60" />
                <div className="h-8 w-8 rounded-full border border-line-soft bg-ink/60" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-3 w-3/4 rounded-full bg-bone/10" />
                <div className="h-3 w-1/2 rounded-full bg-bone/10" />
                <div className="mt-4 h-24 w-full rounded-2xl border border-signal-soft/40 bg-signal-dim/40" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
