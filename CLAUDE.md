# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint with auto-fix
pnpm lint

# check Typeerror
pnpm typecheck
```

## Project Architecture

This is a Next.js 15 application using the App Router pattern with HeroUI v2 as the UI framework.

### Core Stack

- **Next.js 15.3.1** with App Router and Turbopack
- **HeroUI v2** - Component library built on top of React Aria
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with PostCSS for styling
- **Framer Motion** for animations
- **next-themes** for dark/light mode support

### Directory Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components including providers and UI components
- `config/` - Configuration files (site metadata, fonts)
- `styles/` - Global CSS files
- `types/` - TypeScript type definitions
- `public/` - Static assets

### Key Configuration Files

- `eslint.config.mjs` - ESLint 9 flat config with TypeScript, React, and Prettier integration
- `tailwind.config.js` - Tailwind configuration with HeroUI plugin
- `tsconfig.json` - TypeScript config with path alias `@/*` mapping to root

### Component Architecture

- All HeroUI components are wrapped in a `HeroUIProvider` in `components/providers.tsx`
- Theme switching is handled via `next-themes` with dark mode as default
- The app uses client components where necessary (marked with "use client")
- Layout includes a container with max-width constraint and responsive padding

### Styling Approach

- Tailwind CSS with HeroUI theme tokens
- Dark mode support via `class` strategy
- Custom fonts configured via CSS variables
- Responsive design with mobile-first approach

### ESLint Configuration

The project uses ESLint 9 with flat config format. Key rules:

- Import ordering enforced with groups
- Unused imports auto-removed
- React props sorted with callbacks last
- Padding lines required between statements
- Prettier integration for formatting

### TypeScript Configuration

- Strict mode enabled
- Module resolution set to "bundler"
- Path alias `@/` maps to project root
- JSX preserve mode for Next.js compilation

## Important Notes

- This project uses pnpm as the package manager. If using pnpm, ensure `.npmrc` contains `public-hoist-pattern[]=*@heroui/*`
- The development server runs with Turbopack for faster builds
- All pages should be created in the `app/` directory following Next.js App Router conventions
- HeroUI components should be imported from global package (e.g., `@heroui/react`)

## Landing Page Guidelines

### Content Strategy
- **No marketing BS**: Direct, clear copy that focuses on value and results
- **Minimalist design**: Clean, focused layouts without unnecessary elements
- **Dark theme**: Professional aesthetic with subtle gradients and glows
- **Component-based**: Micro-structure using modular components

### Landing Page Structure
The landing page is composed of the following sections in `/components/home/`:
1. `navbar.tsx` - Navigation with sticky positioning
2. `hero.tsx` - Main value proposition with CTAs
3. `logos.tsx` - Social proof through client logos
4. `features-grid.tsx` - 6-card grid showcasing deliverables
5. `testimonials.tsx` - Customer success stories
6. `pricing.tsx` - Single, transparent pricing card
7. `faq.tsx` - Common questions with accordion
8. `cta.tsx` - Final conversion section with email capture
9. `footer.tsx` - Minimal footer with essential links

### Image Strategy
- All images use placeholder.co for development: `https://placehold.co/[width]x[height]/[bg]/[fg]?text=[text]`
- Dark theme placeholders: Use `1a1a1a` background with `666666` foreground
- Replace with actual images before production deployment

### Conversion Optimization
- Multiple CTAs throughout the page
- Clear value proposition in hero
- Social proof via testimonials and logos
- Transparent pricing with money-back guarantee
- Minimal friction in contact form
