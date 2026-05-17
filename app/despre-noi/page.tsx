import { Metadata } from "next"
import PageHero from "@/components/page-hero"
import PageLayout from "@/components/page-layout"
import { Award, Users, Calendar, Target, CheckCircle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Despre Noi | Distriplast Sud - Termopane Premium Alexandria",
  description: "Află povestea Distriplast Sud - peste 15 ani de experiență în termopane premium. Calitate, profesionalism și dedicare pentru clienții din Alexandria și Teleorman.",
}

const stats = [
  { icon: Calendar, value: "15+", label: "Ani de Experiență" },
  { icon: Users, value: "5000+", label: "Clienți Mulțumiți" },
  { icon: Award, value: "10.000+", label: "Proiecte Finalizate" },
  { icon: Target, value: "100%", label: "Dedicare" },
]

const values = [
  {
    title: "Calitate Premium",
    description: "Folosim doar materiale de cea mai înaltă calitate de la producători europeni de renume precum REHAU și Veka.",
  },
  {
    title: "Profesionalism",
    description: "Echipa noastră este formată din specialiști certificați cu experiență vastă în domeniul tâmplăriei PVC.",
  },
  {
    title: "Transparență",
    description: "Oferim prețuri corecte și transparente, fără costuri ascunse. Ce vezi în ofertă, asta plătești.",
  },
  {
    title: "Garanție Extinsă",
    description: "Oferim garanție de 5 ani pentru produse și montaj, demonstrând încrederea în calitatea muncii noastre.",
  },
]

const timeline = [
  { year: "2009", title: "Înființare", description: "Am deschis prima noastră locație în Alexandria" },
  { year: "2012", title: "Extindere", description: "Am extins acoperirea în tot județul Teleorman" },
  { year: "2015", title: "Parteneriate", description: "Am devenit parteneri oficiali REHAU și Veka" },
  { year: "2018", title: "Showroom Modern", description: "Am inaugurat showroom-ul modern din Alexandria" },
  { year: "2021", title: "Digitalizare", description: "Am lansat platforma online pentru comenzi" },
  { year: "2024", title: "Lider Regional", description: "Am devenit liderul pieței din sudul României" },
]

export default function DespreNoiPage() {
  return (
    <PageLayout>
      <PageHero
        title="Despre Distriplast Sud"
        subtitle="Povestea Noastră"
        description="De peste 15 ani, Distriplast Sud este sinonim cu calitatea în domeniul termopanelor. Am construit o reputație solidă bazată pe profesionalism, integritate și dedicare față de clienții noștri."
      />

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-8 bg-card rounded-xl border border-border">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Misiunea <span className="text-primary">Noastră</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ne-am propus să oferim fiecărui client soluții de tâmplărie PVC care să combine 
                perfect eficiența energetică cu estetica modernă, la prețuri accesibile.
              </p>
              <p className="text-muted-foreground mb-6">
                Credem că fiecare casă merită ferestre și uși de calitate superioară, care să 
                ofere confort termic, izolare fonică și siguranță pentru întreaga familie.
              </p>
              <div className="space-y-3">
                {[
                  "Produse certificate și testate",
                  "Montaj realizat de specialiști",
                  "Consultanță personalizată gratuită",
                  "Service post-vânzare rapid",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png"
                alt="Showroom Distriplast Sud"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Valorile <span className="text-primary">Noastre</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Istoria <span className="text-primary">Noastră</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Echipa <span className="text-primary">Noastră</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Avem o echipă de peste 30 de profesioniști dedicați: consultanți, proiectanți, 
            montatori certificați și specialiști în service. Fiecare membru al echipei 
            contribuie la succesul proiectelor noastre.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { role: "Consultanți", count: "8", description: "Specialiști în relații cu clienții" },
              { role: "Montatori", count: "15", description: "Certificați și cu experiență" },
              { role: "Service", count: "7", description: "Tehnicieni pentru suport rapid" },
            ].map((team) => (
              <div key={team.role} className="p-8 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{team.count}</div>
                <div className="text-xl font-semibold mb-1">{team.role}</div>
                <div className="text-sm text-muted-foreground">{team.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
