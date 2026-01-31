# CLAUDE.md

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint
```

## Multi-Site Architecture

Single codebase serving two domains via `NEXT_PUBLIC_SITE` env var:

| Site | Domain | Decks |
|------|--------|-------|
| `bytejournal` | deck.bytejournal.blog | cre-pov, resume-2hr, zendesk, example |
| `cyaire` | deck.cyaire.com | ams-client-pitch, appmod, ams-gtm-26 |

**Key files:** `/lib/sites.ts` (config), `/proxy.ts` (access control)

## Project Structure

```
/app
  /[deck-name]/          # Each deck folder
    page.tsx             # Entry point (default export)
    slides.tsx           # Slide components (named exports)
    /components          # Deck-specific components
  /home/                 # Site-specific homepages
  /api/                  # API routes (send-email, visitor-info)
/components/core         # Deck.tsx, Slide.tsx
/components/primitives   # AnimatedText, CodeBlock, etc.
/lib/sites.ts            # Site configuration
/proxy.ts                # Deck access by site
/public/images/[deck]/   # Per-deck images
```

## Adding a New Deck

1. Create `/app/[deck-name]/` with `page.tsx` and `slides.tsx`
2. Add slug to site's `decks` array in `/lib/sites.ts`
3. Add slug to `allDecks` set in `/proxy.ts`
4. Add images to `/public/images/[deck-name]/` if needed

## Stack

Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS 4, Framer Motion 12

## Conventions

- `'use client'` for interactive components
- Path aliases: `@/components`, `@/hooks`, `@/lib`
- Named exports for slides, default exports for pages
- Tailwind only (no inline styles)
- Framer Motion for all animations

## Slide Patterns

```tsx
// Standard slide structure
<Slide className="flex items-center justify-center p-8 md:p-16 relative">
  <div className="max-w-6xl w-full">
    {/* Content */}
  </div>
  <SlideFooter variant="light" /> {/* or "dark" */}
</Slide>
```

**Navigation:** Arrow keys, Space, PageUp/Down, Home/End. Hash stores slide (`#5`).

**PDF Export:** `?print=true` query param.

## Design Philosophy

No templates. Each deck is a blank canvas with bespoke layouts and animations.
