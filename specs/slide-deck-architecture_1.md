# Slide Deck Platform - Technical Architecture Specification

## Project Overview

A single-codebase web application hosting multiple slide decks at `deck.domain.com/topic1/`, `/topic2/`, etc. Each topic deck has completely unique, AI-generated layouts and styling with no predefined templates constraining creativity.

---

## Design Philosophy

**No template constraints.** Each slide deck is a blank canvas. The AI model, guided by user inputs (topic, tone, audience, brand), generates bespoke layouts, animations, and visual treatments per deck. Common utilities and primitives are available but never enforced.

**Creative freedom over consistency.** A tech talk deck might use dark terminals and code animations. A wellness deck might use organic shapes and gentle transitions. A pitch deck might use bold typography and data visualizations. Each is crafted uniquely.

---

## Technology Stack

### Core Framework
- **Next.js 14+** (React 18 + TypeScript)
- App Router for file-based routing
- Server Components for static content, Client Components for interactivity
- Static generation for production builds

### Styling (Multiple Approaches Available)
- **Tailwind CSS** for rapid utility-based styling
- **CSS Modules** for scoped component styles
- **Inline styles** for AI-generated dynamic values
- **CSS Variables** for theme tokens when needed

### Animation
- **Framer Motion** for all animations
  - Layout animations
  - Orchestrated sequences
  - Gesture interactions
  - SVG path animations
  - Shared element transitions
  - Scroll-triggered reveals

### Content Input
- User provides content as PDF, text, markdown, or other document formats
- AI processes content and generates slides as pure TSX components
- No MDX - all slides are React components with full creative control

### PDF Export
- **Print CSS** with `@media print` rules
- **Puppeteer** for automated generation (optional)

### Deployment
- **Vercel** (optimal for Next.js)
- Custom domain with automatic routing

---

## Project Structure

```
/slide-deck-platform
├── next.config.ts
├── tailwind.config.ts
├── package.json
│
├── /app
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing / deck directory
│   │
│   ├── /topic1
│   │   ├── page.tsx               # Deck entry point
│   │   ├── slides.tsx             # All slides defined here
│   │   ├── styles.module.css      # Deck-specific styles (optional)
│   │   └── /components            # Deck-specific components (optional)
│   │
│   ├── /topic2
│   │   ├── page.tsx
│   │   ├── slides.tsx
│   │   └── styles.module.css
│   │
│   └── /[topic]                   # Optional dynamic fallback
│       └── page.tsx
│
├── /components
│   ├── /core
│   │   ├── Deck.tsx               # Slide container with navigation
│   │   ├── Slide.tsx              # Base slide wrapper (minimal)
│   │   └── Presenter.tsx          # Presenter mode (optional)
│   │
│   └── /primitives                # Building blocks, not templates
│       ├── AnimatedText.tsx       # Text reveal animations
│       ├── CodeBlock.tsx          # Syntax highlighting
│       ├── ImageReveal.tsx        # Image animations
│       ├── Counter.tsx            # Animated numbers
│       ├── DrawPath.tsx           # SVG path drawing
│       └── ParallaxLayer.tsx      # Depth effects
│
├── /hooks
│   ├── useSlideNavigation.ts      # Keyboard/gesture navigation
│   ├── useSlideIndex.ts           # Current slide state + URL sync
│   ├── useFullscreen.ts           # Fullscreen toggle
│   └── useReducedMotion.ts        # Accessibility preference
│
├── /lib
│   ├── transitions.ts             # Framer Motion transition presets
│   ├── easings.ts                 # Custom easing functions
│   └── pdf.ts                     # Export utilities
│
├── /styles
│   ├── globals.css                # Minimal resets, base tokens
│   └── print.css                  # PDF export styles
│
├── /public
│   ├── /fonts
│   └── /images
│       ├── /topic1
│       └── /topic2
```

---

## Core Components

### Deck.tsx
Minimal container that handles navigation and slide state only. No layout opinions. Wraps slides with AnimatePresence for transitions.

### Slide.tsx
Minimal wrapper providing Framer Motion animation scaffolding. Accepts custom variants, className, and inline styles. Content inside is completely freeform.

---

## Primitives Library

Optional building blocks the AI can use - never required:

| Component | Purpose |
|-----------|---------|
| AnimatedText | Word-by-word or character reveal animations |
| CodeBlock | Syntax-highlighted code with Prism |
| ImageReveal | Image entrance animations (fade, scale, clip) |
| Counter | Animated number counting |
| DrawPath | SVG path drawing animations |
| ParallaxLayer | Depth-based scroll/mouse effects |

