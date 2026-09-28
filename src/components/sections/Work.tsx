import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Eye } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ProjectModal } from '@/components/ui/ProjectModal'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { type Project, projects } from '@/data/projects'

function ProjectVisual({ hue, results }: { hue: number; results: { label: string; value: string }[] }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line-soft"
      style={{
        background: `linear-gradient(155deg, hsl(${hue} 60% 10%) 0%, hsl(${hue} 45% 6%) 55%, #0a0b0d 100%)`,
      }}
    >
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `hsl(${hue} 90% 55% / 0.35)` }}
      />

      {/* Abstract Wireframe Grid Mockup */}
      <div className="absolute inset-6 grid grid-cols-6 grid-rows-4 gap-2">
        <div
          className="col-span-4 row-span-2 rounded-lg border border-white/10"
          style={{ background: `hsl(${hue} 40% 14% / 0.6)` }}
        />
        <div className="col-span-2 row-span-2 rounded-lg border border-white/10 bg-white/5" />
        <div className="col-span-2 row-span-2 rounded-lg border border-white/10 bg-white/5" />
        <div
          className="col-span-4 row-span-2 rounded-lg border border-white/10"
          style={{ background: `hsl(${hue} 55% 30% / 0.45)` }}
        />
      </div>

      {/* Primary Highlight Metric Pill */}
      {results[0] && (
        <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-soft" />
            <span className="font-display text-xs font-semibold text-bone">{results[0].value}</span>
            <span className="text-[11px] text-bone-dim">{results[0].label}</span>
          </div>
        </div>
      )}

      {/* Hover Overlay Hint */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/90 px-4 py-2 text-xs font-medium text-bone shadow-lg">
          <Eye size={14} className="text-signal-soft" /> View Case Study
        </span>
      </div>
    </div>
  )
}

const categories = ['All', 'Fintech', 'Commerce', 'SaaS', 'Growth'] as const

export function Work({ onSelectProjectType }: { onSelectProjectType?: (type: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.filterCategory === activeCategory)

  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            heading="Selected work"
            subheading="A selection of high-impact digital experiences built to solve real business problems."
          />
          <div className="shrink-0">
            <Button href="#contact" variant="secondary" className="text-sm">
              Start Your Project
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-line-soft pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 font-display text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-bone text-ink shadow-sm'
                  : 'border border-line text-bone-dim hover:border-line-soft hover:text-bone'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="mt-10 grid gap-8 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Reveal delay={i * 0.06}>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group flex w-full flex-col gap-5 text-left focus-visible:outline-none"
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ProjectVisual hue={project.hue} results={project.results} />
                      </motion.div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs uppercase tracking-[0.2em] text-bone-faint">
                            {project.category}
                          </span>
                          <span className="text-bone-faint">•</span>
                          <span className="text-xs text-signal-soft font-medium">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-2xl font-medium text-bone group-hover:text-signal-soft transition-colors">
                          {project.name}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-bone-dim">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-soft text-bone-dim transition-all duration-300 group-hover:border-signal-soft group-hover:bg-signal-soft group-hover:text-ink">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </button>
                </Reveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProjectType={onSelectProjectType}
      />
    </section>
  )
}
