'use client';

import { ReactNode, useState, useEffect } from 'react';

interface PresenterProps {
  children: ReactNode;
  notes?: string;
}

export function Presenter({ children, notes }: PresenterProps) {
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'n' && e.metaKey) {
        e.preventDefault();
        setShowNotes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-full">
      {children}
      {showNotes && notes && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-4 max-h-48 overflow-y-auto">
          <div className="text-xs text-white/50 mb-2">Speaker Notes (Cmd+N to toggle)</div>
          <div className="text-sm">{notes}</div>
        </div>
      )}
    </div>
  );
}
