import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ShieldCheck, Terminal, Users, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

const keyPoints = [
  {
    icon: ShieldCheck,
    title: 'Senior Engineering Only',
    desc: 'Zero outsourced handoffs. You work directly with principal developers and systems architects.',
  },
  {
    icon: Zap,
    title: 'High-Velocity Sprints',
    desc: 'Continuous delivery cycles with live staging environments and transparent weekly demos.',
  },
  {
    icon: Users,
    title: 'Long-Term Product Co-Ownership',
    desc: 'We support code quality, infrastructure scalability, and ongoing feature iterations after launch.',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const textColumnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      // 1. Image clip-path reveal & scale reveal
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { clipPath: 'inset(10% 0% 10% 0%)', scale: 0.94, opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: visualRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

      // 2. Text column staggered fade + upward movement
      if (textColumnRef.current) {
        const textElements = textColumnRef.current.children
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textColumnRef.current,
              start: 'top 82%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-line-soft bg-ink-soft py-24 sm:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        {/* Left: Large visual mockup with clip-path reveal */}
        <div
          ref={visualRef}
          className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-lg"
        >
          <GlowOrb className="right-0 top-0 opacity-60" size={300} />
          <div className="grid-field absolute inset-0 opacity-40" />

          {/* Abstract IDE & Architecture visual preview */}
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between border-b border-line-soft pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-signal-dim text-signal-soft">
                  <Terminal size={16} />
                </span>
                <span className="font-mono text-xs font-semibold text-bone">odify.config.ts</span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-600">
                Active Build
              </span>
            </div>

            {/* Simulated code snippet / architecture nodes */}
            <div className="my-auto space-y-2.5 font-mono text-[11px] text-bone-dim">
              <div className="flex items-center gap-2 text-signal-soft">
                <span>const</span>
                <span className="text-bone font-semibold">architecture</span>
                <span>=</span>
                <span>createSystem({`{`}</span>
              </div>
              <p className="pl-4 text-bone-faint">runtime: 'Next.js 15 App Router',</p>
              <p className="pl-4 text-bone-faint">database: 'Distributed MongoDB',</p>
              <p className="pl-4 text-bone-faint">aiInference: 'Gemini 2.5 Multi-Agent',</p>
              <p className="pl-4 text-bone-faint">latencyTarget: '&lt;45ms global SLA'</p>
              <div className="text-signal-soft">{`})`}</div>
            </div>

            <div className="rounded-2xl border border-signal/25 bg-signal-dim/50 p-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-semibold text-bone">
                  Sprint Delivery Rate
                </span>
                <span className="font-mono text-xs font-bold text-signal-soft">99.2%</span>
              </div>
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-bone/10 overflow-hidden">
                <div className="h-full w-[92%] rounded-full bg-signal" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Heading, Description, Key Points, CTA */}
        <div ref={textColumnRef} className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-signal-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Engineering Philosophy
          </span>

          <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] text-bone sm:text-4xl lg:text-[2.75rem]">
            We build digital momentum, not just static software.
          </h2>

          <p className="text-balance text-base leading-relaxed text-bone-dim">
            Odify operates as an embedded product engineering lab. We eliminate the gap
            between design systems and robust backend infrastructure, helping technology companies
            scale without technical debt.
          </p>

          {/* Key points with icons */}
          <div className="mt-2 flex flex-col gap-4">
            {keyPoints.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-line-soft bg-surface p-4 transition-colors hover:border-signal/30"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal-soft">
                    <Icon size={15} />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-bone">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-bone-dim">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              onClick={() => scrollToTarget('#contact')}
            >
              Partner With Us
              <ArrowRight size={16} />
            </Button>
            <span className="text-xs text-bone-faint font-medium">
              Direct access to technical leads
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
