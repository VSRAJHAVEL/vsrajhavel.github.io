'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { motion, motionValue, animate, useInView } from 'framer-motion';
import { fadeUp, scaleUp, staggerContainer, clipReveal } from '@/lib/animations';

function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const mv = motionValue(0);
    const unsubscribe = mv.on('change', (v) => {
      setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString());
    });
    animate(mv, target, { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] });
    return unsubscribe;
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      {children}
    </div>
  );
}

const leadershipCardVariant = {
  hidden: { opacity: 0, y: 30, rotate: -3 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Experience() {
  return (
    <section
      className="py-24 md:py-32 bg-[var(--color-surface-container-lowest)] px-4 md:px-8"
      id="experience-section"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4"
          >
            04. Experience &amp; Impact
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={clipReveal}
              custom={1}
              className="font-display text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-12"
            >
              Experience &amp; Achievements
            </motion.h2>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Robofest Hero (Spans 2x2 on desktop) */}
          <motion.div
            className="md:col-span-2 md:row-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <TiltCard className="bento-card bento-hero justify-between group p-0 relative h-full">
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/PHOTOS/robo-fest-final-round.jpg"
                  alt="Robofest 5.0"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 z-10">
                <span className="material-symbols-outlined text-9xl">emoji_events</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between p-8 md:p-10">
                <div>
                  <div className="inline-flex bg-[#3B82F6]/20 text-[#60A5FA] px-4 py-1 rounded-full font-label text-xs tracking-widest uppercase mb-6 border border-[#3B82F6]/30">
                    National Finalist
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
                    Robofest 5.0
                  </h3>
                  <p className="font-body text-white/80 mb-8 max-w-sm leading-relaxed">
                    Built an Autonomous Intelligent Ground Vehicle (AIGV) utilizing A* Pathfinding,
                    LiDAR SLAM, and Computer Vision.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-auto">
                  <div>
                    <div className="font-display text-4xl font-bold text-[#60A5FA]">
                      <AnimatedCounter target={15} />
                      <span className="text-xl text-white/50">/</span>
                      <AnimatedCounter target={2096} />
                    </div>
                    <div className="text-xs font-label uppercase tracking-wider text-white/60 mt-2">
                      Teams Ranked
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-4xl font-bold text-[#60A5FA]">
                      <AnimatedCounter target={2.5} prefix="₹" suffix="L" decimals={1} />
                    </div>
                    <div className="text-xs font-label uppercase tracking-wider text-white/60 mt-2">
                      Prize Won
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Frontend Intern */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={1}
            className="md:col-span-2"
          >
            <TiltCard className="bento-card justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">web</span>
                  </div>
                  <span className="font-label text-xs uppercase tracking-widest text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-1 rounded-full border border-[var(--color-outline-variant)]">
                    May 2025 – Jun 2025
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-1">
                  Frontend Web Intern
                </h3>
                <p className="font-label text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">
                  Mandy Technologies
                </p>
              </div>
              <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                Developed responsive web templates for digital marketing platforms. Focused on HTML,
                CSS, JavaScript, and adaptive layouts under expert mentorship.
              </p>
            </TiltCard>
          </motion.div>

          {/* Python Intern */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={2}
            className="md:col-span-2"
          >
            <TiltCard className="bento-card justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <span className="font-label text-xs uppercase tracking-widest text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-1 rounded-full border border-[var(--color-outline-variant)]">
                    2023
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-1">
                  Python Developer Intern
                </h3>
                <p className="font-label text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">
                  Next24Tech
                </p>
              </div>
              <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                Developed Tkinter registration forms, engineered an interactive chatbot, and built a
                highly efficient GUI-based lyrics extractor.
              </p>
            </TiltCard>
          </motion.div>

          {/* Leadership Row */}
          {[
            {
              icon: 'groups',
              title: 'President',
              org: 'KITS ACM Chapter',
              desc: 'Organizing hackathons & fostering collaborative learning environments.',
            },
            {
              icon: 'volunteer_activism',
              title: 'Rotaract Club',
              org: 'Karunya University',
              desc: 'Leadership-building, community service, and social initiatives.',
            },
            {
              icon: 'public',
              title: 'IAESTE India',
              org: 'Local Committee',
              desc: 'International exchange and cross-border technical development.',
            },
            {
              icon: 'security',
              title: 'Cyber Analyst',
              org: 'GDSC Google DTU',
              desc: 'Ethical hacking, network security, and proactive threat analysis.',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={leadershipCardVariant}
              custom={idx}
            >
              <TiltCard className="bento-card justify-between group h-full">
                <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]/30 mb-6 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-display font-bold text-[var(--color-primary)] text-xl mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-label uppercase tracking-wider text-[var(--color-secondary)] mb-3">
                    {item.org}
                  </p>
                  <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
