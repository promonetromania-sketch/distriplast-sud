import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { WhatsAppButton } from '@/components/whatsapp-button'

interface PageLayoutProps {
  children: ReactNode
  showCTA?: boolean
}

export function PageLayout({ children, showCTA = true }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
        {showCTA && <CTASection />}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default PageLayout
