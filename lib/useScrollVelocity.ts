'use client';

import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { getLenis } from './scroll';

export function useScrollVelocity() {
  const velocity = useMotionValue(0);
  const direction = useMotionValue(0);

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) {
      const checkInterval = setInterval(() => {
        const l = getLenis();
        if (l) {
          clearInterval(checkInterval);
          l.on('scroll', (e: { velocity: number; direction: number }) => {
            velocity.set(Math.max(-50, Math.min(50, e.velocity)));
            direction.set(e.direction);
          });
        }
      }, 100);
      return () => clearInterval(checkInterval);
    }

    lenis.on('scroll', (e: { velocity: number; direction: number }) => {
      velocity.set(Math.max(-50, Math.min(50, e.velocity)));
      direction.set(e.direction);
    });
  }, [velocity, direction]);

  return { velocity, direction };
}
