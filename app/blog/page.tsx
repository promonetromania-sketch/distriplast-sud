import { Metadata } from "next"
import PageHero from "@/components/page-hero"
import PageLayout from "@/components/page-layout"
import Link from "next/link"
import { Calendar, ArrowRight, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Ghiduri și Sfaturi Termopane | Distriplast Sud",
  description: "Articole utile despre termopane: ghiduri de alegere, sfaturi de întreținere, tendințe în design și tot ce trebuie să știi despre ferestre și uși PVC.",
}

const articles = [
  {
    slug: "cum-alegi-termopane-potrivite",
    title: "Cum Alegi Termopanele Potrivite Pentru Casa Ta",
    excerpt: "Ghid complet pentru alegerea ferestrelor termopan: tipuri de sticlă, profile PVC, sisteme de deschidere și factori importanți de care să ții cont.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png",
    category: "Ghiduri",
    date: "15 Mai 2024",
    author: "Echipa Distriplast",
  },
  {
    slug: "geam-dublu-vs-tripan",
    title: "Geam Dublu vs Geam Tripan: Care Este Mai Bun?",
    excerpt: "Comparație detaliată între geamul dublu și geamul tripan. Află care este opțiunea potrivită pentru clima din România și bugetul tău.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png",
    category: "Tehnic",
    date: "10 Mai 2024",
    author: "Echipa Distriplast",
  },
  {
    slug: "intretinere-termopane",
    title: "Întreținerea Termopanelor: Sfaturi Practice",
    excerpt: "Cum să îngrijești corect ferestrele și ușile termopan pentru a le prelungi durata de viață și a menține performanța optimă.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png",
    category: "Sfaturi",
    date: "5 Mai 2024",
    author: "Echipa Distriplast",
  },
  {
    slug: "culori-termopane-tendinte",
    title: "Tendințe în Culori pentru Termopane în 2024",
    excerpt: "Descoperă cele mai populare culori pentru tâmplăria PVC: de la clasicul alb la antracit, stejar auriu și alte finisaje moderne.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png",
    category: "Design",
    date: "28 Aprilie 2024",
    author: "Echipa Distriplast",
  },
  {
    slug: "economie-energie-termopane",
    title: "Cum Termopanele Reduc Factura la Energie",
    excerpt: "Află cât poți economisi anual prin înlocuirea ferestrelor vechi cu termopane moderne cu geam Low-E și profile cu izolație termică.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png",
    category: "Economie",
    date: "20 Aprilie 2024",
    author: "Echipa Distriplast",
  },
  {
    slug: "inchideri-terase-ghid",
    title: "Ghid Complet: Închideri Terase și Balcoane",
    excerpt: "Tot ce trebuie să știi despre închiderea terasei sau balconului: sisteme glisante, cortine de sticlă, avantaje și costuri.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poza%20pt%20sketch-vKNXTK6URY369YCmKGO4tLJJck7Y6A.png",
    category: "Ghiduri",
    date: "15 Aprilie 2024",
    author: "Echipa Distriplast",
  },
]

const categories = ["Toate", "Ghiduri", "Tehnic", "Sfaturi", "Design", "Economie"]

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero
        title="Blog"
        subtitle="Ghiduri și Sfaturi Utile"
        description="Articole informative despre termopane, ferestre și uși PVC. Află cum să alegi, să întreții și să economisești cu ajutorul tâmplăriei moderne."
      />

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "Toate"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Citește mai mult
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Abonează-te la <span className="text-primary">Newsletter</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Primește cele mai noi articole, oferte speciale și sfaturi utile direct în inbox-ul tău.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Abonează-te
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
