import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import HowItWorksSection from '@/components/how-it-works-section'
import DownloadSection from '@/components/download-section'
import Footer from '@/components/footer'

import type { ReactElement } from 'react'

export default function Page(): ReactElement {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
