import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqs, faqsSectionData } from '@/data/faqs'
import { site } from '@/data/site'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faqs" className="relative py-14 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={faqsSectionData.eyebrow}
          heading={faqsSectionData.heading}
          subheading={faqsSectionData.subheading}
        />

        <div className="mx-auto mt-10 sm:mt-12 max-w-3xl divide-y divide-line-soft">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div key={faq.id} className="py-3.5 sm:py-4">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 text-left transition-colors hover:text-signal"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-bone">
                    {faq.question}
                  </span>
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line-soft bg-surface text-bone transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-signal-dim text-signal' : ''
                    }`}
                  >
                    <ChevronDown size={14} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm leading-relaxed text-bone-dim">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Bottom Help callout */}
        <div className="mx-auto mt-8 sm:mt-10 max-w-xl text-center rounded-2xl border border-line-soft bg-ink-soft/40 p-4 sm:p-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-bone">
            <HelpCircle size={15} className="text-signal" />
            <span>Have a question not listed here?</span>
          </div>
          <p className="mt-1 text-xs text-bone-dim">
            Feel free to reach out directly to our engineering desk at{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-signal underline">
              {site.email}
            </a>{' '}
            or call{' '}
            <a href={site.phoneHref} className="font-semibold text-signal underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
