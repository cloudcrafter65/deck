'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  as: Component = 'div',
}: AnimatedTextProps) {
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      className={className}
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
