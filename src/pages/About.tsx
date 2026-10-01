import { Eye, Goal, Handshake, HeartHandshake, ShieldCheck, Users } from 'lucide-react'
import { siteInfo } from '@/data/site'
import Container from '@/components/ui/Container'
import CTASection from '@/components/ui/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/lib/language'

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We do what is right — honestly, fairly and consistently.',
  },
  {
    icon: HeartHandshake,
    title: 'Care',
    description: 'Every customer and colleague is treated with respect and warmth.',
  },
  {
    icon: Goal,
    title: 'Excellence',
    description: 'We hold every business unit to the same high standard of quality.',
  },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            {t('About Us')}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {siteInfo.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {t(siteInfo.tagline)}
          </p>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title="Who we are" />
            <p className="mt-6 leading-relaxed text-slate-600">
              {t('SHEKILINDI COMPANY LIMITED is a multi-business company built on a simple belief: that people deserve quality products, reliable services and trusted solutions — wherever they shop, stay, heal or do business.')}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t('Through its family of businesses, the company serves communities with consistency and care, growing steadily while staying true to the values it was founded on.')}
            </p>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our Direction" title="Mission & Vision" />
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Goal aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold">{t('Our Mission')}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t('To deliver quality products and reliable services that make everyday life easier — through businesses people can trust.')}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gold-500 text-brand-950">
                    <Eye aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold">{t('Our Vision')}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t('To be a leading home-grown company known for excellence, honesty and service across every business we operate.')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Values */}
      <section className="border-y bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Our core values"
            description="The principles shared by every business under the Shekilindi name."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <value.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{t(value.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(value.description)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Users, label: 'Business units', value: '5' },
              { icon: Handshake, label: 'Communities served', value: 'Many' },
              { icon: Goal, label: 'Shared standard', value: 'One' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 p-8 text-center text-white"
              >
                <stat.icon aria-hidden="true" className="mx-auto size-6 text-gold-400" />
                <p className="mt-3 font-display text-4xl font-extrabold">{t(stat.value)}</p>
                <p className="mt-1 text-sm text-brand-200">{t(stat.label)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's build something together"
        description="Partner with a company that values quality, consistency and trust."
      />

    </>
  )
}
