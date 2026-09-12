import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'

function ProjectVisual({ hue }: { hue: number }) {
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
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            heading="Selected work"
            subheading="A selection of digital experiences built to solve real business problems."
          />
          <div className="shrink-0">
            <Button href="#contact" variant="secondary" className="text-sm">
              View All Work
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <motion.a
                href="#contact"
                whileHover="hover"
                className="group flex flex-col gap-5"
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.div variants={{ hover: { scale: 1.04 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                    <ProjectVisual hue={project.hue} />
                  </motion.div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-bone-faint">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-medium text-bone">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-bone-dim">
                      {project.description}
                    </p>
                  </div>
                  <motion.span
                    variants={{ hover: { x: 4, y: -4 } }}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-soft text-bone-dim transition-colors duration-300 group-hover:border-signal-soft group-hover:text-bone"
                  >
                    <ArrowUpRight size={16} />
                  </motion.span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
