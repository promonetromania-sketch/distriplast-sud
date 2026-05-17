import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Glafuri | Distriplast Sud',
  description: 'Glafuri interioare și exterioare din PVC, aluminiu și piatră. Finisaje premium în Alexandria și Teleorman.',
}

export default function GlafuriPage() {
  return (
    <PageLayout>
      <PageHero
        title="Glafuri Premium"
        subtitle="Finisaje Elegante"
        description="Completează tâmplăria cu glafuri de calitate din PVC, aluminiu sau piatră naturală pentru interior și exterior."
        breadcrumbs={[
          { label: 'Rulouri Exterioare', href: '/rulouri-exterioare' },
          { label: 'Glafuri' },
        ]}
      />
      <ProductPageTemplate
        title="Glafuri Interioare și Exterioare"
        subtitle="Detalii Care Contează"
        description="Glafurile sunt elementul final care definește aspectul tâmplăriei. Oferim soluții pentru interior și exterior în diverse materiale și finisaje."
        features={[
          'Glafuri PVC în diverse lățimi și culori',
          'Glafuri din aluminiu pentru exterior',
          'Glafuri din piatră naturală sau compozit',
          'Capace laterale incluse',
          'Rezistență la umiditate și UV',
          'Montaj profesional inclus',
        ]}
        benefits={[
          { title: 'Aspect Complet', description: 'Finisaj profesional pentru tâmplărie.' },
          { title: 'Protecție', description: 'Protejează peretele de infiltrații.' },
          { title: 'Durabilitate', description: 'Materiale rezistente în timp.' },
          { title: 'Ușor de Curățat', description: 'Suprafețe netede, igienice.' },
          { title: 'Varietate', description: 'Culori și texturi pentru orice stil.' },
          { title: 'Funcționalitate', description: 'Spațiu pentru plante sau decor.' },
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
