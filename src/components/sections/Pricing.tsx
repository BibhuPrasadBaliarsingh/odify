import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { pricingTiers } from '@/data/pricing'

interface PricingProps {
  onSelectProjectType?: (type: string) => void
}

export function Pricing({ onSelectProjectType }: PricingProps) {
  return (
    <section id="pricing" className="relative border-t border-line-soft py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            heading="Transparent engagement"
            subheading="Predictable pricing models tailored to where you are in your growth journey. No hidden retainers or surprise invoices."
          />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative flex h-full flex-col justify-between rounded-3xl border p-8 sm:p-10 transition-colors ${
                  tier.popular
                    ? 'border-signal-soft bg-surface shadow-2xl shadow-signal/10 ring-1 ring-signal-soft/30'
                    : 'border-line bg-surface hover:border-line-soft'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-signal px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-medium text-bone">{tier.name}</h3>
                  </div>

                  <p className="mt-3 min-h-[40px] text-xs leading-relaxed text-bone-dim sm:text-sm">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-line-soft pb-6">
                    <span className="font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
                      {tier.price}
                    </span>
                    <span className="text-xs text-bone-faint">{tier.period}</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-bone-faint">
                      Included in scope:
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-xs leading-relaxed text-bone-dim sm:text-sm">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal/20 text-signal-soft">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-line-soft pt-6">
                  <div className="mb-4 text-center text-xs text-bone-faint font-mono">
                    {tier.deliverables}
                  </div>
                  <Button
                    href="#contact"
                    variant={tier.popular ? 'primary' : 'secondary'}
                    onClick={() => {
                      if (onSelectProjectType) {
                        onSelectProjectType(tier.projectType)
                      }
                    }}
                    className="w-full justify-center group"
                  >
                    {tier.ctaText}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Reassurance guarantee footer */}
        <Reveal delay={0.2} className="mt-14 rounded-2xl border border-line-soft bg-ink p-6 text-center sm:p-8">
          <p className="text-sm text-bone-dim">
            Need a custom enterprise scope or dedicated security SLA?{' '}
            <a
              href="#contact"
              onClick={() => onSelectProjectType && onSelectProjectType('Other')}
              className="text-signal-soft underline hover:text-bone font-medium ml-1"
            >
              Contact our solutions team for a custom quote →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
