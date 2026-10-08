'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

type CursorType = 'default' | 'link' | 'project' | 'gallery';

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hoverType, setHoverType] = useState<CursorType>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const ringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  const getHoverType = useCallback((target: HTMLElement): CursorType => {
    if (target.closest('#navbar')) return 'default';
    if (target.closest('.proj-row')) return 'project';
    if (target.closest('.gallery-item')) return 'gallery';
    if (
      target.closest('a') ||
      target.closest('button') ||
      target.closest('.bento-card') ||
      target.closest('.skill-card') ||
      target.closest('.stat-card')
    ) return 'link';
    return 'default';
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.innerWidth < 768) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!active) setActive(true);
      setHoverType(getHoverType(e.target as HTMLElement));
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [active, cursorX, cursorY, getHoverType]);

  const hasLabel = hoverType === 'project' || hoverType === 'gallery';
  const isLink = hoverType === 'link';

  const dotSize = hasLabel ? 56 : isLink ? 20 : 8;
  const ringSize = hasLabel ? 72 : isLink ? 36 : 28;
  const label = hoverType === 'project' ? 'View' : hoverType === 'gallery' ? 'Open' : '';

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          mixBlendMode: 'difference',
          backgroundColor: '#ffffff',
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
          opacity: active ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              className="absolute font-label text-[9px] font-bold uppercase tracking-wider text-black"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          mixBlendMode: 'difference',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          opacity: active ? (hoverType === 'default' ? 0.3 : 0.5) : 0,
          borderColor: hoverType !== 'default' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      />
    </>
  );
}
