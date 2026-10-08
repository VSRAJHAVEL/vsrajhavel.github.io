'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, clipReveal } from '@/lib/animations';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const domains = [
  {
    title: 'AI & Machine Learning',
    icon: 'psychology',
    skills: ['Python', 'TensorFlow / Keras', 'Computer Vision', 'Deep Learning', 'Generative AI', 'OpenCV'],
  },
  {
    title: 'Web Development',
    icon: 'code',
    skills: ['React / Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Flask'],
  },
  {
    title: 'Languages',
    icon: 'terminal',
    skills: ['Python', 'Java', 'C / C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Data & Infrastructure',
    icon: 'database',
    skills: ['MySQL', 'MongoDB', 'Snowflake', 'Power BI', 'Git / Docker'],
  },
  {
    title: 'Embedded & IoT',
    icon: 'developer_board',
    skills: ['Arduino', 'Raspberry Pi', 'ESP32', 'Jetson Nano', 'LiDAR / SLAM'],
  },
];

const certs = [
  { name: 'Google AI Essentials', year: '2024' },
  { name: 'Google Cybersecurity', year: '2024' },
  { name: 'Snowflake SnowPro', year: '2025' },
];

const cardReveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)', rotate: -1.5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    rotate: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease },
  }),
};

const skillItem = {
  hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.4 + i * 0.06, duration: 0.5, ease },
  }),
};

const iconPop = {
  hidden: { scale: 0, rotate: -90 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15 + 0.2,
      type: 'spring' as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

function SkillCard({ domain, index, span }: {
  domain: typeof domains[0];
  index: number;
  span?: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    el.style.transform =
      `perspective(800px) rotateX(${((y - cy) / cy) * -5}deg) rotateY(${((x - cx) / cx) * 5}deg) translateY(-6px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = innerRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  }, []);

  return (
    <motion.div
      className={`relative ${span ? 'md:col-span-2' : ''}`}
      variants={cardReveal}
      custom={index}
    >
      <div
        ref={innerRef}
        className="skill-card relative group rounded-2xl h-full"
        style={{
          '--mx': '50%',
          '--my': '50%',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        } as React.CSSProperties}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated gradient border */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, transparent 35%, transparent 65%, rgba(59,130,246,0.15) 100%)',
          }}
        />

        {/* Mouse spotlight */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
          style={{
            background:
              'radial-gradient(450px circle at var(--mx) var(--my), rgba(59,130,246,0.07), transparent 40%)',
          }}
        />

        {/* Card surface */}
        <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/[0.06] group-hover:border-transparent p-7 md:p-9 h-full transition-[border-color] duration-500 z-[2]">
          {/* Edge highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Header */}
          <div className="flex items-center gap-3.5 mb-7">
            <motion.div
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/20 transition-all duration-500"
              variants={iconPop}
              custom={index}
            >
              <span className="material-symbols-outlined text-lg text-white/30 group-hover:text-[#3B82F6] transition-colors duration-500">
                {domain.icon}
              </span>
            </motion.div>
            <h3 className="font-display text-sm font-semibold text-white/70 group-hover:text-white tracking-wide transition-colors duration-300">
              {domain.title}
            </h3>
          </div>

          {/* Skills */}
          <div className={span ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0' : ''}>
            {domain.skills.map((skill, si) => (
              <motion.div
                key={skill}
                className="group/s flex items-center gap-3 py-2.5 border-b border-white/[0.03] last:border-0 cursor-default"
                variants={skillItem}
                custom={si}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/[0.08] group-hover/s:bg-[#3B82F6] group-hover/s:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300 shrink-0" />
                <span className="font-body text-[15px] text-white/40 group-hover/s:text-white/90 transition-colors duration-300 leading-tight">
                  {skill}
                </span>
                <span className="ml-auto w-0 group-hover/s:w-5 h-px bg-[#3B82F6]/40 transition-all duration-400 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="relative py-28 md:py-36 bg-[#050505] px-4 md:px-8 overflow-hidden" id="skills">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="font-label text-white/25 text-[11px] tracking-[0.2em] uppercase mb-5"
          >
            What I Work With
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
              className="font-display text-5xl md:text-7xl font-bold text-white leading-[0.95]"
            >
              Tech Stack
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <SkillCard domain={domains[0]} index={0} span />
          <SkillCard domain={domains[1]} index={1} />
          <SkillCard domain={domains[2]} index={2} />
          <SkillCard domain={domains[3]} index={3} />
          <SkillCard domain={domains[4]} index={4} />
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <span className="font-label text-[10px] text-white/15 uppercase tracking-[0.2em] shrink-0">
            Credentials
          </span>
          <div className="h-px w-8 bg-white/10 hidden sm:block" />
          <div className="flex flex-wrap gap-3">
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="font-label text-xs text-white/30 border border-white/[0.06] rounded-full px-4 py-1.5 hover:text-white/60 hover:border-white/[0.12] transition-all duration-300 cursor-default"
              >
                {cert.name} <span className="text-white/15">{cert.year}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