AI can create entirely custom elements when primitives don't fit the creative vision.

---

## Navigation

### Keyboard Controls
| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| `Escape` | Exit fullscreen |

### URL State
- Current slide stored in URL hash: `/topic1/#5`
- Enables direct linking to specific slides
- Browser back/forward navigation supported

### Touch Support
- Swipe left/right for mobile navigation
- Tap edges for prev/next

---

## Framer Motion Transition Presets

Available in `/lib/transitions.ts`:

| Preset | Description |
|--------|-------------|
| fadeSlide | Simple opacity fade |
| slideFromRight | Horizontal slide with fade |
| scaleUp | Scale from small with fade |
| flipVertical | 3D vertical flip |

AI can define custom variants per deck for unique transitions.

---

## PDF Export Strategy

### Approach 1: Print CSS (Recommended)
- `@media print` stylesheet formats all slides for landscape A4/Letter
- User triggers via Cmd/Ctrl + P → Save as PDF
- Requires `?print=true` query param to render all slides at once

### Approach 2: Puppeteer (Automated)
- Server-side or build-time PDF generation
- Navigates to deck URL with print mode
- Generates PDF programmatically

### Print CSS Requirements
- Page size: 16:9 landscape
- Force background colors to print
- Hide navigation UI elements
- Disable all animations
- Page break after each slide

---

## Adding a New Topic Deck

### Workflow
1. User provides source content (PDF, text, markdown, etc.)
2. User specifies visual style, tone, audience preferences
3. AI generates unique slides as React/TSX components
4. Slides are placed in the appropriate folder structure

### Folder Checklist
1. Create folder: `/app/[topic-name]/`
2. Create `page.tsx` that imports Deck and slides
3. Create `slides.tsx` with AI-generated React components
4. Add `styles.module.css` for deck-specific styles (optional)
5. Add images to `/public/images/[topic-name]/` if needed
6. Deploy

No templates. No constraints. Each deck is a fresh canvas.

---

## AI Prompt Guidelines for Generating Decks

### Content Input
User provides source content in any format:
- PDF documents
- Text files
- Markdown files
- Word documents
- Outline/bullet points
- Raw notes

AI processes the content and generates slides as pure React/TSX components.

### Additional Inputs

| Input | Description |
|-------|-------------|
| Topic | Subject matter of the presentation |
| Audience | Who will view this (executives, developers, general public) |
| Tone | Professional, casual, inspirational, technical, etc. |
| Visual style | Dark, light, colorful, minimal, organic, geometric, etc. |
| Brand colors | Hex codes (optional) |
| Typography | Serif, sans, mono, or specific fonts (optional) |
| Animation intensity | Subtle, moderate, or dynamic |

### AI Responsibilities
1. Parse and understand provided source content
2. Structure content into logical slide sequence
3. Design a unique visual language for the deck
4. Choose appropriate fonts, colors, and spacing
5. Create custom animation patterns matching the tone
6. Build each slide as a self-contained React component
7. Use primitives where helpful, create custom elements where needed
8. Ensure content hierarchy is clear
9. Consider PDF export (avoid animation-dependent comprehension)

---

## Dependencies

### Required
| Package | Purpose |
|---------|---------|
| next | Framework |
| react / react-dom | UI library |
| framer-motion | Animations |
| typescript | Type safety |
| tailwindcss | Utility CSS |
| prism-react-renderer | Code highlighting |

### Optional
| Package | Purpose |
|---------|---------|
| puppeteer | Automated PDF export |

---

## Performance Considerations

- Lazy load slides: Only render current + adjacent slides in navigation mode
- Image optimization: Use Next.js Image component with responsive sizes
- Font loading: Preload critical fonts, use `font-display: swap`
- Code splitting: Each topic deck as separate chunk
- Static generation: Pre-render all decks at build time

---

## Accessibility

- `useReducedMotion` hook respects user's motion preferences
- Keyboard navigation fully supported
- Semantic HTML in slide content
- Sufficient color contrast (AI should verify)
- Alt text for images

---

## Future Enhancements

- **Presenter mode:** Speaker notes, timer, next slide preview
- **Remote sync:** WebSocket-based audience follow-along
- **Collaboration:** Real-time co-editing
- **Asset library:** Shared icons, illustrations, stock images
- **Export variants:** PPTX generation, video export via Remotion
- **Analytics:** View tracking, engagement metrics
