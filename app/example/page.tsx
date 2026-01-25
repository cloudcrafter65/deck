'use client';

import { Deck } from '@/components/core';
import { TitleSlide, FeaturesSlide, CodeSlide, EndSlide } from './slides';

export default function ExampleDeck() {
  return (
    <Deck>
      <TitleSlide />
      <FeaturesSlide />
      <CodeSlide />
      <EndSlide />
    </Deck>
  );
}
