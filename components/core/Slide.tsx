'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface SlideProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

const defaultVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export function Slide({ children, className = '', variants = defaultVariants }: SlideProps) {
  return (
    <motion.div
      className="w-full h-full overflow-hidden max-md:overflow-y-auto"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={`w-full h-full max-md:h-auto max-md:min-h-full ${className}`}>
        {children}
      </div>
    </motion.div>
  );
}
