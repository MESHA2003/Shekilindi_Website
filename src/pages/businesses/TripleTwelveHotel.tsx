import { getBusinessBySlug } from '@/data/businesses'
import BusinessDetail from '@/components/business/BusinessDetail'

export default function TripleTwelveHotel() {
  const business = getBusinessBySlug('triple-twelve-hotel')

  if (!business) return null
  return <BusinessDetail business={business} />
}
