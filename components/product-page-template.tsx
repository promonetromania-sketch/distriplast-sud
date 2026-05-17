'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductPageTemplateProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  benefits: { title: string; description: string }[]
  images: string[]
  ctaText?: string
  ctaHref?: string
}

export function ProductPageTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  images,
  ctaText = 'Solicită Ofertă',
  ctaHref = '/contact',
}: ProductPageTemplateProps) {
  return (
    <>
      {/* Hero Section with Product Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {images.slice(1, 4).map((img, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`${title} ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {subtitle}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-foreground font-semibold mb-4">Caracteristici Principale</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link href={ctaHref}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+40733407683">
                  <Button variant="outline" className="border-border hover:bg-secondary">
                    Sună: 0733 407 683
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Beneficii și Avantaje
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-foreground font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
