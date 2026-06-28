import Image from 'next/image';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-tertiary-container)] text-gray-400 font-body text-[var(--text-body-md)] w-full rounded-none flex flex-col md:flex-row justify-between items-center px-8 py-12 mx-auto" id="footer">
      <a href="#hero" className="font-headline font-bold text-[var(--text-headline-md)] text-[var(--color-on-tertiary)] mb-6 md:mb-0 uppercase opacity-0 translate-y-[10px] will-change-anim anim-entrance footer-anim cursor-pointer hover:text-white transition-colors duration-200">
        RAJHAVEL V S
      </a>
      <div className="flex flex-col items-center mb-6 md:mb-0 opacity-0 translate-y-[10px] will-change-anim anim-entrance footer-anim">
        <div className="text-gray-400 mb-3 text-center">
          &copy; 2026 RAJHAVEL V S. Engineered with Precision.
        </div>
        <div className="flex items-center gap-2 cursor-default bg-[var(--color-surface-container-low)] px-4 py-2 rounded-lg border border-[var(--color-outline-variant)]/30 hover:border-blue-400 transition-colors duration-300" title="Total number of people who have visited this portfolio">
          <span className="material-symbols-outlined text-blue-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
          <span className="text-xs font-bold text-black uppercase tracking-widest">Global Visits:</span>
          <VisitorCounter />
        </div>
      </div>
      <div className="flex gap-6 opacity-0 translate-y-[10px] will-change-anim anim-entrance footer-anim">
        <a className="social-link-anim text-gray-400 hover:text-white transition-all active:scale-95 duration-200 ease" href="https://linkedin.com/in/rajhavelvs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="social-link-anim text-gray-400 hover:text-white transition-all active:scale-95 duration-200 ease" href="https://github.com/VSRAJHAVEL" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="social-link-anim text-gray-400 hover:text-white transition-all active:scale-95 duration-200 ease" href="https://www.instagram.com/rajhavelvs/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className="social-link-anim text-gray-400 hover:text-white transition-all active:scale-95 duration-200 ease" href="mailto:vsrajhavelkarunyan@gmail.com">Email</a>
      </div>
    </footer>
  );
}
