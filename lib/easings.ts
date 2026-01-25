// Common easing curves for Framer Motion
export const easings = {
  // Smooth default
  smooth: [0.25, 0.1, 0.25, 1],

  // Apple-style easing
  apple: [0.42, 0, 0.58, 1],

  // Snappy animations
  snappy: [0.6, 0.05, 0.01, 0.9],

  // Bouncy feel
  bouncy: [0.68, -0.55, 0.265, 1.55],

  // Ease out quint
  easeOutQuint: [0.22, 1, 0.36, 1],

  // Ease in out cubic
  easeInOutCubic: [0.65, 0, 0.35, 1],

  // Dramatic entrance
  dramatic: [0.16, 1, 0.3, 1],
} as const;

export type EasingName = keyof typeof easings;
