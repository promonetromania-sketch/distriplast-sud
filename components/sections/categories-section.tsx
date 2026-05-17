'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Ferestre Termopan',
    description: 'Sisteme premium de ferestre PVC cu izolație superioară',
    href: '/ferestre-termopan',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
  },
  {
    title: 'Uși Termopan',
    description: 'Uși de interior și exterior cu design modern',
    href: '/usi-termopan',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Închideri Terase',
    description: 'Soluții elegante pentru balcoane și terase',
    href: '/inchideri-balcoane',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    title: 'Rulouri Exterioare',
    description: 'Protecție și control al luminii naturale',
    href: '/rulouri-exterioare',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    title: 'Plase Țânțari',
    description: 'Sisteme de protecție împotriva insectelor',
    href: '/plase-tantari',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
  },
  {
    title: 'Reparații Termopane',
    description: 'Servicii profesionale de mentenanță și reparații',
    href: '/reparatii-termopane',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  },
]

export function CategoriesSection() {
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
            Produse & Servicii
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Soluții Premium pentru Casa Ta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descoperă gama noastră completă de produse și servicii pentru ferestre, 
            uși și închideri de calitate europeană.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Gold Accent Border */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 rounded-xl transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Vezi Detalii</span>
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
