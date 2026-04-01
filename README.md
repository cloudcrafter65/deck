# Deck: AI Transformation & CTO Advisory Platform

A high-performance, bespoke presentation platform hosting multiple strategic decks and points-of-view (POV).

Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, this platform treats every presentation as a "blank canvas"—a custom-coded web application rather than a template-based slide deck.

## Multi-Site Architecture

This codebase supports multiple domains from a single repository:

| Site | Domain | Purpose |
|------|--------|---------|
| **ByteJournal** | `deck.bytejournal.blog` | Personal portfolio & POV decks (public) |
| **Cyaire** | `deck.cyaire.com` | Client-facing business presentations (auth-protected) |

Each site has its own:
- Homepage design
- Assigned deck collection
- Metadata and branding
- Independent Vercel deployment
- Auth configuration (Cyaire requires login; ByteJournal is public)

### Site Configuration

Decks are assigned to sites in `/lib/sites.ts`:

```typescript
bytejournal: ['cre-pov', 'resume-2hr', 'zendesk', 'example', 'sed-pov']
cyaire: ['ams-client-pitch', 'appmod', 'ams-gtm-26']
```

The `NEXT_PUBLIC_SITE` environment variable determines which site is active at build time.

## Key Features

- **Multi-Site Support**: Single codebase, multiple domains with independent deployments
- **Auth & Access Control**: Supabase-powered auth with per-deck granular access control (Cyaire is fully protected)
- **Topic-Specific Decks**: Each deck lives at its own route (e.g., `/appmod`, `/cre-pov`) with unique styling and layouts
- **Interactive Animations**: Powered by Framer Motion 12 for smooth, professional transitions
- **Responsive Design**: Decks are optimized for desktop presentations and mobile viewing
- **PDF Export**: Built-in support for printing decks via `?print=true` query parameter
- **Accessibility**: Support for `prefers-reduced-motion` and keyboard navigation
- **Architecture**: A lightweight core (`Deck`, `Slide`) with modular primitives for rapid deck generation

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Auth**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Syntax Highlighting**: [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

```bash
/app
  /[deck-name]/        # Individual deck folders
    page.tsx           # Entry point for the deck
    slides.tsx         # React slide components
    /components        # Deck-specific components
  /home/               # Site-specific homepages
  /api/                # API routes (send-email, visitor-info)
  /auth/               # Supabase auth callback handler
  /login/              # Login page
/components
  /core                # Platform components: Deck.tsx, Slide.tsx
  /primitives          # Animated primitives: AnimatedText, CodeBlock, etc.
/hooks                 # Navigation and interaction hooks
/lib                   # Shared utilities (sites.ts, proxy.ts, transitions, easings)
/public/images/[deck]  # Per-deck image assets
/supabase              # Supabase config and migrations
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/your-repo/deck.git
cd deck
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build and Deployment

```bash
# Build for production (uses NEXT_PUBLIC_SITE env var)
npm run build

# Lint
npm run lint
```

### Vercel Deployment (Multi-Site)

This project deploys to two separate Vercel projects from the same repository:

#### ByteJournal (deck.bytejournal.blog)
1. Create Vercel project linked to this repo
2. Set environment variable: `NEXT_PUBLIC_SITE=bytejournal`
3. Configure domain: `deck.bytejournal.blog`

#### Cyaire (deck.cyaire.com)
1. Create a second Vercel project linked to the same repo
2. Set environment variable: `NEXT_PUBLIC_SITE=cyaire`
3. Add Supabase environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
4. Configure domain: `deck.cyaire.com`

Both projects deploy from the same codebase but serve different content based on the environment variable.

## Creating a New Deck

1. Create `/app/[deck-name]/` with `page.tsx` and `slides.tsx`
2. Add the deck slug to the appropriate site's `decks` array in `/lib/sites.ts`
3. Add the slug to `allDecks` in `/lib/proxy.ts`
4. Add images to `/public/images/[deck-name]/` if needed

For detailed coding conventions and architecture details, see [CLAUDE.md](./CLAUDE.md).

## License

Private / Confidential. (c) 2026 Vijayakumar G.A.
