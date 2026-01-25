'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className = '',
  delay = 0,
}: ImageRevealProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
