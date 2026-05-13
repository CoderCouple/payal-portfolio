import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const SITE_URL = 'https://fofadiyapayal.com'
const SITE_NAME = 'Payal Fofadiya'
const SITE_DESCRIPTION =
  'Payal Fofadiya — AI thought leader, engineer, and computer scientist. Engineering Manager of LinkedIn\'s Agent Platform and Founder & CEO of Fulloop AI. Writing, speaking, and building at the frontier of AI agents, LLM memory systems, and enterprise-scale machine learning.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Payal Fofadiya — AI Thought Leader, Engineer, Computer Scientist',
    template: '%s | Payal Fofadiya',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Payal Fofadiya', url: SITE_URL }],
  creator: 'Payal Fofadiya',
  publisher: 'Payal Fofadiya',
  category: 'technology',
  keywords: [
    'Payal Fofadiya',
    'AI thought leader',
    'AI engineer',
    'computer scientist',
    'artificial intelligence',
    'AI agents',
    'LLM',
    'large language models',
    'machine learning',
    'enterprise AI',
    'AI agent platform',
    'agent orchestration',
    'AI memory systems',
    'context engineering',
    'software engineering',
    'engineering manager',
    'LinkedIn Agent Platform',
    'Fulloop AI',
    'AI startup founder',
    'women in AI',
    'San Francisco Bay Area',
    'Carnegie Mellon',
    'payalfofadiya',
  ],
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Payal Fofadiya — AI Thought Leader, Engineer, Computer Scientist',
    description: SITE_DESCRIPTION,
    firstName: 'Payal',
    lastName: 'Fofadiya',
    username: 'payalfofadiya',
    gender: 'female',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payal Fofadiya — AI Thought Leader, Engineer, Computer Scientist',
    description: SITE_DESCRIPTION,
    creator: '@payalfofadiya',
    site: '@payalfofadiya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    // Drop your token from Google Search Console here when you set it up:
    // google: 'xxxxxxxxxxxxxxxx',
    // bing: 'xxxxxxxxxxxxxxxx',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
        suppressHydrationWarning
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <Header />
            <div className="relative mx-auto w-full max-w-4xl flex-1 px-4">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
