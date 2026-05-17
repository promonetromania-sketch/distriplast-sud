'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  backgroundImage?: string
}

export function PageHero({
  title,
  subtitle,
  description,
  breadcrumbs,
  backgroundImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
}: PageHeroProps) {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Acasă
            </Link>
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle && (
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
