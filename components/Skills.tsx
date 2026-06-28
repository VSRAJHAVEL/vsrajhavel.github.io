export default function Skills() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-container-lowest)] px-4 md:px-8" id="skills">
      <div className="max-w-[1200px] mx-auto">
        <div className="skills-anim-header opacity-0 translate-y-[20px] will-change-anim anim-entrance-fast text-center mb-12" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">WHAT I WORK WITH</div>
          <h2 className="font-display text-[var(--text-headline-lg)] font-bold text-[var(--color-primary)]">Tech Stack</h2>
        </div>

        {/* Hover Accordion */}
        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] w-full gap-3 mt-8">
          
          {/* Programming */}
          <div className="group relative flex-1 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] cursor-pointer hover:bg-[var(--color-on-secondary-fixed)] hover:shadow-2xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-center p-6 md:p-10 pointer-events-none group-hover:pointer-events-auto z-10">
              <div className="flex items-center gap-3 mb-6 text-white">
                <span className="material-symbols-outlined text-3xl md:text-4xl">terminal</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2 min-w-[200px] md:min-w-[300px]">
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Python</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Java</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">C</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">C++</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="flex md:flex-col items-center gap-4 md:gap-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">terminal</span>
                <h3 className="font-display text-xl font-bold whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">Programming</h3>
              </div>
            </div>
          </div>

          {/* Web Dev */}
          <div className="group relative flex-1 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] cursor-pointer hover:bg-[var(--color-on-secondary-fixed)] hover:shadow-2xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-center p-6 md:p-10 pointer-events-none group-hover:pointer-events-auto z-10">
              <div className="flex items-center gap-3 mb-6 text-white">
                <span className="material-symbols-outlined text-3xl md:text-4xl">code</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Web Dev</h3>
              </div>
              <div className="flex flex-wrap gap-2 min-w-[200px] md:min-w-[300px]">
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">HTML</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">CSS</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">JavaScript</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">React</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Node.js</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="flex md:flex-col items-center gap-4 md:gap-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">code</span>
                <h3 className="font-display text-xl font-bold whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">Web Dev</h3>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="group relative flex-1 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] cursor-pointer hover:bg-[var(--color-on-secondary-fixed)] hover:shadow-2xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-center p-6 md:p-10 pointer-events-none group-hover:pointer-events-auto z-10">
              <div className="flex items-center gap-3 mb-6 text-white">
                <span className="material-symbols-outlined text-3xl md:text-4xl">database</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2 min-w-[200px] md:min-w-[300px]">
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">SQL</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">MySQL</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Power BI</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">GitHub</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="flex md:flex-col items-center gap-4 md:gap-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">database</span>
                <h3 className="font-display text-xl font-bold whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">Databases</h3>
              </div>
            </div>
          </div>

          {/* AI & ML */}
          <div className="group relative flex-1 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] cursor-pointer hover:bg-[var(--color-on-secondary-fixed)] hover:shadow-2xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-center p-6 md:p-10 pointer-events-none group-hover:pointer-events-auto z-10">
              <div className="flex items-center gap-3 mb-6 text-white">
                <span className="material-symbols-outlined text-3xl md:text-4xl">psychology</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">AI & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2 min-w-[200px] md:min-w-[300px]">
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Machine Learning</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Deep Learning</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Computer Vision</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Generative AI</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="flex md:flex-col items-center gap-4 md:gap-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">psychology</span>
                <h3 className="font-display text-xl font-bold whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">AI & ML</h3>
              </div>
            </div>
          </div>

          {/* Embedded */}
          <div className="group relative flex-1 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] cursor-pointer hover:bg-[var(--color-on-secondary-fixed)] hover:shadow-2xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col justify-center p-6 md:p-10 pointer-events-none group-hover:pointer-events-auto z-10">
              <div className="flex items-center gap-3 mb-6 text-white">
                <span className="material-symbols-outlined text-3xl md:text-4xl">memory</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Embedded</h3>
              </div>
              <div className="flex flex-wrap gap-2 min-w-[200px] md:min-w-[300px]">
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Arduino</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">ESP32</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Raspberry Pi</span>
                <span className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Jetson Nano</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="flex md:flex-col items-center gap-4 md:gap-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">memory</span>
                <h3 className="font-display text-xl font-bold whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">Embedded</h3>
              </div>
            </div>
          </div>

        </div>

        <div className="cert-badges mt-24 mb-12 flex flex-col items-center opacity-0 translate-y-[20px] will-change-anim anim-entrance-fast" style={{ transitionDelay: '500ms', opacity: 1, transform: 'translateY(0)' }}>
          <h3 className="font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-6 text-center">Certifications &amp; Credentials</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[var(--color-on-secondary-fixed)] text-white px-6 py-2 rounded-full font-label text-sm border border-[var(--color-outline-variant)] hover:bg-[var(--color-primary)] transition-colors cursor-default shadow-sm hover:shadow-md">Google AI Essentials 2024</div>
            <div className="bg-[var(--color-on-secondary-fixed)] text-white px-6 py-2 rounded-full font-label text-sm border border-[var(--color-outline-variant)] hover:bg-[var(--color-primary)] transition-colors cursor-default shadow-sm hover:shadow-md">Google Cybersecurity 2024</div>
            <div className="bg-[var(--color-on-secondary-fixed)] text-white px-6 py-2 rounded-full font-label text-sm border border-[var(--color-outline-variant)] hover:bg-[var(--color-primary)] transition-colors cursor-default shadow-sm hover:shadow-md">Snowflake SnowPro 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
