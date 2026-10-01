import { X } from 'lucide-react'
import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, siteInfo } from '@/data/site'
import { cn } from '@/lib/theme'
import Button from '@/components/ui/Button'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { useLanguage } from '@/lib/language'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const location = useLocation()
  const { t } = useLanguage()

  // Close the menu whenever the route changes
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <div className={cn('fixed inset-0 z-50 lg:hidden', open ? '' : 'pointer-events-none')}>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <nav
        aria-label={t('Mobile navigation')}
        aria-hidden={!open}
        className={cn(
          'absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <span className="flex items-center gap-2.5">
            <span className="relative flex size-9 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
              <img src={siteInfo.logo} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-sm font-extrabold tracking-wide text-brand-900">
              SHEKILINDI
            </span>
          </span>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100"
            aria-label={t('Close menu')}
            onClick={onClose}
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'mb-1 block rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-700 hover:bg-slate-50',
                  )
                }
              >
                {t(link.label)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-100 px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <Button to="/contact" className="flex-1" onClick={undefined}>
              {t('Get in Touch')}
            </Button>
            <LanguageSwitcher />
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">{t(siteInfo.tagline)}</p>
        </div>
      </nav>
    </div>
  )
}
