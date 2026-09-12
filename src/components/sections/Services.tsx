import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          heading="What we do"
          subheading="From strategy to execution, we create digital systems designed to help your business grow."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 0.05} className="h-full">
                <motion.article
                  whileHover="hover"
                  className="group relative flex h-full flex-col justify-between gap-10 bg-ink p-8 transition-colors duration-300 hover:bg-surface"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm text-bone-faint">{service.index}</span>
                    <motion.span
                      variants={{ hover: { rotate: -8, scale: 1.08 } }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-soft text-signal-soft"
                    >
                      <Icon size={19} strokeWidth={1.75} />
                    </motion.span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-bone">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    variants={{ hover: { x: 4, y: -4 } }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line-soft text-bone-dim transition-colors duration-300 group-hover:border-signal-soft group-hover:text-bone"
                  >
                    <ArrowUpRight size={15} />
                  </motion.div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
