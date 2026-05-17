'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/lib/navigation'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-anthracite-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px),
                           linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contactează-ne
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Pregătit să Îți Transformi <span className="gold-text">Casa?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Contactează-ne astăzi pentru o consultanță gratuită și o ofertă personalizată. 
            Echipa noastră te așteaptă să îți îndeplinim visul.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href={`tel:${contactInfo.phone}`}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14">
                <Phone className="mr-2 h-5 w-5" />
                {contactInfo.phoneFormatted}
              </Button>
            </a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 font-semibold px-8 h-14">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-semibold px-8 h-14">
                Solicită Ofertă
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Consultanță Gratuită</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Măsurători la Domiciliu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Ofertă Fără Obligații</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
