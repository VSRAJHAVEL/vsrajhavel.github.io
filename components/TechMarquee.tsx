'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform, useSpring } from 'framer-motion';
import { useScrollVelocity } from '@/lib/useScrollVelocity';

const techsRow1 = [
  { name: 'Python', icon: 'terminal' },
  { name: 'React', icon: 'code' },
  { name: 'Machine Learning', icon: 'psychology' },
  { name: 'Computer Vision', icon: 'visibility' },
  { name: 'Flask', icon: 'web' },
  { name: 'Node.js', icon: 'dns' },
  { name: 'OpenCV', icon: 'camera' },
  { name: 'Generative AI', icon: 'auto_awesome' },
  { name: 'Raspberry Pi', icon: 'memory' },
  { name: 'Arduino', icon: 'developer_board' },
  { name: 'Snowflake', icon: 'ac_unit' },
  { name: 'Power BI', icon: 'bar_chart' },
];

const techsRow2 = [
  { name: 'TensorFlow', icon: 'model_training' },
  { name: 'Next.js', icon: 'rocket_launch' },
  { name: 'TypeScript', icon: 'code_blocks' },
  { name: 'Docker', icon: 'deployed_code' },
  { name: 'MongoDB', icon: 'database' },
  { name: 'Deep Learning', icon: 'neurology' },
  { name: 'A* Pathfinding', icon: 'route' },
  { name: 'LiDAR SLAM', icon: 'radar' },
  { name: 'SQL', icon: 'storage' },
  { name: 'Git', icon: 'merge_type' },
  { name: 'Tailwind CSS', icon: 'palette' },
  { name: 'Keras', icon: 'layers' },
];

function MarqueeRow({
  items,
  baseSpeed,
  reverse,
  velocityFactor,
}: {
  items: typeof techsRow1;
  baseSpeed: number;
  reverse?: boolean;
  velocityFactor: ReturnType<typeof useMotionValue<number>>;
}) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const halfWidth = useRef(0);

  // Velocity → skewX with spring smoothing
  const rawSkew = useTransform(velocityFactor, [-50, 0, 50], [reverse ? 8 : -8, 0, reverse ? -8 : 8]);
  const skewX = useSpring(rawSkew, { stiffness: 120, damping: 22 });

  useEffect(() => {
    if (containerRef.current) {
      halfWidth.current = containerRef.current.scrollWidth / 2;
      if (reverse) {
        x.set(-halfWidth.current);
      }
    }
  }, [reverse, x]);

  useAnimationFrame((_, delta) => {
    if (!halfWidth.current) {
      if (containerRef.current) {
        halfWidth.current = containerRef.current.scrollWidth / 2;
      }
      return;
    }

    const vel = velocityFactor.get();
    const speedMultiplier = 1 + Math.abs(vel) * 0.025;
    const directionMultiplier = reverse ? 1 : -1;
    const move = directionMultiplier * baseSpeed * speedMultiplier * (delta / 1000);

    let next = x.get() + move;

    if (!reverse && next <= -halfWidth.current) {
      next += halfWidth.current;
    } else if (reverse && next >= 0) {
      next -= halfWidth.current;
    }

    x.set(next);
  });

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" style={{ willChange: 'transform' }}>
      <motion.div
        ref={containerRef}
        className="flex gap-8 whitespace-nowrap w-max"
        style={{ x, skewX }}
      >
        {doubled.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-lg text-white/40">{tech.icon}</span>
            <span className="font-label text-sm font-semibold tracking-wider uppercase text-white/70">
              {tech.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 ml-5" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  const { velocity } = useScrollVelocity();

  return (
    <div className="w-full bg-[#050505] border-t border-white/[0.06] py-6 overflow-hidden space-y-4">
      <MarqueeRow items={techsRow1} baseSpeed={40} velocityFactor={velocity} />
      <MarqueeRow items={techsRow2} baseSpeed={35} reverse velocityFactor={velocity} />
    </div>
  );
}
