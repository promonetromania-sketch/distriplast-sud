import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { CategoriesSection } from '@/components/sections/categories-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'
import { SystemsShowcaseSection } from '@/components/sections/systems-showcase-section'
import { SlidingSystemsSection } from '@/components/sections/sliding-systems-section'
import { EnergyEfficiencySection } from '@/components/sections/energy-efficiency-section'
import { ProjectsGallerySection } from '@/components/sections/projects-gallery-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CoverageAreasSection } from '@/components/sections/coverage-areas-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <WhyChooseUsSection />
        <SystemsShowcaseSection />
        <SlidingSystemsSection />
        <EnergyEfficiencySection />
        <ProjectsGallerySection />
        <TestimonialsSection />
        <CoverageAreasSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
