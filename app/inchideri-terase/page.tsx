import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Închideri Terase | Distriplast Sud',
  description: 'Închideri profesionale pentru terase cu sisteme termopan premium. Transformă terasa în spațiu utilizabil în Alexandria și Teleorman.',
}

export default function InchideriTerasePage() {
  return (
    <PageLayout>
      <PageHero
        title="Închideri Terase Premium"
        subtitle="Spațiu Extins"
        description="Transformă terasa într-un spațiu elegant și confortabil cu sistemele noastre de închidere din PVC și sticlă."
        breadcrumbs={[
          { label: 'Închideri Terase', href: '/inchideri-balcoane' },
          { label: 'Închideri Terase' },
        ]}
      />
      <ProductPageTemplate
        title="Sisteme de Închidere pentru Terase"
        subtitle="Extinde-ți Spațiul de Locuit"
        description="Închiderile de terase îți permit să te bucuri de spațiul exterior în orice anotimp. Oferim soluții cu sisteme fixe, culisante sau pliante."
        features={[
          'Sisteme fixe cu panouri mari de sticlă',
          'Sisteme culisante pentru deschidere maximă',
          'Sisteme pliante tip armonică',
          'Geam termoizolant dublu sau tripan',
          'Profile slim pentru vizibilitate maximă',
          'Integrare cu rulouri și plase',
        ]}
        benefits={[
          { title: 'Metri Pătrați Extra', description: 'Spațiu locuibil suplimentar.' },
          { title: 'Utilizare Tot Anul', description: 'Protecție împotriva vremii.' },
          { title: 'Lumină Naturală', description: 'Suprafețe vitrate generoase.' },
          { title: 'Flexibilitate', description: 'Deschidere completă în zilele frumoase.' },
          { title: 'Valoare Proprietate', description: 'Investiție care se rentabilizează.' },
          { title: 'Design Modern', description: 'Estetică premium pentru casa ta.' },
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
