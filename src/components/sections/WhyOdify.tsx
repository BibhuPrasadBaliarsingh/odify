import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { differentiators } from '@/data/site'

export function WhyOdify() {
  return (
    <section className="border-t border-line-soft py-24 sm:py-32">
      <Container>
        <SectionHeading heading="Why Odify?" />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="flex flex-col gap-4">
              <span
                aria-hidden="true"
                className="h-0.5 w-10 rounded-full bg-signal"
              />
              <h3 className="font-display text-lg font-medium text-bone">{item.title}</h3>
              <p className="text-sm leading-relaxed text-bone-dim">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
