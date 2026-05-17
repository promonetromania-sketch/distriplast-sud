import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Distriplast Sud | Termopane Premium pentru Case Moderne',
  description: 'Ferestre și uși PVC premium realizate pentru confort, eficiență energetică și design elegant. Producător termopane Alexandria, Teleorman.',
  keywords: 'termopane, ferestre pvc, usi termopan, alexandria, teleorman, rulouri exterioare, inchideri terase',
  openGraph: {
    title: 'Distriplast Sud | Termopane Premium',
    description: 'Ferestre și uși PVC premium pentru case moderne',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
