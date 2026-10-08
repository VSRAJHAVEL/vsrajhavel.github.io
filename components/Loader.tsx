'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, motionValue, animate } from 'framer-motion';

const NAME = 'RAJHAVEL V S';

const letterVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.5, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.15 + i * 0.05,
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  }),
};

export default function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressStarted = useRef(false);

  useEffect(() => {
    if (progressStarted.current) return;
    progressStarted.current = true;

    const mv = motionValue(0);
    const unsubscribe = mv.on('change', (v) => {
      setProgress(Math.round(v));
    });
    animate(mv, 100, {
      duration: 1.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    });

    const timer = setTimeout(() => setShow(false), 1900);
    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 50%, #0a0a1a 100%)',
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(10px)',
              transition: {
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
              },
            }}
          >
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center justify-center overflow-hidden" style={{ perspective: '600px' }}>
                {NAME.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-display text-2xl md:text-4xl text-white font-bold tracking-[0.3em] uppercase inline-block"
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? ' ' : char}
                  </motion.span>
                ))}
              </div>

              {/* Progress counter */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: 'linear' }}
                  />
                </div>
                <span className="font-label text-xs text-white/50 tracking-widest w-10 text-right tabular-nums">
                  {progress}%
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Noise texture overlay */}
          <motion.div
            key="noise"
            className="fixed inset-0 z-[201] pointer-events-none opacity-[0.03]"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')",
              backgroundRepeat: 'repeat',
              backgroundSize: '256px 256px',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
