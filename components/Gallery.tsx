'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const galleryImagesFwd = [
  { src: '/PHOTOS/Hero-section.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-0 (1).jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-0 (2).jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-1.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-2.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-3.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-4.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-5.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-6.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-7.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-8.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-9.jpg', caption: 'Moments' }
];

const galleryImagesRev = [
  { src: '/PHOTOS/robo-fest.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-1.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-2.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-3.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-4.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-5.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-1.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-2.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-3.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-4.jpg', caption: 'Robofest' }
];

const allUniqueImages = [...galleryImagesFwd, ...galleryImagesRev];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);

  const openLightbox = (row: 'fwd' | 'rev', idx: number) => {
    const uniqueIdx = idx % (row === 'fwd' ? galleryImagesFwd.length : galleryImagesRev.length);
    const globalIdx = row === 'fwd' ? uniqueIdx : galleryImagesFwd.length + uniqueIdx;
    setDirection(0);
    setLightboxIndex(globalIdx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setDirection(1);
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allUniqueImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allUniqueImages.length) % allUniqueImages.length : null
    );
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) goNext();
      else goPrev();
    }
  }, [goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const slideVariants = {
    enter: (d: number) => ({
      x: d === 0 ? 0 : d > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.92,
    }),
  };

  return (
    <>
      <section className="py-20 md:py-28 overflow-hidden bg-[var(--color-on-secondary-fixed)] relative" id="gallery">
        <motion.div
          className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div>
            <motion.div variants={fadeUp} custom={0} className="font-label text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">MOMENTS</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-white">Life Beyond<br/>the Screen</motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={2} className="font-body text-gray-400 text-base max-w-xs">Robotics stages, ACM chapters, and everything in between.</motion.p>
        </motion.div>

        {/* Row 1 - Forward */}
        <div className="relative mb-4 overflow-hidden">
          <div className="gallery-vignette gallery-vignette-left"></div>
          <div className="gallery-vignette gallery-vignette-right"></div>
          <div className="gallery-row-fwd flex gap-4 px-4 w-max hover:[animation-play-state:paused]">
            {[...galleryImagesFwd, ...galleryImagesFwd].map((img, idx) => (
              <div
                key={idx}
                className="gallery-item h-[320px] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-2xl cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Open photo: ${img.caption}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox('fwd', idx);
                  }
                }}
                onClick={() => openLightbox('fwd', idx)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-full object-cover"
                  style={{ height: '100%', width: 'auto', borderRadius: 16 }}
                />
                <div className="gi-caption"><span>{img.caption}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="relative overflow-hidden">
          <div className="gallery-vignette gallery-vignette-left"></div>
          <div className="gallery-vignette gallery-vignette-right"></div>
          <div className="gallery-row-rev flex gap-4 px-4 w-max hover:[animation-play-state:paused]">
            {[...galleryImagesRev, ...galleryImagesRev].map((img, idx) => (
              <div
                key={idx}
                className="gallery-item h-[240px] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-2xl cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Open photo: ${img.caption}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox('rev', idx);
                  }
                }}
                onClick={() => openLightbox('rev', idx)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-full object-cover"
                  style={{ height: '100%', width: 'auto', borderRadius: 16 }}
                />
                <div className="gi-caption"><span>{img.caption}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Backdrop — no blur for performance */}
            <motion.div
              className="absolute inset-0 bg-black/95"
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Previous arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>

            {/* Image with directional slide */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={lightboxIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                className="relative z-10 max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              >
                <Image
                  src={allUniqueImages[lightboxIndex].src}
                  alt={allUniqueImages[lightboxIndex].caption}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain rounded-xl select-none"
                  style={{ maxHeight: '80vh', width: 'auto' }}
                  priority
                  draggable={false}
                />
                <div className="mt-4 text-center">
                  <span className="font-label text-xs text-white/80 uppercase tracking-widest">
                    {allUniqueImages[lightboxIndex].caption}
                  </span>
                  <span className="font-label text-xs text-white/40 ml-4">
                    {lightboxIndex + 1} / {allUniqueImages.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex gap-2 max-w-[80vw] overflow-x-auto py-2 px-4 rounded-full bg-black/60">
              {allUniqueImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setDirection(idx > (lightboxIndex ?? 0) ? 1 : -1); setLightboxIndex(idx); }}
                  className={`flex-shrink-0 w-12 h-8 rounded overflow-hidden transition-all duration-200 ${
                    idx === lightboxIndex ? 'ring-2 ring-white opacity-100 scale-110' : 'opacity-40 hover:opacity-70'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
