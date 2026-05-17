import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { ProductPageTemplate } from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Uși Exterior Termopan | Distriplast Sud',
  description: 'Uși de exterior din PVC cu securitate ridicată și izolație termică superioară. Uși de intrare premium în Alexandria și Teleorman.',
}

export default function UsiExteriorPage() {
  return (
    <PageLayout>
      <PageHero
        title="Uși Exterior Termopan"
        subtitle="Securitate și Eleganță"
        description="Uși de intrare robuste cu sisteme avansate de securitate, izolație termică excelentă și design modern pentru casa ta."
        breadcrumbs={[
          { label: 'Uși Termopan', href: '/usi-termopan' },
          { label: 'Uși Exterior' },
        ]}
      />
      <ProductPageTemplate
        title="Uși Exterior Premium"
        subtitle="Intrare în Siguranță"
        description="Ușile noastre de exterior oferă securitate maximă fără a compromite estetica. Cu încuietori multi-punct și profile ranforsate, casa ta este protejată."
        features={[
          'Profile PVC ranforsat cu 7 camere',
          'Încuietoare multi-punct cu cilindru anti-efracție',
          'Geam securizat tripan cu argon',
          'Prag din aluminiu cu rupere de punte termică',
          'Balamale ranforsate ascunse',
          'Clasă de securitate RC2 sau RC3',
        ]}
        benefits={[
          {
            title: 'Securitate Maximă',
            description: 'Sisteme anti-efracție certificate pentru protecție completă.',
          },
          {
            title: 'Izolație Superioară',
            description: 'Coeficient Ud excelent pentru economii la energie.',
          },
          {
            title: 'Rezistență la Intemperii',
            description: 'Materiale durabile care rezistă la UV, ploaie și frig.',
          },
          {
            title: 'Design Premium',
            description: 'Modele elegante cu panouri decorative sau geam.',
          },
          {
            title: 'Etanșeitate Perfectă',
            description: 'Garnituri triple pentru protecție împotriva curenților.',
          },
          {
            title: 'Garanție Extinsă',
            description: 'Până la 15 ani garanție pe produse și montaj.',
          },
        ]}
        images={[
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
        ]}
      />
    </PageLayout>
  )
}
