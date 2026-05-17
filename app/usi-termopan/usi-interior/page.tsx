import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Uși Interior Termopan | Distriplast Sud',
  description: 'Uși de interior din PVC cu design modern și finisaje elegante. Calitate premium și montaj profesionist în Alexandria și Teleorman.',
}

export default function UsiInteriorPage() {
  return (
    <PageLayout>
      <PageHero
        title="Uși Interior Termopan"
        subtitle="Design Elegant"
        description="Uși de interior elegante din PVC, proiectate pentru a completa orice stil de amenajare cu finisaje premium și funcționalitate superioară."
        breadcrumbs={[
          { label: 'Uși Termopan', href: '/usi-termopan' },
          { label: 'Uși Interior' },
        ]}
      />
      <ProductPageTemplate
        title="Uși Interior Premium"
        subtitle="Colecția de Interior"
        description="Ușile noastre de interior combină designul modern cu funcționalitatea practică. Disponibile într-o varietate de culori și finisaje pentru a se potrivi perfect cu stilul casei tale."
        features={[
          'Profile PVC de înaltă calitate cu 5-6 camere',
          'Geam decorativ sau mat pentru intimitate',
          'Feronerie premium cu mâner ergonomic',
          'Balamale reglabile pentru aliniament perfect',
          'Finisaje disponibile: alb, antracit, stejar, nuc',
          'Izolație fonică între camere',
        ]}
        benefits={[
          {
            title: 'Design Versatil',
            description: 'Modele moderne și clasice pentru orice tip de interior.',
          },
          {
            title: 'Întreținere Minimă',
            description: 'PVC-ul nu necesită vopsire sau tratamente speciale.',
          },
          {
            title: 'Durabilitate',
            description: 'Materiale rezistente la uzură și zgârieturi.',
          },
          {
            title: 'Izolație Fonică',
            description: 'Reducerea zgomotului între camere pentru confort sporit.',
          },
          {
            title: 'Personalizare',
            description: 'Dimensiuni și culori la comandă pentru orice spațiu.',
          },
          {
            title: 'Montaj Rapid',
            description: 'Instalare profesională în doar câteva ore.',
          },
        ]}
        images={[
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
