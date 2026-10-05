import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { statistics, statisticsHeading } from '@/data/statistics'

gsap.registerPlugin(ScrollTrigger)

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const runCounters = () => {
        statistics.forEach((stat, index) => {
          const el = numbersRef.current[index]
          if (!el) return

          const counterObj = { val: 0 }
          gsap.to(counterObj, {
            val: stat.targetValue,
            duration: 2.0,
            ease: 'power2.out',
            onUpdate: () => {
              const formatted =
                stat.decimals !== undefined
                  ? counterObj.val.toFixed(stat.decimals)
                  : Math.round(counterObj.val).toString()
              el.innerText = `${stat.prefix || ''}${formatted}${stat.suffix || ''}`
            },
          })
        })
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: runCounters,
        onEnterBack: runCounters,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-line-soft bg-ink-soft py-12 sm:py-16"
    >
      <Container>
        <div className="mb-8 sm:mb-10">
          <SectionHeading
            align="center"
            eyebrow={statisticsHeading.eyebrow}
            heading={statisticsHeading.heading}
            subheading={statisticsHeading.subheading}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, i) => (
            <div
              key={stat.id}
              className="flex flex-col gap-1.5 rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:shadow-md"
            >
              <span
                ref={(el) => {
                  numbersRef.current[i] = el
                }}
                className="font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
              >
                0{stat.suffix || ''}
              </span>
              <h3 className="mt-1 font-display text-base font-semibold text-bone">
                {stat.label}
              </h3>
              <p className="text-xs leading-relaxed text-bone-dim">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
