import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Globe,
  Palette,
  Search,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

interface OrbitServiceItem {
  title: string
  line1: string
  line2: string
  icon: typeof Globe
  angleDeg: number
  borderColor: string
  iconBg: string
  iconColor: string
}

const ORBIT_SERVICES: OrbitServiceItem[] = [
  {
    title: 'Web Development',
    line1: 'Web',
    line2: 'Development',
    icon: Globe,
    angleDeg: -90, // Top
    borderColor: 'rgba(16, 185, 129, 0.35)',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
  },
  {
    title: 'Mobile App Development',
    line1: 'Mobile',
    line2: 'Apps',
    icon: Smartphone,
    angleDeg: -30, // Top-Right
    borderColor: 'rgba(59, 130, 246, 0.35)',
    iconBg: '#eff6ff',
    iconColor: '#2563eb',
  },
  {
    title: 'E-commerce Solutions',
    line1: 'E-commerce',
    line2: 'Stores',
    icon: Code2,
    angleDeg: 30, // Bottom-Right
    borderColor: 'rgba(245, 158, 11, 0.35)',
    iconBg: '#fffbeb',
    iconColor: '#d97706',
  },
  {
    title: 'Cloud & DevOps',
    line1: 'Cloud &',
    line2: 'DevOps',
    icon: Cloud,
    angleDeg: 90, // Bottom
    borderColor: 'rgba(139, 92, 246, 0.35)',
    iconBg: '#f5f3ff',
    iconColor: '#7c3aed',
  },
  {
    title: 'UI/UX Design',
    line1: 'UI/UX',
    line2: 'Design',
    icon: Palette,
    angleDeg: 150, // Bottom-Left
    borderColor: 'rgba(236, 72, 153, 0.35)',
    iconBg: '#fdf2f8',
    iconColor: '#db2777',
  },
  {
    title: 'Digital Marketing',
    line1: 'Digital',
    line2: 'Marketing',
    icon: TrendingUp,
    angleDeg: 210, // Top-Left
    borderColor: 'rgba(16, 185, 129, 0.35)',
    iconBg: '#ecfdf5',
    iconColor: '#10b981',
  },
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)
  const graphicColRef = useRef<HTMLDivElement>(null)

  // Text animation refs
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const narrativeRef = useRef<HTMLDivElement>(null)

  // Circular graphic animation refs
  const centerCircleRef = useRef<HTMLDivElement>(null)
  const orbitSvgRef = useRef<SVGSVGElement>(null)
  const orbitRotatorRef = useRef<HTMLDivElement>(null)
  const cardRotatorsRef = useRef<(HTMLDivElement | null)[]>([])

  // Continuous animation timeline holders
  const orbitTweenRef = useRef<gsap.core.Tween | null>(null)
  const cardsTweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const allTextElements = [
        badgeRef.current,
        headingRef.current,
        subheadRef.current,
        pillarsRef.current,
        narrativeRef.current,
      ].filter(Boolean) as HTMLElement[]

      const validCards = cardRotatorsRef.current.filter(Boolean) as HTMLDivElement[]

      if (prefersReducedMotion) {
        if (allTextElements.length) gsap.set(allTextElements, { opacity: 1, y: 0 })
        if (centerCircleRef.current) gsap.set(centerCircleRef.current, { opacity: 1, scale: 1 })
        if (orbitSvgRef.current) gsap.set(orbitSvgRef.current, { opacity: 1 })
        if (validCards.length) gsap.set(validCards, { opacity: 1, scale: 1 })
        return
      }

      if (allTextElements.length) gsap.set(allTextElements, { opacity: 0 })
      if (centerCircleRef.current) gsap.set(centerCircleRef.current, { opacity: 0, scale: 0.85 })
      if (orbitSvgRef.current) gsap.set(orbitSvgRef.current, { opacity: 0 })
      if (validCards.length) gsap.set(validCards, { opacity: 0, scale: 0.8 })

      const masterTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      })

      // Center Brand Logo
      if (centerCircleRef.current) {
        masterTl.to(centerCircleRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)',
        })
      }

      // Orbit path
      if (orbitSvgRef.current) {
        masterTl.to(
          orbitSvgRef.current,
          {
            opacity: 1,
            duration: 0.6,
          },
          '-=0.4'
        )
      }

      // Service Cards
      if (validCards.length) {
        masterTl.to(
          validCards,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'back.out(1.3)',
            onComplete: () => {
              startContinuousOrbit()
            },
          },
          '-=0.3'
        )
      }

      // Eyebrow badge
      if (badgeRef.current) {
        masterTl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.5'
        )
      }

      // Heading
      if (headingRef.current) {
        masterTl.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.35'
        )
      }

      // Subhead
      if (subheadRef.current) {
        masterTl.fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.45'
        )
      }

      // 3 Highlight Pills
      if (pillarsRef.current) {
        masterTl.fromTo(
          pillarsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
      }

      // Narrative card
      if (narrativeRef.current) {
        masterTl.fromTo(
          narrativeRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
      }

      function startContinuousOrbit() {
        if (!orbitRotatorRef.current) return

        orbitTweenRef.current = gsap.to(orbitRotatorRef.current, {
          rotation: 360,
          duration: 28,
          repeat: -1,
          ease: 'none',
        })

        if (validCards.length) {
          cardsTweenRef.current = gsap.to(validCards, {
            rotation: -360,
            duration: 28,
            repeat: -1,
            ease: 'none',
          })
        }
      }

      // Parallax on scroll
      if (graphicColRef.current && heroRef.current) {
        gsap.to(graphicColRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }
    }, heroRef)

    return () => {
      ctx.revert()
      orbitTweenRef.current?.kill()
      cardsTweenRef.current?.kill()
    }
  }, [])

  const handleGraphicMouseEnter = () => {
    orbitTweenRef.current?.pause()
    cardsTweenRef.current?.pause()
  }

  const handleGraphicMouseLeave = () => {
    orbitTweenRef.current?.resume()
    cardsTweenRef.current?.resume()
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16"
    >
      {/* Subtle modern architectural backdrop */}
      <div className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,black,transparent)]" />

      {/* Ambient gradient glow behind circular element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] lg:w-[620px] h-[340px] sm:h-[540px] lg:h-[620px] rounded-full blur-[90px] opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, rgba(245, 158, 11, 0.06) 40%, rgba(99, 102, 241, 0.05) 70%, transparent 85%)',
        }}
      />

      <Container className="relative flex flex-col gap-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        {/* ========================================================
            HERO TEXT COLUMN
            ======================================================== */}
        <div
          ref={textColRef}
          className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Eyebrow badge */}
          <div ref={badgeRef} className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal-dim/70 px-3.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-signal-soft shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              IT Services Company in Odisha, India
            </span>
          </div>

          {/* Main H1 Heading */}
          <h1
            ref={headingRef}
            className="mt-3.5 font-display text-[2.15rem] font-bold leading-[1.12] tracking-tight text-bone sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            We build websites that <span className="text-signal">work as hard</span> as you do.
          </h1>

          {/* Subtitle */}
          <p
            ref={subheadRef}
            className="mt-3.5 max-w-xl text-balance text-sm leading-relaxed text-bone-dim sm:text-base"
          >
            {site.subtagline}
          </p>

          {/* 3 Core Highlight Badges (Fast, Scalable, SEO) */}
          <div
            ref={pillarsRef}
            className="mt-5 grid w-full grid-cols-1 sm:grid-cols-3 gap-2.5 text-left"
          >
            <div className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3 shadow-2xs transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Zap size={16} />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-bone">Fast</h4>
                <p className="text-[11px] text-bone-dim">Optimized load times</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3 shadow-2xs transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <TrendingUp size={16} />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-bone">Scalable</h4>
                <p className="text-[11px] text-bone-dim">Built to grow with you</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3 shadow-2xs transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Search size={16} />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-bone">SEO</h4>
                <p className="text-[11px] text-bone-dim">Search-ready by design</p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Section Card */}
          <div
            ref={narrativeRef}
            className="mt-5 w-full rounded-2xl border border-line-soft bg-ink-soft/40 p-4 sm:p-5 text-left shadow-xs"
          >
            <p className="text-xs sm:text-sm leading-relaxed text-bone-dim">
              Your website is more than just an online presence, it&apos;s often the first impression customers have of your business. A well-designed website builds trust, enhances user experience, and helps turn visitors into customers.
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-bone-dim">
              As a Web Development Company in Bhubaneswar, we create websites and digital platforms designed around your business goals. Whether you need a corporate website, an e-commerce store, a custom web application, or a mobile-first solution, our focus is on building digital experiences that are fast, scalable, and easy to manage.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button
                href="#services"
                variant="primary"
                className="!px-5 !py-2.5 shadow-xs text-xs sm:text-sm"
                onClick={() => scrollToTarget('#services')}
              >
                Explore Services
                <ArrowRight size={14} />
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="!px-4 !py-2.5 text-xs sm:text-sm"
                onClick={() => scrollToTarget('#contact')}
              >
                Get a Quote
                <ArrowUpRight size={14} />
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================
            HERO CIRCULAR INTERACTIVE GRAPHIC COLUMN
            ======================================================== */}
        <div
          ref={graphicColRef}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          <div
            className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[440px] lg:h-[440px] select-none"
            onMouseEnter={handleGraphicMouseEnter}
            onMouseLeave={handleGraphicMouseLeave}
          >
            {/* SVG Orbit Path */}
            <svg
              ref={orbitSvgRef}
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 440 440"
            >
              <circle
                cx="220"
                cy="220"
                r="165"
                fill="none"
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <circle
                cx="220"
                cy="220"
                r="120"
                fill="none"
                stroke="rgba(0,0,0,0.04)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            </svg>

            {/* Rotating Orbit Container */}
            <div
              ref={orbitRotatorRef}
              className="absolute inset-0 h-full w-full"
              style={{ transformOrigin: '50% 50%' }}
            >
              {ORBIT_SERVICES.map((item, index) => {
                const Icon = item.icon
                const angleRad = (item.angleDeg * Math.PI) / 180
                const radiusPct = 37.5
                const xPct = 50 + radiusPct * Math.cos(angleRad)
                const yPct = 50 + radiusPct * Math.sin(angleRad)

                return (
                  <div
                    key={item.title}
                    ref={(el) => {
                      cardRotatorsRef.current[index] = el
                    }}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${xPct}%`,
                      top: `${yPct}%`,
                      transform: 'translate(-50%, -50%)',
                      transformOrigin: '50% 50%',
                    }}
                  >
                    <div
                      onClick={() => scrollToTarget('#services')}
                      className="group cursor-pointer transition-transform duration-200 hover:scale-110"
                      style={{ transformOrigin: '50% 50%' }}
                    >
                      <div
                        className="flex items-center gap-2 rounded-xl sm:rounded-2xl bg-white/95 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_4px_18px_rgba(0,0,0,0.06)] border backdrop-blur-xs transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)]"
                        style={{ borderColor: item.borderColor }}
                      >
                        <span
                          className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-110"
                          style={{
                            backgroundColor: item.iconBg,
                            color: item.iconColor,
                            borderColor: item.borderColor,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                        </span>

                        <div className="flex flex-col text-left leading-tight">
                          <span className="font-display text-[10px] sm:text-xs font-bold text-bone whitespace-nowrap">
                            {item.line1}
                          </span>
                          <span className="font-display text-[9px] sm:text-[11px] font-medium text-bone-dim whitespace-nowrap">
                            {item.line2}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stationary Center Badge */}
            <div
              ref={centerCircleRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border border-line-soft bg-white p-2 text-center shadow-[0_10px_35px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] select-none pointer-events-auto"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-full bg-signal/15 blur-md"
              />

              <div className="relative flex flex-col items-center justify-center">
                <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-bone text-white shadow-xs">
                  <span className="font-display text-base sm:text-lg font-black tracking-tight text-white">
                    O
                  </span>
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-signal ring-2 ring-white shadow-xs" />
                </div>

                <span className="mt-1 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-bone uppercase">
                  ODIFY
                </span>
                <span className="font-display text-[7px] sm:text-[8px] font-semibold tracking-wider text-signal-soft uppercase">
                  GROW · BUILD · SCALE
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
