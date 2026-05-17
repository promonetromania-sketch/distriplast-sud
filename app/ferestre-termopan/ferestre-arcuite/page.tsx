import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Ferestre Arcuite | Distriplast Sud',
  description: 'Ferestre arcuite și cu forme speciale din PVC. Soluții pentru arhitectură clasică și modernă în Alexandria și Teleorman.',
}

export default function FerestreArcuitePage() {
  return (
    <PageLayout>
      <PageHero
        title="Ferestre Arcuite"
        subtitle="Design Unic"
        description="Ferestre cu forme speciale pentru arhitecturi deosebite - arce, semicerc, triunghiuri și alte configurații personalizate."
        breadcrumbs={[
          { label: 'Ferestre Termopan', href: '/ferestre-termopan' },
          { label: 'Ferestre Arcuite' },
        ]}
      />
      <ProductPageTemplate
        title="Ferestre cu Forme Speciale"
        subtitle="Arhitectură Distinctivă"
        description="Realizăm ferestre în orice formă dorită - de la arce clasice la designuri contemporane. Tehnologia noastră permite îndoirea profilelor PVC păstrând performanța."
        features={[
          'Arce complete și segmente de arc',
          'Ferestre triunghiulare și trapezoidale',
          'Combinații cu ferestre dreptunghiulare',
          'Profile speciale pentru îndoire',
          'Geam termoizolant pentru orice formă',
          'Finisaje identice cu restul tâmplăriei',
        ]}
        benefits={[
          { title: 'Unicitate', description: 'Design personalizat pentru casa ta.' },
          { title: 'Versatilitate', description: 'Orice formă geometrică posibilă.' },
          { title: 'Armonie', description: 'Se potrivește cu stilul arhitectural existent.' },
          { title: 'Performanță', description: 'Aceeași izolație ca ferestrele standard.' },
          { title: 'Lumină', description: 'Maximizează lumina naturală în spații atipice.' },
          { title: 'Valoare', description: 'Element distinctiv pentru proprietate.' },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
