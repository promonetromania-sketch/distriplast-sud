import { Metadata } from "next"
import PageHero from "@/components/page-hero"
import CategoryCard from "@/components/category-card"
import PageLayout from "@/components/page-layout"
import { Wrench, Settings, PenTool } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicii Termopane | Reparații, Montaj, Reglaje | Distriplast Sud",
  description: "Servicii profesionale pentru termopane: reparații, montaj și reglaje. Echipă cu experiență și garanție pentru toate lucrările efectuate în Alexandria și Teleorman.",
}

const services = [
  {
    title: "Reparații Termopane",
    description: "Reparăm orice tip de fereastră sau ușă termopan: înlocuire geam spart, reparații mecanisme, etanșare și izolare termică.",
    href: "/servicii/reparatii-termopane",
    icon: Wrench,
  },
  {
    title: "Montaj Termopane",
    description: "Montaj profesional pentru ferestre și uși termopan, cu garanție și materiale de calitate superioară.",
    href: "/servicii/montaj-termopane",
    icon: PenTool,
  },
  {
    title: "Reglaje Termopane",
    description: "Reglaje fine pentru ferestre și uși care nu se închid corect, elimină curentul de aer și optimizează funcționarea.",
    href: "/servicii/reglaje-termopane",
    icon: Settings,
  },
]

export default function ServiciiPage() {
  return (
    <PageLayout>
      <PageHero
        title="Servicii Termopane"
        subtitle="Reparații, Montaj și Reglaje Profesionale"
        description="Oferim servicii complete pentru termopane: de la montaj profesional până la reparații și reglaje. Echipa noastră cu experiență garantează calitatea fiecărei lucrări."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <CategoryCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            De Ce Să Alegi <span className="text-primary">Serviciile Noastre</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Experiență", value: "15+ ani", description: "în domeniul termopanelor" },
              { title: "Garanție", value: "5 ani", description: "pentru toate lucrările" },
              { title: "Clienți Mulțumiți", value: "5000+", description: "proiecte finalizate" },
              { title: "Timp de Răspuns", value: "24h", description: "pentru urgențe" },
            ].map((stat) => (
              <div key={stat.title} className="text-center p-6 rounded-xl border border-border bg-background">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.title}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Procesul Nostru de <span className="text-primary">Lucru</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Consultație", description: "Discutăm cerințele și evaluăm situația" },
              { step: "02", title: "Ofertă", description: "Primești o ofertă detaliată și transparentă" },
              { step: "03", title: "Execuție", description: "Realizăm lucrarea cu profesionalism" },
              { step: "04", title: "Garanție", description: "Beneficiezi de garanție și suport" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
