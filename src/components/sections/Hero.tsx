import gsap from 'gsap'
import { ArrowRight, ArrowUpRight, Cpu, Terminal } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'

function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const floatOneRef = useRef<HTMLDivElement>(null)
  const floatTwoRef = useRef<HTMLDivElement>(null)
  const floatThreeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle continuous floating for decorative tech chips
      if (floatOneRef.current) {
        gsap.to(floatOneRef.current, {
          y: -10,
          x: 4,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (floatTwoRef.current) {
        gsap.to(floatTwoRef.current, {
          y: 12,
          x: -5,
          duration: 3.8,
          delay: 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (floatThreeRef.current) {
        gsap.to(floatThreeRef.current, {
          y: -8,
          duration: 2.9,
          delay: 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, visualRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={visualRef} className="hero-visual-container relative mx-auto aspect-square w-full max-w-[460px]">
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75" size={460} />

      {/* Main geometric SVG orbit architecture */}
      <svg viewBox="0 0 420 420" className="relative h-full w-full" aria-hidden="true">
        <circle
          cx="210"
          cy="210"
          r="165"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
          strokeDasharray="3 6"
          className="opacity-70"
        />
        <circle
          cx="210"
          cy="210"
          r="115"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
        />

        {/* Orbiting accent nodes */}
        <g className="origin-[210px_210px] animate-spin-slow">
          <circle cx="325" cy="210" r="7" fill="var(--color-signal)" />
          <circle cx="95" cy="210" r="5" fill="var(--color-bone)" fillOpacity="0.4" />
        </g>
        <g
          className="origin-[210px_210px]"
          style={{ animation: 'spin 34s linear infinite reverse' }}
        >
          <rect
            x="200"
            y="40"
            width="20"
            height="20"
            rx="5"
            fill="none"
            stroke="var(--color-signal)"
            strokeWidth="1.5"
          />
          <circle cx="210" cy="375" r="4" fill="var(--color-signal-soft)" />
        </g>

        {/* Central visual core card */}
        <rect
          x="150"
          y="150"
          width="120"
          height="120"
          rx="28"
          fill="var(--color-surface)"
          stroke="var(--color-line)"
          className="shadow-sm"
        />
        <path
          d="M185 210 L203 228 L238 190"
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Floating decorative tech element 1: Code status pill */}
      <div
        ref={floatOneRef}
        className="hero-float absolute -left-4 top-14 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-4 py-2.5 shadow-md backdrop-blur-md"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-signal-dim text-signal-soft">
          <Terminal size={14} />
        </span>
        <div className="flex flex-col">
          <span className="font-display text-[10px] uppercase tracking-wider text-bone-faint">Deployment</span>
          <span className="font-display text-xs font-semibold text-bone">Next.js • 99.9% Speed</span>
        </div>
      </div>

      {/* Floating decorative tech element 2: AI inference pill */}
      <div
        ref={floatTwoRef}
        className="hero-float absolute -right-2 top-28 flex items-center gap-2.5 rounded-2xl border border-signal/25 bg-surface/95 px-4 py-2.5 shadow-md backdrop-blur-md"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-signal text-[#0a0b0d]">
          <Cpu size={14} />
        </span>
        <div className="flex flex-col">
          <span className="font-display text-[10px] uppercase tracking-wider text-signal-soft">Intelligence</span>
          <span className="font-display text-xs font-semibold text-bone">Gemini & NVIDIA AI</span>
        </div>
      </div>

      {/* Floating decorative tech element 3: Metric badge */}
      <div
        ref={floatThreeRef}
        className="hero-float absolute bottom-8 left-12 flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-3.5 py-2 shadow-sm backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-signal" />
        <span className="font-display text-xs font-medium text-bone">Engineered for Scale</span>
      </div>
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const btnGroupRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const visualWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Initial state set
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          descRef.current,
          btnGroupRef.current ? btnGroupRef.current.children : [],
          statusRef.current,
          visualWrapperRef.current,
        ],
        { opacity: 0 }
      )

      // Step 2: Badge / eyebrow appears
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )

      // Step 3: Main heading reveals line-by-line
      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.14 },
        '-=0.35'
      )

      // Step 4: Description moves upward and fades in
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )

      // Step 5: CTA buttons appear with stagger
      if (btnGroupRef.current) {
        tl.fromTo(
          btnGroupRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          '-=0.4'
        )
      }

      // Step 5b: Status indicator
      tl.fromTo(
        statusRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )

      // Step 6: Main hero image/illustration fades in and scales from 0.9 to 1
      tl.fromTo(
        visualWrapperRef.current,
        { opacity: 0, scale: 0.9, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.85'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32"
    >
      <div className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          {/* 2. Small badge/eyebrow */}
          <div ref={badgeRef} className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal-dim/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-signal-soft shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Technology Agency & Product Lab
            </span>
          </div>

          {/* 3. Main heading reveals line-by-line */}
          <h1 className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-bone sm:text-6xl lg:text-[3.75rem]">
            <span ref={line1Ref} className="block">
              Engineering modern
            </span>
            <span ref={line2Ref} className="block">
              software &amp; scalable
            </span>
            <span ref={line3Ref} className="block text-bone">
              digital products
              <span className="font-accent italic font-normal text-signal-soft">.</span>
            </span>
          </h1>

          {/* 4. Description moves upward and fades in */}
          <p
            ref={descRef}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-bone-dim sm:text-lg"
          >
            We partner with ambitious startups and forward-thinking enterprises to design,
            develop, and automate high-performance web platforms, mobile apps, and custom AI systems.
          </p>

          {/* 5. CTA buttons appear with stagger */}
          <div ref={btnGroupRef} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">
              Start a Project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button href="#work" variant="secondary">
              Explore Our Work
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Availability status badge */}
          <div ref={statusRef} className="mt-11 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <span className="font-display text-xs font-medium text-bone-dim">
              Available for Q4 client builds &amp; architecture partnerships
            </span>
          </div>
        </div>

        {/* 6. Main hero illustration scales from 0.9 to 1 with floaters */}
        <div ref={visualWrapperRef} className="relative">
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
