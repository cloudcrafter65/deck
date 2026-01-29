'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const { currentSlide, direction, nextSlide, prevSlide } = useSlideNavigation(totalSlides);

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
      className={`relative w-screen h-screen-safe overflow-hidden bg-black ${className}`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      tabIndex={0}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <div key={currentSlide} className="w-full h-full overflow-y-auto">
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all touch-manipulation z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all touch-manipulation z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Slide indicator */}
      <div
        className="absolute right-4 px-2 py-1 rounded bg-black/30 backdrop-blur-sm text-white/80 text-sm font-mono z-10"
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      >
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
