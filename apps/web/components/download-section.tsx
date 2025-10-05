import { Button } from '@hiipa/ui/components/button'
import { Card } from '@hiipa/ui/components/card'

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Download Hiipa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to use Hiipa and start maximizing your DeFi yields
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chrome Extension */}
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-6xl mb-6">🌐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Chrome Extension</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get started quickly with our browser extension. Perfect for beginners and casual users
              who want easy portfolio monitoring and basic automation.
            </p>
            <ul className="text-left text-gray-600 mb-8 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Real-time portfolio monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic yield optimization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Browser notifications
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Easy wallet integration
              </li>
            </ul>
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled>
              Coming Soon - Chrome Web Store
            </Button>
          </Card>

          {/* AI Agent */}
          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
            <div className="text-6xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Agent (LangGraph)</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Advanced AI-powered automation for experienced users. Includes sophisticated
              strategies and intelligent decision-making capabilities.
            </p>
            <ul className="text-left text-gray-600 mb-8 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced AI strategies
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Automated rebalancing
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Risk management
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom strategy configuration
              </li>
            </ul>
            <Button
              size="lg"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              asChild
            >
              <a
                href="https://github.com/fullendmaestro/hiipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download from GitHub
              </a>
            </Button>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help getting started? Check out our documentation.
          </p>
          <Button variant="outline" asChild>
            <a href="/docs" className="text-blue-600 hover:text-blue-700">
              View Documentation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
