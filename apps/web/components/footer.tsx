import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/hiipa.svg" alt="Hiipa" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-background">Hiipa</span>
            </div>
            <p className="text-muted mb-6 max-w-md">
              Complete AI agent for Aptos DeFi. Automated yield rebalancing and portfolio
              optimization for the Aptos blockchain ecosystem.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/fullendmaestro/hiipa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-background transition-colors"
              >
                GitHub
              </a>
              <a href="#" className="text-muted hover:text-background transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted hover:text-background transition-colors">
                Discord
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-muted hover:text-background transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a href="#download" className="text-muted hover:text-background transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="/docs" className="text-muted hover:text-background transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 text-center text-muted">
          <p>&copy; 2025 Hiipa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
