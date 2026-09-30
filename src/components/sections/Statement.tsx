import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const words = ['Your', 'digital', 'presence', 'should', 'do', 'more', 'than', 'exist.']
const emphasis = 'perform.'

export function Statement() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })

  return (
    <section className="border-y border-line-soft bg-ink-soft py-28 sm:py-36" ref={ref}>
      <Container>
        <p className="max-w-4xl text-balance font-display text-3xl font-medium leading-[1.25] sm:text-5xl lg:text-[3.4rem]">
          {words.map((word, i) => {
            const start = i / (words.length + 1)
            const end = start + 1 / (words.length + 1)
            return (
              <Word key={word} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
          <br />
          <motion.span
            style={{
              opacity: useTransform(scrollYProgress, [0.75, 1], [0.25, 1]),
            }}
            className="font-accent italic text-signal-soft"
          >
            {emphasis}
          </motion.span>
        </p>
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
    <span className="relative mr-3 inline-block">
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
