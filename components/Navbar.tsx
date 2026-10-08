'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { getScrollY } from '@/lib/scroll';

const RESUME_HREF = '/Rajhavel%20V%20S.pdf';

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Experience', href: '#experience-section' },
  { name: 'Contact',    href: '#contact' },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + i * 0.06,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const mobileMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: -14 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.04 + i * 0.06, duration: 0.28, ease: 'easeOut' as const },
  }),
};

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [activeSection,   setActiveSection]   = useState('');
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const [hoveredNav,      setHoveredNav]      = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getScrollY();
      setScrolled(scrollY > 50);

      const sections  = navLinks.map(l => l.href);
      const scrollPos = scrollY + window.innerHeight / 3;
      let current = '';

      for (const href of sections) {
        const el = document.querySelector(href) as HTMLElement | null;
        if (el && el.offsetTop <= scrollPos) current = href;
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('lenis-scroll', handleScroll);
    window.addEventListener('scroll',       handleScroll);
    return () => {
      window.removeEventListener('lenis-scroll', handleScroll);
      window.removeEventListener('scroll',       handleScroll);
    };
  }, []);

  // ── derived style tokens ─────────────────────────────────────────────
  const onLight = scrolled || mobileMenuOpen;

  const logoClass = `font-headline font-bold text-base md:text-lg lg:text-xl transition-colors uppercase tracking-wider duration-200 ${
    onLight ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-300'
  }`;

  const linkBase = `nav-link relative font-body text-sm font-medium transition-colors duration-200 pb-0.5`;

  const linkClass = (href: string) => {
    const isActive = activeSection === href;
    if (onLight) {
      return `${linkBase} ${isActive ? 'font-bold text-black' : 'text-gray-700 hover:text-black'}`;
    }
    return `${linkBase} ${isActive ? 'font-bold text-white' : 'text-white/75 hover:text-white'}`;
  };

  const resumeDesktopClass = `nav-link font-body text-sm font-medium transition-colors duration-200 ${
    onLight ? 'text-gray-700 hover:text-black' : 'text-white/75 hover:text-white'
  }`;

  const resumeMobileClass = [
    'inline-block font-body font-bold rounded-md text-xs px-3 py-1.5 transition-all duration-300',
    'hover:-translate-y-0.5 hover:scale-105 active:scale-95',
    onLight ? 'bg-black text-white hover:bg-blue-700' : 'bg-white text-black hover:bg-gray-100',
  ].join(' ');

  const hamburgerClass = `p-1.5 rounded-md focus:outline-none transition-colors ${
    onLight ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
  }`;

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        onLight
          ? 'bg-white/75 backdrop-blur-xl backdrop-saturate-150 border-b border-black/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      id="navbar"
      /* No hide-on-scroll — always visible */
      animate={{ y: 0 }}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 md:py-4 max-w-[1200px] mx-auto w-full">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className={logoClass}>
            RAJHAVEL V S
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" id="nav-links">
          {navLinks.map((item, idx) => (
            <motion.div
              key={item.name}
              custom={idx + 1}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative"
              onMouseEnter={() => setHoveredNav(item.name)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {/* Hover spotlight pill */}
              {hoveredNav === item.name && (
                <motion.span
                  layoutId="nav-pill"
                  className={`absolute inset-x-[-10px] inset-y-[-5px] rounded-full -z-10 ${
                    onLight ? 'bg-black/[0.06]' : 'bg-white/[0.12]'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}

              <a href={item.href} className={linkClass(item.href)}>
                {item.name}
                {/* Active underline */}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-current rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </motion.div>
          ))}

          {/* Resume link */}
          <motion.div
            custom={navLinks.length + 1}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={resumeDesktopClass}
            >
              Resume
            </a>
          </motion.div>
        </nav>

        {/* Mobile controls */}
        <motion.div
          className="flex md:hidden items-center gap-3"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={resumeMobileClass}
          >
            Resume
          </a>
          <button
            className={hamburgerClass}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl leading-none">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-xl overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-5 py-3 space-y-1">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  custom={idx}
                  variants={mobileLinkVariants}
                  initial="closed"
                  animate="open"
                  className={`font-body text-base py-3 border-b border-black/[0.06] last:border-0 transition-colors duration-200 ${
                    activeSection === item.href
                      ? 'font-bold text-black'
                      : 'font-medium text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              {/* Full-width Resume in mobile menu */}
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center font-body font-bold text-sm bg-black text-white rounded-lg py-3 hover:bg-blue-700 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 origin-left"
        style={{ scaleX: progressScaleX, width: '100%' }}
      />
    </motion.header>
  );
}
