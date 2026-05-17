import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { CategoryCard } from '@/components/category-card'
import { Square, Bug, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rulouri Exterioare și Accesorii | Distriplast Sud',
  description: 'Rulouri exterioare, plase țânțari și glafuri premium. Protecție și confort pentru casa ta din Alexandria și Teleorman.',
}

const categories = [
  {
    title: 'Rulouri Exterioare',
    description: 'Sisteme de umbrire și protecție cu acționare manuală sau electrică.',
    href: '/rulouri-exterioare',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    icon: Square,
  },
  {
    title: 'Plase Țânțari',
    description: 'Protecție împotriva insectelor cu sisteme fixe, rulou sau plisate.',
    href: '/plase-tantari',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    icon: Bug,
  },
  {
    title: 'Glafuri',
    description: 'Glafuri interioare și exterioare din PVC, aluminiu și piatră.',
    href: '/glafuri',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: Layers,
  },
]

export default function RulouriExterioarePage() {
  return (
    <PageLayout>
      <PageHero
        title="Rulouri Exterioare și Accesorii"
        subtitle="Protecție Premium"
        description="Completează sistemul tău de termopane cu rulouri exterioare, plase pentru insecte și glafuri de calitate superioară."
        breadcrumbs={[{ label: 'Rulouri Exterioare' }]}
        backgroundImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
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

      {/* Features */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Rulouri exterioare"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Accesorii Esențiale pentru Confort Total
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rulourile exterioare și accesoriile completează sistemul de termopane, oferind 
                protecție suplimentară împotriva razelor solare, a căldurilor excesive și a insectelor.
              </p>
              <ul className="space-y-3">
                {[
                  'Controlul luminii naturale și al temperaturii',
                  'Protecție împotriva insectelor în sezonul cald',
                  'Securitate suplimentară pentru ferestre',
                  'Finisaje elegante cu glafuri premium',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
