'use client';

import { useEffect, useState, useRef } from 'react';
import { motionValue, animate } from 'framer-motion';

const FALLBACK_COUNT = 208;

export default function VisitorCounter() {
  const [display, setDisplay] = useState<string | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const fetchCount = async () => {
      let finalCount = FALLBACK_COUNT;
      try {
        const hasVisited = sessionStorage.getItem('hasVisited_portfolio');
        const namespace = 'rajhavel26_portfolio';
        const name = 'global_visits';

        const url = hasVisited
          ? `https://api.counterapi.dev/v1/${namespace}/${name}`
          : `https://api.counterapi.dev/v1/${namespace}/${name}/up`;

        const res = await fetch(url);
        const data = await res.json();

        if (data && typeof data.count === 'number') {
          const baseOffset = 200;
          finalCount = data.count + baseOffset;

          if (!hasVisited) {
            sessionStorage.setItem('hasVisited_portfolio', 'true');
          }
        }
      } catch {
        // use fallback
      }

      if (animated.current) return;
      animated.current = true;

      const mv = motionValue(0);
      mv.on('change', (v) => {
        setDisplay(Math.round(v).toLocaleString());
      });
      animate(mv, finalCount, {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      });
    };

    fetchCount();
  }, []);

  return (
    <span className="text-blue-600 font-label font-bold ml-2 text-sm tracking-widest">
      {display === null ? '...' : display}
    </span>
  );
}
