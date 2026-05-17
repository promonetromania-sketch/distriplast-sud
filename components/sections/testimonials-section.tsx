'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maria Ionescu',
    location: 'Alexandria',
    rating: 5,
    text: 'Am fost impresionată de profesionalismul echipei Distriplast Sud. Ferestrele sunt de o calitate excepțională și izolația fonică este incredibilă. Recomand cu căldură!',
    project: 'Ferestre și uși pentru apartament',
  },
  {
    id: 2,
    name: 'Andrei Popescu',
    location: 'Teleorman',
    rating: 5,
    text: 'Colaborarea a fost perfectă de la început până la final. Termopanele au transformat complet aspectul casei noastre. Economisim semnificativ la încălzire.',
    project: 'Înlocuire completă termopane vilă',
  },
  {
    id: 3,
    name: 'Elena Vasilescu',
    location: 'Alexandria',
    rating: 5,
    text: 'Închiderea terasei a depășit toate așteptările. Design modern, montaj rapid și prețuri corecte. Mulțumim echipei pentru tot!',
    project: 'Închidere terasă cu sistem culisant',
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            Testimoniale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Ce Spun Clienții Noștri
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 lg:p-12"
            >
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed mb-8">
                &quot;{testimonials[activeIndex].text}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-foreground font-semibold">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].location} • {testimonials[activeIndex].project}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Vezi testimonialul ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="Testimonial următor"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
