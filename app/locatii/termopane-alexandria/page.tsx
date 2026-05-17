import { Metadata } from "next"
import PageHero from "@/components/page-hero"
import PageLayout from "@/components/page-layout"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Termopane Alexandria | Ferestre și Uși PVC | Distriplast Sud",
  description: "Termopane de calitate în Alexandria. Ferestre și uși PVC, rulouri exterioare, închideri terase. Showroom, montaj profesional și service în zona Alexandria.",
}

const localitati = [
  "Alexandria", "Roșiori de Vede", "Turnu Măgurele", "Videle", "Zimnicea",
  "Drăgănești-Vlașca", "Buzescu", "Bujoru", "Cervenia", "Crângu",
  "Frăsinet", "Furculești", "Gratia", "Islaz", "Mavrodin",
  "Nanov", "Necșești", "Olteni", "Orbeasca", "Peretu"
]

export default function TermopaneAlexandriaPage() {
  return (
    <PageLayout>
      <PageHero
        title="Termopane Alexandria"
        subtitle="Showroom și Service Local"
        description="Suntem principalul furnizor de termopane din Alexandria și împrejurimi. Cu un showroom modern și echipă locală de montatori, oferim servicii complete pentru ferestre și uși PVC."
      />

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="bg-card rounded-xl p-8 border border-border">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Showroom Alexandria</h3>
              <p className="text-muted-foreground">
                Str. Dunării nr. 123<br />
                Alexandria, Teleorman<br />
                Cod poștal: 140001
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Direct</h3>
              <p className="text-muted-foreground mb-2">
                Telefon: <a href="tel:+40700000000" className="text-primary hover:underline">0700 000 000</a>
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:alexandria@distriplast.ro" className="text-primary hover:underline">alexandria@distriplast.ro</a>
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Program</h3>
              <p className="text-muted-foreground">
                Luni - Vineri: 08:00 - 18:00<br />
                Sâmbătă: 09:00 - 14:00<br />
                Duminică: Închis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Servicii Disponibile în <span className="text-primary">Alexandria</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Consultanță gratuită la showroom",
              "Măsurători gratuite la domiciliu",
              "Montaj profesional cu echipă locală",
              "Livrare rapidă din stoc",
              "Service și reparații în aceeași zi",
              "Garanție și suport post-vânzare",
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Zone de <span className="text-primary">Acoperire</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Livrăm și montăm termopane în Alexandria și toate localitățile din județul Teleorman
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {localitati.map((localitate) => (
              <span
                key={localitate}
                className="px-4 py-2 bg-card rounded-full border border-border text-sm"
              >
                {localitate}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vizitează Showroom-ul Nostru din Alexandria
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vino să vezi și să atingi produsele noastre. Echipa noastră te așteaptă cu sfaturi personalizate și oferte speciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Programează Vizită
            </Link>
            <a
              href="tel:+40700000000"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Sună Acum
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
