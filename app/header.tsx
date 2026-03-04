'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Payal Fofadiya
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Text - Only show on home page */}
      {isHomePage && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo Section - Left */}
              <div className="flex-shrink-0">
                <div className="relative h-80 w-80 overflow-hidden rounded-2xl ring-4 ring-zinc-200 dark:ring-zinc-700 shadow-2xl">
                  <img
                    src="/payal-head-shot.png"
                    alt="Payal Fofadiya"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Section - Right */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
                  Payal Fofadiya
                </h1>
                <p className="mb-6 text-xl text-zinc-600 dark:text-zinc-400 font-medium lg:text-2xl">
                  Ex-Founder, Pioneering AI Agent Systems at Enterprise Scale
                </p>
                <div className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    🚀 AI Pioneer
                  </span>
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    💡 Founder
                  </span>
                  <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    🏗️ Platform Builder
                  </span>
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed lg:text-xl">
                  From enterprise LLM platforms at LinkedIn to revolutionary interview agents at Fulloop AI—
                  building the infrastructure that powers tomorrow's intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
