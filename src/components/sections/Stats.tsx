import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { stats } from '@/data/stats'

export function Stats() {
  return (
    <section className="relative border-t border-line-soft py-20 bg-ink-soft/40">
      <Container>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col justify-between bg-ink p-8 sm:p-10"
              >
                <div>
                  <div className="font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
                    {stat.value}
                  </div>
                  <h3 className="mt-3 font-display text-base font-medium text-signal-soft">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-bone-dim sm:text-sm">
                  {stat.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
