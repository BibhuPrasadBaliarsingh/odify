import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Layers,
  Palette,
  Smartphone,
  TrendingUp,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

interface OrbitServiceItem {
  title: string
  line1: string
  line2: string
  icon: typeof Code2
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
    icon: Code2,
    angleDeg: -90, // Top
    borderColor: 'rgba(244, 63, 94, 0.32)',
    iconBg: '#fff1f2',
    iconColor: '#e11d48',
  },
  {
    title: 'Mobile Apps',
    line1: 'Mobile',
    line2: 'Apps',
    icon: Smartphone,
    angleDeg: -30, // Top-Right
    borderColor: 'rgba(14, 165, 233, 0.32)',
    iconBg: '#f0f9ff',
    iconColor: '#0284c7',
  },
  {
    title: 'Cloud & DevOps',
    line1: 'Cloud &',
    line2: 'DevOps',
    icon: Cloud,
    angleDeg: 30, // Bottom-Right
    borderColor: 'rgba(59, 130, 246, 0.32)',
    iconBg: '#eff6ff',
    iconColor: '#2563eb',
  },
  {
    title: 'Software Development',
    line1: 'Software',
    line2: 'Development',
    icon: Layers,
    angleDeg: 90, // Bottom
    borderColor: 'rgba(139, 92, 246, 0.32)',
    iconBg: '#f5f3ff',
    iconColor: '#7c3aed',
  },
  {
    title: 'UI/UX Design',
    line1: 'UI/UX',
    line2: 'Design',
    icon: Palette,
    angleDeg: 150, // Bottom-Left
    borderColor: 'rgba(236, 72, 153, 0.32)',
    iconBg: '#fdf2f8',
    iconColor: '#db2777',
  },
  {
    title: 'Digital Marketing',
    line1: 'Digital',
    line2: 'Marketing',
    icon: TrendingUp,
    angleDeg: 210, // Top-Left
    borderColor: 'rgba(34, 197, 94, 0.32)',
    iconBg: '#f0fdf4',
    iconColor: '#16a34a',
  },
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)
  const graphicColRef = useRef<HTMLDivElement>(null)

  // Text animation refs
  const badgeRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const btnGroupRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

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
      // 1. Initial State Setup
      const allTextElements = [
        badgeRef.current,
        line1Ref.current,
        line2Ref.current,
        line3Ref.current,
        descRef.current,
        btnGroupRef.current ? btnGroupRef.current.children : [],
        statusRef.current,
      ]

      if (prefersReducedMotion) {
        gsap.set(allTextElements, { opacity: 1, y: 0 })
        gsap.set(centerCircleRef.current, { opacity: 1, scale: 1 })
        gsap.set(orbitSvgRef.current, { opacity: 1 })
        gsap.set(cardRotatorsRef.current, { opacity: 1, scale: 1 })
        return
      }

      gsap.set(allTextElements, { opacity: 0 })
      gsap.set(centerCircleRef.current, { opacity: 0, scale: 0.85 })
      gsap.set(orbitSvgRef.current, { opacity: 0 })
      gsap.set(cardRotatorsRef.current, { opacity: 0, scale: 0.8 })

      // 2. Master Page Load Timeline
      const masterTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      })

      // Step A: Center Stationary Brand Logo fades in & scales 0.85 -> 1
      masterTl.to(centerCircleRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.85,
        ease: 'back.out(1.2)',
      })

      // Step B: Circular dashed orbit path fades in
      masterTl.to(
        orbitSvgRef.current,
        {
          opacity: 1,
          duration: 0.7,
        },
        '-=0.45'
      )

      // Step C: 6 Service Cards appear one-by-one around the orbit
      masterTl.to(
        cardRotatorsRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          onComplete: () => {
            // Step D: Start continuous slow orbit rotation after entrance finishes
            startContinuousOrbit()
          },
        },
        '-=0.35'
      )

      // Step E: Eyebrow badge reveals
      masterTl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.55'
      )

      // Step F: Main H1 heading reveals line-by-line with stagger
      masterTl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.35'
      )

      // Step G: Description paragraph reveals
      masterTl.fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.75 },
        '-=0.45'
      )

      // Step H: CTA buttons reveal
      if (btnGroupRef.current) {
        masterTl.fromTo(
          btnGroupRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
      }

      // Step I: Availability status badge
      masterTl.fromTo(
        statusRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )

      // 3. Continuous Orbit Animation function
      function startContinuousOrbit() {
        if (!orbitRotatorRef.current) return

        // Outer circular group rotates 360 degrees around center
        orbitTweenRef.current = gsap.to(orbitRotatorRef.current, {
          rotation: 360,
          duration: 24,
          repeat: -1,
          ease: 'none',
        })

        // Each individual service card counter-rotates by -360 degrees
        // to maintain an upright, level horizontal orientation
        cardsTweenRef.current = gsap.to(cardRotatorsRef.current, {
          rotation: -360,
          duration: 24,
          repeat: -1,
          ease: 'none',
        })
      }

      // 4. Subtle Parallax on Scroll (ScrollTrigger)
      if (graphicColRef.current && heroRef.current) {
        gsap.to(graphicColRef.current, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      }

      if (textColRef.current && heroRef.current) {
        gsap.to(textColRef.current, {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
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

  // Interactive hover handlers: pause rotation on hover so user can easily read and click
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
      className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Clean minimal background: subtle architectural grid backdrop */}
      <div className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,black,transparent)]" />

      {/* Subtle soft pastel radial gradients behind the circular graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] lg:w-[620px] h-[340px] sm:h-[540px] lg:h-[620px] rounded-full blur-[80px] sm:blur-[110px] opacity-65"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, rgba(139, 92, 246, 0.06) 35%, rgba(14, 165, 233, 0.05) 60%, transparent 75%)',
        }}
      />

      <Container className="relative flex flex-col gap-10 sm:gap-14 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        {/* ========================================================
            HERO TEXT COLUMN
            On mobile: order-2 (appears below the circular graphic)
            On desktop: order-1 (left column)
            ======================================================== */}
        <div
          ref={textColRef}
          className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Eyebrow badge */}
          <div ref={badgeRef} className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal-dim/70 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-signal-soft shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Digital Agency &amp; Product Lab
            </span>
          </div>

          {/* Main H1 Heading — Line-by-line reveal */}
          <h1 className="mt-5 sm:mt-6 font-display text-[2.35rem] font-bold leading-[1.1] tracking-tight text-bone sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
            <span ref={line1Ref} className="block">
              Building Digital
            </span>
            <span ref={line2Ref} className="block">
              Products That Help
            </span>
            <span ref={line3Ref} className="block text-bone">
              Businesses Grow
              <span className="font-accent italic font-normal text-signal">.</span>
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p
            ref={descRef}
            className="mt-5 sm:mt-6 max-w-xl text-balance text-base leading-relaxed text-bone-dim sm:text-lg"
          >
            We build modern digital solutions that help ambitious businesses transform ideas into
            scalable products, elevate customer experiences, and achieve sustainable online growth.
          </p>

          {/* CTA Buttons */}
          <div
            ref={btnGroupRef}
            className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Button
              href="#contact"
              variant="primary"
              className="!px-7 !py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
              onClick={() => scrollToTarget('#contact')}
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              href="#work"
              variant="secondary"
              className="!px-6 !py-3.5"
              onClick={() => scrollToTarget('#work')}
            >
              Explore Our Work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </div>

          {/* Status Indicator */}
          <div
            ref={statusRef}
            className="mt-8 sm:mt-9 flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <span className="font-display text-xs font-medium text-bone-dim">
              Available for Q4 client builds &amp; architecture partnerships
            </span>
          </div>
        </div>

        {/* ========================================================
            CIRCULAR SERVICES GRAPHIC
            On mobile: order-1 (appears first below navbar)
            On desktop: order-2 (right column)
            ======================================================== */}
        <div
          ref={graphicColRef}
          className="order-1 lg:order-2 flex items-center justify-center w-full"
        >
          <div
            onMouseEnter={handleGraphicMouseEnter}
            onMouseLeave={handleGraphicMouseLeave}
            className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[500px] select-none"
            aria-label="Odify core services interactive rotating orbit"
          >
            {/* Extremely subtle soft pastel radial gradients directly behind the orbit */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[360px] lg:w-[420px] h-[260px] sm:h-[360px] lg:h-[420px] rounded-full blur-[50px] sm:blur-[70px] opacity-70"
              style={{
                background:
                  'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, rgba(244, 63, 94, 0.06) 65%, transparent 80%)',
              }}
            />

            {/* Stationary Circular Dotted/Dashed Orbit Path (SVG) */}
            <svg
              ref={orbitSvgRef}
              viewBox="0 0 440 440"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbitPastelStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                  <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.32" />
                </linearGradient>
              </defs>

              {/* Outer faint guiding circle */}
              <circle
                cx="220"
                cy="220"
                r="150"
                fill="none"
                stroke="url(#orbitPastelStroke)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />

              {/* Inner decorative light orbit track */}
              <circle
                cx="220"
                cy="220"
                r="95"
                fill="none"
                stroke="rgba(10, 11, 13, 0.06)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            </svg>

            {/* ====================================================
                ROTATING SERVICES GROUP (Continuously rotates 360°)
                ==================================================== */}
            <div
              ref={orbitRotatorRef}
              className="absolute inset-0 h-full w-full"
              style={{ transformOrigin: '50% 50%' }}
            >
              {ORBIT_SERVICES.map((item, index) => {
                const Icon = item.icon
                // Calculate position along circular orbit of radius R = 34.5%
                const rad = (item.angleDeg * Math.PI) / 180
                const radiusPercent = 34.5
                const leftPercent = 50 + radiusPercent * Math.cos(rad)
                const topPercent = 50 + radiusPercent * Math.sin(rad)

                return (
                  <div
                    key={item.title}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                    }}
                  >
                    {/* Individual Service Card (Counter-rotates -360° to remain upright) */}
                    <div
                      ref={(el) => {
                        cardRotatorsRef.current[index] = el
                      }}
                      onClick={() => scrollToTarget('#services')}
                      className="service-card group cursor-pointer transition-transform duration-200 hover:scale-108"
                      style={{ transformOrigin: '50% 50%' }}
                    >
                      <div
                        className="flex items-center gap-1.5 sm:gap-2.5 rounded-xl sm:rounded-2xl bg-white/95 px-2 py-1.5 sm:px-3 sm:py-2 shadow-[0_4px_18px_rgba(0,0,0,0.05)] border backdrop-blur-xs transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                        style={{ borderColor: item.borderColor }}
                      >
                        {/* Icon Box */}
                        <span
                          className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-110"
                          style={{
                            backgroundColor: item.iconBg,
                            color: item.iconColor,
                            borderColor: item.borderColor,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.9} />
                        </span>

                        {/* Service Title (two lines for optimal compactness) */}
                        <div className="flex flex-col text-left leading-tight">
                          <span className="font-display text-[10px] sm:text-xs font-semibold text-bone whitespace-nowrap">
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

            {/* ====================================================
                CENTER STATIONARY LOGO BADGE (Does NOT rotate)
                ==================================================== */}
            <div
              ref={centerCircleRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-20 w-20 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border border-line-soft bg-white p-2 text-center shadow-[0_10px_35px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] select-none pointer-events-auto"
            >
              {/* Very subtle ambient pulse glow behind badge */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-full bg-signal/15 blur-md"
              />

              <div className="relative flex flex-col items-center justify-center">
                {/* Odify geometric monogram badge */}
                <div className="relative flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-bone text-white shadow-xs">
                  <span className="font-display text-base sm:text-xl font-black tracking-tight text-white">
                    O
                  </span>
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-signal ring-2 ring-white shadow-xs" />
                </div>

                {/* Company Name */}
                <span className="mt-1 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-bone uppercase">
                  ODIFY
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
