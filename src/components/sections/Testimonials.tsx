import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials, testimonialsSectionData } from '@/data/testimonials'

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
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
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
    <section ref={containerRef} id="testimonials" className="relative py-14 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={testimonialsSectionData.eyebrow}
          heading={testimonialsSectionData.heading}
          subheading={testimonialsSectionData.subheading}
        />

        <div
          ref={cardsRef}
          className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  {item.metrics ? (
                    <span className="rounded-full border border-emerald-500/25 bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-800">
                      {item.metrics}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 font-display text-sm leading-relaxed text-bone italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-dim font-display text-xs font-bold text-signal">
                    {item.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-bone">
                      {item.author}
                    </h4>
                    <p className="text-xs text-bone-dim">
                      {item.role} · <span className="font-semibold text-bone">{item.company}</span>
                    </p>
                  </div>
                </div>
                {item.tag ? (
                  <span className="hidden md:inline-block rounded-md bg-ink-soft px-2.5 py-1 font-mono text-[10px] text-bone-dim">
                    {item.tag}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
