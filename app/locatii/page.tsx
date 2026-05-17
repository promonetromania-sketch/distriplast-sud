import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { CategoryCard } from '@/components/category-card'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Locații | Distriplast Sud',
  description: 'Termopane în Alexandria și județul Teleorman. Găsește showroom-ul nostru și zonele de acoperire pentru servicii de livrare și montaj.',
}

const locations = [
  {
    title: 'Termopane Alexandria',
    description: 'Sediul nostru principal cu showroom complet. Vizitează-ne pentru a vedea toate produsele.',
    href: '/locatii/termopane-alexandria',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    icon: 'map-pin',
  },
  {
    title: 'Termopane Teleorman',
    description: 'Acoperim întregul județ Teleorman cu servicii complete de livrare și montaj profesionist.',
    href: '/locatii/termopane-teleorman',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    icon: 'map-pin',
  },
]

export default function LocatiiPage() {
  return (
    <PageLayout>
      <PageHero
        title="Locațiile Noastre"
        subtitle="Suntem Aproape de Tine"
        description="Cu sediul în Alexandria, acoperim întregul județ Teleorman cu servicii complete de consultanță, livrare și montaj profesionist pentru termopane."
        breadcrumbs={[{ label: 'Locații' }]}
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <CategoryCard key={location.href} {...location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Acoperire Completă în Teleorman
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Oferim servicii de consultanță, livrare și montaj în toate localitățile 
                din județul Teleorman. Deplasarea pentru măsurători este gratuită.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  'Alexandria',
                  'Turnu Măgurele',
                  'Roșiori de Vede',
                  'Videle',
                  'Zimnicea',
                  'Și alte localități',
                ].map((city, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-semibold text-lg mb-2">
                    Sediul Nostru Principal
                  </h3>
                  <p className="text-muted-foreground">
                    Alexandria, Teleorman<br />
                    Program: Luni - Vineri, 08:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
