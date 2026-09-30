import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export interface RevealOptions {
  trigger?: HTMLElement | string | null
  start?: string
  end?: string
  toggleActions?: string
  once?: boolean
  stagger?: number
  duration?: number
  delay?: number
  ease?: string
  y?: number
  x?: number
  scale?: number
  style?: 'fade-up' | 'scale-up' | 'stagger-list' | 'clip-reveal'
}

/**
 * Hook to apply subtle, premium GSAP ScrollTrigger reveals to an element or container
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const {
      start = 'top 85%',
      once = true,
      stagger = 0.08,
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      y = 45,
      scale = 0.95,
      style = 'fade-up',
    } = options

    const ctx = gsap.context(() => {
      if (style === 'fade-up') {
        gsap.fromTo(
          el,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: el,
              start,
              once,
            },
          }
        )
      } else if (style === 'scale-up') {
        gsap.fromTo(
          el,
          { opacity: 0, scale, y: y * 0.5 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: el,
              start,
              once,
            },
          }
        )
      } else if (style === 'stagger-list') {
        const items = el.children
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger,
              ease,
              scrollTrigger: {
                trigger: el,
                start,
                once,
              },
            }
          )
        }
      } else if (style === 'clip-reveal') {
        gsap.fromTo(
          el,
          { clipPath: 'inset(10% 0% 10% 0%)', opacity: 0, scale: 0.96 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            scale: 1,
            duration: 1.1,
            delay,
            ease,
            scrollTrigger: {
              trigger: el,
              start,
              once,
            },
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [options])

  return ref
}
