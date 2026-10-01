export interface Service {
  id: string
  title: string
  /** Business slug this service belongs to (see businesses.ts) */
  businessSlug: string
  description: string
  /** Lucide icon name (see src/lib/icons.ts) */
  icon: string
}

export const services: Service[] = [
  {
    id: 'herbal-consultations',
    title: 'Herbal Consultations',
    businessSlug: 'herbal-clinic',
    description:
      'One-on-one sessions with experienced practitioners to find the right natural approach for you.',
    icon: 'heart',
  },
  {
    id: 'wellness-advice',
    title: 'Wellness & Lifestyle Advice',
    businessSlug: 'herbal-clinic',
    description:
      'Practical guidance on nutrition, habits and everyday routines to support your wellbeing.',
    icon: 'sparkles',
  },
  {
    id: 'building-supply',
    title: 'Building Materials Supply',
    businessSlug: 'bosnia-hardware',
    description:
      'Reliable supply of cement, timber, roofing and finishing materials for any project.',
    icon: 'toolbox',
  },
  {
    id: 'tools-hardware',
    title: 'Tools & Hardware',
    businessSlug: 'bosnia-hardware',
    description:
      'Quality hand tools, power tools and fixings for professionals and DIY enthusiasts.',
    icon: 'wrench',
  },
  {
    id: 'printing-services',
    title: 'Printing & Photocopying',
    businessSlug: 'bosnia-stationery',
    description:
      'Fast, affordable printing and photocopying for documents of all sizes.',
    icon: 'printer',
  },
  {
    id: 'branding-services',
    title: 'Branding & Signage',
    businessSlug: 'bosnia-stationery',
    description:
      'Business cards, banners and branded materials that make your business stand out.',
    icon: 'megaphone',
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    businessSlug: 'triple-twelve-hotel',
    description:
      'Comfortable rooms with warm hospitality for business and leisure travellers.',
    icon: 'bed',
  },
  {
    id: 'dining-events',
    title: 'Dining & Events',
    businessSlug: 'triple-twelve-hotel',
    description:
      'Freshly prepared meals, refreshments and a welcoming space for small gatherings.',
    icon: 'utensils',
  },
  {
    id: 'money-transfers',
    title: 'Money Transfers',
    businessSlug: 'shekilindi-wakala',
    description:
      'Send and receive money quickly and securely through trusted networks.',
    icon: 'landmark',
  },
  {
    id: 'bill-payments',
    title: 'Bill & Utility Payments',
    businessSlug: 'shekilindi-wakala',
    description:
      'Settle utility bills, airtime and everyday payments without the long queues.',
    icon: 'receipt',
  },
]
