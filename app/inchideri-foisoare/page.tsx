import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Închideri Foișoare | Distriplast Sud',
  description: 'Închideri pentru foișoare din grădină cu sisteme termopan elegante. Protecție și confort în Alexandria și Teleorman.',
}

export default function InchideriFoisoarePage() {
  return (
    <PageLayout>
      <PageHero
        title="Închideri Foișoare"
        subtitle="Confort în Natură"
        description="Protejează foișorul din grădină cu sisteme elegante de închidere care păstrează vederea și conexiunea cu natura."
        breadcrumbs={[
          { label: 'Închideri Terase', href: '/inchideri-balcoane' },
          { label: 'Închideri Foișoare' },
        ]}
      />
      <ProductPageTemplate
        title="Închideri pentru Foișoare și Pergole"
        subtitle="Refugiu Tot Anul"
        description="Foișorul devine un spațiu utilizabil în orice sezon cu sistemele noastre de închidere. Păstrăm farmecul construcției originale adăugând funcționalitate."
        features={[
          'Sisteme adaptate formei foișorului',
          'Panouri de sticlă fixe sau mobile',
          'Uși de acces culisante sau batante',
          'Posibilitate de ventilație naturală',
          'Integrare cu structura existentă',
          'Finisaje potrivite cu stilul foișorului',
        ]}
        benefits={[
          { title: 'Protecție Completă', description: 'Împotriva ploii, vântului și insectelor.' },
          { title: 'Utilizare Extinsă', description: 'Bucură-te de foișor tot anul.' },
          { title: 'Vedere Neobstrucționată', description: 'Sticlă transparentă pentru conexiune cu grădina.' },
          { title: 'Personalizare', description: 'Soluții pentru orice tip de foișor.' },
          { title: 'Întreținere Minimă', description: 'Materiale durabile și ușor de curățat.' },
          { title: 'Valoare Adăugată', description: 'Spațiu funcțional în aer liber.' },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
