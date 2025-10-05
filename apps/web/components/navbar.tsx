'use client'

import useScroll from '@/hooks/use-scroll'
import Image from 'next/image'
import { Button } from '@hiipa/ui/components/button'
import { ReactElement } from 'react'

export default function Navbar(): ReactElement {
  const scrolled = useScroll(50)

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/hiipa.svg" alt="Hiipa" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Hiipa</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#download"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Download
            </a>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
