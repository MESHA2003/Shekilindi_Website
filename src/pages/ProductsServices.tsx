import { products } from '@/data/products'
import { services } from '@/data/services'
import { businesses } from '@/data/businesses'
import type { AccentKey } from '@/lib/theme'
import Container from '@/components/ui/Container'
import CTASection from '@/components/ui/CTASection'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'

/** Look up a business accent from its slug so cards match their brand colour. */
function accentFor(businessSlug: string): AccentKey {
  return businesses.find((b) => b.slug === businessSlug)?.accent ?? 'herbal'
}

export default function ProductsServices() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Products & Services
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quality products. Reliable services.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Everything our businesses offer, in one place.
          </p>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="What we offer"
            description="A selection of products available across our business units."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="How we can help"
            description="Professional services delivered by experienced teams."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accent={accentFor(service.businessSlug)}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
