'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Vilă Modernă Alexandria',
    category: 'Rezidențial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    id: 2,
    title: 'Închidere Terasă Premium',
    category: 'Terase',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
  {
    id: 3,
    title: 'Ansamblu Rezidențial',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 4,
    title: 'Casa cu Vedere la Lac',
    category: 'Rezidențial',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  },
  {
    id: 5,
    title: 'Birou Modern',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  },
  {
    id: 6,
    title: 'Renovare Completă',
    category: 'Rezidențial',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
  },
]

const categories = ['Toate', 'Rezidențial', 'Comercial', 'Terase']

export function ProjectsGallerySection() {
  const [activeCategory, setActiveCategory] = useState('Toate')
  
  const filteredProjects = activeCategory === 'Toate' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portofoliu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Proiecte Recente
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descoperă câteva dintre proiectele noastre recente și convinge-te de calitatea lucrărilor noastre.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-primary text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
