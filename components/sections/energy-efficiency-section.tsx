'use client'

import { motion } from 'framer-motion'
import { Thermometer, Volume2, Sun, Leaf } from 'lucide-react'

const metrics = [
  {
    icon: Thermometer,
    value: '40%',
    label: 'Reducere Pierderi Termice',
    description: 'Față de termopane standard',
  },
  {
    icon: Volume2,
    value: '45dB',
    label: 'Izolație Fonică',
    description: 'Reducerea zgomotului exterior',
  },
  {
    icon: Sun,
    value: '0.9',
    label: 'Coeficient Uw',
    description: 'Transfer termic minimal',
  },
  {
    icon: Leaf,
    value: '30%',
    label: 'Economie Energie',
    description: 'La factura de încălzire',
  },
]

export function EnergyEfficiencySection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
                  alt="Eficiență energetică termopane"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Performanță Energetică
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Economii Reale pentru <span className="gold-text">Bugetul Tău</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Termopanele noastre premium sunt certificate energetic și proiectate să reducă 
              semnificativ consumul de energie, oferindu-ți confort termic și economii pe termen lung.
            </p>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <metric.icon className="h-8 w-8 text-primary mb-3" />
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-foreground text-sm font-medium mt-1">{metric.label}</div>
                  <div className="text-muted-foreground text-xs mt-1">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
