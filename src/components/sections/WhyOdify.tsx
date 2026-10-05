import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Globe2,
  Share2,
  TrendingUp,
  Users,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { differentiators } from '@/data/site'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

export function WhyOdify() {
  const containerRef = useRef<HTMLElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !dashboardRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        dashboardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="growth"
      className="relative border-t border-line-soft py-14 sm:py-20 bg-ink-soft/30"
    >
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column: Differentiators & Let's Grow Together CTA */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Why Choose Us"
              heading="Let's Grow Together"
              subheading="We build digital products designed around your commercial milestones — carrying your business from initial concept to scalable market leadership."
            />

            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-2xs transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal-dim text-signal">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-bone">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-bone-dim">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4">
              <Button
                href="#contact"
                variant="primary"
                className="!px-7 !py-3.5 shadow-xs text-xs sm:text-sm"
                onClick={() => scrollToTarget('#contact')}
              >
                Let&apos;s Grow Together
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>

          {/* Right Column: Live Growth Analytics Dashboard Card */}
          <div
            ref={dashboardRef}
            className="relative rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-lg backdrop-blur-md"
          >
            {/* Top Dashboard Header */}
            <div className="flex items-center justify-between border-b border-line-soft pb-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-display text-xs font-bold uppercase tracking-wider text-bone">
                  Performance Growth Telemetry
                </span>
              </div>
              <span className="rounded-full border border-emerald-500/25 bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-800">
                +28% Growth This Month
              </span>
            </div>

            {/* Metric Counters Grid */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-line-soft bg-ink-soft/60 p-3.5 text-center">
                <div className="flex items-center justify-center text-bone-dim mb-1">
                  <Users size={15} />
                </div>
                <span className="font-display text-lg font-bold text-bone">124K+</span>
                <p className="text-[11px] text-bone-dim">Total Users</p>
              </div>

              <div className="rounded-2xl border border-line-soft bg-ink-soft/60 p-3.5 text-center">
                <div className="flex items-center justify-center text-emerald-600 mb-1">
                  <TrendingUp size={15} />
                </div>
                <span className="font-display text-lg font-bold text-emerald-600">+28%</span>
                <p className="text-[11px] text-bone-dim">Organic Traffic</p>
              </div>

              <div className="rounded-2xl border border-line-soft bg-ink-soft/60 p-3.5 text-center">
                <div className="flex items-center justify-center text-signal mb-1">
                  <BarChart2 size={15} />
                </div>
                <span className="font-display text-lg font-bold text-bone">4.8%</span>
                <p className="text-[11px] text-bone-dim">Conversion Rate</p>
              </div>
            </div>

            {/* Acquisition Channels Breakdown */}
            <div className="mt-6">
              <span className="font-display text-xs font-bold text-bone uppercase tracking-wider">
                Top Acquisition Channels
              </span>

              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-bone font-medium">
                    <span className="flex items-center gap-1.5">
                      <Globe2 size={13} className="text-emerald-500" />
                      Organic Search (Google &amp; Maps)
                    </span>
                    <span className="font-mono text-emerald-600 font-bold">58%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-soft">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: '58%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-bone font-medium">
                    <span className="flex items-center gap-1.5">
                      <Users size={13} className="text-blue-500" />
                      Direct Brand Inquiries
                    </span>
                    <span className="font-mono text-blue-600 font-bold">24%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-soft">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: '24%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-bone font-medium">
                    <span className="flex items-center gap-1.5">
                      <Share2 size={13} className="text-purple-500" />
                      Social Media &amp; Ads
                    </span>
                    <span className="font-mono text-purple-600 font-bold">14%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-soft">
                    <div className="h-full rounded-full bg-purple-500" style={{ width: '14%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-bone font-medium">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp size={13} className="text-amber-500" />
                      Referral Network
                    </span>
                    <span className="font-mono text-amber-600 font-bold">4%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-soft">
                    <div className="h-full rounded-full bg-amber-500" style={{ width: '4%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom status note */}
            <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-4 text-[11px] text-bone-dim">
              <span>Updated in real-time</span>
              <span className="font-semibold text-emerald-600">● 100% Core Web Vitals Pass</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
