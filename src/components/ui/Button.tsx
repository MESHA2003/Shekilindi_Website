import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/theme'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  /** Internal route — renders a React Router <Link> */
  to?: string
  /** External URL — renders an <a> */
  href?: string
  variant?: Variant
  size?: Size
  /** Icon rendered after the label */
  icon?: LucideIcon
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-sm shadow-brand-600/20 hover:bg-brand-700',
  secondary:
    'bg-gold-500 text-brand-950 shadow-sm shadow-gold-500/20 hover:bg-gold-400',
  outline:
    'border border-brand-600/30 text-brand-700 hover:border-brand-600 hover:bg-brand-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className,
  type = 'button',
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
    </>
  )

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
