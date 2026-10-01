export const siteInfo = {
  name: 'SHEKILINDI COMPANY LIMITED',
  shortName: 'Shekilindi',
  tagline: 'Quality Products • Reliable Services • Trusted Solutions',
  description:
    'SHEKILINDI COMPANY LIMITED is a multi-business company delivering quality products, reliable services and trusted solutions through its family of brands.',
  /** Company logo (file: public/images/logo/logo.png) */
  logo: '/images/logo/logo.png',
  contact: {
    locations: 'DODOMA & LUSHOTO',
    phones: ['+255 702 824 959', '+255 790 324 956'],
    whatsapp: '+255 665 564 959',
    email: 'info@shekilindi.co.tz',
  },
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  },
} as const

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Businesses', to: '/businesses' },
  { label: 'Products & Services', to: '/products-services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]
