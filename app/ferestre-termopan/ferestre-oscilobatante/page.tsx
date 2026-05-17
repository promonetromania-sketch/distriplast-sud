import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Ferestre Oscilobatante | Distriplast Sud',
  description: 'Ferestre oscilobatante cu deschidere dublă pentru ventilație optimă. Sisteme premium în Alexandria și Teleorman.',
}

export default function FerestreOscilobatantePage() {
  return (
    <PageLayout>
      <PageHero
        title="Ferestre Oscilobatante"
        subtitle="Ventilație Optimă"
        description="Sistemul oscilobatant oferă două moduri de deschidere - batantă pentru curățare și basculantă pentru ventilație sigură."
        breadcrumbs={[
          { label: 'Ferestre Termopan', href: '/ferestre-termopan' },
          { label: 'Ferestre Oscilobatante' },
        ]}
      />
      <ProductPageTemplate
        title="Sistem Oscilobatant"
        subtitle="Versatilitate Maximă"
        description="Cel mai popular sistem de deschidere pentru ferestre rezidențiale, oferind flexibilitate și funcționalitate într-un design elegant."
        features={[
          'Deschidere batantă spre interior',
          'Deschidere basculantă pentru ventilație',
          'Micro-ventilație pentru aerisire continuă',
          'Feronerie Roto NT sau Siegenia Aubi',
          'Mâner cu cheie pentru securitate',
          'Limitator de deschidere opțional',
        ]}
        benefits={[
          { title: 'Curățare Ușoară', description: 'Acces complet la ambele fețe ale geamului.' },
          { title: 'Ventilație Sigură', description: 'Aerisire fără risc de intruziune.' },
          { title: 'Securitate', description: 'Blocare în poziție basculantă.' },
          { title: 'Confort', description: 'Controlul fluxului de aer proaspăt.' },
          { title: 'Economie', description: 'Ventilație fără pierderi mari de căldură.' },
          { title: 'Fiabilitate', description: 'Mecanism testat pentru durabilitate.' },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
