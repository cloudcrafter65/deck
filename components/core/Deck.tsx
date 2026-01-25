'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

interface DeckProps {
  children: ReactNode[];
  className?: string;
}

export function Deck({ children, className = '' }: DeckProps) {
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;

  const { currentSlide, direction, goToSlide, nextSlide, prevSlide } = useSlideNavigation(totalSlides);

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden bg-black ${className}`}
      tabIndex={0}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <div key={currentSlide} className="w-full h-full">
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Slide indicator */}
      <div className="absolute bottom-4 right-4 text-white/50 text-sm font-mono">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
