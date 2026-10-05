import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
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
            duration: 0.8,
            stagger: 0.15,
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
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="We Are Capable Of"
            heading="Digital Growth & Technology"
            subheading="A digital growth and technology agency helping businesses acquire customers, build better digital experiences, and automate their operations."
          />

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 font-display text-xs font-semibold text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
              <strong className="text-emerald-950 font-bold">GROW</strong> — Marketing &amp; Advertising
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1.5 font-display text-xs font-semibold text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
              <strong className="text-amber-950 font-bold">BUILD</strong> — Websites &amp; Applications
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1.5 font-display text-xs font-semibold text-indigo-800">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-700" />
              <strong className="text-indigo-950 font-bold">SCALE</strong> — Technology &amp; Automation
            </span>
          </div>
        </div>

        {/* 3 Core Division Cards Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid gap-8 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                onClick={() => scrollToTarget('#contact')}
                className="group relative flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-signal/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)]"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold tracking-wider text-bone-dim/70">
                        {service.number}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-xs font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: service.accent.badgeBg,
                          color: service.accent.badgeColor,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: service.accent.badgeColor }}
                        />
                        {service.verb}
                      </span>
                    </div>

                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-sm"
                      style={{
                        backgroundColor: service.accent.iconBg,
                        borderColor: service.accent.border,
                        color: service.accent.iconColor,
                      }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </span>
                  </div>

                  {/* Division Title & Subtitle */}
                  <div className="mt-7">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-bone transition-colors group-hover:text-signal-soft">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wider text-signal-soft">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-bone-dim">
                    {service.description}
                  </p>

                  {/* Sub-services List */}
                  <div className="mt-8 border-t border-line-soft pt-6">
                    <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-faint">
                      Capabilities &amp; Deliverables
                    </span>
                    <ul className="mt-3.5 flex flex-col gap-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm font-medium text-bone/90 transition-colors group-hover:text-bone"
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 transition-transform group-hover:scale-110"
                            style={{ color: service.accent.iconColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="mt-9 flex items-center justify-between border-t border-line-soft pt-5">
                  <div className="flex flex-col">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-bone group-hover:text-signal-soft transition-colors">
                      Inquire {service.verb}
                    </span>
                    <span className="font-display text-[11px] text-bone-faint">
                      {service.verbLabel}
                    </span>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-bone-dim transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-[#0a0b0d] group-hover:translate-x-0.5">
                    <ArrowUpRight size={15} />
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
