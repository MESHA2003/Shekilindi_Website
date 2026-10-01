import hardwareToolsImage from '@/assets/const1.jpg'
import buildingMaterialsImage from '@/assets/const2.jpg'
import officeSuppliesImage from '@/assets/nar1.jpg'
import artSuppliesImage from '@/assets/nar2.jpg'
import guestRoomsImage from '@/assets/hot1.jpg'
import diningImage from '@/assets/hot2.jpg'
import moneyTransferImage from '@/assets/wakala2.jpg'
import billPaymentsImage from '@/assets/wakala1.png'

export interface Product {
  id: string
  name: string
  category: string
  /** Business slug this product belongs to (see businesses.ts) */
  businessSlug: string
  description: string
  /** Vite-bundled asset URL or a path under public/images/products/. */
  image: string
}

export const products: Product[] = [
  {
    id: 'seaweed-skin-oil',
    name: 'Shekilindi Naturals Seaweed Skin Oil',
    category: 'Health & Wellness',
    businessSlug: 'herbal-clinic',
    description:
      'Nourishing seaweed skin oil from our Shekilindi Naturals range — moisturising, hydrating and renewing for everyday skin and hair care.',
    image: '/images/products/seaweed-skin-oil.jpg',
  },
  {
    id: 'cocoglow-oil',
    name: 'Shekilindi Naturals CocoGlow Oil',
    category: 'Health & Wellness',
    businessSlug: 'herbal-clinic',
    description:
      'Natural, pure and nourishing coconut oil for skin and hair — a daily favourite from our Shekilindi Naturals range.',
    image: '/images/products/cocoglow-oil.jpg',
  },
  {
    id: 'power-tools',
    name: 'Power & Hand Tools',
    category: 'Hardware',
    businessSlug: 'bosnia-hardware',
    description:
      'Drills, cutters, wrenches and everyday hand tools from dependable brands.',
    image: hardwareToolsImage,
  },
  {
    id: 'building-materials',
    name: 'Building Materials',
    category: 'Hardware',
    businessSlug: 'bosnia-hardware',
    description:
      'Cement, timber, roofing and finishing materials for projects of every size.',
    image: buildingMaterialsImage,
  },
  {
    id: 'office-supplies',
    name: 'Office & School Supplies',
    category: 'Stationery',
    businessSlug: 'bosnia-stationery',
    description:
      'Notebooks, files, writing instruments and desk essentials for work and study.',
    image: officeSuppliesImage,
  },
  {
    id: 'art-supplies',
    name: 'Pens, Markers & Art Supplies',
    category: 'Stationery',
    businessSlug: 'bosnia-stationery',
    description:
      'Pens, markers, highlighters, colours and art essentials for school, home and the office.',
    image: artSuppliesImage,
  },
  {
    id: 'guest-rooms',
    name: 'Guest Rooms',
    category: 'Hospitality',
    businessSlug: 'triple-twelve-hotel',
    description:
      'Clean, comfortable rooms prepared for a restful stay — single and double options.',
    image: guestRoomsImage,
  },
  {
    id: 'dining',
    name: 'Dining & Refreshments',
    category: 'Hospitality',
    businessSlug: 'triple-twelve-hotel',
    description:
      'Freshly prepared meals and refreshments served in a relaxed setting.',
    image: diningImage,
  },
  {
    id: 'money-transfer',
    name: 'Money Transfer Services',
    category: 'Financial',
    businessSlug: 'shekilindi-wakala',
    description:
      'Send and receive money quickly and securely at your neighbourhood wakala.',
    image: moneyTransferImage,
  },
  {
    id: 'bill-payments',
    name: 'Bills & Payments',
    category: 'Financial',
    businessSlug: 'shekilindi-wakala',
    description:
      'Convenient payment of utility bills, subscriptions and everyday transactions.',
    image: billPaymentsImage,
  },
]
