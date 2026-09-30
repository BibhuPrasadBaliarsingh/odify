import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  className?: string
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
  onClick?: () => void
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-signal text-[#0a0b0d] font-semibold hover:bg-bone hover:text-white shadow-[0_2px_12px_rgba(245,158,11,0.28)]',
  secondary:
    'border border-line text-bone hover:border-bone hover:bg-surface-soft bg-transparent',
  ghost: 'text-bone-dim hover:text-bone hover:bg-surface-soft/60 bg-transparent',
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  style,
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
        style={style}
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
      style={style}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
