import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const words = [
  'A',
  'digital',
  'growth',
  'and',
  'technology',
  'agency',
  'helping',
  'businesses',
  'acquire',
  'customers,',
  'build',
  'better',
  'digital',
  'experiences,',
  'and',
  'automate',
  'their',
  'operations.',
]
const emphasis = 'GROW · BUILD · SCALE.'

export function Statement() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })

  return (
    <section className="border-y border-line-soft bg-ink-soft py-28 sm:py-36" ref={ref}>
      <Container>
        <div className="flex flex-col gap-8">
          <p className="max-w-4xl text-balance font-display text-2xl font-medium leading-[1.3] sm:text-4xl lg:text-[3rem]">
            {words.map((word, i) => {
              const start = i / (words.length + 1)
              const end = start + 1 / (words.length + 1)
              return (
                <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              )
            })}
            <br />
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.75, 1], [0.25, 1]),
              }}
              className="mt-3 block font-accent italic text-signal-soft tracking-wider text-xl sm:text-3xl lg:text-4xl"
            >
              {emphasis}
            </motion.span>
          </p>

          {/* 3 Pillar Summary Strip */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 pt-6 border-t border-line-soft">
            <div className="flex flex-col gap-1">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-emerald-800">
                01 GROW
              </span>
              <span className="font-display text-base font-semibold text-bone">
                Marketing &amp; Advertising
              </span>
              <p className="text-xs text-bone-dim">
                Google Ads, Meta Ads, SEO, Local SEO &amp; Content
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-amber-800">
                02 BUILD
              </span>
              <span className="font-display text-base font-semibold text-bone">
                Websites &amp; Applications
              </span>
              <p className="text-xs text-bone-dim">
                Business Websites, Landing Pages, E-commerce &amp; Web Apps
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-indigo-800">
                03 SCALE
              </span>
              <span className="font-display text-base font-semibold text-bone">
                Technology &amp; Automation
              </span>
              <p className="text-xs text-bone-dim">
                Custom Software, Admin Panels, CRM &amp; Workflow APIs
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative mr-2.5 inline-block">
      <span className="text-bone-faint/35">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-bone"
      >
        {children}
      </motion.span>
    </span>
  )
}
