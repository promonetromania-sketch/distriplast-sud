import { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { PageHero } from '@/components/page-hero'
import { CategoryCard } from '@/components/category-card'

export const metadata: Metadata = {
  title: 'Uși Termopan Premium | Distriplast Sud',
  description: 'Uși termopan de interior și exterior din PVC premium. Design modern, izolație termică superioară și montaj profesionist în Alexandria și Teleorman.',
}

const categories = [
  {
    title: 'Uși Interior',
    description: 'Uși elegante pentru interiorul casei tale, cu design modern și finisaje premium.',
    href: '/usi-termopan/usi-interior',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    icon: 'door-open',
  },
  {
    title: 'Uși Exterior',
    description: 'Uși de intrare robuste și sigure, cu izolație termică și fonică superioară.',
    href: '/usi-termopan/usi-exterior',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    icon: 'door-closed',
  },
  {
    title: 'Uși Culisante',
    description: 'Sisteme culisante pentru spații generoase și acces facil la terase și grădini.',
    href: '/usi-termopan/usi-culisante',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    icon: 'sliders-horizontal',
  },
  {
    title: 'Uși Oscilobatante',
    description: 'Sisteme versatile cu deschidere dublă pentru ventilație optimă.',
    href: '/usi-termopan/usi-oscilobatante',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    icon: 'rotate-ccw',
  },
  {
    title: 'Modele Uși',
    description: 'Galerie completă cu toate modelele și culorile disponibile pentru uși.',
    href: '/usi-termopan/modele-usi',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    icon: 'palette',
  },
]

export default function UsiTermopanPage() {
  return (
    <PageLayout>
      <PageHero
        title="Uși Termopan Premium"
        subtitle="Colecția Noastră"
        description="Descoperă gama noastră completă de uși din PVC - de la uși de interior elegante până la sisteme culisante pentru terase. Calitate europeană și design modern."
        breadcrumbs={[{ label: 'Uși Termopan' }]}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.href} {...category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              De Ce Să Alegi Ușile Noastre?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ușile noastre sunt fabricate din profile PVC de cea mai înaltă calitate, 
              oferind durabilitate și eficiență energetică de top.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Izolație Termică Superioară',
                description: 'Profile multi-cameră și geamuri speciale pentru eficiență maximă.',
              },
              {
                title: 'Securitate Ridicată',
                description: 'Încuietori multi-punct și sticlă securizată pentru protecție completă.',
              },
              {
                title: 'Design Personalizabil',
                description: 'Varietate de culori, modele și accesorii pentru orice stil.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
                <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
