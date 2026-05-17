'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const systems = [
  {
    name: 'Sistem Classic',
    description: 'Soluția ideală pentru raport calitate-preț excelent',
    features: ['5 camere', 'Geam dublu', 'Izolație standard', 'Garanție 5 ani'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    name: 'Sistem Premium',
    description: 'Performanță superioară pentru confort maxim',
    features: ['6 camere', 'Geam tripan', 'Izolație termică +30%', 'Garanție 10 ani'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    featured: true,
  },
  {
    name: 'Sistem Exclusive',
    description: 'Tehnologie de ultimă generație',
    features: ['7 camere', 'Geam selectiv', 'Izolație termică +50%', 'Garanție 15 ani'],
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  },
]

export function SystemsShowcaseSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Sisteme PVC Premium
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Alege Sistemul Potrivit pentru Tine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferim trei game de produse pentru a se potrivi nevoilor și bugetului tău, 
            toate cu aceeași calitate europeană garantată.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ${
                system.featured 
                  ? 'lg:-mt-4 lg:mb-4 ring-2 ring-primary' 
                  : 'border border-border'
              }`}
            >
              {system.featured && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-sm font-semibold py-2 z-10">
                  Cel Mai Popular
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={system.image}
                  alt={system.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              {/* Content */}
              <div className={`p-6 bg-card ${system.featured ? 'pt-4' : ''}`}>
                <h3 className="text-xl font-bold text-foreground mb-2">{system.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{system.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {system.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/pret-termopane">
                  <Button 
                    className={`w-full ${
                      system.featured 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    Vezi Prețuri
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
