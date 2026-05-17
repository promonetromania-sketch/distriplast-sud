import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Montaj Termopane Alexandria | Instalare Profesională | Distriplast Sud",
  description: "Montaj profesional termopane în Alexandria și Teleorman. Instalare ferestre și uși PVC cu garanție, izolare perfectă și finisaje impecabile.",
}

export default function MontajTermopanePage() {
  return (
    <ProductPageTemplate
      title="Montaj Termopane"
      subtitle="Instalare Profesională cu Garanție"
      description="Montajul corect al termopanelor este esențial pentru performanța lor pe termen lung. Echipa noastră de specialiști asigură o instalare perfectă, cu atenție la fiecare detaliu pentru izolare optimă și estetică impecabilă."
      features={[
        "Demontare și evacuare tâmplărie veche",
        "Pregătire goluri și rectificări zidărie",
        "Montaj conform standardelor europene",
        "Izolare cu spumă poliuretanică",
        "Etanșare cu silicon de calitate",
        "Montaj glafuri interior și exterior",
        "Reglaje finale și verificări",
        "Curățenie după montaj",
      ]}
      benefits={[
        {
          title: "Montatori Certificați",
          description: "Echipă cu experiență și certificări profesionale",
        },
        {
          title: "Garanție 5 Ani",
          description: "Garanție extinsă pentru montaj și manoperă",
        },
        {
          title: "Izolare Perfectă",
          description: "Tehnici avansate pentru eliminarea punților termice",
        },
        {
          title: "Finisaje Premium",
          description: "Atenție maximă la detalii și estetică",
        },
      ]}
      ctaText="Programează Montaj"
      ctaHref="/contact"
    />
  )
}
