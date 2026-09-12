import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'

const easing = [0.22, 1, 0.36, 1] as const

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={420} />

      <motion.svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: easing }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="105"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* orbiting fragments representing interface elements */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <rect x="184" y="34" width="32" height="32" rx="8" fill="var(--color-signal)" />
        </motion.g>
        <motion.g
          initial={{ rotate: 120 }}
          animate={{ rotate: 480 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <rect
            x="184"
            y="34"
            width="24"
            height="24"
            rx="6"
            fill="none"
            stroke="var(--color-bone)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
        </motion.g>
        <motion.g
          initial={{ rotate: 240 }}
          animate={{ rotate: 600 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <circle cx="200" cy="50" r="9" fill="var(--color-bone)" fillOpacity="0.85" />
        </motion.g>

        <motion.rect
          x="150"
          y="150"
          width="100"
          height="100"
          rx="24"
          fill="var(--color-surface)"
          stroke="var(--color-line)"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
        />
        <motion.path
          d="M178 200 L195 217 L224 183"
          fill="none"
          stroke="var(--color-signal-soft)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: easing }}
        />
      </motion.svg>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.28em] text-bone-dim"
          >
            Digital Agency
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easing }}
            className="mt-7 text-balance font-display text-[2.6rem] font-medium leading-[1.05] text-bone sm:text-6xl lg:text-[3.6rem]"
          >
            We build digital experiences that move businesses forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: easing }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-bone-dim"
          >
            Strategy, design, technology and growth — combined to create digital experiences
            that make brands impossible to ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: easing }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact">
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#work" variant="secondary">
              Explore Our Work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <span className="text-sm text-bone-dim">Available for select projects</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easing }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  )
}
