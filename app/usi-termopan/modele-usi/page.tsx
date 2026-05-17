import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Modele Uși Termopan | Distriplast Sud',
  description: 'Galerie completă cu modele și culori pentru uși termopan. Alege designul perfect pentru casa ta în Alexandria și Teleorman.',
}

export default function ModeleUsiPage() {
  return (
    <PageLayout>
      <PageHero
        title="Modele Uși Termopan"
        subtitle="Galerie de Design"
        description="Explorează colecția noastră completă de modele, culori și finisaje pentru uși din PVC. Găsește inspirația pentru casa ta."
        breadcrumbs={[
          { label: 'Uși Termopan', href: '/usi-termopan' },
          { label: 'Modele Uși' },
        ]}
      />
      <ProductPageTemplate
        title="Galerie Modele Premium"
        subtitle="Design Personalizat"
        description="Oferim o varietate impresionantă de modele și culori pentru a satisface orice stil arhitectural - de la clasic la ultramodern."
        features={[
          'Culori standard: alb, antracit, stejar auriu, nuc',
          'Culori speciale: gri argintiu, mahon, verde, albastru',
          'Panouri decorative cu diverse modele',
          'Opțiuni de geam: clar, mat, ornamental, vitraliu',
          'Aplicații din inox pentru aspect modern',
          'Finisaj laminat sau vopsit în masă',
        ]}
        benefits={[
          {
            title: 'Varietate Largă',
            description: 'Peste 50 de combinații de culori și modele disponibile.',
          },
          {
            title: 'Culori Durabile',
            description: 'Finisaje rezistente la UV care nu se decolorează.',
          },
          {
            title: 'Personalizare',
            description: 'Posibilitate de culori RAL la comandă specială.',
          },
          {
            title: 'Mostre Disponibile',
            description: 'Vezi și atinge materialele în showroom-ul nostru.',
          },
          {
            title: 'Consultanță Design',
            description: 'Te ajutăm să alegi combinația perfectă.',
          },
          {
            title: 'Vizualizare 3D',
            description: 'Vezi cum va arăta ușa pe casa ta.',
          },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
