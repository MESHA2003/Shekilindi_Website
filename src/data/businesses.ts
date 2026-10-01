import type { AccentKey } from '@/lib/theme'

// Detail-page hero slideshow images (bundled by Vite from src/assets)
import const1 from '@/assets/const1.jpg'
import const2 from '@/assets/const2.jpg'
import const3 from '@/assets/const3.jpg'
import const4 from '@/assets/const4.jpg'
import const5 from '@/assets/const5.jpg'
import hebral1 from '@/assets/hebral1.jpeg'
import hebral2 from '@/assets/hebral2.jpeg'
import hebral3 from '@/assets/hebral3.jpeg'
import hebral4 from '@/assets/hebral4.jpeg'
import hebral5 from '@/assets/hebral5.jpeg'
import wakala1 from '@/assets/wakala1.png'
import wakala2 from '@/assets/wakala2.jpg'
import wakala3 from '@/assets/wakala3.png'
import wakala4 from '@/assets/wakala4.png'
import wakala5 from '@/assets/wakala5.png'
import nar1 from '@/assets/nar1.jpg'
import nar2 from '@/assets/nar2.jpg'
import nar3 from '@/assets/nar3.jpg'
import nar4 from '@/assets/nar4.jpg'
import nar5 from '@/assets/nar5.jpg'
import hot1 from '@/assets/hot1.jpg'
import hot2 from '@/assets/hot2.jpg'
import hot3 from '@/assets/hot3.jpg'
import hot4 from '@/assets/hot4.jpg'
import hot5 from '@/assets/hot5.jpg'

export interface Business {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  /** Longer copy for the business detail page */
  about: string
  accent: AccentKey
  /** Lucide icon name (see src/lib/icons.ts) */
  icon: string
  /** Path under public/images/businesses/ */
  image: string
  /**
   * Optional auto-slideshow images for the detail-page hero.
   * Rendered as a 4s crossfade background (see components/ui/ImageSlider).
   */
  heroImages?: string[]
  /** Key selling points shown on cards and detail pages */
  highlights: string[]
  services: string[]
  contact: {
    phone?: string
    email?: string
    address?: string
    hours?: string
  }
}

export const businesses: Business[] = [
  {
    slug: 'herbal-clinic',
    name: 'Shekilindi Herbal Clinic',
    shortName: 'Herbal Clinic',
    tagline: 'Natural care, rooted in tradition',
    description:
      'A modern herbal clinic offering trusted natural remedies and personal wellness consultations delivered with care and professionalism.',
    about:
      'Shekilindi Herbal Clinic blends generations of herbal knowledge with modern standards of hygiene and service. Our team guides every visitor through a personalised consultation and recommends remedies suited to their needs — in a calm, welcoming environment.',
    accent: 'herbal',
    icon: 'leaf',
    image: '/images/businesses/herbal-clinic.jpg',
    heroImages: [hebral1, hebral2, hebral3, hebral4, hebral5],
    highlights: [
      'Personalised wellness consultations',
      'Carefully prepared herbal remedies',
      'Friendly, experienced practitioners',
    ],
    services: [
      'Herbal consultations',
      'Natural remedy preparation',
      'Wellness and lifestyle advice',
    ],
    contact: {
      hours: 'Mon – Sat: 8:00 – 18:00',
    },
  },
  {
    slug: 'bosnia-hardware',
    name: 'Bosnia Hardware',
    shortName: 'Bosnia Hardware',
    tagline: 'Building solutions you can rely on',
    description:
      'A full-range hardware store supplying quality tools, building materials and home improvement essentials at fair prices.',
    about:
      'Bosnia Hardware is a one-stop destination for builders, contractors and homeowners. From cement and steel to plumbing, electrical and hand tools, we keep the shelves stocked with brands you can trust — backed by practical advice from our staff.',
    accent: 'hardware',
    icon: 'hammer',
    image: '/images/businesses/bosnia-hardware.jpg',
    heroImages: [const1, const2, const3, const4, const5],
    highlights: [
      'Wide range of building materials',
      'Quality hand and power tools',
      'Bulk and trade pricing available',
    ],
    services: [
      'Building materials supply',
      'Tools and hardware',
      'Plumbing and electrical supplies',
      'Home improvement essentials',
    ],
    contact: {
      hours: 'Mon – Sat: 7:30 – 19:00',
    },
  },
  {
    slug: 'bosnia-stationery',
    name: 'Bosnia Stationery',
    shortName: 'Bosnia Stationery',
    tagline: 'Everything for work, school and print',
    description:
      'Office supplies, school essentials and professional printing services — helping students, businesses and organisations stay productive.',
    about:
      'Bosnia Stationery stocks the desk essentials, art supplies and office equipment that keep work and study moving. Our printing and branding service adds business cards, banners and branded materials produced to a professional standard.',
    accent: 'stationery',
    icon: 'pen',
    image: '/images/businesses/bosnia-stationery.jpg',
    heroImages: [nar1, nar2, nar3, nar4, nar5],
    highlights: [
      'Office and school supplies',
      'Professional printing services',
      'Custom branding and signage',
    ],
    services: [
      'Stationery and office supplies',
      'Printing and photocopying',
      'Branding and signage',
      'School and art supplies',
    ],
    contact: {
      hours: 'Mon – Sat: 8:00 – 18:30',
    },
  },
  {
    slug: 'triple-twelve-hotel',
    name: 'Triple Twelve Hotel',
    shortName: 'Triple Twelve Hotel',
    tagline: 'Comfort, hospitality and warm service',
    description:
      'A welcoming hotel offering clean, comfortable rooms, delicious dining and attentive service for business and leisure travellers.',
    about:
      'Triple Twelve Hotel provides a restful stay with well-kept rooms, friendly staff and convenient amenities. Whether you are visiting for business or leisure, our team makes sure every detail — from check-in to checkout — feels effortless.',
    accent: 'hotel',
    icon: 'hotel',
    image: '/images/businesses/triple-twelve-hotel.jpg',
    heroImages: [hot1, hot2, hot3, hot4, hot5],
    highlights: [
      'Comfortable, well-kept rooms',
      'On-site dining and refreshments',
      'Warm, attentive hospitality',
    ],
    services: [
      'Accommodation',
      'Dining and room service',
      'Events and gatherings',
      'Guest support',
    ],
    contact: {
      hours: 'Reception: 24 hours',
    },
  },
  {
    slug: 'shekilindi-wakala',
    name: 'Shekilindi Wakala',
    shortName: 'Shekilindi Wakala',
    tagline: 'Financial services, closer to you',
    description:
      'A convenient neighbourhood wakala providing money transfers, payments and everyday financial services you can trust.',
    about:
      'Shekilindi Wakala brings essential financial services to the heart of the community. Customers can send and receive money, pay bills and access everyday transactions quickly, securely and with a smile.',
    accent: 'wakala',
    icon: 'wallet',
    image: '/images/businesses/shekilindi-wakala.jpg',
    heroImages: [wakala1, wakala2, wakala3, wakala4, wakala5],
    highlights: [
      'Fast money transfers',
      'Bill payments and top-ups',
      'Secure, friendly service',
    ],
    services: [
      'Money transfers',
      'Bill and utility payments',
      'Mobile money services',
      'Account assistance',
    ],
    contact: {
      hours: 'Mon – Sat: 8:00 – 19:00',
    },
  },
]

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug)
}
