'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      const sections = ['#about', '#skills', '#projects', '#experience-section', '#contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = '';
      for (const section of sections) {
        const el = document.querySelector(section) as HTMLElement;
        if (el && el.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience-section' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease motion-safe:transform motion-safe:transition-transform ${
        scrolled || mobileMenuOpen
          ? 'bg-[var(--color-surface-container-lowest)] border-[var(--color-outline-variant)] border-b shadow-lg' 
          : 'bg-transparent border-transparent border-b'
      }`}
      id="navbar"
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1200px] mx-auto">
        <a 
          href="#hero" 
          onClick={() => setMobileMenuOpen(false)}
          className={`nav-item-stagger font-headline font-bold text-lg md:text-[length:var(--text-headline-md)] transition-colors uppercase tracking-wider duration-200 ${
            scrolled || mobileMenuOpen
              ? 'text-black hover:text-blue-600' 
              : 'text-white hover:text-blue-400'
          }`}
          style={{ transitionDelay: mounted ? '50ms' : '0ms', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)' }}
        >
          RAJHAVEL V S
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" id="nav-links">
          {navLinks.map((item, idx) => (
            <a 
              key={item.name}
              href={item.href}
              className={`nav-link nav-link-anim nav-item-stagger font-body text-[var(--text-body-md)] transition-colors duration-200 ${
                activeSection === item.href 
                  ? 'font-bold text-[#000000]' 
                  : `font-medium ${scrolled ? 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]' : 'text-white/80 hover:text-white'}`
              }`}
              style={{ transitionDelay: mounted ? `${100 + idx * 50}ms` : '0ms', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)' }}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="/Rajhavel%20V%20S.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-item-stagger font-body font-bold text-[var(--text-body-md)] px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-transparent ${
              scrolled 
                ? 'bg-black text-white hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]' 
                : 'bg-white text-black hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]'
            }`}
            style={{ transitionDelay: mounted ? '350ms' : '0ms', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)' }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div 
          className="flex md:hidden items-center gap-4"
          style={{ transitionDelay: mounted ? '100ms' : '0ms', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)' }}
        >
          <a 
            href="/Rajhavel%20V%20S.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body font-bold text-xs px-4 py-2 rounded-md transition-all duration-300 ${
              scrolled || mobileMenuOpen
                ? 'bg-black text-white' 
                : 'bg-white text-black'
            }`}
          >
            Resume
          </a>
          <button 
            className={`p-2 focus:outline-none transition-colors ${scrolled || mobileMenuOpen ? 'text-black' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute w-full bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-lg border-b border-[var(--color-outline-variant)]/30 pb-2 transition-colors duration-200 ${
                activeSection === item.href 
                  ? 'font-bold text-[var(--color-primary)]' 
                  : 'font-medium text-[var(--color-on-surface-variant)] hover:text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
