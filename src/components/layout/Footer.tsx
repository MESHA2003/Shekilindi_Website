import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { businesses } from '@/data/businesses'
import { navLinks, siteInfo } from '@/data/site'
import Container from '@/components/ui/Container'
import { useLanguage } from '@/lib/language'

// Computed once at module scope so render stays pure.
const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-950 text-brand-200">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-white/25">
              <img src={siteInfo.logo} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-extrabold tracking-wide text-white">
                SHEKILINDI
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-400">
                Company Limited
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-300">
            {t(siteInfo.description)}
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label={t('Footer navigation')}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {t('Quick Links')}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-brand-300 transition-colors hover:text-gold-400"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Businesses */}
        <nav aria-label={t('Our businesses')}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {t('Our Businesses')}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {businesses.map((business) => (
              <li key={business.slug}>
                <Link
                  to={`/businesses/${business.slug}`}
                  className="text-sm text-brand-300 transition-colors hover:text-gold-400"
                >
                  {business.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {t('Contact')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <span>{siteInfo.contact.locations}</span>
            </li>
            {siteInfo.contact.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2.5">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-gold-400" />
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-gold-400" />
              <a
                href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\D/g, '')}`}
                className="transition-colors hover:text-gold-400"
              >
                {t('WhatsApp')}: {siteInfo.contact.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail aria-hidden="true" className="size-4 shrink-0 text-gold-400" />
              <a
                href={`mailto:${siteInfo.contact.email}`}
                className="transition-colors hover:text-gold-400"
              >
                {siteInfo.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-400 sm:flex-row">
          <p>
            © {year} {siteInfo.name}. {t('All rights reserved.')}
          </p>
          <p className="tracking-wide">{t(siteInfo.tagline)}</p>
        </Container>
      </div>
    </footer>
  )
}
