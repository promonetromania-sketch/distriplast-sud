import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Ferestre Tripan | Distriplast Sud',
  description: 'Ferestre cu geam tripan pentru izolație termică maximă. Eficiență energetică superioară în Alexandria și Teleorman.',
}

export default function FerestreTripanPage() {
  return (
    <PageLayout>
      <PageHero
        title="Ferestre Tripan Premium"
        subtitle="Izolație Maximă"
        description="Ferestrele cu geam tripan oferă cea mai bună izolație termică și fonică, reducând semnificativ consumul de energie."
        breadcrumbs={[
          { label: 'Ferestre Termopan', href: '/ferestre-termopan' },
          { label: 'Ferestre Tripan' },
        ]}
      />
      <ProductPageTemplate
        title="Geam Tripan - Performanță Maximă"
        subtitle="Tehnologie Avansată"
        description="Ferestrele noastre cu geam tripan sunt alegerea ideală pentru eficiență energetică maximă. Trei straturi de sticlă cu gaz argon oferă izolație superioară."
        features={[
          'Trei straturi de sticlă cu gaz argon',
          'Coeficient Ug de până la 0.5 W/m²K',
          'Sticlă Low-E pe suprafețele interioare',
          'Distanțieri warm-edge pentru reducerea condensului',
          'Profile PVC cu 6-7 camere',
          'Clasă energetică A sau A+',
        ]}
        benefits={[
          { title: 'Economii 40%', description: 'Reducerea costurilor cu încălzirea.' },
          { title: 'Izolație Fonică', description: 'Reducerea zgomotului cu până la 45 dB.' },
          { title: 'Fără Condens', description: 'Tehnologie warm-edge anti-condens.' },
          { title: 'Confort Termic', description: 'Temperatură uniformă în cameră.' },
          { title: 'Ecologic', description: 'Amprentă de carbon redusă.' },
          { title: 'Valoare', description: 'Crește valoarea proprietății.' },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
