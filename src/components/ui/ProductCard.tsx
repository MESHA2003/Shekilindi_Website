import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/data/products'
import { cn } from '@/lib/theme'
import SmartImage from '@/components/ui/SmartImage'
import { useLanguage } from '@/lib/language'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
    >
      <SmartImage
        src={product.image}
        alt={t(product.name)}
        label={t(product.category)}
        className="aspect-[4/3] w-full"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          {t(product.category)}
        </span>
        <h3 className="text-lg font-bold text-slate-900">{t(product.name)}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{t(product.description)}</p>
        <Link
          to={`/businesses/${product.businessSlug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
        >
          {t('View business')}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  )
}
