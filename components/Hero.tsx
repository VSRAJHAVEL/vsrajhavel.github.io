import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 relative overflow-hidden bg-black" id="hero">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white opacity-0 translate-y-[20px] will-change-anim anim-entrance" 
            style={{ transitionDelay: '100ms', opacity: 1, transform: 'translateY(0)' }}
          >
            Engineering <br/>Intelligent Systems.
          </h1>
          <p 
            className="font-body text-[var(--text-body-lg)] text-white/90 mb-8 max-w-lg opacity-0 translate-y-[20px] will-change-anim anim-entrance"
            style={{ transitionDelay: '200ms', opacity: 1, transform: 'translateY(0)' }}
          >
            Final-year Computer Science engineer at Karunya University, pushing the boundaries of Artificial Intelligence, Machine Learning, scalable Web Architecture, and Quantum Computing.
          </p>
          <div 
            className="flex gap-4 opacity-0 translate-y-[20px] will-change-anim anim-entrance"
            style={{ transitionDelay: '300ms', opacity: 1, transform: 'translateY(0)' }}
          >
            <a 
              className="bg-white text-black font-body font-medium text-[var(--text-body-md)] px-6 py-3 rounded-lg hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease" 
              href="#projects"
            >
              View Projects
            </a>
            <a 
              className="border border-[var(--color-surface-container-lowest)] text-white font-body font-medium text-[var(--text-body-md)] px-6 py-3 rounded-lg hover:bg-[var(--color-surface-tint)]/20 hover:border-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease" 
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Hero Profile Image */}
        <div 
          className="relative opacity-0 translate-x-[60px] will-change-anim anim-entrance"
          style={{ transitionDelay: '200ms', opacity: 1, transform: 'translateX(0)' }}
        >
            <div className="hero-profile-card relative rounded-2xl overflow-hidden border-2 border-[var(--color-secondary-fixed-dim)]/30 shadow-2xl max-w-[380px] mx-auto">
                <Image 
                  src="/PHOTOS/Hero-section-0 (1).jpg" 
                  alt="Rajhavel V S" 
                  width={2688} 
                  height={3645} 
                  className="w-full h-auto object-contain rounded-2xl" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-label text-xs text-white/80 uppercase tracking-widest mb-1">AI/ML Engineer</div>
                    <div className="font-display text-xl font-bold text-white">Rajhavel V S</div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Minimal Grid Background */}
      <div className="absolute -inset-[100px] z-0 opacity-10 pointer-events-none animate-bg-drift" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)' }}></div>
    </section>
  );
}
