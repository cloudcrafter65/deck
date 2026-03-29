'use client';

import { ReactNode, useEffect, useState, useCallback, useRef } from 'react';
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

            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono w-fit">T</kbd>
            <div className="text-gray-700">Jump to Table of Contents</div>

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

const IDLE_DELAY = 5000;

export function Deck({ children, className = '' }: DeckProps) {
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;
  const [printMode, setPrintMode] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { currentSlide, direction, nextSlide, prevSlide } = useSlideNavigation(totalSlides);

  // Idle detection — reset on any pointer or key activity
  const resetIdle = useCallback(() => {
    setIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), IDLE_DELAY);
  }, []);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'];
    events.forEach(e => window.addEventListener(e, resetIdle, { passive: true }));
    // Start the timer on mount
    idleTimer.current = setTimeout(() => setIdle(true), IDLE_DELAY);
    return () => {
      events.forEach(e => window.removeEventListener(e, resetIdle));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [resetIdle]);

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
  const navVisible = !idle || showHelp;

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden bg-black ${className}`}
      tabIndex={0}
    >
      {/* Progress bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-white/10 z-20 transition-opacity duration-700 ${navVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          className="h-full bg-white/30 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <div key={currentSlide} className="w-full h-full">
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className={`hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full border border-slate-300/50 text-slate-400/60 hover:text-slate-600 hover:border-slate-400 transition-all duration-700 z-10 ${navVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className={`hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full border border-slate-300/50 text-slate-400/60 hover:text-slate-600 hover:border-slate-400 transition-all duration-700 z-10 ${navVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Bottom navigation panel */}
      <div
        className={`absolute bottom-3 right-3 flex items-center gap-1.5 z-20 px-2.5 py-1.5 rounded-full border border-slate-300/50 transition-opacity duration-700 ${navVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Mobile prev/next */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="md:hidden p-1 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all text-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Slide counter */}
        <span className="text-[10px] font-mono text-slate-400/70 px-1 tracking-widest">
          {currentSlide + 1} / {totalSlides}
        </span>

        {/* Mobile next */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="md:hidden p-1 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all text-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Divider */}
        <div className="hidden md:block w-px h-3 bg-white/15" />

        {/* Print button */}
        <button
          onClick={handlePrint}
          className="hidden md:flex p-1 rounded-full transition-all text-slate-400/60 hover:text-slate-600"
          aria-label="Print slides"
          title="Print (P)"
        >
          <Printer className="w-3.5 h-3.5" />
        </button>

        {/* Help button */}
        <button
          onClick={() => setShowHelp(true)}
          className="hidden md:flex p-1 rounded-full transition-all text-slate-400/60 hover:text-slate-600 font-mono text-[10px]"
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
