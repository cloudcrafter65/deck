# Deck: AI Transformation & CTO Advisory Platform

A high-performance, bespoke presentation platform hosting multiple strategic decks and points-of-view (POV).

Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, this platform treats every presentation as a "blank canvas"—a custom-coded web application rather than a template-based slide deck.

## Multi-Site Architecture

This codebase supports multiple domains from a single repository:

| Site | Domain | Purpose |
|------|--------|---------|
| **ByteJournal** | `deck.bytejournal.blog` | Personal portfolio & POV decks |
| **Cyaire** | `deck.cyaire.com` | Client-facing business presentations |

Each site has its own:
- Homepage design
- Assigned deck collection
- Metadata and branding
- Independent Vercel deployment

### Site Configuration

Decks are assigned to sites in `/lib/sites.ts`:

```typescript
bytejournal: ['cre-pov', 'resume-2hr', 'zendesk', 'example']
cyaire: ['ams-client-pitch', 'appmod', 'ams-gtm-26']
```

The `NEXT_PUBLIC_SITE` environment variable determines which site is active at build time.

## Key Features

- **Multi-Site Support**: Single codebase, multiple domains with independent deployments
- **Topic-Specific Decks**: Each deck lives at its own route (e.g., `/appmod`, `/cre-pov`) with unique styling and layouts
- **Interactive Animations**: Powered by Framer Motion 12 for smooth, professional transitions
- **Responsive Design**: Decks are optimized for desktop presentations and mobile viewing
- **PDF Export**: Built-in support for printing decks via `?print=true` query parameter
- **Accessibility**: Support for `prefers-reduced-motion` and keyboard navigation
- **Architecture**: A lightweight core (`Deck`, `Slide`) with modular primitives for rapid deck generation

## 🛠 Technology Stack

- **Framework**: [Next.js 15/16](https://nextjs.org/) (App Router)
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Syntax Highlighting**: [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```bash
/app
  /[topic-name]/       # Individual deck folders
    page.tsx           # Entry point for the deck
    slides.tsx         # React slide components
  /layout.tsx          # Global layout and metadata
  /page.tsx            # Main portfolio landing page
/components
  /core                # Platform components: Deck.tsx, Slide.tsx
  /primitives          # Animated primitives: AnimatedText, CodeBlock, etc.
/hooks                 # Navigation and interaction hooks
/lib                   # Shared utilities (transitions, easings)
/public                # Assets and images
```

## 💻 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

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

# Start production server
npm run start
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
3. Configure domain: `deck.cyaire.com`

Both projects deploy from the same codebase but serve different content based on the environment variable.

## Creating a New Deck

1. Create a new directory under `app/[topic-name]/`
2. Define your slides in `slides.tsx` using React components
3. Import the `Deck` component in `page.tsx` and pass your slides as children
4. Add any custom images to `public/images/[topic-name]/`
5. **Assign the deck to a site** in `/lib/sites.ts`:
   ```typescript
   // Add to the appropriate site's decks array
   bytejournal: ['cre-pov', 'resume-2hr', 'zendesk', 'example', 'your-new-deck']
   // OR
   cyaire: ['ams-client-pitch', 'appmod', 'ams-gtm-26', 'your-new-deck']
   ```
6. **Update proxy** in `/proxy.ts` - add the new deck slug to `allDecks` set

For detailed coding conventions and architecture details, see [CLAUDE.md](./CLAUDE.md).

## 📄 License

Private / Confidential. (c) 2026 Vijayakumar G.A.
