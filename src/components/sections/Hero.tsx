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
    <div
      ref={visualRef}
      className="hero-visual-container relative mx-auto aspect-square w-full max-w-[460px]"
    >
      {/* Radiant sunset gradient aura from #ff3131 to #ff914d filling the space */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full blur-[70px] sm:blur-[100px] opacity-85"
        style={{
          background:
            'radial-gradient(circle at 45% 45%, rgba(255, 49, 49, 0.42) 0%, rgba(255, 145, 77, 0.32) 42%, rgba(255, 145, 77, 0) 72%)',
        }}
      />
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" size={480} />

      {/* Main geometric SVG orbit architecture */}
      <svg viewBox="0 0 420 420" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="heroSunsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3131" />
            <stop offset="100%" stopColor="#ff914d" />
          </linearGradient>
          <linearGradient id="heroSunsetFaint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3131" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff914d" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Soft glowing ambient circle behind the orbits filling the empty space */}
        <circle
          cx="210"
          cy="210"
          r="165"
          fill="url(#heroSunsetGradient)"
          fillOpacity="0.05"
        />
        <circle
          cx="210"
          cy="210"
          r="115"
          fill="url(#heroSunsetGradient)"
          fillOpacity="0.09"
        />

        {/* Orbit paths with gradient stroke */}
        <circle
          cx="210"
          cy="210"
          r="165"
          fill="none"
          stroke="url(#heroSunsetGradient)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          strokeOpacity="0.4"
        />
        <circle
          cx="210"
          cy="210"
          r="115"
          fill="none"
          stroke="url(#heroSunsetGradient)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Orbiting accent nodes */}
        <g className="origin-[210px_210px] animate-spin-slow">
          <circle cx="325" cy="210" r="7.5" fill="#ff3131" />
          <circle cx="95" cy="210" r="5" fill="#ff914d" />
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
            rx="6"
            fill="none"
            stroke="url(#heroSunsetGradient)"
            strokeWidth="1.8"
          />
          <circle cx="210" cy="375" r="5" fill="#ff914d" />
        </g>

        {/* Central visual core card with vibrant #ff3131 to #ff914d gradient */}
        <rect
          x="146"
          y="146"
          width="128"
          height="128"
          rx="32"
          fill="url(#heroSunsetGradient)"
          className="shadow-[0_12px_32px_rgba(255,49,49,0.35)]"
        />
        <path
          d="M184 210 L203 229 L238 191"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Floating decorative tech element 1: Code status pill */}
      <div
        ref={floatOneRef}
        className="hero-float absolute -left-2 sm:-left-4 top-10 sm:top-14 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/95 px-3.5 py-2.5 sm:px-4 shadow-md backdrop-blur-md"
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-xs"
          style={{ background: 'linear-gradient(135deg, #ff3131, #ff914d)' }}
        >
          <Terminal size={14} />
        </span>
        <div className="flex flex-col">
          <span className="font-display text-[10px] uppercase tracking-wider text-bone-faint font-medium">Deployment</span>
          <span className="font-display text-xs font-semibold text-bone">Next.js • 99.9% Speed</span>
        </div>
      </div>

      {/* Floating decorative tech element 2: AI inference pill */}
      <div
        ref={floatTwoRef}
        className="hero-float absolute -right-2 top-24 sm:top-28 flex items-center gap-2.5 rounded-2xl border border-[#ff914d]/30 bg-surface/95 px-3.5 py-2.5 sm:px-4 shadow-md backdrop-blur-md"
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-xs"
          style={{ background: 'linear-gradient(135deg, #ff3131, #ff914d)' }}
        >
          <Cpu size={14} />
        </span>
        <div className="flex flex-col">
          <span className="font-display text-[10px] uppercase tracking-wider text-[#ff3131] font-semibold">Intelligence</span>
          <span className="font-display text-xs font-semibold text-bone">Gemini &amp; NVIDIA AI</span>
        </div>
      </div>

      {/* Floating decorative tech element 3: Metric badge */}
      <div
        ref={floatThreeRef}
        className="hero-float absolute bottom-6 sm:bottom-8 left-8 sm:left-12 flex items-center gap-2 rounded-xl border border-line bg-surface/95 px-3.5 py-2 shadow-sm backdrop-blur-md"
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: 'linear-gradient(135deg, #ff3131, #ff914d)' }}
        />
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
      className="relative overflow-hidden pt-32 pb-16 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32"
    >
      <div className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />

      {/* Atmospheric sunset gradient mesh behind hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 sm:right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] rounded-full blur-[80px] sm:blur-[130px] opacity-40"
        style={{
          background: 'linear-gradient(135deg, rgba(255,49,49,0.35), rgba(255,145,77,0.25))',
        }}
      />

      {/* Radiant mobile/tablet sunset gradient aura filling the center void */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full blur-[80px] sm:blur-[110px] opacity-65 lg:hidden"
        style={{
          background: 'radial-gradient(circle, rgba(255,49,49,0.40) 0%, rgba(255,145,77,0.30) 45%, transparent 70%)',
        }}
      />

      <Container className="relative grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          {/* 2. Small badge/eyebrow */}
          <div ref={badgeRef} className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal-dim/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-signal-soft shadow-xs">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #ff3131, #ff914d)' }}
              />
              Technology Agency &amp; Product Lab
            </span>
          </div>

          {/* 3. Main heading reveals line-by-line */}
          <h1 className="mt-6 sm:mt-7 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-bone sm:text-6xl lg:text-[3.75rem]">
            <span ref={line1Ref} className="block">
              Engineering modern
            </span>
            <span ref={line2Ref} className="block">
              software &amp; scalable
            </span>
            <span ref={line3Ref} className="block text-bone">
              digital products
              <span
                className="font-accent italic font-normal text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #ff3131, #ff914d)' }}
              >
                .
              </span>
            </span>
          </h1>

          {/* 4. Description moves upward and fades in */}
          <p
            ref={descRef}
            className="mt-5 sm:mt-6 max-w-xl text-balance text-base leading-relaxed text-bone-dim sm:text-lg"
          >
            We partner with ambitious startups and forward-thinking enterprises to design,
            develop, and automate high-performance web platforms, mobile apps, and custom AI systems.
          </p>

          {/* 5. CTA buttons appear with stagger */}
          <div ref={btnGroupRef} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Button
              href="#contact"
              className="shadow-[0_4px_18px_rgba(255,49,49,0.28)]"
              style={{
                background: 'linear-gradient(135deg, #ff3131, #ff914d)',
                color: '#ffffff',
              }}
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button href="#work" variant="secondary">
              Explore Our Work
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Availability status badge with tightened mobile spacing */}
          <div ref={statusRef} className="mt-8 sm:mt-10 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ background: '#ff3131' }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #ff3131, #ff914d)' }}
              />
            </span>
            <span className="font-display text-xs font-medium text-bone-dim">
              Available for Q4 client builds &amp; architecture partnerships
            </span>
          </div>
        </div>

        {/* 6. Main hero illustration scales from 0.9 to 1 with floaters */}
        <div ref={visualWrapperRef} className="relative mt-2 lg:mt-0">
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
