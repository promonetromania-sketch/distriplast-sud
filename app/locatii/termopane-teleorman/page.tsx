import { Metadata } from "next"
import PageHero from "@/components/page-hero"
import PageLayout from "@/components/page-layout"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Termopane Teleorman | Ferestre și Uși PVC în Tot Județul | Distriplast Sud",
  description: "Termopane în tot județul Teleorman. Livrare și montaj în Alexandria, Roșiori de Vede, Turnu Măgurele, Videle și toate localitățile. Prețuri de producător.",
}

const orase = [
  { name: "Alexandria", population: "45.000", distance: "Sediu Central" },
  { name: "Roșiori de Vede", population: "27.000", distance: "25 km" },
  { name: "Turnu Măgurele", population: "24.000", distance: "40 km" },
  { name: "Videle", population: "11.000", distance: "55 km" },
  { name: "Zimnicea", population: "14.000", distance: "50 km" },
]

const localitatiRurale = [
  "Drăgănești-Vlașca", "Buzescu", "Bujoru", "Cervenia", "Crângu",
  "Frăsinet", "Furculești", "Gratia", "Islaz", "Mavrodin",
  "Nanov", "Necșești", "Olteni", "Orbeasca", "Peretu",
  "Pietroșani", "Plosca", "Poeni", "Poroschia", "Putineiu",
  "Răsmirești", "Săceni", "Salcia", "Scrioaștea", "Segarcea Vale",
  "Sfântu Gheorghe", "Slobozia Mândra", "Smârdioasa", "Stejaru", "Suhaia",
  "Tătărăștii de Jos", "Tătărăștii de Sus", "Trivalea-Moșteni", "Troianul", "Țigănești",
  "Vedea", "Vârtoapele de Jos", "Zâmbreasca"
]

export default function TermopaneTeleormanPage() {
  return (
    <PageLayout>
      <PageHero
        title="Termopane Teleorman"
        subtitle="Acoperire Completă în Tot Județul"
        description="Suntem liderul pieței de termopane din Teleorman. Cu sediul în Alexandria și echipe mobile în tot județul, oferim servicii complete de la măsurători până la montaj și service."
      />

      {/* Cities Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Orașe <span className="text-primary">Principale</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {orase.map((oras) => (
              <div key={oras.name} className="bg-card rounded-xl p-6 border border-border text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-1">{oras.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{oras.population} locuitori</p>
                <p className="text-xs text-primary">{oras.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Teleorman */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            De Ce Să Ne Alegi în <span className="text-primary">Teleorman</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Prezență Locală",
                description: "Sediu și showroom în Alexandria, echipe în tot județul",
              },
              {
                title: "Livrare Rapidă",
                description: "Livrăm în 3-5 zile în orice localitate din Teleorman",
              },
              {
                title: "Fără Cost Transport",
                description: "Transport gratuit pentru comenzi peste 2000 lei",
              },
              {
                title: "Service Local",
                description: "Intervenții rapide pentru service și reparații",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rural Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Comune și <span className="text-primary">Sate</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Livrăm și montăm în toate comunele și satele din județul Teleorman. Distanța nu este o problemă pentru noi.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {localitatiRurale.map((localitate) => (
              <span
                key={localitate}
                className="px-3 py-1.5 bg-card rounded-full border border-border text-sm"
              >
                {localitate}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="bg-background rounded-xl p-8 border border-border">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefon Județean</h3>
              <p className="text-muted-foreground">
                Linie dedicată pentru Teleorman:<br />
                <a href="tel:+40700000000" className="text-primary text-xl font-semibold hover:underline">0700 000 000</a>
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Program Flexibil</h3>
              <p className="text-muted-foreground">
                Ne adaptăm programului tău.<br />
                Măsurători și montaj inclusiv în weekend.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vizită la Domiciliu</h3>
              <p className="text-muted-foreground">
                Consultantul nostru vine la tine<br />
                pentru măsurători și ofertă gratuită.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Termopane în Teleorman - Sună Acum!
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Indiferent unde te afli în județul Teleorman, suntem la un telefon distanță. Primești consultanță gratuită și ofertă personalizată.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Solicită Ofertă Gratuită
            </Link>
            <a
              href="tel:+40700000000"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              0700 000 000
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
