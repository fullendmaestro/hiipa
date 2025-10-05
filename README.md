# Hiipa

![Hiipa Logo](./apps/web/public/hiipa.svg)

**Complete AI Agent for Aptos DeFi - Automated Yield Rebalancing and Portfolio Optimization**

Hiipa is a comprehensive AI-powered solution specifically optimized for DeFi workflows on the Aptos blockchain. It provides users with automated yield farming, portfolio rebalancing, and intelligent risk management through two main components: a Chrome extension for easy access and an optional LangGraph-based AI agent for advanced automation.

## 🌟 Features

### 🎯 **Automated Yield Optimization**

- Continuously monitors yield opportunities across Aptos protocols
- Automatically rebalances allocations to maintain optimal returns
- Real-time portfolio optimization based on market conditions

### 🌐 **Chrome Extension**

- Seamless browser integration for portfolio management
- Real-time notifications about yield opportunities
- Easy wallet connection and transaction management
- User-friendly interface for monitoring DeFi positions

### 🤖 **LangGraph AI Agent**

- Advanced AI agent powered by LangGraph for intelligent decision-making
- Automated DeFi strategy execution
- Custom strategy configuration and backtesting
- Machine learning-based risk assessment

### 🛡️ **Risk Management**

- Built-in risk assessment tools
- Automated stop-loss and risk mitigation strategies
- Portfolio diversification recommendations
- Real-time monitoring of protocol risks

### ⚡ **Aptos Native Integration**

- Specifically optimized for the Aptos blockchain ecosystem
- Deep integration with major Aptos DeFi protocols
- Native support for Aptos wallet standards
- Gas optimization for transactions

## 🚀 Getting Started

### Option 1: Chrome Extension (Recommended for Beginners)

1. **Install the Extension**

   ```
   Coming Soon - Available on Chrome Web Store
   ```

2. **Connect Your Wallet**
   - Click the Hiipa extension icon
   - Connect your Aptos wallet (Petra, Martian, etc.)
   - Authorize portfolio monitoring permissions

3. **Start Monitoring**
   - View your current DeFi positions
   - Enable automated rebalancing
   - Set your risk preferences

### Option 2: AI Agent (Advanced Users)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/fullendmaestro/hiipa.git
   cd hiipa
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Configure the AI Agent**

   ```bash
   cd apps/agents
   # Follow the setup instructions in apps/agents/README.md
   ```

4. **Run the Agent**
   ```bash
   pnpm run start:agent
   ```

## 📁 Project Structure

This is a monorepo containing the following applications and packages:

```
hiipa/
├── apps/
│   ├── web/              # Landing page and web interface
│   ├── agents/           # LangGraph AI agents
│   │   ├── memory-agent/    # Memory management agent
│   │   ├── react-agent/     # React-based agent
│   │   ├── research-agent/  # Market research agent
│   │   └── retrieval-agent/ # Data retrieval agent
│   └── extension/        # Chrome extension
├── packages/
│   ├── ui/              # Shared UI components
│   ├── eslint-config/   # ESLint configurations
│   └── typescript-config/ # TypeScript configurations
└── docs/                # Documentation
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 8+
- Aptos CLI (for blockchain interactions)

### Setup

1. **Clone and Install**

   ```bash
   git clone https://github.com/fullendmaestro/hiipa.git
   cd hiipa
   pnpm install
   ```

2. **Start Development**

   ```bash
   # Start all applications
   pnpm dev

   # Or start specific applications
   pnpm dev --filter=web      # Landing page
   pnpm dev --filter=extension # Chrome extension
   pnpm dev --filter=agents   # AI agents
   ```

3. **Build for Production**
   ```bash
   pnpm build
   ```

### Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Custom component library with shadcn/ui
- **AI/ML**: LangGraph, Python (for AI agents)
- **Blockchain**: Aptos SDK, Move language
- **Development**: Turbo (monorepo), ESLint, Prettier
- **Font**: Kanit (following design guidelines)

## 🎨 Design Philosophy

- **Professional & Minimalist**: Clean, flat design without gradients or complex textures
- **Content-Focused**: Emphasis on functionality over flashy design elements
- **Responsive**: Optimized for all devices and screen sizes
- **Accessible**: Following WCAG guidelines for accessibility
- **Performance**: Optimized for fast loading and smooth interactions

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📚 Documentation

- [API Reference](./docs/api.md)
- [Chrome Extension Guide](./apps/extension/README.md)
- [AI Agent Configuration](./apps/agents/README.md)
- [Architecture Overview](./docs/architecture.md)

## 🔗 Links

- **Website**: [https://hiipa.dev](https://hiipa.dev) (Coming Soon)
- **GitHub**: [https://github.com/fullendmaestro/hiipa](https://github.com/fullendmaestro/hiipa)
- **Documentation**: [https://docs.hiipa.dev](https://docs.hiipa.dev) (Coming Soon)
- **Community**: Join our Discord (Coming Soon)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

Hiipa is experimental software for automated DeFi portfolio management. Use at your own risk. Always understand the risks involved in DeFi investments and never invest more than you can afford to lose. The authors are not responsible for any financial losses.

## 🙏 Acknowledgments

- Built for the Aptos blockchain ecosystem
- Powered by LangGraph for AI capabilities
- UI components inspired by shadcn/ui
- Thanks to the open-source community for amazing tools and libraries
