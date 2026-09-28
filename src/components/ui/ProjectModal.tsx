import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Sparkles, User, X } from 'lucide-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  onSelectProjectType?: (type: string) => void
}

export function ProjectModal({ project, onClose, onSelectProjectType }: ProjectModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/85 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-line bg-surface p-6 shadow-2xl sm:p-8 lg:p-10 no-scrollbar"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink/70 text-bone-dim transition-colors hover:border-signal-soft hover:text-bone focus-visible:outline-none"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-signal-soft">
                {project.category}
              </span>
              <span className="text-bone-faint">•</span>
              <span className="text-xs text-bone-faint">Case Study {project.index}</span>
            </div>

            <h2 className="mt-3 font-display text-3xl font-medium text-bone sm:text-4xl">
              {project.name}
            </h2>

            {/* Visual Hero Mockup Banner */}
            <div
              className="relative mt-6 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-line-soft"
              style={{
                background: `linear-gradient(135deg, hsl(${project.hue} 60% 12%) 0%, hsl(${project.hue} 40% 7%) 60%, #0a0b0d 100%)`,
              }}
            >
              <div
                className="absolute -right-12 -top-12 h-56 w-56 rounded-full blur-3xl opacity-60"
                style={{ background: `hsl(${project.hue} 85% 55%)` }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="flex flex-wrap justify-center gap-6">
                  {project.results.map((res) => (
                    <div
                      key={res.label}
                      className="rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md"
                    >
                      <div className="font-display text-2xl font-bold text-bone sm:text-3xl">
                        {res.value}
                      </div>
                      <div className="text-xs text-bone-dim">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-6 border-y border-line-soft py-4 text-xs text-bone-dim sm:text-sm">
              <div className="flex items-center gap-2">
                <User size={15} className="text-signal-soft" />
                <span>Client: <strong className="text-bone">{project.client}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-signal-soft" />
                <span>Timeline: <strong className="text-bone">{project.timeline}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-signal-soft" />
                <span>Year: <strong className="text-bone">{project.year}</strong></span>
              </div>
            </div>

            {/* Summary & Challenge / Solution Grid */}
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-bone-faint">
                  Overview
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-bone-dim sm:text-base">
                  {project.fullSummary}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line-soft bg-ink/60 p-5">
                  <h5 className="font-display text-sm font-medium text-bone">The Challenge</h5>
                  <p className="mt-2 text-xs leading-relaxed text-bone-dim sm:text-sm">
                    {project.challenge}
                  </p>
                </div>
                <div className="rounded-2xl border border-line-soft bg-ink/60 p-5">
                  <h5 className="font-display text-sm font-medium text-bone">The Solution</h5>
                  <p className="mt-2 text-xs leading-relaxed text-bone-dim sm:text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-bone-faint">
                  Tech Stack & Deliverables
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-ink/80 px-3 py-1 text-xs text-bone-dim"
                    >
                      <CheckCircle2 size={12} className="text-signal-soft" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line-soft pt-6">
              <span className="text-xs text-bone-faint">Ready to achieve similar results?</span>
              <Button
                href="#contact"
                onClick={() => {
                  if (onSelectProjectType) onSelectProjectType(project.filterCategory)
                  onClose()
                }}
              >
                Start a Similar Project
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
