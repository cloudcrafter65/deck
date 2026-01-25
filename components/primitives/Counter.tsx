'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface CounterProps {
  value: number;
  className?: string;
  duration?: number;
  delay?: number;
}

export function Counter({ value, className = '', duration = 1, delay = 0 }: CounterProps) {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    const timeout = setTimeout(() => {
      spring.set(value);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [spring, value, delay]);

  return <motion.span className={className}>{display}</motion.span>;
}
