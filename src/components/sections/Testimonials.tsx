import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section ref={containerRef} className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Client Testimonials"
          heading="Trusted by technology leaders &amp; ambitious product teams"
          subheading="Here is how our engineering partnerships have accelerated launch timelines and revenue metrics."
        />

        <div
          ref={cardsRef}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-signal">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  {item.metrics ? (
                    <span className="rounded-full border border-signal/25 bg-signal-dim/60 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-signal-soft">
                      {item.metrics}
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 font-display text-sm leading-relaxed text-bone italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-line-soft pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-dim font-display text-xs font-bold text-signal-soft">
                  {item.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-bone">
                    {item.author}
                  </h4>
                  <p className="text-xs text-bone-dim">
                    {item.role}, <span className="font-medium text-bone">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
