import head1 from '@/assets/head1.png'
import head2 from '@/assets/head2.jpeg'
import head3 from '@/assets/head3.jpeg'
import head4 from '@/assets/head4.png'
import head5 from '@/assets/head5.png'

export interface HeroSlideCta {
  label: string
  /** Internal route */
  to: string
}

export interface HeroSlide {
  id: string
  /** Bundled asset URL (src/assets/head1 … head5) */
  image: string
  eyebrow: string
  title: string
  subtitle: string
  /** Tailwind gradient shown behind the image while it loads / as fallback */
  gradient: string
  primaryCta: HeroSlideCta
  secondaryCta: HeroSlideCta
}

/**
 * Home hero slides.
 * IMAGE + EYEBROW + TITLE + DESCRIPTION + CTAs form ONE slide and are
 * always driven by a single index in HeroSlider, so they can never go
 * out of sync.
 *
 * NOTE: all copy is reused from the existing site content — slides 1–3
 * are the original hero slides, slide 4 reuses the Products & Services
 * page copy, slide 5 reuses the CTA section copy.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: head1,
    eyebrow: 'Welcome to Shekilindi',
    title: 'Quality Products • Reliable Services • Trusted Solutions',
    subtitle:
      'A growing family of businesses serving customers with consistency, care and professionalism.',
    gradient: 'from-brand-800 via-brand-600 to-brand-900',
    primaryCta: { label: 'Explore Our Businesses', to: '/businesses' },
    secondaryCta: { label: 'Get in Touch', to: '/contact' },
  },
  {
    id: 'slide-2',
    image: head2,
    eyebrow: 'Five Businesses, One Standard',
    title: 'Everything you need, under one name',
    subtitle:
      'From health and hospitality to hardware, stationery and financial services — we deliver where it matters.',
    gradient: 'from-herbal-700 via-brand-800 to-brand-950',
    primaryCta: { label: 'Explore Our Businesses', to: '/businesses' },
    secondaryCta: { label: 'Get in Touch', to: '/contact' },
  },
  {
    id: 'slide-3',
    image: head3,
    eyebrow: 'Built on Trust',
    title: 'Solutions that grow with you',
    subtitle:
      'Whether you are a customer, partner or colleague, you can expect the same dependable service every time.',
    gradient: 'from-brand-900 via-gold-700 to-brand-950',
    primaryCta: { label: 'Explore Our Businesses', to: '/businesses' },
    secondaryCta: { label: 'Get in Touch', to: '/contact' },
  },
  {
    id: 'slide-4',
    image: head4,
    eyebrow: 'Products & Services',
    title: 'Quality products. Reliable services.',
    subtitle: 'Everything our businesses offer, in one place.',
    gradient: 'from-brand-800 via-brand-700 to-brand-950',
    primaryCta: { label: 'View all products', to: '/products-services' },
    secondaryCta: { label: 'Browse the gallery', to: '/gallery' },
  },
  {
    id: 'slide-5',
    image: head5,
    eyebrow: 'Contact',
    title: "Ready to work with us?",
    subtitle:
      'Whether you are a customer, partner or supplier — we would love to hear from you.',
    gradient: 'from-brand-900 via-gold-700 to-brand-950',
    primaryCta: { label: 'Contact Us', to: '/contact' },
    secondaryCta: { label: 'Explore Our Businesses', to: '/businesses' },
  },
]
