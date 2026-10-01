import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !gridRef.current) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        )
      }
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Core Capabilities"
            heading="Engineering &amp; design services built for market leadership"
            subheading="From custom web platforms and cross-platform apps to bespoke AI workflows and systems architecture."
          />
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                onClick={() => scrollToTarget('#contact')}
                className="group relative flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-signal/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-bone-faint">
                      {service.index}
                    </span>
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-sm"
                      style={{
                        backgroundColor: service.accent.iconBg,
                        borderColor: service.accent.border,
                        color: service.accent.iconColor,
                      }}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-bone transition-colors group-hover:text-signal-soft">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="rounded-lg border border-line-soft bg-ink-soft px-2.5 py-1 text-[11px] font-medium text-bone-dim"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-line-soft pt-4">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-bone-faint transition-colors group-hover:text-bone">
                    Inquire Service
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-bone-dim transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-[#0a0b0d]">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
