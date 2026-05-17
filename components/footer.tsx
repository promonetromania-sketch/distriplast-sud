import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { navigationData, contactInfo, socialLinks } from '@/lib/navigation'

const footerLinks = {
  products: [
    { label: 'Ferestre Termopan', href: '/ferestre-termopan' },
    { label: 'Uși Termopan', href: '/usi-termopan' },
    { label: 'Rulouri Exterioare', href: '/rulouri-exterioare' },
    { label: 'Plase Țânțari', href: '/plase-tantari' },
    { label: 'Glafuri', href: '/glafuri' },
  ],
  services: [
    { label: 'Închideri Balcoane', href: '/inchideri-balcoane' },
    { label: 'Închideri Terase', href: '/inchideri-terase' },
    { label: 'Reparații Termopane', href: '/servicii/reparatii-termopane' },
    { label: 'Montaj Termopane', href: '/servicii/montaj-termopane' },
    { label: 'Reglaje Termopane', href: '/servicii/reglaje-termopane' },
  ],
  company: [
    { label: 'Despre Noi', href: '/despre-noi' },
    { label: 'Locații', href: '/locatii' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Preț Termopane', href: '/pret-termopane' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-anthracite-dark border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-20%20at%2014.58.09-NULpWB20jwNUakErA44m08yeGyUjP6.jpeg"
                alt="Distriplast Sud"
                width={200}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Producător premium de termopane, ferestre și uși PVC din Alexandria, Teleorman. 
              Calitate europeană și servicii profesionale de montaj.
            </p>
            
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <span className="font-medium">{contactInfo.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <span className="font-medium">{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </span>
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </span>
                <span>{contactInfo.schedule}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Produse
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Servicii
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Companie
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
                Social
              </h4>
              <div className="flex gap-3">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Distriplast Sud. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/politica-confidentialitate" className="hover:text-primary transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="hover:text-primary transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
