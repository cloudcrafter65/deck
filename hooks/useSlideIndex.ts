'use client';

import { useEffect, useState } from 'react';

export function useSlideIndex() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const slideNum = parseInt(hash, 10);
      if (!isNaN(slideNum) && slideNum >= 1) {
        setSlideIndex(slideNum - 1);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return slideIndex;
}
