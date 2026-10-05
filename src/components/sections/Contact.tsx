import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Headphones,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
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

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 35 },
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
      next.email = 'Please provide your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Please provide a valid email address.'
    }
    if (!form.projectType) next.projectType = 'Please select a service.'
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
      // Simulate submission network call
      await new Promise((resolve) => setTimeout(resolve, 800))
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please call or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  function handleNewsletterSubmit(e: FormEvent) {
    e.preventDefault()
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) return
    setNewsletterSuccess(true)
    setTimeout(() => {
      setNewsletterEmail('')
      setNewsletterSuccess(false)
    }, 4000)
  }

  return (
    <section ref={containerRef} id="contact" className="relative py-14 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12">
        {/* Left Column: Direct Info & Commitments */}
        <div className="flex flex-col justify-between">
          <div>
            <SectionHeading
              eyebrow="Contact US"
              heading="Let’s build IT infrastructure your business can rely on"
              subheading="Tell us what you’re working on and a senior engineer will get back to you within one business day — no sales queue, no runaround."
            />

            {/* 3 Guarantees */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-bone">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Response within one business day</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-bone">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Direct line to a senior engineer, not a sales queue</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-bone">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Fixed-scope proposal within one week</span>
              </div>
            </div>

            {/* Contact cards */}
            <div className="mt-10 grid gap-3.5 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="group flex flex-col gap-1 rounded-2xl border border-line bg-surface p-4 transition-all hover:border-signal/50 hover:shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-bone-dim">
                  <Phone size={14} className="text-signal" />
                  <span>Call Us Anytime</span>
                </div>
                <p className="font-display text-sm font-bold text-bone group-hover:text-signal">
                  {site.phone}
                </p>
                <span className="text-[11px] text-bone-faint">{site.hours}</span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex flex-col gap-1 rounded-2xl border border-line bg-surface p-4 transition-all hover:border-signal/50 hover:shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-bone-dim">
                  <Mail size={14} className="text-signal" />
                  <span>Email Us</span>
                </div>
                <p className="font-display text-sm font-bold text-bone group-hover:text-signal">
                  {site.email}
                </p>
                <span className="text-[11px] text-bone-faint">We reply within 1 business day</span>
              </a>

              <div className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-bone-dim">
                  <MapPin size={14} className="text-signal" />
                  <span>Headquarters</span>
                </div>
                <p className="font-display text-sm font-bold text-bone">
                  Nayapalli, Bhubaneswar
                </p>
                <span className="text-[11px] text-bone-faint">Odisha, India</span>
              </div>

              <div className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-bone-dim">
                  <Headphones size={14} className="text-signal" />
                  <span>Support Desk</span>
                </div>
                <p className="font-display text-sm font-bold text-bone">
                  24/7 Priority Support
                </p>
                <span className="text-[11px] text-bone-faint">Under 15 min response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="rounded-3xl border border-line bg-surface p-8 shadow-xs sm:p-10">
          <div className="mb-6">
            <h3 className="font-display text-xl font-bold text-bone">Tell us about your project</h3>
            <p className="mt-1 text-xs text-bone-dim">
              Whether it&apos;s a new web platform, digital marketing overhaul, or custom software solution, we start every engagement with a free scoping call.
            </p>
          </div>

          {submitted ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal-dim text-signal">
                <CheckCircle2 size={32} />
              </span>
              <h3 className="font-display text-2xl font-bold text-bone">
                Project inquiry received
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-bone-dim">
                Thank you for reaching out, <span className="font-medium text-bone">{form.name}</span>.
                Our team is reviewing your project details and will be in touch at{' '}
                <span className="font-mono text-bone">{form.email}</span> within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initialState)
                }}
                className="mt-4 rounded-full border border-line px-6 py-2.5 font-display text-xs font-semibold text-bone hover:border-bone cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
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
                  className={inputClass(Boolean(errors.name))}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="e.g. Prakash Sahoo"
                />
              </Field>

              {/* Company */}
              <Field label="Company / Business Name" htmlFor="company">
                <input
                  id="company"
                  className={inputClass(false)}
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="e.g. Infinity Space"
                />
              </Field>

              {/* Email */}
              <Field label="Work Email *" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  className={inputClass(Boolean(errors.email))}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="name@company.com"
                />
              </Field>

              {/* Phone */}
              <Field label="Phone / WhatsApp" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  className={inputClass(false)}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                />
              </Field>

              {/* Service Type */}
              <div className="sm:col-span-2">
                <Field
                  label="Service Needed *"
                  htmlFor="projectType"
                  error={errors.projectType}
                >
                  <select
                    id="projectType"
                    className={inputClass(Boolean(errors.projectType))}
                    value={form.projectType}
                    onChange={(e) => update('projectType', e.target.value)}
                  >
                    <option value="">Select a service category</option>
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <Field label="Project Overview *" htmlFor="message" error={errors.message}>
                  <textarea
                    id="message"
                    rows={4}
                    className={inputClass(Boolean(errors.message))}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your project, goals, and target timeline..."
                  />
                </Field>
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-signal px-7 py-3.5 font-display text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-signal/90 hover:shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>

      {/* Newsletter Subscription Strip */}
      <Container className="mt-12 sm:mt-14">
        <div className="rounded-3xl border border-line bg-ink-soft p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-signal">
              Join Our Newsletter
            </span>
            <h4 className="mt-1 font-display text-xl font-bold text-bone">
              Stay ahead of digital growth &amp; tech trends
            </h4>
            <p className="mt-1 text-xs text-bone-dim">
              Get updates about new projects, articles, and latest technology insights. No spam, ever.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto items-center gap-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full md:w-72 rounded-xl border border-line bg-surface px-4 py-2.5 text-xs text-bone placeholder:text-bone-faint focus:border-signal focus:outline-hidden"
            />
            <button
              type="submit"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-bone px-5 py-2.5 font-display text-xs font-semibold text-white transition-colors hover:bg-signal cursor-pointer"
            >
              {newsletterSuccess ? (
                <>
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="font-display text-xs font-semibold text-bone">
        {label}
      </label>
      {children}
      {error ? <span className="text-[11px] text-red-500">{error}</span> : null}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-surface px-4 py-2.5 text-xs text-bone placeholder:text-bone-faint transition-colors focus:outline-hidden ${
    hasError
      ? 'border-red-400 focus:border-red-400'
      : 'border-line focus:border-signal focus:ring-1 focus:ring-signal/20'
  }`
}
