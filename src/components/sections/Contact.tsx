import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react'
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projectTypes, site } from '@/data/site'

gsap.registerPlugin(ScrollTrigger)

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

export function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please provide your name.'
    if (!form.email.trim()) {
      next.email = 'Please provide your work email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Please provide a valid email address.'
    }
    if (!form.projectType) next.projectType = 'Please select a service or project category.'
    if (!form.message.trim()) next.message = 'Please share a brief summary of your project.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError(null)

    if (!validate()) return

    setLoading(true)
    try {
      const response = await fetch('https://formsubmit.co/ajax/odify.agency@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company || 'Not specified',
          email: form.email,
          phone: form.phone || 'Not specified',
          serviceNeeded: form.projectType,
          message: form.message,
          _subject: `New Project Inquiry: ${form.name} (${form.projectType})`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const data = await response.json().catch(() => null)
        throw new Error(data?.message || 'Form submission failed')
      }
    } catch {
      setSubmitError(
        'Unable to send inquiry automatically. Please email our team directly at odify.agency@gmail.com'
      )
    } finally {
      setLoading(false)
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-surface px-4 py-3.5 text-sm text-bone placeholder:text-bone-faint outline-none transition-all duration-200 focus:ring-2'

  return (
    <section ref={containerRef} id="contact" className="relative py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Left Column: Direct Info & Commitments */}
        <div className="flex flex-col justify-between">
          <div>
            <SectionHeading
              eyebrow="Initiate Project"
              heading="Let's build something exceptional together"
              subheading="Share your roadmap or technical challenge. We evaluate scope, feasibility, and sprint timelines within one business day."
            />

            <div className="mt-12 flex flex-col gap-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex w-full sm:w-fit items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-all hover:border-signal/50 hover:shadow-xs"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-dim text-signal-soft transition-transform group-hover:scale-110">
                  <Mail size={18} />
                </span>
                <div>
                  <span className="font-display text-xs text-bone-faint font-medium">Direct Inbox</span>
                  <p className="font-display text-sm font-semibold text-bone group-hover:text-signal-soft">
                    {site.email}
                  </p>
                </div>
              </a>

              <a
                href={site.phoneHref}
                className="group flex w-full sm:w-fit items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-all hover:border-signal/50 hover:shadow-xs"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-dim text-signal-soft transition-transform group-hover:scale-110">
                  <Phone size={18} />
                </span>
                <div>
                  <span className="font-display text-xs text-bone-faint font-medium">Phone &amp; WhatsApp Support</span>
                  <p className="font-display text-sm font-semibold text-bone group-hover:text-signal-soft">
                    {site.phone}
                  </p>
                </div>
              </a>

              <div className="flex flex-col gap-3 rounded-2xl border border-line-soft bg-ink-soft p-5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-bone">
                  <Clock size={15} className="text-signal-soft" />
                  <span>Rapid Intake Response</span>
                </div>
                <p className="text-xs leading-relaxed text-bone-dim">
                  Inquiries receive an NDA and preliminary architectural assessment within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-line-soft bg-ink-soft p-5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-bone">
                  <Sparkles size={15} className="text-signal-soft" />
                  <span>Technical Fit Guarantee</span>
                </div>
                <p className="text-xs leading-relaxed text-bone-dim">
                  We only accept client engagements where we are confident in delivering outsized commercial impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form with States */}
        <div className="rounded-3xl border border-line bg-surface p-8 shadow-xs sm:p-10">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal-dim text-signal-soft">
                <CheckCircle2 size={32} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-bone">
                Project inquiry received
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-bone-dim">
                Thank you for reaching out, <span className="font-medium text-bone">{form.name}</span>.
                Our engineering team is reviewing your project details and will be in touch at{' '}
                <span className="font-mono text-bone">{form.email}</span> within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initialState)
                }}
                className="mt-4 rounded-full border border-line px-6 py-2.5 font-display text-xs font-semibold text-bone hover:border-bone"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              {submitError ? (
                <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-700">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{submitError}</span>
                </div>
              ) : null}

              {/* Name */}
              <Field label="Your Name *" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  className={`${inputBase} ${
                    errors.name
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-line focus:border-signal focus:ring-signal/20'
                  }`}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jordan Lee"
                  autoComplete="name"
                />
              </Field>

              {/* Company */}
              <Field label="Company / Organization" htmlFor="company">
                <input
                  id="company"
                  className={`${inputBase} border-line focus:border-signal focus:ring-signal/20`}
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Acme Technologies"
                  autoComplete="organization"
                />
              </Field>

              {/* Email */}
              <Field label="Work Email *" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  className={`${inputBase} ${
                    errors.email
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-line focus:border-signal focus:ring-signal/20'
                  }`}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jordan@acme.com"
                  autoComplete="email"
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  className={`${inputBase} border-line focus:border-signal focus:ring-signal/20`}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                />
              </Field>

              {/* Project Type */}
              <Field
                label="Capability or Service Needed *"
                htmlFor="projectType"
                error={errors.projectType}
                className="sm:col-span-2"
              >
                <select
                  id="projectType"
                  className={`${inputBase} appearance-none ${
                    errors.projectType
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-line focus:border-signal focus:ring-signal/20'
                  }`}
                  value={form.projectType}
                  onChange={(e) => update('projectType', e.target.value)}
                >
                  <option value="" disabled>
                    Select project discipline
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Message */}
              <Field
                label="Project Scope & Objectives *"
                htmlFor="message"
                error={errors.message}
                className="sm:col-span-2"
              >
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputBase} resize-none ${
                    errors.message
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-line focus:border-signal focus:ring-signal/20'
                  }`}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us what you're building, target timelines, and core technical requirements..."
                />
              </Field>

              {/* Submit CTA with Loading State */}
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 font-display text-sm font-semibold text-[#0a0b0d] shadow-[0_2px_14px_rgba(245,158,11,0.25)] transition-all duration-300 hover:bg-bone hover:text-white disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
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
      <label htmlFor={htmlFor} className="font-display text-xs font-semibold text-bone">
        {label}
      </label>
      {children}
      {error ? (
        <span role="alert" className="text-xs font-medium text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  )
}
