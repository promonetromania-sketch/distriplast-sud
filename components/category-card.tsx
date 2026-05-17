'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  title: string
  description: string
  href: string
  image: string
  icon?: LucideIcon
  index?: number
}

export function CategoryCard({ title, description, href, image, icon: Icon, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/30 transition-colors">
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {Icon && (
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            )}
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <span>Vezi Detalii</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
