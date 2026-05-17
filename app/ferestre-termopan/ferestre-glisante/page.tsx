import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Ferestre Glisante | Distriplast Sud',
  description: 'Ferestre glisante din PVC pentru economie de spațiu și vedere panoramică. Sisteme premium în Alexandria și Teleorman.',
}

export default function FerestreGlisantePage() {
  return (
    <PageLayout>
      <PageHero
        title="Ferestre Glisante"
        subtitle="Economie de Spațiu"
        description="Sistemele glisante sunt perfecte pentru spații unde deschiderea batantă nu este practică, oferind funcționalitate maximă."
        breadcrumbs={[
          { label: 'Ferestre Termopan', href: '/ferestre-termopan' },
          { label: 'Ferestre Glisante' },
        ]}
      />
      <ProductPageTemplate
        title="Sisteme de Ferestre Glisante"
        subtitle="Practicalitate Maximă"
        description="Ferestrele glisante sunt soluția ideală pentru balcoane, bucătării sau orice spațiu unde deschiderea clasică ar ocupa prea mult loc."
        features={[
          'Glisare orizontală pe role din oțel',
          'Fără spațiu necesar pentru deschidere',
          'Posibilitate de două sau mai multe canate',
          'Sistem de blocare în orice poziție',
          'Plase țânțari integrate opțional',
          'Garnituri de etanșare pe tot perimetrul',
        ]}
        benefits={[
          { title: 'Spațiu Salvat', description: 'Nu necesită spațiu pentru deschidere.' },
          { title: 'Vedere Panoramică', description: 'Suprafețe vitrate generoase.' },
          { title: 'Ventilație', description: 'Controlul precis al deschiderii.' },
          { title: 'Securitate', description: 'Sistem de blocare integrat.' },
          { title: 'Durabilitate', description: 'Mecanism robust pentru uz intens.' },
          { title: 'Design', description: 'Linii curate și moderne.' },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
