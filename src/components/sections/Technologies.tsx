import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Code, Cpu, Database, Layers, Smartphone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { technologyCategories } from '@/data/technologies'

gsap.registerPlugin(ScrollTrigger)

const categoryIcons = {
  frontend: Code,
  backend: Database,
  mobile: Smartphone,
  cloud: Layers,
  ai: Cpu,
}

export function Technologies() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const gridRef = useRef<HTMLDivElement>(null)

  const displayedCategories =
    activeTab === 'all'
      ? technologyCategories
      : technologyCategories.filter((c) => c.id === activeTab)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !gridRef.current) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, [gridRef, activeTab])

    return () => ctx.revert()
  }, [activeTab])

  return (
    <section id="technologies" className="relative border-t border-line-soft bg-ink-soft py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Modern Stack"
            heading="Engineered with battle-tested &amp; next-generation frameworks"
            subheading="We build on industry-standard technologies to ensure high performance, security, and developer ergonomics."
          />
        </div>

        {/* Category filter tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`rounded-full px-4 py-2 font-display text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'all'
                ? 'bg-bone text-white shadow-xs'
                : 'border border-line bg-surface text-bone-dim hover:border-bone hover:text-bone'
            }`}
          >
            All Frameworks
          </button>
          {technologyCategories.map((cat) => {
            const Icon = categoryIcons[cat.id as keyof typeof categoryIcons] || Code
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-bone text-white shadow-xs'
                    : 'border border-line bg-surface text-bone-dim hover:border-bone hover:text-bone'
                }`}
              >
                <Icon size={13} className={isActive ? 'text-signal' : 'text-signal-soft'} />
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Technology cards grid */}
        <div
          ref={gridRef}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.id as keyof typeof categoryIcons] || Code
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-display text-base font-semibold text-bone">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-signal-dim text-signal-soft">
                        <Icon size={16} />
                      </span>
                      {cat.name}
                    </span>
                    <span className="font-mono text-xs text-bone-faint font-medium">
                      {cat.items.length} tools
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-bone-dim">
                    {cat.description}
                  </p>

                  <div className="mt-6 flex flex-col gap-2.5">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-xl border border-line-soft bg-ink-soft/70 px-3.5 py-2.5 transition-colors group-hover:border-line"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-signal-soft shrink-0" />
                          <span className="font-display text-xs font-medium text-bone">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-bone-faint hidden sm:inline">
                            {item.role}
                          </span>
                          {item.badge ? (
                            <span className="rounded-md border border-signal/25 bg-signal-dim px-1.5 py-0.5 font-mono text-[10px] font-semibold text-signal-soft">
                              {item.badge}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
