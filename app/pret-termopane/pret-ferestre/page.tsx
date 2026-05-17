import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Preț Ferestre Termopan Alexandria | Ofertă Personalizată | Distriplast Sud",
  description: "Prețuri competitive pentru ferestre termopan în Alexandria și Teleorman. Solicită ofertă personalizată pentru ferestre PVC cu geam tripan sau dublu.",
}

export default function PretFerestrePage() {
  return (
    <ProductPageTemplate
      title="Preț Ferestre Termopan"
      subtitle="Prețuri Competitive, Calitate Premium"
      description="Oferim prețuri competitive pentru ferestre termopan de cea mai înaltă calitate. Prețul final depinde de dimensiuni, tipul de sticlă, profil și accesorii. Solicită o ofertă personalizată pentru a afla costul exact pentru proiectul tău."
      features={[
        "Ferestre cu geam dublu - de la 450 lei/mp",
        "Ferestre cu geam tripan - de la 550 lei/mp",
        "Profile REHAU și Veka disponibile",
        "Culori standard și speciale",
        "Sticlă Low-E pentru eficiență energetică",
        "Feronerie Roto sau Maco inclusă",
        "Montaj profesional inclus în preț",
        "Garanție 5 ani pentru produse și montaj",
      ]}
      benefits={[
        {
          title: "Fără Costuri Ascunse",
          description: "Prețul ofertat include toate componentele și montajul",
        },
        {
          title: "Măsurătoare Gratuită",
          description: "Venim la domiciliu pentru măsurători precise",
        },
        {
          title: "Ofertă în 24h",
          description: "Primești oferta detaliată în maxim o zi lucrătoare",
        },
        {
          title: "Plată în Rate",
          description: "Posibilitate de plată în rate fără dobândă",
        },
      ]}
      ctaText="Solicită Ofertă Gratuită"
      ctaHref="/contact"
    />
  )
}
