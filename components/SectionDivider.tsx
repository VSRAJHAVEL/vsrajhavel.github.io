'use client';

import { motion } from 'framer-motion';
import { drawLine } from '@/lib/animations';

export default function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-[#D1D9E6]/50 to-transparent origin-left"
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      />
    </div>
  );
}
