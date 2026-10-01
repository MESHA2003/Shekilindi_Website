import { Menu, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, siteInfo } from '@/data/site'
import { cn } from '@/lib/theme'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import MobileMenu from '@/components/layout/MobileMenu'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { useLanguage } from '@/lib/language'

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow',
          scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent',
        )}
      >
        {/* Top bar — hidden on small screens */}
        <div className="hidden bg-brand-900 text-brand-100 lg:block">
          <Container className="flex items-center justify-between py-1.5 text-xs">
            <p className="font-medium tracking-wide">{t(siteInfo.tagline)}</p>
            <div className="inline-flex items-center gap-1.5 font-semibold text-gold-400">
              <Phone aria-hidden="true" className="size-3.5" />
              {siteInfo.contact.phones.map((phone, index) => (
                <span key={phone}>
                  {index > 0 ? ' / ' : null}
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-gold-300"
                  >
                    {phone}
                  </a>
                </span>
              ))}
            </div>
          </Container>
        </div>

        <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label={`${siteInfo.name} — ${t('Home').toLowerCase()}`}
          >
            {/* Round logo badge — real logo from public/images/logo/logo.png */}
            <span className="relative flex size-11 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200 sm:size-12">
              <img src={siteInfo.logo} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-extrabold tracking-wide text-brand-900 sm:text-base">
                SHEKILINDI
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                Company Limited
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label={t('Main navigation')} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                        isActive
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-brand-700',
                      )
                    }
                  >
                    {t(link.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button to="/contact" size="sm" className="hidden sm:inline-flex">
              {t('Get in Touch')}
            </Button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-brand-800 transition-colors hover:bg-brand-50 lg:hidden"
              aria-label={t(open ? 'Close menu' : 'Open menu')}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
