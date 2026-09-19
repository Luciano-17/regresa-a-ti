import Seo from '../components/Seo'
import { SEO_ROUTES } from '../lib/seo-routes'
import Hero from '../components/Hero'
import AboutPreview from '../components/home/AboutPreview'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import MissionVisionPreview from '../components/home/MissionVisionPreview'
import FinalCta from '../components/home/FinalCta'

export default function Home() {
  return (
    <>
      <Seo {...SEO_ROUTES['/']} />
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <TestimonialsSection />
      <MissionVisionPreview />
      <FinalCta />
    </>
  )
}
