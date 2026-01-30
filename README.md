# Deck: AI Transformation & CTO Advisory Platform

A high-performance, bespoke presentation platform hosting multiple strategic decks and points-of-view (POV) by **Vijayakumar G.A.**, CTO - AI Transformation.

Built with **Next.js 15+**, **React 19**, and **Tailwind CSS 4**, this platform treats every presentation as a "blank canvas"—a custom-coded web application rather than a template-based slide deck.

## 🚀 Key Features

- **Topic-Specific Decks**: Each deck lives at its own route (e.g., `/appmod`, `/cre-pov`) with unique styling and layouts.
- **Interactive Animations**: Powered by Framer Motion 12 for smooth, professional transitions.
- **Responsive Design**: Decks are optimized for desktop presentations and mobile viewing.
- **PDF Export**: Built-in support for printing decks via `?print=true` query parameter.
- **Accessibility**: Support for `prefers-reduced-motion` and keyboard navigation.
- **Architecture**: A lightweight core (`Deck`, `Slide`) with modular primitives for rapid deck generation.

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
# Build for production
npm run build

# Start production server
npm run start
```

## 🏗 Creating a New Deck

1. Create a new directory under `app/[topic-name]/`.
2. Define your slides in `slides.tsx` using React components.
3. Import the `Deck` component in `page.tsx` and pass your slides as children.
4. Add any custom images to `public/images/[topic-name]/`.

For detailed coding conventions and architecture details, see [CLAUDE.md](./CLAUDE.md).

## 📄 License

Private / Confidential. (c) 2026 Vijayakumar G.A.
