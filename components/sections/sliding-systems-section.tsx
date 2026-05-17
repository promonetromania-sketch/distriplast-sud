'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SlidingSystemsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Sisteme Culisante Premium
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Deschide-ți Casa către <span className="gold-text">Natură</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sistemele noastre culisante oferă panorame spectaculoase și acces facil la terase și grădini. 
              Cu tehnologie de ultimă generație pentru glisare silențioasă și izolație perfectă.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Deschidere maximă de până la 6 metri',
                'Glisare silențioasă pe role premium',
                'Prag îngropat pentru acces ușor',
                'Izolație termică și fonică superioară',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/usi-termopan/usi-culisante">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Descoperă Sistemele
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-border hover:bg-secondary">
                  Solicită Consultanță
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Sistem culisant premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">A+</span>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">Clasă Energetică</div>
                    <div className="text-muted-foreground text-sm">Eficiență maximă</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
