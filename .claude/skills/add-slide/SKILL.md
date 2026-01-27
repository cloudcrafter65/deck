---
name: add-slide
description: Add a new slide component to an existing deck with optional type (title, content, split, code, image)
argument-hint: <deck-name> <slide-name> [--type=content]
---

# /add-slide

Add a new slide component to an existing deck.

## Usage

```
/add-slide <deck-name> <slide-name> [--type=<type>]
```

## Arguments

- `deck-name` (required): The existing deck folder name (e.g., `zendesk`, `example`)
- `slide-name` (required): PascalCase name for the slide component (e.g., `FeatureOverview`, `TeamIntro`)
- `--type` (optional): Slide template type - `title`, `content`, `split`, `code`, `image`. Defaults to `content`

## Instructions

When the user runs this skill:

1. **Validate inputs**
   - Check that `/app/<deck-name>/slides.tsx` exists
   - Ensure `slide-name` is PascalCase
   - Validate type is one of the allowed values

2. **Read the existing `slides.tsx`** file

3. **Generate the slide component** based on type:

### Type: `title`
```tsx
export function <SlideName>() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <AnimatedText as="h1" className="text-6xl font-bold text-white mb-4">
          Title Here
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/70" delay={0.2}>
          Subtitle here
        </AnimatedText>
      </div>
    </Slide>
  );
}
```

### Type: `content` (default)
```tsx
export function <SlideName>() {
  return (
    <Slide className="flex items-center justify-center bg-white p-12">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-gray-900 mb-8">
          Section Title
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-gray-600" delay={0.1}>
          Content goes here.
        </AnimatedText>
      </div>
    </Slide>
  );
}
```

### Type: `split`
```tsx
export function <SlideName>() {
  return (
    <Slide className="flex items-center justify-center bg-white p-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <AnimatedText as="h2" className="text-4xl font-bold text-gray-900 mb-6">
            Left Title
          </AnimatedText>
          <AnimatedText as="p" className="text-lg text-gray-600" delay={0.1}>
            Left content here.
          </AnimatedText>
        </div>
        <div>
          <AnimatedText as="h3" className="text-2xl font-bold text-gray-900 mb-4" delay={0.2}>
            Right Title
          </AnimatedText>
          <AnimatedText as="p" className="text-lg text-gray-600" delay={0.3}>
            Right content here.
          </AnimatedText>
        </div>
      </div>
    </Slide>
  );
}
```

### Type: `code`
```tsx
export function <SlideName>() {
  const code = `// Your code here
function example() {
  return 'Hello, World!';
}`;

  return (
    <Slide className="flex items-center justify-center bg-gray-900 p-12">
      <div className="max-w-3xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-6">
          Code Example
        </AnimatedText>
        <CodeBlock code={code} language="typescript" />
      </div>
    </Slide>
  );
}
```

### Type: `image`
```tsx
export function <SlideName>() {
  return (
    <Slide className="relative flex items-center justify-center bg-black">
      <img
        src="/images/<deck-name>/image.jpg"
        alt="Description"
        className="max-w-full max-h-full object-contain"
      />
      <div className="absolute bottom-8 left-8 right-8">
        <AnimatedText as="p" className="text-xl text-white/80">
          Caption here
        </AnimatedText>
      </div>
    </Slide>
  );
}
```

4. **Add necessary imports** if not present:
   - `CodeBlock` for code slides
   - Ensure `Slide` and `AnimatedText` are imported

5. **Append the new slide** to the end of the file

6. **Update `page.tsx`**
   - Add the new slide to the import statement
   - Add `<SlideName />` to the Deck children

7. **Confirm** by showing the added component name and its location in the deck

## Example

```
/add-slide zendesk PricingComparison --type=split
```

Adds `PricingComparison` split slide to `/app/zendesk/slides.tsx` and updates `/app/zendesk/page.tsx`.
