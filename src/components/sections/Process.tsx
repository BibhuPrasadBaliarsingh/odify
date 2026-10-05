import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSectionData, processSteps } from '@/data/process'

gsap.registerPlugin(ScrollTrigger)

export function Process() {
  const containerRef = useRef<HTMLElement>(null)
  const stepsListRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !stepsListRef.current) return

    const ctx = gsap.context(() => {
      const items = stepsListRef.current?.children
      if (items) {
        Array.from(items).forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -25 },
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse',
              },
            }
          )
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="process" className="relative py-14 sm:py-20 bg-ink-soft/30 border-y border-line-soft">
      <Container>
        <SectionHeading
          eyebrow={processSectionData.eyebrow}
          heading={processSectionData.heading}
          subheading={processSectionData.subheading}
        />

        <div className="relative mt-10 sm:mt-12">
          {/* Vertical progress track */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 hidden h-full w-px bg-line lg:block"
          />

          <ol ref={stepsListRef} className="flex flex-col gap-3">
            {processSteps.map((step) => (
              <li
                key={step.index}
                className="group relative rounded-2xl border border-line-soft bg-surface p-6 transition-all duration-300 hover:border-signal/40 hover:shadow-xs lg:grid lg:grid-cols-[2.5rem_8rem_1fr] lg:items-center lg:gap-8 lg:border-none lg:bg-transparent lg:p-0 lg:py-6"
              >
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className="relative z-10 hidden h-3.5 w-3.5 -translate-x-[5px] rounded-full border-2 border-white bg-signal shadow-xs transition-transform duration-300 group-hover:scale-125 lg:block"
                />

                {/* Index & Title */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-signal">
                    {step.index}
                  </span>
                  <h3 className="font-display text-xl font-bold text-bone transition-colors group-hover:text-signal">
                    {step.title}
                  </h3>
                </div>

                {/* Description & Details */}
                <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 lg:mt-0">
                  <p className="text-sm font-medium leading-relaxed text-bone-dim sm:max-w-md">
                    {step.description}
                  </p>
                  <span className="font-mono text-xs text-bone-faint hidden md:inline-block">
                    {step.details}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
