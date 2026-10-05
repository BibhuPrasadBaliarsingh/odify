import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services, servicesSectionData } from '@/data/services'
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
          { opacity: 0, y: 40 },
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
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="relative py-14 sm:py-20">
      <Container>
        {/* Section Header with Get a Quote CTA */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={servicesSectionData.eyebrow}
            heading={servicesSectionData.heading}
            subheading={servicesSectionData.subheading}
          />
          <div className="shrink-0 pt-2 md:pt-0">
            <Button
              href="#contact"
              variant="primary"
              className="!px-5 !py-2.5 shadow-xs text-xs sm:text-sm"
              onClick={() => scrollToTarget('#contact')}
            >
              {servicesSectionData.ctaText}
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div
          ref={gridRef}
          className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                onClick={() => scrollToTarget('#contact')}
                className="group relative flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-signal/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-wider text-bone-dim/60">
                      {service.number}
                    </span>
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: service.accent.iconBg,
                        color: service.accent.iconColor,
                        borderColor: service.accent.border,
                      }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-bold tracking-tight text-bone transition-colors group-hover:text-signal-soft">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-bone-dim/80">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-bone-dim">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-5 space-y-2 border-t border-line-soft pt-4">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-bone-dim">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-4">
                  <span className="font-display text-xs font-semibold text-bone transition-colors group-hover:text-signal">
                    Explore Service
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-signal-dim text-signal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
