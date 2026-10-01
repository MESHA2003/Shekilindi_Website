import { Expand } from 'lucide-react'
import { useState } from 'react'
import type { GalleryItem } from '@/data/gallery'
import { cn } from '@/lib/theme'
import SmartImage from '@/components/ui/SmartImage'
import GalleryLightbox from '@/components/gallery/GalleryLightbox'
import { useLanguage } from '@/lib/language'

interface GalleryGridProps {
  items: GalleryItem[]
  className?: string
}

export default function GalleryGrid({ items, className }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-sm text-slate-500">
        {t('No images in this category yet.')}
      </p>
    )
  }

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            aria-label={`${t('Open image:')} ${t(item.title)}`}
          >
            <SmartImage
              src={item.image}
              alt={t(item.title)}
              label={t(item.title)}
              className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-brand-950/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-left text-sm font-bold text-white">{t(item.title)}</span>
              <Expand aria-hidden="true" className="size-5 text-gold-400" />
            </span>
          </button>
        ))}
      </div>

      <GalleryLightbox
        items={items}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
