import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Uși Oscilobatante | Distriplast Sud',
  description: 'Uși oscilobatante din PVC cu deschidere dublă pentru ventilație optimă. Sisteme premium în Alexandria și Teleorman.',
}

export default function UsiOscilobatantePage() {
  return (
    <PageLayout>
      <PageHero
        title="Uși Oscilobatante"
        subtitle="Ventilație Optimă"
        description="Sisteme versatile cu deschidere dublă - batantă pentru acces și basculantă pentru ventilație controlată."
        breadcrumbs={[
          { label: 'Uși Termopan', href: '/usi-termopan' },
          { label: 'Uși Oscilobatante' },
        ]}
      />
      <ProductPageTemplate
        title="Sistem Oscilobatant Premium"
        subtitle="Flexibilitate Maximă"
        description="Ușile oscilobatante oferă cea mai mare flexibilitate de utilizare: deschidere completă pentru acces sau basculare pentru ventilație sigură și controlată."
        features={[
          'Deschidere batantă standard pentru acces',
          'Deschidere basculantă pentru ventilație',
          'Feronerie Roto sau Siegenia de calitate',
          'Mecanism de securitate împotriva deschiderii accidentale',
          'Poziție de micro-ventilație disponibilă',
          'Mâner ergonomic cu cheie opțională',
        ]}
        benefits={[
          {
            title: 'Ventilație Sigură',
            description: 'Aerisire controlată chiar și când nu ești acasă.',
          },
          {
            title: 'Deschidere Versatilă',
            description: 'Două moduri de deschidere într-un singur sistem.',
          },
          {
            title: 'Securitate pentru Copii',
            description: 'Opțiune de blocare împotriva deschiderii de către copii.',
          },
          {
            title: 'Etanșeitate Perfectă',
            description: 'Garnituri triple pentru izolație optimă în orice poziție.',
          },
          {
            title: 'Întreținere Ușoară',
            description: 'Curățare simplă datorită deschiderii complete.',
          },
          {
            title: 'Durabilitate',
            description: 'Mecanism testat pentru peste 50.000 de cicluri.',
          },
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
