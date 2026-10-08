'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { charReveal, fadeUp } from '@/lib/animations';
import ParticleCanvas from './ParticleCanvas';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>(0);
  const iterRef = useRef(0);

  const scramble = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    iterRef.current = 0;
    const total = text.length * 3;

    const step = () => {
      const iter = iterRef.current;
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (iter / 3 > i) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );
      iterRef.current++;
      if (iterRef.current < total) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [text]);

  // Run once on mount
  useEffect(() => {
    const t = setTimeout(scramble, 400);
    return () => { clearTimeout(t); cancelAnimationFrame(frameRef.current); };
  }, [scramble]);

  return (
    <span className={className} onMouseEnter={scramble} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  );
}

const LOADER_DELAY = 1.6;

const headingLine1 = 'Engineering';
const headingLine2 = 'Intelligent';
const headingLine3 = 'Systems.';

function CharSplit({ text, lineOffset }: { text: string; lineOffset: number }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${lineOffset}-${i}`}
          className="inline-block"
          variants={charReveal}
          custom={lineOffset + i}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00a0' : char}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const holoRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '120px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  // Scroll-linked depth parallax on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const holo = holoRef.current;
    const shimmer = shimmerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // 3D tilt — max ±12 degrees
    const rotX = ((y - cy) / cy) * -12;
    const rotY = ((x - cx) / cx) * 12;

    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;

    // Holographic rainbow foil overlay
    if (holo) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      const hue = rotY * 6 + 200; // shifts hue with tilt
      holo.style.opacity = '1';
      holo.style.background = `
        conic-gradient(
          from ${hue}deg at ${px}% ${py}%,
          rgba(59,130,246,0.22),
          rgba(139,92,246,0.18),
          rgba(6,182,212,0.18),
          rgba(16,185,129,0.14),
          rgba(59,130,246,0.22)
        )
      `;
    }

    // Moving glare shimmer
    if (shimmer) {
      const shimX = (x / rect.width) * 100;
      const shimY = (y / rect.height) * 100;
      shimmer.style.opacity = '1';
      shimmer.style.background = `radial-gradient(ellipse 200px 140px at ${shimX}% ${shimY}%, rgba(255,255,255,0.12) 0%, transparent 70%)`;
    }
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    const el = cardRef.current;
    const holo = holoRef.current;
    const shimmer = shimmerRef.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    if (holo) holo.style.opacity = '0';
    if (shimmer) shimmer.style.opacity = '0';
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 relative overflow-hidden bg-black"
      id="hero"
    >
      <ParticleCanvas />

      <motion.div
        className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        <div>
          <motion.h1
            aria-label="Engineering Intelligent Systems."
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight hero-gradient-text"
            style={{ perspective: '600px' }}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: LOADER_DELAY }}
          >
            <span aria-hidden="true">
              <motion.span className="inline-flex flex-wrap">
                <CharSplit text={headingLine1} lineOffset={0} />
              </motion.span>
              <br />
              <motion.span className="inline-flex flex-wrap">
                <CharSplit text={headingLine2} lineOffset={headingLine1.length} />
              </motion.span>
              <br />
              <motion.span className="inline-flex flex-wrap">
                <CharSplit text={headingLine3} lineOffset={headingLine1.length + headingLine2.length} />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-[var(--text-body-lg)] text-white/90 mb-8 max-w-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              delay: LOADER_DELAY + 0.8,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            }}
          >
            Final-year Computer Science engineer at Karunya University, pushing the boundaries of Artificial Intelligence, Machine Learning, scalable Web Architecture, and Quantum Computing.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: LOADER_DELAY + 1.0,
                },
              },
            }}
          >
            <motion.a
              className="bg-white text-black font-body font-medium text-[var(--text-body-md)] px-6 py-3 rounded-lg hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-200 ease text-center"
              href="#projects"
              variants={fadeUp}
            >
              View Projects
            </motion.a>
            <motion.a
              className="border border-[var(--color-surface-container-lowest)] text-white font-body font-medium text-[var(--text-body-md)] px-6 py-3 rounded-lg hover:bg-[var(--color-surface-tint)]/20 hover:border-white hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-200 ease text-center"
              href="#contact"
              variants={fadeUp}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Profile image — 3D tilt + holographic shine + scroll parallax */}
        <motion.div
          className="relative w-full flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: LOADER_DELAY + 0.4,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          }}
        >
          {/* Outer glow ring — reacts to tilt */}
          <div className="absolute inset-0 max-w-[380px] mx-auto rounded-2xl pointer-events-none"
            style={{ boxShadow: '0 0 60px 8px rgba(59,130,246,0.12)' }}
          />

          {/* Tilt + holo card */}
          <div
            ref={cardRef}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-[380px] mx-auto"
            style={{
              transition: 'transform 0.35s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            {/* Scroll parallax on image */}
            <motion.div className="relative overflow-hidden" style={{ y: imageY }}>
              <Image
                src="/PHOTOS/Hero-section-0 (1).jpg"
                alt="Rajhavel V S"
                width={800}
                height={1085}
                className="w-full h-auto object-contain rounded-2xl"
                priority
              />
            </motion.div>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/75 via-[#000000]/10 to-transparent pointer-events-none" />

            {/* Holographic rainbow foil */}
            <div
              ref={holoRef}
              className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-screen"
              style={{ opacity: 0, transition: 'opacity 0.25s ease' }}
            />

            {/* Moving glare shimmer */}
            <div
              ref={shimmerRef}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ opacity: 0, transition: 'opacity 0.25s ease' }}
            />

            {/* Name badge */}
            <div className="absolute bottom-6 left-6 right-6 z-10" style={{ transform: 'translateZ(20px)' }}>
              <ScrambleText
                text="AI/ML ENGINEER"
                className="font-label text-xs text-white/70 uppercase tracking-widest mb-1 block cursor-default"
              />
              <div className="font-display text-xl font-bold text-white">Rajhavel V S</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
