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
            const isFeatured = service.index === '07'

            if (isFeatured) {
              return (
                <article
                  key={service.title}
                  onClick={() => scrollToTarget('#contact')}
                  className="group relative flex cursor-pointer flex-col justify-between rounded-3xl border border-signal/35 bg-gradient-to-br from-surface via-surface to-signal-dim/30 p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-signal hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-10"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold tracking-wider text-signal-soft">
                        {service.index}
                      </span>
                      <span className="rounded-full border border-signal/30 bg-signal-dim/80 px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wider text-signal-soft">
                        Growth &amp; Revenue Acceleration
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-signal/30 bg-signal text-[#0a0b0d] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-bone transition-colors group-hover:text-signal-soft">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-bone-dim">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="rounded-lg border border-signal/25 bg-surface px-3 py-1 font-display text-xs font-medium text-bone shadow-2xs"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-4 lg:mt-0 lg:flex-col lg:items-end lg:justify-center lg:border-none lg:pt-0">
                    <div className="hidden lg:flex flex-col items-end mb-4">
                      <span className="font-mono text-xs font-bold text-signal-soft">+180% Avg Lift</span>
                      <span className="text-[11px] text-bone-faint">Inbound Pipeline &amp; ROI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-semibold uppercase tracking-wider text-bone group-hover:text-signal-soft">
                        Scale Your Reach
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal text-[#0a0b0d] shadow-xs transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              )
            }

            return (
              <article
                key={service.title}
                onClick={() => scrollToTarget('#contact')}
                className="group relative flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-line bg-surface p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-signal/40 hover:shadow-[0_16px_36px_rgba(245,158,11,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-bone-faint">
                      {service.index}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-signal/25 bg-signal-dim/60 text-signal-soft transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-signal group-hover:text-[#0a0b0d] group-hover:shadow-sm">
                      <Icon size={20} strokeWidth={1.8} />
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
                    Inquire Capability
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
