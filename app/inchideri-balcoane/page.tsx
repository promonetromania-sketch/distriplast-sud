import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { CategoryCard } from '@/components/category-card'
import { Home, TreePine, Castle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Închideri Balcoane și Terase | Distriplast Sud',
  description: 'Închideri profesionale pentru balcoane, terase și foișoare cu sisteme termopan premium. Soluții elegante pentru extinderea spațiului locuibil.',
}

const categories = [
  {
    title: 'Închideri Balcoane',
    description: 'Transformă balconul într-un spațiu confortabil și utilizabil tot anul.',
    href: '/inchideri-balcoane',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    icon: Home,
  },
  {
    title: 'Închideri Terase',
    description: 'Soluții elegante pentru terase cu sisteme culisante și fixe.',
    href: '/inchideri-terase',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    icon: TreePine,
  },
  {
    title: 'Închideri Foișoare',
    description: 'Protecție și confort pentru foișoarele din grădină.',
    href: '/inchideri-foisoare',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    icon: Castle,
  },
]

export default function InchideriBalcoanePage() {
  return (
    <PageLayout>
      <PageHero
        title="Închideri Balcoane și Terase"
        subtitle="Extinde-ți Spațiul"
        description="Transformă balcoanele și terasele în spații locuibile și confortabile cu sistemele noastre premium de închidere din PVC și sticlă."
        breadcrumbs={[{ label: 'Închideri Terase' }]}
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.href} {...category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Avantajele Închiderilor Premium
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Spațiu Suplimentar', description: 'Metri pătrați utilizabili în plus' },
              { title: 'Protecție Completă', description: 'Împotriva intemperiilor și poluării' },
              { title: 'Eficiență Energetică', description: 'Izolație termică superioară' },
              { title: 'Valoare Adăugată', description: 'Crește valoarea proprietății' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
