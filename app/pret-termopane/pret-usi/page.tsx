import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Preț Uși Termopan Alexandria | Ofertă Uși PVC | Distriplast Sud",
  description: "Prețuri pentru uși termopan în Alexandria și Teleorman. Uși interior, exterior, culisante și oscilobatante la prețuri competitive cu montaj inclus.",
}

export default function PretUsiPage() {
  return (
    <ProductPageTemplate
      title="Preț Uși Termopan"
      subtitle="Uși Premium la Prețuri Accesibile"
      description="Investiția într-o ușă termopan de calitate aduce beneficii pe termen lung: securitate sporită, izolare termică excelentă și estetică modernă. Descoperă prețurile noastre competitive pentru toate tipurile de uși PVC."
      features={[
        "Uși interior PVC - de la 800 lei/buc",
        "Uși exterior termopan - de la 1500 lei/buc",
        "Uși culisante - de la 2000 lei/mp",
        "Uși oscilobatante - de la 1200 lei/buc",
        "Uși cu panou decorativ inclus",
        "Încuietori multipunct de siguranță",
        "Praguri din aluminiu incluse",
        "Montaj și garanție 5 ani",
      ]}
      benefits={[
        {
          title: "Securitate Maximă",
          description: "Încuietori multipunct și profile armate",
        },
        {
          title: "Design Personalizat",
          description: "Alegere din sute de modele și culori",
        },
        {
          title: "Eficiență Energetică",
          description: "Izolare termică superioară certificată",
        },
        {
          title: "Montaj Rapid",
          description: "Instalare profesională în aceeași zi",
        },
      ]}
      ctaText="Solicită Ofertă Uși"
      ctaHref="/contact"
    />
  )
}
