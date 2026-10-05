import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Mail } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'
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
      // Content reveal on scroll
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

      // Subtle breathing animation on background orb
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          scale: 1.15,
          opacity: 0.85,
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
      className="relative overflow-hidden border-y border-line-soft bg-ink-soft py-28 sm:py-36"
    >
      {/* Subtle animated background grid & ambient glowing orb */}
      <div className="grid-field pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div ref={orbRef} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <GlowOrb size={640} />
      </div>

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <div ref={contentRef} className="flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-signal-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Start Your Next Build
          </span>

          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            Let's build it.
          </h2>

          <p className="max-w-xl text-balance text-base leading-relaxed text-bone-dim sm:text-lg">
            Tell us what you're building and we'll help turn your idea into a scalable digital product.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              className="!px-7 !py-4 text-base"
              onClick={() => scrollToTarget('#contact')}
            >
              Start a Project
              <ArrowRight size={17} />
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="!px-6 !py-4 text-base"
              onClick={() => scrollToTarget('#contact')}
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-bone-faint">
            <Mail size={13} className="text-signal-soft" />
            <span>Direct consultation with lead engineers within 24 hours</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
