import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'
import { site } from '@/data/site'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

export function CTA() {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

      if (orbRef.current) {
        gsap.to(orbRef.current, {
          scale: 1.15,
          opacity: 0.8,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-y border-line-soft bg-ink-soft py-14 sm:py-20"
    >
      <div className="grid-field pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div ref={orbRef} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <GlowOrb size={600} />
      </div>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <div ref={contentRef} className="flex flex-col items-center gap-4 sm:gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal-dim/60 px-3.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-signal-soft">
            <ShieldCheck size={14} className="text-signal" />
            Trusted by 200+ businesses across Odisha &amp; India
          </span>

          <h2 className="max-w-3xl text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-bone sm:text-4xl lg:text-5xl">
            Every successful business needs a <span className="text-signal">strong digital foundation</span>.
          </h2>

          <p className="max-w-2xl text-balance text-sm leading-relaxed text-bone-dim sm:text-base">
            Whether you need a high-performing website, improved Google rankings, stronger brand visibility, or a complete digital growth strategy, Odify can help. We work with businesses across India to deliver web development, digital marketing, and technology solutions that improve customer engagement and support long-term business growth.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              className="!px-7 !py-4 text-sm font-semibold shadow-md"
              onClick={() => scrollToTarget('#contact')}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </Button>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-2xl border border-line bg-surface px-6 py-3.5 font-display text-sm font-semibold text-bone transition-all duration-200 hover:border-signal/40 hover:text-signal"
            >
              <PhoneCall size={16} className="text-signal" />
              <span>{site.phone}</span>
            </a>
          </div>

          <p className="text-xs text-bone-faint">
            Direct scoping consultation with senior engineers · Response within 1 business day
          </p>
        </div>
      </Container>
    </section>
  )
}
