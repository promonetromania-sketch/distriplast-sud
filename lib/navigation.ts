import { LucideIcon } from 'lucide-react'

export interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
}

export interface NavItem {
  label: string
  href: string
  isDropdownOnly?: boolean
  children?: MenuItem[]
}

export const navigationData: NavItem[] = [
  {
    label: 'Acasă',
    href: '/',
  },
  {
    label: 'Despre Noi',
    href: '/despre-noi',
  },
  {
    label: 'Uși Termopan',
    href: '/usi-termopan',
    children: [
      { label: 'Uși Interior', href: '/usi-termopan/usi-interior' },
      { label: 'Uși Exterior', href: '/usi-termopan/usi-exterior' },
      { label: 'Uși Culisante', href: '/usi-termopan/usi-culisante' },
      { label: 'Uși Oscilobatante', href: '/usi-termopan/usi-oscilobatante' },
      { label: 'Modele Uși', href: '/usi-termopan/modele-usi' },
    ],
  },
  {
    label: 'Ferestre Termopan',
    href: '/ferestre-termopan',
    children: [
      { label: 'Ferestre Tripan', href: '/ferestre-termopan/ferestre-tripan' },
      { label: 'Ferestre Oscilobatante', href: '/ferestre-termopan/ferestre-oscilobatante' },
      { label: 'Ferestre Arcuite', href: '/ferestre-termopan/ferestre-arcuite' },
      { label: 'Ferestre Glisante', href: '/ferestre-termopan/ferestre-glisante' },
    ],
  },
  {
    label: 'Închideri Terase',
    href: '/inchideri-balcoane',
    children: [
      { label: 'Închideri Balcoane', href: '/inchideri-balcoane' },
      { label: 'Închideri Terase', href: '/inchideri-terase' },
      { label: 'Închideri Foișoare', href: '/inchideri-foisoare' },
    ],
  },
  {
    label: 'Rulouri Exterioare',
    href: '/rulouri-exterioare',
    children: [
      { label: 'Rulouri Exterioare', href: '/rulouri-exterioare' },
      { label: 'Plase Țânțari', href: '/plase-tantari' },
      { label: 'Glafuri', href: '/glafuri' },
    ],
  },
  {
    label: 'Servicii',
    href: '/servicii',
    children: [
      { label: 'Reparații Termopane', href: '/servicii/reparatii-termopane' },
      { label: 'Montaj Termopane', href: '/servicii/montaj-termopane' },
      { label: 'Reglaje Termopane', href: '/servicii/reglaje-termopane' },
    ],
  },
  {
    label: 'Preț Termopane',
    href: '/pret-termopane',
    children: [
      { label: 'Preț Ferestre', href: '/pret-termopane/pret-ferestre' },
      { label: 'Preț Uși', href: '/pret-termopane/pret-usi' },
      { label: 'Preț Rulouri Exterioare', href: '/pret-termopane/pret-rulouri-exterioare' },
      { label: 'Preț Plase Țânțari', href: '/pret-termopane/pret-plase-tantari' },
    ],
  },
  {
    label: 'Locații',
    href: '/locatii',
    children: [
      { label: 'Termopane Alexandria', href: '/locatii/termopane-alexandria' },
      { label: 'Termopane Teleorman', href: '/locatii/termopane-teleorman' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const contactInfo = {
  phone: '+40 733 407 683',
  phoneFormatted: '0733 407 683',
  email: 'contact@distriplastsud.ro',
  address: 'Alexandria, Teleorman, România',
  whatsapp: 'https://wa.me/40733407683',
  schedule: 'Luni - Vineri: 08:00 - 18:00',
}

export const socialLinks = {
  facebook: 'https://facebook.com/distriplastsud',
  instagram: 'https://instagram.com/distriplastsud',
}
