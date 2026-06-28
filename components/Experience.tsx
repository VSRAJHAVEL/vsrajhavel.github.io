import Image from 'next/image';

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-container-lowest)] px-4 md:px-8 bg-white" id="experience-section">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4 opacity-0 translate-y-[20px] will-change-anim anim-entrance-fast" id="exp-label">04. Experience &amp; Impact</div>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-12 opacity-0 translate-y-[20px] will-change-anim anim-entrance" id="exp-heading">Experience &amp; Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 opacity-0 translate-y-[30px] will-change-anim anim-entrance" style={{ transitionDelay: '200ms' }}>
            
            {/* Robofest Hero (Spans 2x2 on desktop) */}
            <div className="bento-card bento-hero md:col-span-2 md:row-span-2 justify-between group p-0 relative">
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[1.5rem]">
                    <Image src="/PHOTOS/robo-fest-final-round.jpg" alt="Robofest 5.0" width={800} height={800} className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 z-10">
                    <span className="material-symbols-outlined text-9xl">emoji_events</span>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between p-8 md:p-10">
                    <div>
                        <div className="inline-flex bg-[#3B82F6]/20 text-[#60A5FA] px-4 py-1 rounded-full font-label text-xs tracking-widest uppercase mb-6 border border-[#3B82F6]/30">National Finalist</div>
                        <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Robofest 5.0</h3>
                        <p className="font-body text-white/80 mb-8 max-w-sm leading-relaxed">Built an Autonomous Intelligent Ground Vehicle (AIGV) utilizing A* Pathfinding, LiDAR SLAM, and Computer Vision.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-auto">
                        <div>
                            <div className="font-display text-4xl font-bold text-[#60A5FA]">15<span className="text-xl text-white/50">/2096</span></div>
                            <div className="text-xs font-label uppercase tracking-wider text-white/60 mt-2">Teams Ranked</div>
                        </div>
                        <div>
                            <div className="font-display text-4xl font-bold text-[#60A5FA]">₹2.5L</div>
                            <div className="text-xs font-label uppercase tracking-wider text-white/60 mt-2">Prize Won</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frontend Intern */}
            <div className="bento-card md:col-span-2 justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">web</span>
                        </div>
                        <span className="font-label text-xs uppercase tracking-widest text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-1 rounded-full border border-[var(--color-outline-variant)]">May 2025 – Jun 2025</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-1">Frontend Web Intern</h3>
                    <p className="font-label text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">Mandy Technologies</p>
                </div>
                <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Developed responsive web templates for digital marketing platforms. Focused on HTML, CSS, JavaScript, and adaptive layouts under expert mentorship.</p>
            </div>

            {/* Python Intern */}
            <div className="bento-card md:col-span-2 justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">code</span>
                        </div>
                        <span className="font-label text-xs uppercase tracking-widest text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container-lowest)] px-3 py-1 rounded-full border border-[var(--color-outline-variant)]">2023</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-1">Python Developer Intern</h3>
                    <p className="font-label text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">Next24Tech</p>
                </div>
                <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Developed Tkinter registration forms, engineered an interactive chatbot, and built a highly efficient GUI-based lyrics extractor.</p>
            </div>

            {/* Leadership Row */}
            <div className="bento-card justify-between group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]/30 mb-6 group-hover:text-[var(--color-primary)] transition-colors">groups</span>
                <div>
                    <h4 className="font-display font-bold text-[var(--color-primary)] text-xl mb-1">President</h4>
                    <p className="text-[10px] font-label uppercase tracking-wider text-[var(--color-secondary)] mb-3">KITS ACM Chapter</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">Organizing hackathons &amp; fostering collaborative learning environments.</p>
                </div>
            </div>

            <div className="bento-card justify-between group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]/30 mb-6 group-hover:text-[var(--color-primary)] transition-colors">volunteer_activism</span>
                <div>
                    <h4 className="font-display font-bold text-[var(--color-primary)] text-xl mb-1">Rotaract Club</h4>
                    <p className="text-[10px] font-label uppercase tracking-wider text-[var(--color-secondary)] mb-3">Karunya University</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">Leadership-building, community service, and social initiatives.</p>
                </div>
            </div>

            <div className="bento-card justify-between group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]/30 mb-6 group-hover:text-[var(--color-primary)] transition-colors">public</span>
                <div>
                    <h4 className="font-display font-bold text-[var(--color-primary)] text-xl mb-1">IAESTE India</h4>
                    <p className="text-[10px] font-label uppercase tracking-wider text-[var(--color-secondary)] mb-3">Local Committee</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">International exchange and cross-border technical development.</p>
                </div>
            </div>

            <div className="bento-card justify-between group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]/30 mb-6 group-hover:text-[var(--color-primary)] transition-colors">security</span>
                <div>
                    <h4 className="font-display font-bold text-[var(--color-primary)] text-xl mb-1">Cyber Analyst</h4>
                    <p className="text-[10px] font-label uppercase tracking-wider text-[var(--color-secondary)] mb-3">GDSC Google DTU</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">Ethical hacking, network security, and proactive threat analysis.</p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
