'use client'

import Image from 'next/image'
import { Button } from '@hiipa/ui/components/button'

export default function HeroSection() {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/hiipa.svg"
              alt="Hiipa logo"
              width={80}
              height={80}
              priority
              className="w-20 h-20"
            />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">Hiipa</h1>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Complete AI Agent for Aptos DeFi
          </h2>

          <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automated yield rebalancing agent specifically optimized for DeFi workflows on the Aptos
            blockchain. Install our Chrome extension and optional LangGraph-based AI agent to
            maximize your returns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-3 text-lg">
              <a
                href="https://github.com/fullendmaestro/hiipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
