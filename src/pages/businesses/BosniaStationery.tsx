import { getBusinessBySlug } from '@/data/businesses'
import BusinessDetail from '@/components/business/BusinessDetail'

export default function BosniaStationery() {
  const business = getBusinessBySlug('bosnia-stationery')

  if (!business) return null
  return <BusinessDetail business={business} />
}
