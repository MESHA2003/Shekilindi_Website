import { ArrowRight } from 'lucide-react'
import { businesses } from '@/data/businesses'
import { gallery } from '@/data/gallery'
import { heroSlides } from '@/data/heroSlides'
import { products } from '@/data/products'
import { services } from '@/data/services'
import BusinessCard from '@/components/business/BusinessCard'
import HeroSlider from '@/components/home/HeroSlider'
import Container from '@/components/ui/Container'
import CTASection from '@/components/ui/CTASection'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/lib/language'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSlider slides={heroSlides} />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who we are"
            title="One company. Five trusted businesses."
            description="SHEKILINDI COMPANY LIMITED brings together a family of businesses — from health and hospitality to hardware, stationery and financial services — all held to the same standard of quality and care."
          />
        </Container>
      </section>

      {/* Businesses */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Businesses"
            title="Meet our business units"
            description="Each business serves its own community, backed by the same commitment to reliability."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => (
              <BusinessCard key={business.slug} business={business} />
            ))}
          </div>
        </Container>
      </section>

      {/* Products preview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Products"
              title="Quality products, every day"
              description="A snapshot of what our businesses offer."
            />
            <Button to="/products-services" variant="outline" icon={ArrowRight}>
              {t('View all products')}
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Reliable services you can count on"
            description="From consultations to printing, accommodation and financial services."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery preview */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside our world"
            description="People, products and places that make up Shekilindi."
          />
          <div className="mt-12">
            <GalleryGrid items={gallery.slice(0, 3)} />
          </div>
          <div className="mt-10 text-center">
            <Button to="/gallery" variant="outline" icon={ArrowRight}>
              {t('Browse the gallery')}
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
