import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { scrollToTarget } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

function ProjectVisual({ hue, name }: { hue: number; name: string }) {
  return (
    <div
      className="project-visual-image relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line-soft transition-transform duration-500 group-hover:scale-[1.03]"
      style={{
        background: `linear-gradient(145deg, hsl(${hue} 55% 12%) 0%, hsl(${hue} 40% 7%) 60%, #0a0b0d 100%)`,
      }}
    >
      {/* Ambient glow accent */}
      <div
        className="absolute -right-8 -top-8 h-48 w-48 rounded-full blur-3xl opacity-60"
        style={{ background: `hsl(${hue} 90% 55%)` }}
      />

      {/* Simulated application window header */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="font-mono text-[10px] text-white/40 tracking-wider">
          {name.toLowerCase().replace(/\s+/g, '')}.app
        </span>
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>

      {/* Simulated high-tech dashboard widgets inside window */}
      <div className="absolute inset-x-6 bottom-6 top-12 grid grid-cols-12 grid-rows-6 gap-3">
        {/* Main analytics metric chart container */}
        <div
          className="col-span-8 row-span-4 rounded-xl border border-white/10 p-4"
          style={{ background: `hsl(${hue} 40% 16% / 0.5)` }}
        >
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-white/20" />
            <div className="h-2 w-12 rounded-full bg-signal" />
          </div>
          <div className="mt-4 flex items-end gap-1.5 h-16 pt-2">
            {[40, 65, 50, 85, 70, 95, 80, 100, 75, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i === 7 ? 'var(--color-signal)' : `hsl(${hue} 50% 40% / 0.5)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Side summary panel */}
        <div className="col-span-4 row-span-4 flex flex-col gap-2">
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
            <div className="h-2 w-14 rounded-full bg-white/20" />
            <div className="h-3 w-8 rounded-full bg-signal/80" />
          </div>
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
            <div className="h-2 w-10 rounded-full bg-white/20" />
            <div className="h-2 w-16 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Bottom status strip */}
        <div
          className="col-span-12 row-span-2 flex items-center justify-between rounded-xl border border-white/10 px-4"
          style={{ background: `hsl(${hue} 50% 20% / 0.4)` }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <div className="h-2 w-28 rounded-full bg-white/30" />
          </div>
          <div className="h-2 w-16 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  )
}

export function Work() {
  const containerRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !listRef.current) return

    const ctx = gsap.context(() => {
      const cards = listRef.current?.children
      if (cards) {
        Array.from(cards).forEach((card) => {
          const img = card.querySelector('.project-visual-image')
          const content = card.querySelector('.project-card-content')

          // GSAP ScrollTrigger for scale 1.08 -> 1 on image
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.08 },
              {
                scale: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play reverse play reverse',
                },
              }
            )
          }

          // GSAP ScrollTrigger for content opacity 0 -> 1, translateY 30px -> 0
          if (content) {
            gsap.fromTo(
              content,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 82%',
                  toggleActions: 'play reverse play reverse',
                },
              }
            )
          }
        })
      }
    }, listRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="work" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Engineering Work"
            heading="Case studies in performance, scalability &amp; conversion"
            subheading="A curated preview of digital architectures, product systems, and custom software delivered for enterprise clients."
          />
          <div className="shrink-0">
            <Button
              href="#contact"
              variant="secondary"
              className="text-sm"
              onClick={() => scrollToTarget('#contact')}
            >
              Discuss Your Project
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>

        {/* Project cards grid */}
        <div ref={listRef} className="mt-14 grid gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col justify-between rounded-3xl border border-line bg-surface p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:shadow-lg"
            >
              <div>
                {/* Visual preview with zoom */}
                <div className="overflow-hidden rounded-2xl bg-ink">
                  <ProjectVisual hue={project.hue} name={project.name} />
                </div>

                {/* Content block */}
                <div className="project-card-content mt-6 flex flex-col gap-4 px-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-signal-soft">
                      {project.category}
                    </span>
                    {project.stat ? (
                      <span className="font-mono text-xs font-semibold text-bone-faint">
                        {project.stat}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-bone transition-colors group-hover:text-signal-soft">
                    {project.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-bone-dim">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-line-soft bg-ink-soft px-2.5 py-1 font-mono text-[11px] font-medium text-bone-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div className="mt-6 flex items-center justify-between border-t border-line-soft px-2 pt-4">
                <Button
                  href="#contact"
                  variant="ghost"
                  className="!px-0 !py-0 text-xs font-semibold uppercase tracking-wider text-bone group-hover:text-signal-soft"
                  onClick={() => scrollToTarget('#contact')}
                >
                  {project.linkText || 'View Case Study'}
                  <ArrowUpRight size={14} className="ml-1 text-signal-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <span className="font-mono text-xs text-bone-faint font-semibold">
                  {project.index}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
