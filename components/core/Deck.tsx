'use client';

import { ReactNode, useEffect, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Printer, X } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { isPrintMode } from '@/lib/pdf';

interface DeckProps {
  children: ReactNode[];
  className?: string;
}

function KeyboardHelp({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium text-gray-500">Navigation</div>
            <div></div>

            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">→</kbd>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">Space</kbd>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">.</kbd>
            </div>
            <div className="text-gray-700">Next slide</div>

            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">←</kbd>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">,</kbd>
            </div>
            <div className="text-gray-700">Previous slide</div>

            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">H</kbd>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">Home</kbd>
            </div>
            <div className="text-gray-700">First slide</div>

            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">L</kbd>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">End</kbd>
            </div>
            <div className="text-gray-700">Last slide</div>
          </div>

          <div className="border-t pt-4 grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium text-gray-500">Actions</div>
            <div></div>

            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono w-fit">P</kbd>
            <div className="text-gray-700">Print / Export PDF</div>

            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono w-fit">?</kbd>
            <div className="text-gray-700">Show this help</div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t text-xs text-gray-400 text-center">
          Touch devices: Swipe left/right to navigate
        </div>
      </div>
    </div>
  );
}

export function Deck({ children, className = '' }: DeckProps) {
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;
  const [printMode, setPrintMode] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const { currentSlide, direction, nextSlide, prevSlide } = useSlideNavigation(totalSlides);

  useEffect(() => {
    setPrintMode(isPrintMode());
  }, []);

  // Listen for help toggle event from keyboard shortcut
  useEffect(() => {
    const handleToggleHelp = () => setShowHelp(prev => !prev);
    window.addEventListener('toggleHelp', handleToggleHelp);
    return () => window.removeEventListener('toggleHelp', handleToggleHelp);
  }, []);

  // Close help on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showHelp) {
        setShowHelp(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHelp]);

  const handlePrint = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('print', 'true');
    url.hash = '';
    window.open(url.toString(), '_blank');
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

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden bg-black ${className}`}
      tabIndex={0}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div
          className="h-full bg-white/60 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <div key={currentSlide} className="w-full h-full">
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Navigation arrows - hidden on mobile, visible on md+ */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Bottom navigation panel */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
        {/* Mobile prev/next buttons */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="md:hidden p-1.5 rounded-full hover:bg-white/10 disabled:opacity-30 transition-all text-white/80"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide counter */}
        <span className="text-xs font-mono text-white/80 px-2">
          {currentSlide + 1} / {totalSlides}
        </span>

        {/* Mobile prev/next buttons */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="md:hidden p-1.5 rounded-full hover:bg-white/10 disabled:opacity-30 transition-all text-white/80"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Divider */}
        <div className="hidden md:block w-px h-4 bg-white/20" />

        {/* Print button - desktop only */}
        <button
          onClick={handlePrint}
          className="hidden md:flex p-1.5 rounded-full hover:bg-white/10 transition-all text-white/80"
          aria-label="Print slides"
          title="Print (P)"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Help button - desktop only */}
        <button
          onClick={() => setShowHelp(true)}
          className="hidden md:flex p-1.5 rounded-full hover:bg-white/10 transition-all text-white/80 font-mono text-xs"
          aria-label="Keyboard shortcuts"
          title="Keyboard shortcuts (?)"
        >
          ?
        </button>
      </div>

      {/* Keyboard help overlay */}
      {showHelp && <KeyboardHelp onClose={() => setShowHelp(false)} />}
    </div>
  );
}
