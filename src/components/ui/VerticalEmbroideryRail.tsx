import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: '01 Hero' },
  { id: 'services', label: '02 Capabilities' },
  { id: 'work', label: '03 Work' },
  { id: 'process', label: '04 Process' },
  { id: 'pricing', label: '05 Pricing' },
  { id: 'testimonials', label: '06 Testimonials' },
  { id: 'contact', label: '07 Contact' },
]

export function VerticalEmbroideryRail() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  })

  const [activeSection, setActiveSection] = useState('home')
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / Math.max(totalHeight, 1)) * 100)))
      setScrollPercent(pct)

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const top = el.offsetTop
          if (scrollPos >= top) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside
      aria-label="Terracotta Embroidery Rail"
      className="fixed right-2 top-0 bottom-0 z-30 flex w-8 sm:w-10 flex-col items-center justify-between py-6 select-none sm:right-4 pointer-events-none"
    >
      {/* ========================================================================= */}
      {/* TOP: SIMPLE SLEEK TERRACOTTA ELEPHANT CREST */}
      {/* ========================================================================= */}
      <div 
        className="relative shrink-0 flex flex-col items-center pointer-events-auto cursor-pointer group"
        onClick={() => scrollTo('home')}
        title="Scroll to top"
      >
        <svg
          width="32"
          height="48"
          viewBox="0 0 32 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-signal-soft transition-transform duration-300 group-hover:scale-110"
        >
          {/* Terracotta Royal Elephant Silhouette */}
          <g transform="translate(4, 2)">
            <path
              d="M4 14 C3 14 2 12 2 10 C2 7 4 5 7 4.5 C9 4 10.5 3 11.5 2 C12.5 1 14 0.5 15 1 C16 1.5 15.5 3 15 4 C14 5 13 6 13 7.5 C13 8.5 14 9.5 15 10 C16 11 17 12 17 13 L 16 17 C16 17.5 15.5 18 15 18 L 13 18 C12.5 18 12 17.5 12 17 L 12 14.5 L 9 14.5 L 9 17 C9 17.5 8.5 18 8 18 L 6 18 C5.5 18 5 17.5 5 17 Z"
              fill="currentColor"
              fillOpacity="0.85"
            />
            <circle cx="15.5" cy="1" r="0.9" fill="currentColor" />
            <circle cx="13" cy="4" r="0.7" fill="white" />
          </g>

          {/* Clean Temple Point & Diamond Stitch Knot */}
          <path d="M10 24 L 16 19 L 22 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M16 26 L 21 31 L 16 36 L 11 31 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="31" r="1.5" fill="currentColor" />
          <line x1="16" y1="36" x2="16" y2="48" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* MIDDLE: CLEAN SCROLL RAIL WITH EMBROIDERY NEEDLE & SECTION KNOTS */}
      {/* ========================================================================= */}
      <div className="relative flex-1 w-full my-2 flex flex-col items-center justify-between">
        {/* Static Background Guide Track */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4">
          <svg
            className="h-full w-full text-line"
            preserveAspectRatio="none"
            viewBox="0 0 16 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center Rail */}
            <line x1="8" y1="0" x2="8" y2="1000" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
            {/* Simple Dashed Embroidery Stitch Lines */}
            <line x1="3" y1="0" x2="3" y2="1000" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.3" />
            <line x1="13" y1="0" x2="13" y2="1000" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.3" />
          </svg>
        </div>

        {/* Dynamic Live Scroll Terracotta Thread */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 overflow-hidden">
          <motion.div
            style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
            className="h-full w-full"
          >
            <svg
              className="h-full w-full text-signal-soft"
              preserveAspectRatio="none"
              viewBox="0 0 16 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="8" y1="0" x2="8" y2="1000" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="0" x2="3" y2="1000" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" strokeOpacity="0.7" />
              <line x1="13" y1="0" x2="13" y2="1000" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" strokeOpacity="0.7" />
            </svg>
          </motion.div>
        </div>

        {/* Floating Active Terracotta Needle Node */}
        <motion.div
          style={{
            top: `${scrollPercent}%`,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 26 }}
          className="absolute left-1/2 z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute h-6 w-6 rounded-full bg-signal-soft/30 animate-ping" />
            <span className="absolute h-4 w-4 rounded-full bg-signal shadow-sm ring-1 ring-white/50" />
            <span className="relative h-1.5 w-1.5 rotate-45 rounded-xs bg-white" />
          </div>
        </motion.div>

        {/* Interactive Terracotta Section Knots */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between py-1">
          {sections.map((sec, idx) => {
            const isActive = activeSection === sec.id

            return (
              <div key={sec.id} className="group relative flex items-center justify-center pointer-events-auto">
                <button
                  type="button"
                  onClick={() => scrollTo(sec.id)}
                  aria-label={`Scroll to ${sec.label}`}
                  className="relative flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-200 hover:scale-125 focus-visible:outline-none"
                >
                  {/* Clean Terracotta Diamond Stitch Knot */}
                  <div
                    className={`h-3.5 w-3.5 rotate-45 rounded-xs border transition-all duration-200 ${
                      isActive
                        ? 'border-signal-soft bg-signal shadow-sm ring-2 ring-signal-soft/30 scale-110'
                        : 'border-line bg-surface hover:border-signal-soft hover:bg-surface-soft'
                    }`}
                  />
                  {/* Center Dot */}
                  <span
                    className={`absolute h-1 w-1 rounded-full transition-colors ${
                      isActive ? 'bg-white' : 'bg-bone-faint group-hover:bg-signal-soft'
                    }`}
                  />
                </button>

                {/* Clean Simple Tooltip */}
                <div className="pointer-events-none absolute right-8 whitespace-nowrap rounded-md border border-line bg-surface/95 px-2.5 py-1 text-[10px] font-mono shadow-lg backdrop-blur-sm opacity-0 -translate-x-2 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className={isActive ? 'text-signal-soft font-semibold' : 'text-bone'}>
                    {sec.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM: CLEAN PERCENTAGE & INVERTED TERRACOTTA ELEPHANT FINIAL */}
      {/* ========================================================================= */}
      <div className="relative shrink-0 flex flex-col items-center gap-1 pointer-events-auto">
        {/* Simple Progress Badge */}
        <div className="rounded-full border border-line bg-surface/90 px-1.5 py-0.5 font-mono text-[9px] font-bold text-signal-soft">
          {String(scrollPercent).padStart(2, '0')}%
        </div>

        {/* Clean Mirrored Terracotta Elephant */}
        <svg
          width="32"
          height="42"
          viewBox="0 0 32 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-signal-soft rotate-180 transition-transform duration-300 hover:scale-110 cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          <line x1="16" y1="0" x2="16" y2="10" stroke="currentColor" strokeWidth="1.4" />
          <path d="M16 10 L 21 15 L 16 20 L 11 15 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="15" r="1.5" fill="currentColor" />

          {/* Mirrored Elephant Knot */}
          <g transform="translate(4, 20)">
            <path
              d="M4 14 C3 14 2 12 2 10 C2 7 4 5 7 4.5 C9 4 10.5 3 11.5 2 C12.5 1 14 0.5 15 1 C16 1.5 15.5 3 15 4 C14 5 13 6 13 7.5 C13 8.5 14 9.5 15 10 C16 11 17 12 17 13 L 16 17 C16 17.5 15.5 18 15 18 L 13 18 C12.5 18 12 17.5 12 17 L 12 14.5 L 9 14.5 L 9 17 C9 17.5 8.5 18 8 18 L 6 18 C5.5 18 5 17.5 5 17 Z"
              fill="currentColor"
              fillOpacity="0.85"
            />
            <circle cx="15.5" cy="1" r="0.9" fill="currentColor" />
          </g>
        </svg>
      </div>
    </aside>
  )
}
