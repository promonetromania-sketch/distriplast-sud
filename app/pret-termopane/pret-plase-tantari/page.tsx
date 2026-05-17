import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Preț Plase Țânțari Alexandria | Ofertă Plase Insecte | Distriplast Sud",
  description: "Prețuri pentru plase țânțari în Alexandria și Teleorman. Plase fixe, rulou și plisate pentru ferestre și uși la prețuri accesibile.",
}

export default function PretPlasePage() {
  return (
    <ProductPageTemplate
      title="Preț Plase Țânțari"
      subtitle="Protecție Eficientă la Prețuri Mici"
      description="Plasele de țânțari sunt soluția ideală pentru a te bucura de aer proaspăt fără vizite nedorite din partea insectelor. Oferim o gamă variată de plase la prețuri accesibile pentru orice tip de fereastră sau ușă."
      features={[
        "Plase fixe cu ramă - de la 80 lei/buc",
        "Plase rulou verticale - de la 150 lei/buc",
        "Plase rulou laterale - de la 200 lei/buc",
        "Plase plisate - de la 250 lei/buc",
        "Plase pentru uși balcon",
        "Rame din aluminiu vopsit",
        "Plasă din fibră de sticlă",
        "Montaj rapid inclus",
      ]}
      benefits={[
        {
          title: "Ventilație Liberă",
          description: "Aer proaspăt fără insecte nedorite",
        },
        {
          title: "Ușor de Utilizat",
          description: "Sisteme practice de deschidere și închidere",
        },
        {
          title: "Potrivire Perfectă",
          description: "Plase la comandă pentru orice dimensiune",
        },
        {
          title: "Estetică",
          description: "Design discret care se integrează perfect",
        },
      ]}
      ctaText="Solicită Ofertă Plase"
      ctaHref="/contact"
    />
  )
}
