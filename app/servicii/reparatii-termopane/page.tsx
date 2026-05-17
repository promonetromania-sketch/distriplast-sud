import { Metadata } from "next"
import ProductPageTemplate from "@/components/product-page-template"

export const metadata: Metadata = {
  title: "Reparații Termopane Alexandria | Service Ferestre și Uși | Distriplast Sud",
  description: "Servicii profesionale de reparații termopane în Alexandria și Teleorman. Reparăm geamuri sparte, mecanisme defecte, etanșări și izolații. Intervenție rapidă 24h.",
}

export default function ReparatiiTermopanePage() {
  return (
    <ProductPageTemplate
      title="Reparații Termopane"
      subtitle="Service Profesional pentru Ferestre și Uși"
      description="Oferim servicii complete de reparații pentru toate tipurile de termopane. De la înlocuirea geamurilor sparte până la repararea mecanismelor complexe, echipa noastră rezolvă orice problemă rapid și eficient."
      features={[
        "Înlocuire geamuri sparte sau crăpate",
        "Reparații mecanisme de închidere",
        "Înlocuire garnituri de etanșare",
        "Reparații balamale și mânere",
        "Eliminare condensului dintre geamuri",
        "Reparații profile PVC deteriorate",
        "Reglaje ferestre și uși",
        "Intervenții de urgență 24/7",
      ]}
      benefits={[
        {
          title: "Intervenție Rapidă",
          description: "Răspundem în maxim 24 de ore pentru urgențe",
        },
        {
          title: "Piese Originale",
          description: "Folosim doar piese de schimb originale sau compatibile de calitate",
        },
        {
          title: "Garanție",
          description: "Toate reparațiile beneficiază de garanție extinsă",
        },
        {
          title: "Prețuri Corecte",
          description: "Tarife transparente, fără costuri ascunse",
        },
      ]}
      ctaText="Solicită Reparație"
      ctaHref="/contact"
    />
  )
}
