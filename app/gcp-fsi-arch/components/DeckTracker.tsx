'use client';

import { useEffect, useRef, useCallback } from 'react';

interface DeckTrackerProps {
  deckName: string;
  totalSlides: number;
}

interface SlideTime {
  firstView: number;
  totalTime: number;
}

interface UTMParams {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
}

function generateVisitorId(): string {
  // Simple UUID v4 pattern
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') {
    return { source: '', medium: '', campaign: '', content: '', term: '' };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || '',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
    content: params.get('utm_content') || '',
    term: params.get('utm_term') || '',
  };
}

function getCurrentSlide(): number {
  if (typeof window === 'undefined') return 1;
  const hash = window.location.hash;
  const slideNum = parseInt(hash.replace('#', ''), 10);
  return isNaN(slideNum) || slideNum < 1 ? 1 : slideNum;
}

export function DeckTracker({ deckName, totalSlides }: DeckTrackerProps) {
  const hasSentViewRef = useRef(false);
  const sessionStartTimeRef = useRef<number>(Date.now());
  const slidesViewedRef = useRef<Map<number, SlideTime>>(new Map());
  const currentSlideRef = useRef<number>(1);
  const currentSlideStartTimeRef = useRef<number>(Date.now());
  const furthestSlideRef = useRef<number>(1);
  const visitorIdRef = useRef<string>('');
  const visitCountRef = useRef<number>(1);
  const utmParamsRef = useRef<UTMParams>({ source: '', medium: '', campaign: '', content: '', term: '' });

  const recordSlideTime = useCallback((slideNum: number, timeSpentMs: number) => {
    const existing = slidesViewedRef.current.get(slideNum);
    if (existing) {
      existing.totalTime += timeSpentMs;
    } else {
      slidesViewedRef.current.set(slideNum, {
        firstView: Date.now(),
        totalTime: timeSpentMs,
      });
    }
  }, []);

  const sendEngagementData = useCallback(() => {
    // Record time on current slide before sending
    const timeOnCurrentSlide = Date.now() - currentSlideStartTimeRef.current;
    recordSlideTime(currentSlideRef.current, timeOnCurrentSlide);

    const sessionDuration = Math.round((Date.now() - sessionStartTimeRef.current) / 1000);
    const slidesViewed = Array.from(slidesViewedRef.current.keys()).sort((a, b) => a - b);
    const timePerSlide: Record<number, number> = {};

    slidesViewedRef.current.forEach((data, slide) => {
      timePerSlide[slide] = Math.round(data.totalTime / 1000);
    });

    const payload = JSON.stringify({
      type: 'engagement',
      data: {
        visitorId: visitorIdRef.current,
        deckName,
        sessionDuration,
        slidesViewed,
        furthestSlide: furthestSlideRef.current,
        timePerSlide,
        totalSlides,
      },
    });

    // Use sendBeacon for reliability on page unload
    navigator.sendBeacon('/api/send-email', payload);
  }, [deckName, totalSlides, recordSlideTime]);

  useEffect(() => {
    // Initialize visitor tracking from localStorage
    const storedVisitorId = localStorage.getItem('cyaire_visitor_id');
    const storedVisitCount = localStorage.getItem('cyaire_visit_count');

    if (storedVisitorId) {
      visitorIdRef.current = storedVisitorId;
      visitCountRef.current = parseInt(storedVisitCount || '1', 10) + 1;
    } else {
      visitorIdRef.current = generateVisitorId();
      visitCountRef.current = 1;
    }

    localStorage.setItem('cyaire_visitor_id', visitorIdRef.current);
    localStorage.setItem('cyaire_visit_count', visitCountRef.current.toString());

    // Parse UTM params
    utmParamsRef.current = getUTMParams();

    // Initialize current slide
    currentSlideRef.current = getCurrentSlide();
    currentSlideStartTimeRef.current = Date.now();
    furthestSlideRef.current = currentSlideRef.current;

    // Record initial slide view
    slidesViewedRef.current.set(currentSlideRef.current, {
      firstView: Date.now(),
      totalTime: 0,
    });
  }, []);

  useEffect(() => {
    // Only send view notification once per session
    if (hasSentViewRef.current) return;
    hasSentViewRef.current = true;

    const trackView = async () => {
      try {
        // Get visitor info from our API
        const visitorResponse = await fetch('/api/visitor-info');
        const visitorInfo = await visitorResponse.json();

        const isReturnVisitor = visitCountRef.current > 1;
        const utm = utmParamsRef.current;

        // Send view notification with enhanced data
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
              // New enhanced fields
              visitorId: visitorIdRef.current,
              visitCount: visitCountRef.current,
              isReturnVisitor,
              utmSource: utm.source,
              utmMedium: utm.medium,
              utmCampaign: utm.campaign,
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

  useEffect(() => {
    const handleHashChange = () => {
      const newSlide = getCurrentSlide();

      // Record time spent on previous slide
      const timeOnPreviousSlide = Date.now() - currentSlideStartTimeRef.current;
      recordSlideTime(currentSlideRef.current, timeOnPreviousSlide);

      // Update to new slide
      currentSlideRef.current = newSlide;
      currentSlideStartTimeRef.current = Date.now();

      // Track furthest slide
      if (newSlide > furthestSlideRef.current) {
        furthestSlideRef.current = newSlide;
      }

      // Initialize new slide if not seen before
      if (!slidesViewedRef.current.has(newSlide)) {
        slidesViewedRef.current.set(newSlide, {
          firstView: Date.now(),
          totalTime: 0,
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [recordSlideTime]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sendEngagementData();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [sendEngagementData]);

  return null;
}
