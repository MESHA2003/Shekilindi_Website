import { getBusinessBySlug } from '@/data/businesses'
import BusinessDetail from '@/components/business/BusinessDetail'

export default function BosniaHardware() {
  const business = getBusinessBySlug('bosnia-hardware')

  if (!business) return null
  return <BusinessDetail business={business} />
}
