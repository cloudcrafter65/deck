'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { isPrintMode } from '@/lib/pdf';

interface DeckProps {
  children: ReactNode[];
  className?: string;
}

export function Deck({ children, className = '' }: DeckProps) {
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;
  const [printMode, setPrintMode] = useState(false);

  const { currentSlide, direction } = useSlideNavigation(totalSlides);

  useEffect(() => {
    setPrintMode(isPrintMode());
  }, []);

  // Print mode: render all slides stacked for printing
  if (printMode) {
    return (
      <div className={`bg-black ${className}`}>
        {slides.map((slide, index) => (
          <div key={index} className="slide w-screen h-screen overflow-hidden">
            {slide}
          </div>
        ))}
      </div>
    );
  }

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
