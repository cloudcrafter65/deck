# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A slide deck platform hosting multiple presentation decks at `deck.domain.com/topic1/`, `/topic2/`, etc. Each deck has AI-generated layouts and styling with no predefined templates. Slides are pure React/TSX components, not MDX.

## Technology Stack

- **Next.js 16** with App Router
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS 4** for utility styling
- **Framer Motion 12** for all animations
- **lucide-react** for icons
- **prism-react-renderer** for code syntax highlighting
- **Vercel** deployment

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Project Structure

```
/app
  /[topic-name]/       # Each deck is a folder
    page.tsx           # Deck entry point (default export component)
    slides.tsx         # AI-generated slide components
    styles.module.css  # Deck-specific styles (optional)
    /components        # Deck-specific components (optional)

/components
  /core                # Deck.tsx, Slide.tsx, Presenter.tsx
  /primitives          # AnimatedText, CodeBlock, ImageReveal, Counter, DrawPath, ParallaxLayer

/hooks                 # useSlideNavigation, useSlideIndex, useFullscreen, useReducedMotion

/lib                   # transitions.ts, easings.ts, pdf.ts

/public/images/[topic-name]/  # Per-deck images
```

## Architecture

**Core components:**
- `Deck.tsx` - Minimal container handling navigation and slide state, wraps slides with AnimatePresence
- `Slide.tsx` - Minimal wrapper providing Framer Motion animation scaffolding with customizable variants

**Primitives** are optional building blocks. Create custom elements when primitives don't fit.

**Navigation:** Arrow keys, Space, PageUp/Down, Home/End for slides. URL hash stores current slide (`/topic1/#5`). Touch swipe supported.

**PDF Export:** Uses print CSS with `?print=true` query param to render all slides for printing.

## Adding a New Deck

1. Create `/app/[topic-name]/`
2. Create `page.tsx` with default export component importing Deck and slides
3. Create `slides.tsx` with named export React slide components
4. Add images to `/public/images/[topic-name]/` if needed

## Coding Conventions

### General

- Use `'use client'` directive for all interactive components
- Use TypeScript strict mode - no `any` types
- Use path aliases: `@/components`, `@/hooks`, `@/lib`
- Prefer named exports for slide components, default exports for page components

### React Patterns

- Use functional components with hooks
- Define interfaces for component props (e.g., `interface SlideProps`)
- Destructure props with defaults: `({ className = '', delay = 0 }: Props)`
- Use `useCallback` for event handlers passed to children
- Use `useMemo` for expensive computations or large static arrays
- Clean up effects (event listeners, timeouts) in useEffect return

### Styling

- Tailwind CSS for all styling - no inline styles or CSS-in-JS
- Use template literals for dynamic classes: `` className={`base-class ${conditional}`} ``
- Common patterns:
  - Full-screen slides: `w-screen h-screen` or `w-full h-full`
  - Flex centering: `flex items-center justify-center`
  - Responsive grids: `grid grid-cols-1 md:grid-cols-2`
  - Container max-width: `max-w-6xl mx-auto`
  - Padding: `p-12` for slides, `p-6` or `p-8` for cards

### Animations

- Use Framer Motion's `Variants` type for animation definitions
- Standard transition: `{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }`
- Stagger children with incremental `delay` prop
- Wrap slide transitions in `AnimatePresence mode="wait"`

### File Naming

- Components: PascalCase (`Slide.tsx`, `AnimatedText.tsx`)
- Hooks: camelCase with `use` prefix (`useSlideNavigation.ts`)
- Utilities: camelCase (`transitions.ts`, `easings.ts`)

### Import Order

1. React imports
2. Third-party libraries (framer-motion, lucide-react, next)
3. Internal aliases (@/components, @/hooks, @/lib)
4. Relative imports

## Design Philosophy

No templates - each deck is a blank canvas. Generate bespoke layouts, animations, and visual treatments based on topic, tone, audience, and brand inputs. Creative freedom over consistency.
