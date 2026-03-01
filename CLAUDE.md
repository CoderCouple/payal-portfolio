# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Payal built using the Nim template - a minimal, modern portfolio template built with Next.js 15, React 19, Tailwind CSS v4, and Motion animations.

## Common Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package management
npm install          # Install dependencies
```

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **Components**: React 19 with TypeScript
- **Animations**: Motion library for smooth interactions
- **Content**: MDX support for blog posts and content
- **Icons**: Lucide React icon library

## Key Directories

- `app/` - Next.js app router pages and layouts
- `components/ui/` - Reusable UI components
- `lib/` - Utility functions and configurations
- `public/` - Static assets (images, favicon, etc.)
- `hooks/` - Custom React hooks

## Content Management

- Personal data is configured in `app/data.ts`
- Blog posts are stored in `app/blog/` as MDX files
- Global styles are in `app/globals.css`

## Deployment

Configured for Vercel deployment with automatic builds. The project includes a `vercel.json` configuration file for optimal deployment settings.