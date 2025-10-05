import { Kanit } from 'next/font/google'

import '@hiipa/ui/globals.css'
import { Providers } from '@/components/providers'

const fontSans = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Hiipa - AI Agent for Aptos DeFi',
  description:
    'Complete AI agent for Aptos DeFi. Automated yield rebalancing and portfolio optimization for the Aptos blockchain ecosystem.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
