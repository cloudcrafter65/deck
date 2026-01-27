---
name: new-deck
description: Scaffold a new presentation deck with page.tsx, slides.tsx, and image directory
argument-hint: <deck-name>
---

# /new-deck

Scaffold a new presentation deck with boilerplate files.

## Usage

```
/new-deck <deck-name>
```

## Arguments

- `deck-name` (required): The URL-friendly name for the deck (e.g., `my-presentation`, `quarterly-review`)

## Instructions

When the user runs this skill:

1. **Validate the deck name**
   - Must be lowercase, URL-friendly (letters, numbers, hyphens only)
   - Check that `/app/<deck-name>/` doesn't already exist

2. **Create the deck directory structure**
   - Create `/app/<deck-name>/`
   - Create `/public/images/<deck-name>/` for deck assets

3. **Create `page.tsx`** with this template:

```tsx
import { Deck } from '@/components/core';
import { TitleSlide, ContentSlide, EndSlide } from './slides';

export default function <PascalCaseName>Deck() {
  return (
    <Deck>
      <TitleSlide />
      <ContentSlide />
      <EndSlide />
    </Deck>
  );
}
```

4. **Create `slides.tsx`** with this template:

```tsx
'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <AnimatedText as="h1" className="text-6xl font-bold text-white mb-4">
          <deck-name> {/* Replace with actual title */}
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/70" delay={0.2}>
          Subtitle goes here
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ContentSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-12">
      <div className="max-w-4xl">
        <AnimatedText as="h2" className="text-4xl font-bold text-gray-900 mb-8">
          Content Title
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-gray-600" delay={0.1}>
          Add your content here.
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function EndSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-4">
          Thank You
        </AnimatedText>
      </div>
    </Slide>
  );
}
```

5. **Confirm creation** by listing the created files and providing the URL to access the deck: `http://localhost:3000/<deck-name>/`

## Example

```
/new-deck quarterly-review
```

Creates:
- `/app/quarterly-review/page.tsx`
- `/app/quarterly-review/slides.tsx`
- `/public/images/quarterly-review/`
