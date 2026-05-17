import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Plase Țânțari | Distriplast Sud',
  description: 'Plase pentru insecte - sisteme fixe, rulou și plisate. Protecție împotriva țânțarilor în Alexandria și Teleorman.',
}

export default function PlaseTantariPage() {
  return (
    <PageLayout>
      <PageHero
        title="Plase Țânțari Premium"
        subtitle="Protecție Anti-Insecte"
        description="Sisteme de plase pentru insecte de înaltă calitate - fixe, rulou sau plisate - pentru ferestre și uși de orice dimensiune."
        breadcrumbs={[
          { label: 'Rulouri Exterioare', href: '/rulouri-exterioare' },
          { label: 'Plase Țânțari' },
        ]}
      />
      <ProductPageTemplate
        title="Sisteme de Plase Anti-Insecte"
        subtitle="Vară Fără Griji"
        description="Bucură-te de aerul proaspăt fără vizite nedorite. Oferim plase pentru ferestre, uși și sisteme culisante, în variante fixe, rulou sau plisate."
        features={[
          'Rame din aluminiu de înaltă calitate',
          'Plasă din fibră de sticlă rezistentă',
          'Sisteme fixe cu montaj pe cadru',
          'Sisteme rulou cu acționare verticală',
          'Sisteme plisate pentru uși și ferestre mari',
          'Culori asortate cu tâmplăria existentă',
        ]}
        benefits={[
          { title: 'Protecție Eficientă', description: 'Barieră împotriva insectelor.' },
          { title: 'Ventilație Liberă', description: 'Aerisire fără obstacole.' },
          { title: 'Vizibilitate Bună', description: 'Plasă fină care nu obstrucționează vederea.' },
          { title: 'Ușor de Întreținut', description: 'Curățare simplă cu apă și săpun.' },
          { title: 'Durabilitate', description: 'Materiale rezistente la UV și intemperii.' },
          { title: 'Montaj Discret', description: 'Se integrează armonios cu ferestrele.' },
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
