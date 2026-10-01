import { ArrowLeft, Check, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Business } from '@/data/businesses'
import { icons } from '@/lib/icons'
import { accentThemes, cn } from '@/lib/theme'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import CTASection from '@/components/ui/CTASection'
import ImageSlider from '@/components/ui/ImageSlider'
import SectionHeading from '@/components/ui/SectionHeading'
import SmartImage from '@/components/ui/SmartImage'
import { useLanguage } from '@/lib/language'

interface BusinessDetailProps {
  business: Business
}

/**
 * Shared detail layout used by every /businesses/:slug page.
 * Pages stay thin: they only look up the business and render this.
 */
export default function BusinessDetail({ business }: BusinessDetailProps) {
  const theme = accentThemes[business.accent]
  const Icon = icons[business.icon] ?? Sparkles
  const { t } = useLanguage()
  const heroImages = business.heroImages ?? []
  const hasHeroImages = heroImages.length > 0

  return (
    <>
      {/* Hero — optional 4s image slideshow behind the heading when heroImages exist */}
      <section
        className={cn(
          'relative overflow-hidden',
          hasHeroImages ? 'bg-brand-950' : cn('bg-gradient-to-r', theme.gradient),
        )}
      >
        {hasHeroImages ? (
          <ImageSlider images={heroImages} gradient={theme.gradient} />
        ) : null}
        {/* Readability overlay / decorative highlight */}
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0',
            hasHeroImages
              ? 'bg-gradient-to-r from-brand-950/90 via-brand-950/75 to-brand-950/45'
              : 'bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_55%)]',
          )}
        />
        <Container className="relative py-16 sm:py-20">
          <Link
            to="/businesses"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            {t('All businesses')}
          </Link>
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Icon aria-hidden="true" className="size-7 text-white" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                {t('Our Businesses')}
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {business.name}
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {t(business.tagline)}
          </p>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          {/* Own image set, repeating as a slideshow — fills the area that
              previously had no image (falls back to placeholder for
              businesses without images yet). */}
          {hasHeroImages ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <ImageSlider images={heroImages} gradient={theme.gradient} />
            </div>
          ) : (
            <SmartImage
              src={business.image}
              alt={business.name}
              gradient={theme.gradient}
              label={business.shortName}
              className="aspect-[4/3] w-full rounded-2xl shadow-lg"
            />
          )}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About"
              title={`${t('About')} ${business.shortName}`}
            />
            <p className="mt-6 leading-relaxed text-slate-600">{t(business.about)}</p>

            <h3 className="mt-8 text-lg font-bold text-slate-900">{t('Why choose us')}</h3>
            <ul className="mt-4 space-y-3">
              {business.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-slate-700">
                  <span
                    className={cn(
                      'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                      theme.soft,
                      theme.text,
                    )}
                  >
                    <Check aria-hidden="true" className="size-3" />
                  </span>
                  {t(highlight)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      {/* Services */}
      <section className={cn('border-y py-16 sm:py-20', theme.soft)}>
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Our Services"
            description="A snapshot of what this business provides to customers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className={cn('mb-4 block h-1 w-10 rounded-full', theme.dot)}
                />
                <h3 className="font-bold text-slate-900">{t(service)}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact strip */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Visit us" title="Get in touch" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {business.contact.phone ? (
              <a
                href={`tel:${business.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <Phone aria-hidden="true" className={cn('size-5', theme.text)} />
                <span className="text-sm font-semibold text-slate-800">
                  {business.contact.phone}
                </span>
              </a>
            ) : null}
            {business.contact.email ? (
              <a
                href={`mailto:${business.contact.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <Mail aria-hidden="true" className={cn('size-5', theme.text)} />
                <span className="text-sm font-semibold text-slate-800">
                  {business.contact.email}
                </span>
              </a>
            ) : null}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <MapPin aria-hidden="true" className={cn('size-5 shrink-0', theme.text)} />
              <span className="text-sm font-semibold text-slate-800">
                  {business.contact.address ?? t(business.contact.hours ?? 'See contact page')}
              </span>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button to="/contact" icon={Phone}>
              {t('Enquire About')} {business.shortName}
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />

    </>
  )
}
