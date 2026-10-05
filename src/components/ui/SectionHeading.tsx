import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type ReactNode, useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeadingProps {
  eyebrow?: string
  heading: ReactNode
  subheading?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
        defaults: { ease: 'power3.out' },
      })

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7 },
          eyebrowRef.current ? '-=0.3' : 0
        )
      }

      if (subheadingRef.current) {
        tl.fromTo(
          subheadingRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div
      ref={containerRef}
      className={`flex max-w-3xl flex-col gap-3.5 ${alignment} ${className}`}
    >
      {eyebrow ? (
        <span
          ref={eyebrowRef}
          className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-signal-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        ref={headingRef}
        className="text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight text-bone sm:text-4xl lg:text-[2.75rem]"
      >
        {heading}
      </h2>
      {subheading ? (
        <p
          ref={subheadingRef}
          className="text-balance text-base leading-relaxed text-bone-dim sm:text-lg"
        >
          {subheading}
        </p>
      ) : null}
    </div>
  )
}
