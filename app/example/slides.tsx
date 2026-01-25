'use client';

import { Slide } from '@/components/core';
import { AnimatedText, CodeBlock } from '@/components/primitives';

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="text-center">
        <AnimatedText as="h1" className="text-6xl font-bold mb-4">
          Welcome to Deck
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/70" delay={0.2}>
          A slide deck platform with AI-generated layouts
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function FeaturesSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-16">
      <div className="max-w-4xl">
        <AnimatedText as="h2" className="text-4xl font-bold mb-8">
          Features
        </AnimatedText>
        <div className="grid grid-cols-2 gap-8">
          {['React/TSX Slides', 'Framer Motion', 'Keyboard Navigation', 'Touch Support'].map((feature, i) => (
            <AnimatedText
              key={feature}
              delay={0.1 * (i + 1)}
              className="bg-white/10 rounded-lg p-6 text-lg"
            >
              {feature}
            </AnimatedText>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function CodeSlide() {
  const code = `import { Deck } from '@/components/core';
import { TitleSlide, FeaturesSlide } from './slides';

export default function MyDeck() {
  return (
    <Deck>
      <TitleSlide />
      <FeaturesSlide />
    </Deck>
  );
}`;

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-16">
      <div className="max-w-3xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold mb-6">
          Simple API
        </AnimatedText>
        <CodeBlock code={code} language="tsx" />
      </div>
    </Slide>
  );
}

export function EndSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900">
      <div className="text-center">
        <AnimatedText as="h2" className="text-5xl font-bold mb-4">
          Get Started
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/70" delay={0.2}>
          Create your deck at /app/[topic-name]/
        </AnimatedText>
      </div>
    </Slide>
  );
}
