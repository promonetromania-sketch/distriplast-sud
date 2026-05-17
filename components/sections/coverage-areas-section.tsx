'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const locations = [
  {
    city: 'Alexandria',
    region: 'Teleorman',
    description: 'Sediul nostru principal și showroom complet cu toate produsele disponibile pentru vizualizare.',
    href: '/locatii/termopane-alexandria',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    city: 'Teleorman',
    region: 'Județ',
    description: 'Acoperim întregul județ Teleorman cu servicii de livrare și montaj profesionist.',
    href: '/locatii/termopane-teleorman',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
  },
]

export function CoverageAreasSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
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
            Zone de Acoperire
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Suntem Aproape de Tine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cu sediul în Alexandria, acoperim întregul județ Teleorman cu servicii complete de 
            consultanță, livrare și montaj profesionist.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={location.href} className="group block">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={location.image}
                      alt={`Termopane ${location.city}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm font-medium">{location.region}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      Termopane {location.city}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {location.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <span>Află Mai Multe</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
