'use client';

import { useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { fadeUp, staggerContainer, textRevealWord } from '@/lib/animations';

const headingWords = ["Let's", 'build', 'something'];

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(50);
  const mouseX = useSpring(rawX, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(rawY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const el = gradientRef.current;
    if (!el) return;
    const unsubX = mouseX.on('change', (v) => el.style.setProperty('--mx', `${v}%`));
    const unsubY = mouseY.on('change', (v) => el.style.setProperty('--my', `${v}%`));
    return () => { unsubX(); unsubY(); };
  }, [mouseX, mouseY]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set(((e.clientX - rect.left) / rect.width) * 100);
      rawY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(50);
    rawY.set(50);
  }, [rawX, rawY]);

  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest px-4 md:px-8" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={cardRef}
          className="relative rounded-[2rem] overflow-hidden bg-[#000000] p-1 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Static base gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse 600px 600px at 50% 50%, rgba(59,130,246,0.3) 0%, transparent 70%),
                           radial-gradient(ellipse 400px 400px at 80% 20%, rgba(96,165,250,0.2) 0%, transparent 60%),
                           radial-gradient(ellipse 500px 500px at 20% 80%, rgba(37,99,235,0.15) 0%, transparent 60%)`,
            }}
          />

          {/* Mouse-reactive gradient overlay */}
          <div
            ref={gradientRef}
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              '--mx': '50%',
              '--my': '50%',
              background: 'radial-gradient(ellipse 500px 500px at var(--mx) var(--my), rgba(59,130,246,0.35) 0%, transparent 70%)',
            } as React.CSSProperties}
          />

          {/* Glass Inner Container */}
          <div className="relative bg-surface-container-lowest/10 backdrop-blur-3xl rounded-[1.8rem] border border-surface-container-lowest/20 p-10 md:p-20 text-center flex flex-col items-center justify-center overflow-hidden h-full z-10">

            {/* Word-by-word heading */}
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ perspective: '600px' }}>
              <motion.span
                className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {headingWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block"
                    variants={textRevealWord}
                    custom={i}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] inline-block"
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                incredible.
              </motion.span>
            </h2>

            <motion.p
              className="font-body text-body-lg text-white/70 max-w-xl mx-auto mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true, amount: 0.3 }}
            >
              Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-md mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.a
                href="mailto:vsrajhavelkarunyan@gmail.com"
                className="magnetic-wrap relative w-full sm:w-auto"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="magnetic-btn w-full bg-surface-container-lowest text-[#000000] font-label font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-xl">
                  <span className="material-symbols-outlined text-lg">mail</span>
                  <span>Direct Email</span>
                </div>
              </motion.a>

              <motion.a
                href="mailto:vsrajhavelkarunyan@gmail.com?subject=Schedule%20a%20Call"
                className="magnetic-wrap relative w-full sm:w-auto"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="magnetic-btn w-full bg-transparent border-2 border-surface-container-lowest/30 text-white font-label font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-surface-container-lowest hover:text-[#000000] hover:border-surface-container-lowest transition-all duration-300">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  <span>Schedule Call</span>
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-16 pt-8 border-t border-surface-container-lowest/10 w-full max-w-lg flex items-center justify-center gap-8 mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-gray-400 font-label text-xs tracking-widest uppercase"><span className="material-symbols-outlined text-[10px] align-middle mr-1">location_on</span> Coimbatore, India</p>
              <p className="text-gray-400 font-label text-xs tracking-widest uppercase"><span className="material-symbols-outlined text-[10px] align-middle mr-1">call</span> +91 90430 00313</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
