import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Reglaje Termopane Alexandria | Ajustare Ferestre și Uși | Distriplast Sud",
  description: "Servicii de reglaje termopane în Alexandria și Teleorman. Ajustăm ferestre și uși care nu se închid corect, eliminăm curentul și optimizăm funcționarea.",
}

export default function ReglajetermopanePage() {
  return (
    <ProductPageTemplate
      title="Reglaje Termopane"
      subtitle="Ajustări Fine pentru Funcționare Perfectă"
      description="Cu timpul, ferestrele și ușile termopan pot necesita reglaje pentru a funcționa optim. Oferim servicii profesionale de reglaj care elimină problemele de închidere, curentul de aer și uzura prematură a componentelor."
      features={[
        "Reglaj vertical și orizontal cercevele",
        "Ajustare presiune de închidere",
        "Reglaj balamale și puncte de închidere",
        "Eliminare joc și infiltrații aer",
        "Ajustare mânere și mecanisme",
        "Lubrifiere componente mobile",
        "Verificare și ajustare garnituri",
        "Testare etanșeitate finală",
      ]}
      benefits={[
        {
          title: "Fără Curent",
          description: "Eliminăm complet infiltrațiile de aer rece",
        },
        {
          title: "Funcționare Lină",
          description: "Ferestre și uși care se deschid și închid perfect",
        },
        {
          title: "Durabilitate",
          description: "Prelungim durata de viață a termopanelor",
        },
        {
          title: "Eficiență Energetică",
          description: "Reducere semnificativă a costurilor de încălzire",
        },
      ]}
      ctaText="Solicită Reglaj"
      ctaHref="/contact"
    />
  )
}
