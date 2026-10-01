import { useMemo, useState } from 'react'
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from '@/data/gallery'
import { cn } from '@/lib/theme'
import Container from '@/components/ui/Container'
import CTASection from '@/components/ui/CTASection'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/lib/language'

export default function Gallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState<GalleryCategory>('all')

  const items = useMemo(
    () => (active === 'all' ? gallery : gallery.filter((item) => item.category === active)),
    [active],
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            {t('Gallery')}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('A look inside our world')}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {t('People, products and places that make up Shekilindi.')}
          </p>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Photos"
            title="Company gallery"
            description="Select a category, then click any image to view it full size."
          />

          {/* Filter tabs */}
          <div
            className="mt-8 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={t('Gallery categories')}
          >
            {galleryCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                role="tab"
                aria-selected={active === category.value}
                onClick={() => setActive(category.value)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                  active === category.value
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                )}
              >
                {t(category.label)}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <GalleryGrid key={active} items={items} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
