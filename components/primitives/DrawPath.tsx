'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DrawPathProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function DrawPath({ children, className = '', duration = 1.5, delay = 0 }: DrawPathProps) {
  return (
    <motion.svg
      className={className}
      initial="hidden"
      animate="visible"
    >
      <motion.g
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { delay, duration, ease: 'easeInOut' },
          },
        }}
      >
        {children}
      </motion.g>
    </motion.svg>
  );
}
