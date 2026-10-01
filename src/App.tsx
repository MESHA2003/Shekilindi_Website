import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { ScrollToTop } from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Businesses from '@/pages/Businesses'
import ProductsServices from '@/pages/ProductsServices'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import HerbalClinic from '@/pages/businesses/HerbalClinic'
import BosniaHardware from '@/pages/businesses/BosniaHardware'
import BosniaStationery from '@/pages/businesses/BosniaStationery'
import TripleTwelveHotel from '@/pages/businesses/TripleTwelveHotel'
import ShekilindiWakala from '@/pages/businesses/ShekilindiWakala'
import { LanguageProvider } from '@/lib/language'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            {/* Business detail pages */}
            <Route path="/businesses/herbal-clinic" element={<HerbalClinic />} />
            <Route path="/businesses/bosnia-hardware" element={<BosniaHardware />} />
            <Route path="/businesses/bosnia-stationery" element={<BosniaStationery />} />
            <Route path="/businesses/triple-twelve-hotel" element={<TripleTwelveHotel />} />
            <Route path="/businesses/shekilindi-wakala" element={<ShekilindiWakala />} />

            {/* Custom 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
