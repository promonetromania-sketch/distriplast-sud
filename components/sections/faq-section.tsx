'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Ce tipuri de termopane oferiți?',
    answer: 'Oferim o gamă completă de termopane: ferestre cu geam dublu și tripan, uși de interior și exterior, sisteme culisante, oscilobatante, și ferestre arcuite. Toate produsele noastre sunt realizate din profile PVC premium de la producători europeni.',
  },
  {
    question: 'Care este durata de montaj?',
    answer: 'Durata montajului depinde de complexitatea proiectului. Pentru un apartament standard, montajul durează 1-2 zile. Pentru vile sau proiecte mai mari, timpul poate varia între 3-5 zile. Echipa noastră lucrează eficient pentru a minimiza disconfortul.',
  },
  {
    question: 'Oferiți garanție pentru produse?',
    answer: 'Da, oferim garanție extinsă pentru toate produsele noastre. În funcție de sistemul ales, garanția variază între 5 și 15 ani. De asemenea, oferim service post-vânzare pentru mentenanță și reglaje.',
  },
  {
    question: 'Cum pot obține o ofertă de preț?',
    answer: 'Puteți solicita o ofertă gratuită contactându-ne telefonic, prin WhatsApp, sau completând formularul de contact. Un consultant va veni la domiciliul dumneavoastră pentru măsurători și vă va prezenta opțiunile disponibile.',
  },
  {
    question: 'Ce zone deserviți?',
    answer: 'Suntem localizați în Alexandria și acoperim întregul județ Teleorman. Oferim servicii complete de consultanță, livrare și montaj în toată zona, cu deplasări gratuite pentru măsurători.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Întrebări Frecvente
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Ai Întrebări? <span className="gold-text">Răspunsuri</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Am compilat cele mai frecvente întrebări ale clienților noștri. 
              Dacă nu găsești răspunsul căutat, nu ezita să ne contactezi direct.
            </p>
            
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-foreground font-semibold mb-2">Ai alte întrebări?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Echipa noastră este aici să te ajute cu orice informație ai nevoie.
              </p>
              <a
                href="tel:+40733407683"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                Sună-ne: 0733 407 683
              </a>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left bg-card hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-foreground font-medium pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
