import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'PromptIn - The #1 AI Prompt Manager for ChatGPT, Claude, Gemini & More',
    template: '%s | PromptIn'
  },
  description: 'Organize, optimize, and reuse your AI prompts effortlessly. Trusted by 600+ users with perfect 5-star reviews on Chrome Web Store. Free to start!',
  keywords: ['AI prompts', 'prompt manager', 'ChatGPT', 'Claude', 'Gemini', 'prompt organization', 'AI workflow', 'prompt library'],
  authors: [{ name: 'PromptIn Team' }],
  creator: 'PromptIn',
  metadataBase: new URL('https://prompt-in.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prompt-in.com',
    title: 'PromptIn - The Ultimate AI Prompt Manager',
    description: 'Streamline your AI workflow with PromptIn. Manage prompts across ChatGPT, Claude, Gemini, and more. 600+ users love it – 5/5 stars!',
    siteName: 'PromptIn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptIn - The Ultimate AI Prompt Manager',
    description: 'Streamline your AI workflow with PromptIn. Manage prompts across ChatGPT, Claude, Gemini, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#4a00e0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
