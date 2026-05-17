import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { CategoryCard } from '@/components/category-card'

export const metadata: Metadata = {
  title: 'Prețuri Termopane | Distriplast Sud',
  description: 'Consultă prețurile pentru ferestre, uși, rulouri exterioare și plase țânțari. Oferte competitive pentru Alexandria și Teleorman.',
}

const categories = [
  {
    title: 'Preț Ferestre',
    description: 'Prețuri pentru toate tipurile de ferestre din PVC cu geam dublu și tripan.',
    href: '/pret-termopane/ferestre',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: 'square',
  },
  {
    title: 'Preț Uși',
    description: 'Prețuri pentru uși de interior, exterior și sisteme culisante.',
    href: '/pret-termopane/usi',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    icon: 'door-open',
  },
  {
    title: 'Preț Rulouri Exterioare',
    description: 'Prețuri pentru sisteme de rulouri cu acționare manuală și electrică.',
    href: '/pret-termopane/rulouri-exterioare',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    icon: 'blinds',
  },
  {
    title: 'Preț Plase Țânțari',
    description: 'Prețuri pentru plase fixe, rulou și sisteme plisate anti-insecte.',
    href: '/pret-termopane/plase-tantari',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    icon: 'bug',
  },
]

export default function PretTermopanePage() {
  return (
    <PageLayout>
      <PageHero
        title="Prețuri Termopane"
        subtitle="Oferte Competitive"
        description="Consultă lista de prețuri pentru toate produsele noastre. Oferim raport calitate-preț excelent și posibilitatea de a solicita o ofertă personalizată."
        breadcrumbs={[{ label: 'Preț Termopane' }]}
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

      {/* Pricing Info */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Solicită o Ofertă Personalizată
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Prețurile finale depind de dimensiunile exacte, tipul de profil ales, 
              sistemul de geam și accesoriile dorite. Contactează-ne pentru o consultanță 
              gratuită și o ofertă adaptată nevoilor tale.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Măsurători Gratuite', description: 'La domiciliul tău' },
                { title: 'Ofertă Fără Obligații', description: 'Transparentă și detaliată' },
                { title: 'Prețuri Competitive', description: 'Direct de la producător' },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
