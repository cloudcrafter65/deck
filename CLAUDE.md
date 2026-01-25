# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A slide deck platform hosting multiple presentation decks at `deck.domain.com/topic1/`, `/topic2/`, etc. Each deck has AI-generated layouts and styling with no predefined templates. Slides are pure React/TSX components, not MDX.

## Technology Stack

- **Next.js 14+** with App Router, React 18, TypeScript
- **Tailwind CSS** for utility styling
- **Framer Motion** for all animations
- **prism-react-renderer** for code syntax highlighting
- **Vercel** deployment

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
```

## Project Structure

```
/app
  /[topic-name]/       # Each deck is a folder
    page.tsx           # Deck entry point
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
- `Slide.tsx` - Minimal wrapper providing Framer Motion animation scaffolding

**Primitives** are optional building blocks. AI can create custom elements when primitives don't fit.

**Navigation:** Arrow keys, Space, PageUp/Down for slides. URL hash stores current slide (`/topic1/#5`). Touch swipe supported.

**PDF Export:** Uses print CSS with `?print=true` query param to render all slides for printing. Optional Puppeteer for automated generation.

## Adding a New Deck

1. Create `/app/[topic-name]/`
2. Create `page.tsx` importing Deck and slides
3. Create `slides.tsx` with React slide components
4. Add images to `/public/images/[topic-name]/` if needed

## Design Philosophy

No templates - each deck is a blank canvas. AI generates bespoke layouts, animations, and visual treatments based on topic, tone, audience, and brand inputs. Creative freedom over consistency.
