import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/process'

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading heading="How we work" />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 hidden h-full w-px bg-line lg:block"
          />
          <ol className="flex flex-col gap-0 lg:gap-2">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.06}>
                <li className="grid gap-3 border-b border-line-soft py-7 lg:grid-cols-[2.5rem_5rem_1fr] lg:items-baseline lg:gap-6 lg:border-none">
                  <span
                    aria-hidden="true"
                    className="relative z-10 hidden h-2.5 w-2.5 -translate-x-[3px] rounded-full bg-signal lg:block"
                  />
                  <span className="font-display text-sm text-bone-faint">{step.index}</span>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                    <h3 className="font-display text-xl font-medium text-bone sm:w-40 sm:shrink-0">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-bone-dim">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
