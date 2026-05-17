import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Preț Rulouri Exterioare Alexandria | Ofertă Rulouri PVC | Distriplast Sud",
  description: "Prețuri pentru rulouri exterioare în Alexandria și Teleorman. Rulouri manuale și electrice, cu sau fără casetă, la prețuri competitive.",
}

export default function PretRulouriPage() {
  return (
    <ProductPageTemplate
      title="Preț Rulouri Exterioare"
      subtitle="Protecție și Confort la Prețuri Accesibile"
      description="Rulourile exterioare oferă protecție solară, securitate sporită și izolare termică suplimentară. Descoperă gama noastră de rulouri la prețuri competitive, cu opțiuni pentru orice buget."
      features={[
        "Rulouri manuale - de la 300 lei/mp",
        "Rulouri electrice - de la 450 lei/mp",
        "Rulouri cu casetă aplicată",
        "Rulouri cu casetă integrată",
        "Lamele din aluminiu sau PVC",
        "Culori RAL la comandă",
        "Automatizare și telecomandă",
        "Senzori de vânt și soare opționali",
      ]}
      benefits={[
        {
          title: "Economie de Energie",
          description: "Reducere cu până la 30% a costurilor de încălzire/răcire",
        },
        {
          title: "Securitate",
          description: "Protecție suplimentară împotriva efracției",
        },
        {
          title: "Confort",
          description: "Control total al luminii și intimității",
        },
        {
          title: "Durabilitate",
          description: "Materiale rezistente la UV și intemperii",
        },
      ]}
      ctaText="Solicită Ofertă Rulouri"
      ctaHref="/contact"
    />
  )
}
