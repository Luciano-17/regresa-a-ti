import Seo from '../components/Seo'
import Hero from '../components/Hero'
import AboutPreview from '../components/home/AboutPreview'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import MissionVisionPreview from '../components/home/MissionVisionPreview'
import FinalCta from '../components/home/FinalCta'

export default function Home() {
  return (
    <>
      <Seo
        title="Terapias integrales y movimiento consciente online"
        description="Sesiones online individuales de terapia integral y movimiento consciente con Guadalupe Zulatto, para volver a escucharte y conocerte."
      />
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <TestimonialsSection />
      <MissionVisionPreview />
      <FinalCta />
    </>
  )
}
