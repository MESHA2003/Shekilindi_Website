import { useLanguage, type Language } from '@/lib/language'
import { cn } from '@/lib/theme'

const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'sw', label: 'SW' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t('Language')}
      className="inline-flex shrink-0 rounded-full border border-slate-200 bg-slate-50 p-0.5"
    >
      {languages.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={t(option.value === 'en' ? 'Switch language to English' : 'Switch language to Swahili')}
          aria-pressed={language === option.value}
          onClick={() => setLanguage(option.value)}
          className={cn(
            'min-w-9 rounded-full px-2 py-1.5 text-xs font-bold transition-colors',
            language === option.value
              ? 'bg-brand-700 text-white'
              : 'text-slate-600 hover:bg-white hover:text-brand-700',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}