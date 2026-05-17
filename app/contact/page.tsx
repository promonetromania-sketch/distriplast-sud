import { Metadata } from "next"
import PageHero from "@/components/page-hero"
import PageLayout from "@/components/page-layout"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Distriplast Sud - Termopane Alexandria",
  description: "Contactează-ne pentru oferte personalizate, măsurători gratuite sau informații despre termopane. Telefon, email, formular de contact. Răspundem în 24h.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresă",
    details: ["Str. Dunării nr. 123", "Alexandria, Teleorman", "Cod poștal: 140001"],
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["0733 407 683", "0800 000 000 (gratuit)"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@distriplastsud.ro", "comenzi@distriplastsud.ro"],
  },
  {
    icon: Clock,
    title: "Program",
    details: ["Luni - Vineri: 08:00 - 18:00", "Sâmbătă: 09:00 - 14:00", "Duminică: Închis"],
  },
]

export default function ContactPage() {
  return (
    <PageLayout showCTA={false}>
      <PageHero
        title="Contact"
        subtitle="Suntem Aici Pentru Tine"
        description="Ai întrebări sau vrei o ofertă personalizată? Contactează-ne prin telefon, email sau completează formularul de mai jos. Îți răspundem în maxim 24 de ore."
      />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-card rounded-xl p-6 border border-border">
                <info.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Trimite-ne un <span className="text-primary">Mesaj</span>
              </h2>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Locația <span className="text-primary">Noastră</span>
              </h2>
              <div className="bg-background rounded-xl border border-border h-[500px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Showroom Distriplast Sud</h3>
                  <p className="text-muted-foreground mb-4">
                    Str. Dunării nr. 123, Alexandria, Teleorman
                  </p>
                  <a
                    href="https://maps.google.com/?q=Alexandria,Teleorman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Deschide în Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Preferi Să Ne Suni?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Echipa noastră de consultanți este disponibilă pentru a răspunde la toate întrebările tale.
            </p>
            <a
              href="tel:+40733407683"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-xl hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              0733 407 683
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
