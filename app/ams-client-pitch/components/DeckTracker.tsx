'use client';

import { useEffect, useRef } from 'react';

interface DeckTrackerProps {
  deckName: string;
}

export function DeckTracker({ deckName }: DeckTrackerProps) {
  const hasSentRef = useRef(false);

  useEffect(() => {
    // Only send once per session
    if (hasSentRef.current) return;
    hasSentRef.current = true;

    const trackView = async () => {
      try {
        // Get visitor info from our API
        const visitorResponse = await fetch('/api/visitor-info');
        const visitorInfo = await visitorResponse.json();

        // Send view notification
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'view',
            data: {
              deckName,
              ip: visitorInfo.ip,
              country: visitorInfo.country,
              city: visitorInfo.city,
              userAgent: navigator.userAgent,
              referrer: document.referrer || 'Direct',
              timestamp: visitorInfo.timestamp,
              screenSize: `${window.screen.width}x${window.screen.height}`,
              language: navigator.language,
            },
          }),
        });
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.error('Tracking error:', error);
      }
    };

    // Small delay to not block initial render
    const timeoutId = setTimeout(trackView, 1000);

    return () => clearTimeout(timeoutId);
  }, [deckName]);

  return null;
}
