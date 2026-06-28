'use client';
import { useState } from 'react';

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const skillsData = [
    {
      title: "Programming",
      icon: "terminal",
      skills: ["Python", "Java", "C", "C++"]
    },
    {
      title: "Web Dev",
      icon: "code",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Databases",
      icon: "database",
      skills: ["SQL", "MySQL", "Power BI", "GitHub"]
    },
    {
      title: "AI & ML",
      icon: "psychology",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI"]
    },
    {
      title: "Embedded",
      icon: "memory",
      skills: ["Arduino", "ESP32", "Raspberry Pi", "Jetson Nano"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-container-lowest)] px-4 md:px-8" id="skills">
      <div className="max-w-[1200px] mx-auto">
        <div className="skills-anim-header opacity-0 translate-y-[20px] will-change-anim anim-entrance-fast text-center mb-12" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="font-label text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">WHAT I WORK WITH</div>
          <h2 className="font-display text-[var(--text-headline-lg)] font-bold text-[var(--color-primary)]">Tech Stack</h2>
        </div>

        {/* Interactive Accordion */}
        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] w-full gap-3 mt-8">
          
          {skillsData.map((category, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={category.title}
                onClick={() => setActiveIndex(isActive ? null : idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden border border-[var(--color-outline-variant)] cursor-pointer ${
                  isActive 
                    ? 'flex-[2] md:flex-[4] bg-[var(--color-on-secondary-fixed)] shadow-2xl' 
                    : 'flex-1 bg-[var(--color-surface-container-low)]'
                }`}
              >
                {/* Expanded Content */}
                <div 
                  className={`absolute inset-0 flex flex-col justify-center p-6 md:p-10 transition-opacity duration-700 delay-100 z-10 ${
                    isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6 text-white">
                    <span className="material-symbols-outlined text-3xl md:text-4xl">{category.icon}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 min-w-[200px] md:min-w-[300px]">
                    {category.skills.map(skill => (
                      <span key={skill} className="font-label text-xs bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collapsed Content */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="flex md:flex-col items-center gap-4 md:gap-6 text-[var(--color-primary)] transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                    <h3 className="font-display text-xl font-bold whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
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
