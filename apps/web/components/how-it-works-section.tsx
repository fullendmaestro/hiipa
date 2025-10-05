import { Card } from '@hiipa/ui/components/card'

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Install Chrome Extension',
      description:
        'Download and install the Hiipa Chrome extension to get started with seamless DeFi portfolio management.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      step: '02',
      title: 'Connect Your Wallet',
      description:
        'Securely connect your Aptos wallet to enable monitoring and automated rebalancing of your DeFi positions.',
      color: 'bg-green-100 text-green-600',
    },
    {
      step: '03',
      title: 'Configure AI Agent (Optional)',
      description:
        'Install and configure the LangGraph-based AI agent for advanced automated strategies and intelligent decision-making.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      step: '04',
      title: 'Start Earning',
      description:
        'Hiipa automatically monitors yields and rebalances your portfolio to maximize returns while managing risk.',
      color: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with Hiipa in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-bold mb-4 ${item.color}`}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
