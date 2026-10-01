import type { Service } from '@/data/services'
import { icons } from '@/lib/icons'
import { accentThemes, cn, type AccentKey } from '@/lib/theme'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/language'

interface ServiceCardProps {
  service: Service
  accent?: AccentKey
  className?: string
}

export default function ServiceCard({ service, accent = 'herbal', className }: ServiceCardProps) {
  const theme = accentThemes[accent]
  const Icon = icons[service.icon] ?? Sparkles
  const { t } = useLanguage()

  return (
    <article
      className={cn(
        'group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110',
          theme.soft,
          theme.text,
        )}
      >
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{t(service.title)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(service.description)}</p>
    </article>
  )
}
