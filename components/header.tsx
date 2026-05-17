'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationData, contactInfo } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/95 glass-effect border-b border-border shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-20%20at%2014.58.09-NULpWB20jwNUakErA44m08yeGyUjP6.jpeg"
                alt="Distriplast Sud"
                width={180}
                height={60}
                className="h-12 lg:h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navigationData.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.isDropdownOnly ? '#' : item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
                      'text-foreground/80 hover:text-primary',
                      activeDropdown === item.label && 'text-primary'
                    )}
                    onClick={(e) => item.isDropdownOnly && e.preventDefault()}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-card/98 glass-effect border border-border rounded-lg shadow-2xl overflow-hidden min-w-[220px]">
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden lg:block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                  Solicită Ofertă
                </Button>
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Deschide meniul"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card z-50 xl:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-20%20at%2014.58.09-NULpWB20jwNUakErA44m08yeGyUjP6.jpeg"
                    alt="Distriplast Sud"
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Închide meniul"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navigationData.map((item) => (
                    <div key={item.label} className="border-b border-border/50 last:border-0">
                      {item.children ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileActiveDropdown(
                                mobileActiveDropdown === item.label ? null : item.label
                              )
                            }
                            className="flex items-center justify-between w-full py-4 text-foreground hover:text-primary transition-colors"
                          >
                            <span className="font-medium">{item.label}</span>
                            <ChevronDown
                              className={cn(
                                'h-5 w-5 transition-transform duration-200',
                                mobileActiveDropdown === item.label && 'rotate-180'
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileActiveDropdown === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-4 pl-4 space-y-1">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-4 font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      Solicită Ofertă
                    </Button>
                  </Link>
                  
                  <div className="flex gap-3">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">Sună Acum</span>
                    </a>
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
