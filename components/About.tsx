import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-container-lowest)] px-4 md:px-8" id="about">
      <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
              <div className="about-anim-label font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-6 opacity-0 translate-y-[20px] will-change-anim anim-entrance-fast" style={{ opacity: 1, transform: 'translateY(0)' }}>WHO I AM</div>
              <h2 className="about-anim-heading font-display text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-4 opacity-0 translate-y-[20px] will-change-anim anim-entrance" style={{ transitionDelay: '100ms', opacity: 1, transform: 'translateY(0)' }}>About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="about-anim-bio md:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-[var(--color-outline-variant)]/50 shadow-sm hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group opacity-0 translate-y-[30px] will-change-anim anim-entrance" style={{ transitionDelay: '150ms', opacity: 1, transform: 'translateY(0)' }}>
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                      <span className="material-symbols-outlined text-9xl">psychology</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-tight">Architecting <span className="text-[#3B82F6]">Purpose-Driven AI</span><br/>for real-world impact.</h3>
                  <p className="font-body text-lg text-[var(--color-on-surface-variant)] leading-relaxed mb-6">As a fourth-year Computer Science undergraduate, my passion for Artificial Intelligence is driven by applied engineering. My technical experience ranges from developing complex path-planning algorithms for competitive robotics at IIT Gandhinagar, to architecting context-aware AI engines that autonomously generate production-ready software.</p>
                  <p className="font-body text-lg text-[var(--color-on-surface-variant)] leading-relaxed font-semibold">I am committed to building technology that solves tangible problems and delivers measurable impact.</p>
              </div>

              <div className="about-anim-photo md:col-span-5 bg-[var(--color-surface-container-low)] rounded-3xl overflow-hidden relative group opacity-0 translate-y-[30px] will-change-anim anim-entrance shadow-sm" style={{ transitionDelay: '200ms', minHeight: '300px', opacity: 1, transform: 'translateY(0)' }}>
                  <Image src="/PHOTOS/Hero-section-0 (2).jpg" alt="Speaking at Karunya" width={600} height={400} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="about-anim-photo md:col-span-4 bg-[var(--color-surface-container-low)] rounded-3xl overflow-hidden relative group opacity-0 translate-y-[30px] will-change-anim anim-entrance shadow-sm" style={{ transitionDelay: '250ms', height: '250px', opacity: 1, transform: 'translateY(0)' }}>
                  <Image src="/PHOTOS/Hero-section-2.jpg" alt="Speaking at event" width={400} height={250} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="about-anim-photo md:col-span-8 bg-[var(--color-surface-container-low)] rounded-3xl overflow-hidden relative group opacity-0 translate-y-[30px] will-change-anim anim-entrance shadow-sm" style={{ transitionDelay: '300ms', height: '250px', opacity: 1, transform: 'translateY(0)' }}>
                  <Image src="/PHOTOS/Hero-section-3.jpg" alt="Receiving badge" width={800} height={250} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="font-label text-xs uppercase tracking-widest font-bold">Award Ceremony</p>
                  </div>
              </div>

              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="stat-card bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl opacity-0 scale-95 will-change-anim anim-entrance" style={{ transitionDelay: '350ms', opacity: 1, transform: 'scale(1)' }}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-3xl group-hover:bg-[#3B82F6]/20 transition-colors duration-500 -mr-10 -mt-10"></div>
                      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-4 relative z-10"><span>15</span></div>
                      <div className="font-label text-xs text-gray-400 uppercase tracking-widest leading-relaxed relative z-10">of 2,096 teams<br/><span className="text-white">Robofest 5.0 National Finalist</span></div>
                  </div>

                  <div className="stat-card bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl opacity-0 scale-95 will-change-anim anim-entrance" style={{ transitionDelay: '450ms', opacity: 1, transform: 'scale(1)' }}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500 -mr-10 -mt-10"></div>
                      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">₹<span>2.5</span>L</div>
                      <div className="font-label text-xs text-gray-400 uppercase tracking-widest leading-relaxed relative z-10">Prize Won at<br/><span className="text-white">IIT Gandhinagar</span></div>
                  </div>

                  <div className="stat-card bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl opacity-0 scale-95 will-change-anim anim-entrance" style={{ transitionDelay: '550ms', opacity: 1, transform: 'scale(1)' }}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500 -mr-10 -mt-10"></div>
                      <div className="font-display text-5xl md:text-6xl font-bold text-white mb-4 relative z-10"><span>4</span>+</div>
                      <div className="font-label text-xs text-gray-400 uppercase tracking-widest leading-relaxed relative z-10">Successfully<br/><span className="text-white">AI/ML Projects Shipped</span></div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
