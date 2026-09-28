import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqs } from '@/data/faqs'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id)

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="border-t border-line-soft py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading
            heading="Frequently asked questions"
            subheading="Clear answers to common questions about our engagement process, technology stack, and guarantees."
          />

          <div className="mt-8 rounded-2xl border border-line-soft bg-surface p-6 text-sm text-bone-dim">
            <span className="font-display font-medium text-bone block mb-1">Have a unique question?</span>
            We are always happy to discuss custom technical architectures and scopes.
            <a href="#contact" className="mt-3 block font-display text-xs font-semibold uppercase tracking-wider text-signal-soft hover:underline">
              Ask directly via our contact form →
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id
            return (
              <Reveal key={faq.id} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? 'border-signal-soft bg-surface' : 'border-line bg-surface/60 hover:border-line-soft'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-none"
                  >
                    <span className="font-display text-base font-medium text-bone sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        isOpen
                          ? 'border-signal-soft bg-signal/20 text-signal-soft'
                          : 'border-line text-bone-dim'
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-line-soft px-6 pb-6 pt-4 text-sm leading-relaxed text-bone-dim sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
