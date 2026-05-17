import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Uși Culisante Termopan | Distriplast Sud',
  description: 'Uși culisante din PVC pentru terase și grădini. Sisteme HST și PSK premium cu deschidere maximă în Alexandria și Teleorman.',
}

export default function UsiCulisantePage() {
  return (
    <PageLayout>
      <PageHero
        title="Uși Culisante Premium"
        subtitle="Panorame Spectaculoase"
        description="Sisteme culisante de ultimă generație pentru deschideri maxime către terase și grădini. Glisare silențioasă și izolație perfectă."
        breadcrumbs={[
          { label: 'Uși Termopan', href: '/usi-termopan' },
          { label: 'Uși Culisante' },
        ]}
      />
      <ProductPageTemplate
        title="Sisteme Culisante HST & PSK"
        subtitle="Deschideri Maxime"
        description="Ușile culisante transformă orice cameră într-un spațiu deschis către natură. Cu tehnologie de glisare pe role premium, oferim deschideri de până la 6 metri."
        features={[
          'Deschidere maximă de până la 6 metri',
          'Glisare silențioasă pe role premium din oțel',
          'Prag îngropat sau redus pentru acces ușor',
          'Geam tripan cu coeficient Ug de 0.5 W/m²K',
          'Acționare manuală sau motorizată',
          'Sisteme HST (ridicare-culisare) și PSK (basculant-culisant)',
        ]}
        benefits={[
          {
            title: 'Vedere Panoramică',
            description: 'Suprafețe vitrate generoase pentru lumină naturală maximă.',
          },
          {
            title: 'Acces Facil',
            description: 'Praguri joase sau îngropate pentru acces fără bariere.',
          },
          {
            title: 'Economie de Spațiu',
            description: 'Fără spațiu pierdut pentru deschidere ca la ușile batante.',
          },
          {
            title: 'Izolație Premium',
            description: 'Performanță termică excelentă pentru toate anotimpurile.',
          },
          {
            title: 'Automatizare',
            description: 'Opțiune de acționare electrică cu telecomandă.',
          },
          {
            title: 'Design Modern',
            description: 'Profile subțiri pentru estetică minimalistă.',
          },
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
