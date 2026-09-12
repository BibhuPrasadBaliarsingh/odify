import { motion } from 'framer-motion'
import { ArrowRight, Check, Mail } from 'lucide-react'
import { type FormEvent, type ReactNode, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projectTypes, site } from '@/data/site'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  message: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

const inputClasses =
  'w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-bone placeholder:text-bone-faint outline-none transition-colors duration-200 focus:border-signal-soft'

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.projectType) next.projectType = 'Please select a project type.'
    if (!form.message.trim()) next.message = 'Tell us a little about your project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading
            heading="Let's start a project"
            subheading="Share a few details and we'll get back to you within one business day."
          />

          <Reveal delay={0.15} className="mt-12 flex flex-col gap-6">
            <div>
              <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-bone-faint">
                {site.name}
              </span>
              <p className="mt-1 text-sm text-bone-dim">Digital Agency</p>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="flex w-fit items-center gap-2.5 text-base text-bone transition-colors hover:text-signal-soft"
            >
              <Mail size={17} />
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-surface p-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal/15 text-signal-soft">
                <Check size={22} />
              </span>
              <h3 className="font-display text-xl font-medium text-bone">Inquiry sent</h3>
              <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
                Thanks for reaching out. We'll review your project and get back to you within
                one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jordan Lee"
                  autoComplete="name"
                />
              </Field>

              <Field label="Company" htmlFor="company">
                <input
                  id="company"
                  className={inputClasses}
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </Field>

              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </Field>

              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  className={inputClasses}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="Optional"
                  autoComplete="tel"
                />
              </Field>

              <Field
                label="What can we help you with?"
                htmlFor="projectType"
                error={errors.projectType}
                className="sm:col-span-2"
              >
                <select
                  id="projectType"
                  className={`${inputClasses} appearance-none`}
                  value={form.projectType}
                  onChange={(e) => update('projectType', e.target.value)}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Tell us about your project"
                htmlFor="message"
                error={errors.message}
                className="sm:col-span-2"
              >
                <textarea
                  id="message"
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="What are you building, and what does success look like?"
                />
              </Field>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-bone px-7 py-3.5 font-display text-sm font-medium text-ink transition-colors duration-300 hover:bg-signal hover:text-bone sm:col-span-2"
              >
                Send Project Inquiry
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  error,
  className = '',
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm text-bone-dim">
        {label}
      </label>
      {children}
      {error ? (
        <span role="alert" className="text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </div>
  )
}
