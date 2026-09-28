import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

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
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow ? (
        <span className="font-display text-xs font-medium uppercase tracking-[0.28em] text-signal-soft">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-medium leading-[1.1] text-bone sm:text-4xl lg:text-[2.75rem]">
        {heading}
      </h2>
      {subheading ? (
        <p className="text-balance text-base leading-relaxed text-bone-dim sm:text-lg">
          {subheading}
        </p>
      ) : null}
    </motion.div>
  )
}
