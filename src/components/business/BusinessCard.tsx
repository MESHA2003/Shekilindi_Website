import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Business } from '@/data/businesses'
import { icons } from '@/lib/icons'
import { accentThemes, cn } from '@/lib/theme'
import SmartImage from '@/components/ui/SmartImage'

interface BusinessCardProps {
  business: Business
  className?: string
}

export default function BusinessCard({ business, className }: BusinessCardProps) {
  const theme = accentThemes[business.accent]
  const Icon = icons[business.icon] ?? ArrowRight

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative">
        {/* Prefer the business's own image set (heroImages) so cards show a
            real photo; falls back to the public-path placeholder. */}
        <SmartImage
          src={business.heroImages?.[0] ?? business.image}
          alt={business.name}
          gradient={theme.gradient}
          label={business.shortName}
          className="aspect-[16/10] w-full"
        />
        <span
          className={cn(
            'absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/95 shadow-sm',
            theme.text,
          )}
        >
          <Icon aria-hidden="true" className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900">{business.name}</h3>
        <p className={cn('mt-1 text-sm font-semibold', theme.text)}>{business.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {business.description}
        </p>
        <Link
          to={`/businesses/${business.slug}`}
          className={cn(
            'mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-colors',
            theme.text,
            'hover:underline',
          )}
          aria-label={`Learn more about ${business.name}`}
        >
          Learn more
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  )
}
