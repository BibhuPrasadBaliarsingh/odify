import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { industries, industriesSectionData } from '@/data/industries'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

export function Industries() {
  const containerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !gridRef.current) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="industries"
      className="relative py-14 sm:py-20 bg-ink-soft/40 border-t border-line-soft"
    >
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={industriesSectionData.eyebrow}
            heading={industriesSectionData.heading}
            subheading={industriesSectionData.lead}
          />
          <div className="shrink-0">
            <Button
              href="#contact"
              variant="secondary"
              className="text-xs sm:text-sm"
              onClick={() => scrollToTarget('#contact')}
            >
              Discuss Your Industry
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div
          ref={gridRef}
          className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((ind) => {
            const Icon = ind.icon

            return (
              <div
                key={ind.id}
                onClick={() => scrollToTarget('#contact')}
                className="group flex flex-col justify-between rounded-3xl border border-line bg-surface p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: ind.bg,
                        color: ind.color,
                        borderColor: `${ind.color}30`,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-base font-bold text-bone transition-colors group-hover:text-signal">
                    {ind.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-semibold text-bone-dim/70 uppercase tracking-wider">
                    {ind.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-bone-dim">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1 border-t border-line-soft pt-4">
                  {ind.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-ink-soft px-2 py-0.5 font-mono text-[10px] text-bone-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
