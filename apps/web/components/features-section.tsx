import { Card } from '@hiipa/ui/components/card'
import { ReactElement } from 'react'

export default function FeaturesSection(): ReactElement {
  const features = [
    {
      title: 'Automated Yield Optimization',
      description:
        'Continuously monitors yield opportunities across Aptos protocols and automatically rebalances your portfolio for optimal returns.',
      icon: '🎯',
    },
    {
      title: 'Chrome Extension',
      description:
        'Seamless browser integration for easy portfolio management and real-time notifications about yield opportunities.',
      icon: '🌐',
    },
    {
      title: 'LangGraph AI Agent',
      description:
        'Advanced AI agent powered by LangGraph for intelligent decision-making and automated DeFi strategy execution.',
      icon: '🤖',
    },
    {
      title: 'Risk Management',
      description:
        'Built-in risk assessment and management tools to help maintain optimal risk profiles across your investments.',
      icon: '🛡️',
    },
    {
      title: 'Aptos Native',
      description:
        'Specifically optimized for the Aptos blockchain ecosystem with deep integration across major protocols.',
      icon: '⚡',
    },
    {
      title: 'Real-time Monitoring',
      description:
        '24/7 monitoring of yield rates, protocol changes, and market conditions to ensure optimal positioning.',
      icon: '📊',
    },
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to maximize your DeFi yields on the Aptos blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
