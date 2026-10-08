'use client';

import { useEffect } from 'react';

export default function ClientAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const magneticWraps = document.querySelectorAll('.magnetic-wrap');
    magneticWraps.forEach((wrap) => {
      wrap.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = wrap.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        (wrap as HTMLElement).style.setProperty('--magnetic-x', `${x * 0.25}px`);
        (wrap as HTMLElement).style.setProperty('--magnetic-y', `${y * 0.25}px`);
      });

      wrap.addEventListener('mouseleave', () => {
        (wrap as HTMLElement).style.setProperty('--magnetic-x', '0px');
        (wrap as HTMLElement).style.setProperty('--magnetic-y', '0px');
      });
    });
  }, []);

  return null;
}
