import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
  onClick?: () => void
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-bone text-ink hover:bg-signal hover:text-bone shadow-[0_0_0_1px_rgba(243,242,238,0.08)]',
  secondary:
    'border border-line text-bone hover:border-bone-dim bg-transparent',
  ghost: 'text-bone-dim hover:text-bone bg-transparent',
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  type = 'button',
  disabled,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = `group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={classes}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
