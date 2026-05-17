import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { CategoryCard } from '@/components/category-card'

export const metadata: Metadata = {
  title: 'Ferestre Termopan Premium | Distriplast Sud',
  description: 'Ferestre termopan din PVC premium cu geam dublu și tripan. Izolație termică superioară și montaj profesionist în Alexandria și Teleorman.',
}

const categories = [
  {
    title: 'Ferestre Tripan',
    description: 'Performanță maximă cu trei straturi de sticlă pentru izolație excelentă.',
    href: '/ferestre-termopan/ferestre-tripan',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: 'square',
  },
  {
    title: 'Ferestre Oscilobatante',
    description: 'Sistem versatil cu deschidere dublă: batantă și basculantă.',
    href: '/ferestre-termopan/ferestre-oscilobatante',
    image: 'https://images.unsplash.com/photo-600566753190-17f0baa2a6c3?w=800&q=80',
    icon: 'rotate-ccw',
  },
  {
    title: 'Ferestre Arcuite',
    description: 'Design unic pentru arhitecturi speciale și construcții clasice.',
    href: '/ferestre-termopan/ferestre-arcuite',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    icon: 'circle-dot',
  },
  {
    title: 'Ferestre Glisante',
    description: 'Economie de spațiu și deschidere maximă pentru vedere panoramică.',
    href: '/ferestre-termopan/ferestre-glisante',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    icon: 'sliders-horizontal',
  },
]

export default function FerestreTermopanPage() {
  return (
    <PageLayout>
      <PageHero
        title="Ferestre Termopan Premium"
        subtitle="Colecția Noastră"
        description="Ferestre din PVC cu geam dublu și tripan pentru izolație termică și fonică superioară. Sisteme moderne cu tehnologie europeană."
        breadcrumbs={[{ label: 'Ferestre Termopan' }]}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.href} {...category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Beneficiile Ferestrelor Noastre Premium
              </h2>
              <ul className="space-y-4">
                {[
                  'Izolație termică cu coeficient Uw până la 0.9 W/m²K',
                  'Reducerea zgomotului exterior cu până la 45 dB',
                  'Economii de până la 40% la energia termică',
                  'Garanție extinsă până la 15 ani',
                  'Montaj profesionist de către echipe certificate',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
                alt="Ferestre premium"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
