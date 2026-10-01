import { cn } from '@/lib/theme'
import { useLanguage } from '@/lib/language'

interface SectionHeadingProps {
  /** Small label above the title */
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'
  const { t } = useLanguage()

  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
          {t(eyebrow)}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {t(title)}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed text-slate-600 sm:text-lg', centered && 'mx-auto')}>
          {t(description)}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className={cn(
          'mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-gold-500',
          centered && 'mx-auto',
        )}
      />
    </div>
  )
}
