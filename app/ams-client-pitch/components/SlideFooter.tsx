'use client';

interface SlideFooterProps {
  variant?: 'light' | 'dark';
}

export function SlideFooter({ variant = 'dark' }: SlideFooterProps) {
  const year = new Date().getFullYear();

  return (
    <div
      className={`absolute bottom-4 left-0 right-0 text-center text-xs ${
        variant === 'light' ? 'text-slate-400' : 'text-white/40'
      }`}
    >
      &copy; {year} Cyaire. Confidential.
    </div>
  );
}
