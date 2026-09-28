import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { GlowOrb } from '@/components/ui/GlowOrb'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

// -------------------------------------------------------------
// TRADITIONAL ODISHAN TERRACOTTA ROYAL ELEPHANT & APPLIQUÉ EMBROIDERY
// -------------------------------------------------------------
function TerracottaElephantCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute h-28 w-28 sm:h-36 sm:w-36 text-signal-soft transition-all duration-500 ${className}`}
    >
      {/* Outer Appliqué Corner Boundary */}
      <path
        d="M4 80 V 28 C 4 14.745 14.745 4 28 4 H 80"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      {/* Hand-Stitched Dashed Appliqué Guide Track */}
      <path
        d="M10 72 V 32 C 10 19.85 19.85 10 32 10 H 72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        strokeOpacity="0.6"
      />

      {/* Terracotta Temple Triangle Spikes (Shikhara / Kumbha Motifs) */}
      <path d="M84 4 L 90 10 L 96 4 L 102 10 L 108 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.75" />
      <path d="M4 84 L 10 90 L 4 96 L 10 102 L 4 108" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.75" />

      {/* ---------------- TRADITIONAL TERRACOTTA ROYAL ELEPHANT (GAJA) ---------------- */}
      <g transform="translate(24, 24)">
        {/* Elephant Body Silhouette */}
        <path
          d="M22 46 C 18 46 14 42 14 36 C 14 28 20 22 30 20 C 34 19 38 17 40 14 C 42 11 44 8 47 6 C 50 4 54 5 55 8 C 56 11 53 14 50 16 C 48 17 46 20 46 24 C 46 26 48 28 50 30 C 52 32 54 36 54 40 L 52 52 C 52 54 50 56 48 56 L 44 56 C 42 56 40 54 40 52 L 40 44 L 34 44 L 34 52 C 34 54 32 56 30 56 L 26 56 C 24 56 22 54 22 52 Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />

        {/* Raised Trunk Curve with Auspicious Bloom */}
        <path
          d="M47 6 C 49 3 53 2 56 4 C 59 6 60 10 57 13 C 54 16 50 18 47 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Auspicious Lotus Bud at Trunk Tip */}
        <circle cx="56" cy="4" r="2" fill="currentColor" />

        {/* Elephant Ear (Traditional Odishan Appliqué Pattern) */}
        <path
          d="M38 20 C 35 20 32 23 32 28 C 32 33 36 36 39 36"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        <circle cx="36" cy="27" r="1.5" fill="currentColor" />

        {/* Elephant Tusk */}
        <path d="M48 24 Q 53 26 54 23" stroke="#f3f2ee" strokeWidth="1.6" strokeLinecap="round" />

        {/* Auspicious Eye */}
        <circle cx="43" cy="18" r="1.5" fill="currentColor" />

        {/* Royal Decorated Saddle Cloth (Jhula with Terracotta Cross-Hatch) */}
        <path
          d="M26 27 L 42 27 L 40 40 L 28 40 Z"
          fill="currentColor"
          fillOpacity="0.32"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        {/* Saddle Appliqué Cross Stitch Weave */}
        <line x1="30" y1="28" x2="38" y2="39" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.8" />
        <line x1="38" y1="28" x2="30" y2="39" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.8" />
        <circle cx="34" cy="33.5" r="1" fill="currentColor" />

        {/* Terracotta Neck Garland / Bell Chain */}
        <path d="M42 26 Q 44 32 46 36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="45" cy="34" r="1.5" fill="currentColor" />

        {/* Decorative Tail Tassel */}
        <path d="M16 34 Q 13 40 14 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="14" cy="45" r="1.5" fill="currentColor" />
        
        {/* Foot Ornaments */}
        <line x1="24" y1="52" x2="32" y2="52" stroke="currentColor" strokeWidth="1.2" />
        <line x1="42" y1="52" x2="50" y2="52" stroke="currentColor" strokeWidth="1.2" />
      </g>

      {/* Terminal Node Endpoints */}
      <circle cx="4" cy="4" r="3.5" fill="currentColor" />
      <circle cx="80" cy="4" r="2.5" fill="currentColor" />
      <circle cx="4" cy="80" r="2.5" fill="currentColor" />
    </svg>
  )
}

// -------------------------------------------------------------
// TERRACOTTA APPLIQUÉ RUNNING BORDER EMBROIDERY
// -------------------------------------------------------------
function TerracottaAppliqueBorder({ position = 'top' }: { position?: 'top' | 'bottom' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-28 hidden md:flex items-center justify-center overflow-hidden h-5 opacity-65 text-signal-soft ${
        position === 'top' ? 'top-1.5' : 'bottom-1.5'
      }`}
    >
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 16" fill="none">
        {/* Running Dashed Stitch Track */}
        <line x1="0" y1="8" x2="800" y2="8" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.7" />
        {/* Repeating Terracotta Temple Spikes & Lotuses */}
        <path
          d="M150 4 L 155 12 L 160 4 M 250 4 L 255 12 L 260 4 M 350 4 L 355 12 L 360 4 M 450 4 L 455 12 L 460 4 M 550 4 L 555 12 L 560 4 M 650 4 L 655 12 L 660 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const active = testimonials[current]

  return (
    <section id="testimonials" className="relative overflow-hidden border-t border-line-soft py-24 sm:py-32">
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" size={500} />

      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            heading="What leaders say"
            subheading="Direct feedback from founders and executives who partnered with Odify to transform their digital presence."
          />

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-bone-dim transition-colors hover:border-signal-soft hover:text-bone focus-visible:outline-none"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-bone-dim transition-colors hover:border-signal-soft hover:text-bone focus-visible:outline-none"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial Active Display with 4-Corner & 4-Side Terracotta Elephant Embroidery */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 sm:p-14 lg:p-20 shadow-2xl">
            {/* 4-Corner Terracotta Royal Elephant Embroidery */}
            {/* Corner 1: Top-Left Elephant */}
            <TerracottaElephantCorner className="left-3 top-3 sm:left-5 sm:top-5" />

            {/* Corner 2: Top-Right Elephant (Mirrored) */}
            <TerracottaElephantCorner className="right-3 top-3 sm:right-5 sm:top-5 scale-x-[-1]" />

            {/* Corner 3: Bottom-Left Elephant (Mirrored Inverted) */}
            <TerracottaElephantCorner className="left-3 bottom-3 sm:left-5 sm:bottom-5 scale-y-[-1]" />

            {/* Corner 4: Bottom-Right Elephant (Rotated 180°) */}
            <TerracottaElephantCorner className="right-3 bottom-3 sm:right-5 sm:bottom-5 rotate-180" />

            {/* 4-Side Terracotta Appliqué Running Borders */}
            <TerracottaAppliqueBorder position="top" />
            <TerracottaAppliqueBorder position="bottom" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center px-1 sm:px-4 py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-signal-soft mb-6">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-signal-soft" />
                      ))}
                    </div>

                    <blockquote className="font-display text-xl font-normal leading-relaxed text-bone sm:text-2xl lg:text-[1.7rem] lg:leading-normal">
                      "{active.quote}"
                    </blockquote>
                  </div>

                  <div className="mt-8 flex items-center gap-4 border-t border-line-soft pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal/20 font-display text-sm font-semibold text-signal-soft shadow-inner">
                      {active.avatarText}
                    </div>
                    <div>
                      <div className="font-display text-base font-medium text-bone">
                        {active.author}
                      </div>
                      <div className="text-xs text-bone-dim sm:text-sm">
                        {active.role} • <span className="text-bone">{active.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Highlight Impact Card with Inner Terracotta Micro-Embroideries */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-metric'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-line-soft bg-ink/70 p-8 sm:p-10 text-center backdrop-blur-sm shadow-xl"
                >
                  {/* Subtle Inner Micro-Elephant Accents on Impact Card */}
                  <TerracottaElephantCorner className="left-2 top-2 scale-[0.45] origin-top-left opacity-75" />
                  <TerracottaElephantCorner className="right-2 bottom-2 scale-[0.45] origin-bottom-right rotate-180 opacity-75" />

                  <Quote className="absolute right-6 top-6 text-bone-faint/25" size={38} />
                  <div className="font-display text-5xl font-bold tracking-tight text-signal-soft sm:text-6xl">
                    {active.highlightMetric}
                  </div>
                  <div className="mt-3 font-display text-sm font-medium uppercase tracking-wider text-bone">
                    {active.metricLabel}
                  </div>
                  <div className="mt-2 text-xs text-bone-dim">
                    Measured within 90 days post-launch
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx ? 'w-8 bg-signal-soft' : 'w-2 bg-line hover:bg-bone-dim'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
