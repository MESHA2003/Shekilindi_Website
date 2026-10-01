import { businesses } from '@/data/businesses'
import BusinessCard from '@/components/business/BusinessCard'
import Container from '@/components/ui/Container'
import CTASection from '@/components/ui/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Businesses() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Our Businesses
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A family of businesses you can trust
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Five distinct businesses, one shared standard of quality and service.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Explore"
            title="Our business units"
            description="Select a business to learn more about its products, services and story."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => (
              <BusinessCard key={business.slug} business={business} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
