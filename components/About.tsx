'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, motionValue, animate, useScroll, useTransform } from 'framer-motion';
import { fadeUp, clipReveal, springLadder, slideFromLeft, slideFromRight } from '@/lib/animations';

function AnimatedCounter({ target, prefix = '', suffix = '', decimals = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number }) {
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

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const vp = { once: true, amount: 0.15 } as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: p1 } = useScroll({ target: imgRef1, offset: ['start end', 'end start'] });
  const { scrollYProgress: p2 } = useScroll({ target: imgRef2, offset: ['start end', 'end start'] });

  // Images move at 55% of scroll speed — creates real depth vs text at 100%
  const img1Y = useTransform(p1, [0, 1], ['-12%', '12%']);
  const img2Y = useTransform(p2, [0, 1], ['-8%',  '8%']);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-container-lowest)] px-4 md:px-8" id="about">
      <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
              <motion.div
                className="font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0}
              >
                WHO I AM
              </motion.div>
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <motion.h2
                  className="font-display text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-4"
                  variants={clipReveal}
                  custom={1}
                >
                  About Me
                </motion.h2>
              </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <motion.div
                className="md:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-[var(--color-outline-variant)]/50 shadow-sm hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group"
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                      <span className="material-symbols-outlined text-9xl">psychology</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-tight">Architecting <span className="text-[#3B82F6]">Purpose-Driven AI</span><br/>for real-world impact.</h3>
                  <p className="font-body text-lg text-[var(--color-on-surface-variant)] leading-relaxed mb-6">As a fourth-year Computer Science undergraduate, my passion for Artificial Intelligence is driven by applied engineering. My technical experience ranges from developing complex path-planning algorithms for competitive robotics at IIT Gandhinagar, to architecting context-aware AI engines that autonomously generate production-ready software.</p>
                  <p className="font-body text-lg text-[var(--color-on-surface-variant)] leading-relaxed">I am committed to building technology that solves tangible problems and delivers measurable impact.</p>
              </motion.div>

              <motion.div
                ref={imgRef1}
                className="md:col-span-5 bg-[var(--color-surface-container-low)] rounded-3xl overflow-hidden relative group shadow-sm"
                style={{ minHeight: '300px' }}
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                  <motion.div className="absolute inset-0" style={{ y: img1Y }}>
                    <Image src="/PHOTOS/Hero-section-0 (2).jpg" alt="Speaking at Karunya" width={600} height={400} className="w-full h-full object-cover object-center scale-110" style={{ width: '100%', height: '100%' }} />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Chancellor Recognition Card */}
              <motion.div
                className="md:col-span-12 rounded-3xl overflow-hidden relative group shadow-xl"
                variants={springLadder}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0}
              >
                  <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                          <div ref={imgRef2} className="relative h-[300px] md:h-[420px] overflow-hidden">
                              <motion.div className="absolute inset-0" style={{ y: img2Y }}>
                                <Image src="/PHOTOS/chancellor.jpeg" alt="Recognized by Chancellor Dr. Paul Dhinakaran" width={800} height={600} className="w-full h-full object-cover object-top scale-110" style={{ width: '100%', height: '100%' }} />
                              </motion.div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a] hidden md:block" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
                          </div>

                          {/* Content Side */}
                          <div className="relative p-8 md:p-10 flex flex-col justify-center">
                              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700">
                                  <span className="material-symbols-outlined text-8xl text-[#60A5FA]">emoji_events</span>
                              </div>

                              <div className="inline-flex bg-[#3B82F6]/20 text-[#60A5FA] px-4 py-1 rounded-full font-label text-xs tracking-widest uppercase mb-5 border border-[#3B82F6]/30 w-fit">Exceptional Achiever</div>
                              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Recognized by Hon&apos;ble Chancellor<br/><span className="text-[#60A5FA]">Dr. Paul Dhinakaran</span></h3>
                              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">Honored to be recognized as one of the Exceptional Students of Karunya Institute of Technology and Sciences and presented with a Token of Appreciation for achievements in robotics and AI.</p>

                              <div className="space-y-3">
                                  <div className="flex items-center gap-3">
                                      <span className="material-symbols-outlined text-[#60A5FA] text-lg">military_tech</span>
                                      <span className="font-label text-xs text-white/90 uppercase tracking-wider">National Finalist — Robofest 5.0</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                      <span className="material-symbols-outlined text-[#60A5FA] text-lg">flag</span>
                                      <span className="font-label text-xs text-white/90 uppercase tracking-wider">Represented Tamil Nadu at National Level</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                      <span className="material-symbols-outlined text-[#60A5FA] text-lg">payments</span>
                                      <span className="font-label text-xs text-white/90 uppercase tracking-wider">Won ₹2.5 Lakhs Cash Prize</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </motion.div>

              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {/* Stat card 1 — spring ladder */}
                  <motion.div
                    className="stat-card bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group shadow-xl"
                    variants={springLadder}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={0}
                    whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                  >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-3xl group-hover:bg-[#3B82F6]/25 transition-colors duration-500 -mr-10 -mt-10" />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 120px 80px at 80% 15%, rgba(59,130,246,0.1), transparent)' }} />
                      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                        <AnimatedCounter target={15} />
                      </div>
                      <div className="font-label text-xs text-gray-400 uppercase tracking-widest leading-relaxed relative z-10">of 2,096 teams<br/><span className="text-white">Robofest 5.0 National Finalist</span></div>
                  </motion.div>

                  {/* Stat card 2 */}
                  <motion.div
                    className="stat-card bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group shadow-xl"
                    variants={springLadder}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={1}
                    whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                  >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/25 transition-colors duration-500 -mr-10 -mt-10" />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 120px 80px at 80% 15%, rgba(16,185,129,0.1), transparent)' }} />
                      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                        ₹<AnimatedCounter target={2.5} decimals={1} suffix="L" />
                      </div>
                      <div className="font-label text-xs text-gray-400 uppercase tracking-widest leading-relaxed relative z-10">Prize Won at<br/><span className="text-white">IIT Gandhinagar</span></div>
                  </motion.div>

                  {/* Stat card 3 */}
                  <motion.div
                    className="stat-card bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group shadow-xl"
                    variants={springLadder}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={2}
                    whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                  >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-colors duration-500 -mr-10 -mt-10" />
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 120px 80px at 80% 15%, rgba(139,92,246,0.1), transparent)' }} />
                      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                        <AnimatedCounter target={4} suffix="+" />
                      </div>
                      <div className="font-label text-xs text-gray-400 uppercase tracking-widest leading-relaxed relative z-10">Successfully<br/><span className="text-white">AI/ML Projects Shipped</span></div>
                  </motion.div>
              </div>
          </div>
      </div>
    </section>
  );
}
