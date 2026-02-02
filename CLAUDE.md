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

## Workflow Orchestration

### 1. Plan Mode Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

- Use subagents liberally to keep the main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until the mistake rate drops
- Review lessons at the session start for the relevant project

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behaviour between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask, "Is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report, just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching is required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write a plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
