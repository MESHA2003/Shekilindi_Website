import { getBusinessBySlug } from '@/data/businesses'
import BusinessDetail from '@/components/business/BusinessDetail'

export default function HerbalClinic() {
  const business = getBusinessBySlug('herbal-clinic')

  if (!business) return null
  return <BusinessDetail business={business} />
}
