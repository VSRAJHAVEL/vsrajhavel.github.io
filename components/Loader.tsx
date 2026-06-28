'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <>
      <div id="page-loader" className="fixed inset-0 z-[200] bg-[var(--color-on-secondary-fixed)] flex items-center justify-center transition-transform duration-700">
          <span className="font-display text-2xl text-white font-bold tracking-[0.3em] uppercase animate-pulse">
              RAJHAVEL V S
          </span>
      </div>
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')", backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }}></div>
    </>
  );
}
