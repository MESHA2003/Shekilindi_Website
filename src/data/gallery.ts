import { products } from '@/data/products'

export type GalleryCategory = 'all' | 'businesses' | 'products' | 'events'

export interface GalleryItem {
  id: string
  /** Bundled asset URL or a path under public/images/gallery/. */
  image: string
  title: string
  category: Exclude<GalleryCategory, 'all'>
  /** Optional caption shown in the lightbox */
  caption?: string
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'businesses', label: 'Our Businesses' },
  { value: 'products', label: 'Products' },
  { value: 'events', label: 'Events & People' },
]

export const gallery: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: '/images/gallery/gallery-1.jpg',
    title: 'Our Team',
    category: 'events',
    caption: 'The Shekilindi team at our Herbal Clinic and Research Center.',
  },
  {
    id: 'gallery-2',
    image: '/images/gallery/gallery-2.jpg',
    title: 'Welcome Address',
    category: 'events',
    caption: 'Welcoming guests at a special event at our Herbal Clinic and Research Center.',
  },
  {
    id: 'gallery-3',
    image: '/images/gallery/gallery-3.jpg',
    title: 'Guest Speaker',
    category: 'events',
    caption: 'A guest speaker addressing the gathering.',
  },
  {
    id: 'gallery-4',
    image: '/images/gallery/gallery-4.jpg',
    title: 'Clinic & Research Center',
    category: 'businesses',
    caption: 'Our Shekilindi Herbal Clinic and Research Center storefront.',
  },
  {
    id: 'gallery-5',
    image: '/images/gallery/gallery-5.jpg',
    title: 'Community Turnout',
    category: 'events',
    caption: 'Neighbours, customers and well-wishers joining the celebration.',
  },
  {
    id: 'gallery-6',
    image: '/images/gallery/gallery-6.jpg',
    title: 'Wakala Services Point',
    category: 'businesses',
    caption: 'Mobile money and bill payments at our wakala service point.',
  },
  {
    id: 'gallery-7',
    image: '/images/gallery/gallery-7.jpg',
    title: 'Media Interviews',
    category: 'events',
    caption: 'Our team speaking with local TV and radio stations.',
  },
  ...products.map((product) => ({
    id: `product-${product.id}`,
    image: product.image,
    title: product.name,
    category: 'products' as const,
    caption: product.description,
  })),
]
