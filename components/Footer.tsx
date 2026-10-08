'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useScrollVelocity } from '@/lib/useScrollVelocity';


const MARQUEE_TEXT = 'RAJHAVEL V S  ·  ';
const MARQUEE_REPEAT = 8;

function MagneticLink({ href, target, rel, children }: { href: string; target?: string; rel?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx * 0.35);
    y.set(dy * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        textShadow: '0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(59,130,246,0.4)',
        color: '#ffffff',
      }}
      className="social-link-anim text-gray-400 transition-colors active:scale-95 duration-200 ease inline-block"
    >
      {children}
    </motion.a>
  );
}

function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-label text-xs tracking-widest uppercase"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
      >
        <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">arrow_upward</span>
      </motion.span>
      Back to top
    </motion.button>
  );
}

export default function Footer() {
  const { velocity } = useScrollVelocity();
  const marqueeX = useMotionValue(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const halfWidth = useRef(0);
  const BASE_SPEED = 35;

  useAnimationFrame((_, delta) => {
    if (!marqueeRef.current) return;
    if (!halfWidth.current) {
      halfWidth.current = marqueeRef.current.scrollWidth / 2;
    }
    const vel = velocity.get();
    const speedMult = 1 + Math.abs(vel) * 0.06;
    let next = marqueeX.get() - BASE_SPEED * speedMult * (delta / 1000);
    if (next <= -halfWidth.current) next += halfWidth.current;
    marqueeX.set(next);
  });

  return (
    <footer className="bg-[var(--color-tertiary-container)] text-gray-400 font-body text-[var(--text-body-md)] w-full rounded-none overflow-hidden" id="footer">
      {/* Velocity-reactive luxury name marquee */}
      <div className="w-full overflow-hidden pointer-events-none select-none py-6">
        <motion.div
          ref={marqueeRef}
          className="flex whitespace-nowrap w-max"
          style={{ x: marqueeX }}
        >
          {[0, 1].map((copy) => (
            <span
              key={copy}
              className="font-display text-8xl md:text-9xl font-bold text-white/[0.18] uppercase tracking-[0.15em] mr-0"
            >
              {MARQUEE_TEXT.repeat(MARQUEE_REPEAT)}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center px-8 py-12 mx-auto max-w-[1200px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp}>
          <BackToTop />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-center my-6 md:my-0">
          <div className="text-gray-400 text-center">
            &copy; 2026 RAJHAVEL V S. Engineered with Precision.
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-6">
          <MagneticLink href="https://linkedin.com/in/rajhavelvs" target="_blank" rel="noopener noreferrer">LinkedIn</MagneticLink>
          <MagneticLink href="https://github.com/VSRAJHAVEL" target="_blank" rel="noopener noreferrer">GitHub</MagneticLink>
          <MagneticLink href="https://www.instagram.com/rajhavelvs/" target="_blank" rel="noopener noreferrer">Instagram</MagneticLink>
          <MagneticLink href="mailto:vsrajhavelkarunyan@gmail.com">Email</MagneticLink>
        </motion.div>
      </motion.div>
    </footer>
  );
}
