'use client'

import { motion } from 'framer-motion'
import { Shield, Palette, Wrench, Users, Award, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Eficiență Energetică',
    description: 'Sisteme cu izolație termică superioară care reduc consumul de energie cu până la 40%.',
  },
  {
    icon: Palette,
    title: 'Design Premium',
    description: 'Profile elegante și finisaje de înaltă calitate pentru orice stil arhitectural.',
  },
  {
    icon: Wrench,
    title: 'Montaj Profesionist',
    description: 'Echipe specializate cu experiență în instalări complexe și finisaje perfecte.',
  },
  {
    icon: Users,
    title: 'Consultanță Personalizată',
    description: 'Sfaturi tehnice și recomandări adaptate nevoilor și bugetului tău.',
  },
  {
    icon: Award,
    title: 'Materiale Premium',
    description: 'Utilizăm doar componente de top de la producători europeni certificați.',
  },
  {
    icon: Clock,
    title: 'Durabilitate',
    description: 'Garanție extinsă și produse proiectate să reziste zeci de ani.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              De Ce Distriplast Sud
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Excelență în Fiecare <span className="gold-text">Detaliu</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cu peste 15 ani de experiență în industria termopanelor, ne-am dedicat să oferim 
              produse și servicii de cea mai înaltă calitate. Fiecare proiect este tratat cu 
              aceeași atenție la detalii și profesionalism.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-primary font-semibold text-sm">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-foreground font-semibold">5000+ Clienți Mulțumiți</div>
                <div className="text-muted-foreground text-sm">Din Alexandria și Teleorman</div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
