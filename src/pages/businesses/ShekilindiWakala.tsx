import { getBusinessBySlug } from '@/data/businesses'
import BusinessDetail from '@/components/business/BusinessDetail'

export default function ShekilindiWakala() {
  const business = getBusinessBySlug('shekilindi-wakala')

  if (!business) return null
  return <BusinessDetail business={business} />
}
