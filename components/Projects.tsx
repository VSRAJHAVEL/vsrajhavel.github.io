'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { fadeUp, clipReveal } from '@/lib/animations';

const projects = [
  {
    title: 'Neural AI',
    date: 'Dec 2025 – Jan 2026',
    subtitle: 'Context-Aware AI Website Builder & React Code Generator',
    description: 'Neural AI is an innovative, high-performance website builder that bridges the gap between visual design and production-ready React code. Unlike traditional no-code tools, Neural AI features a context-aware AI engine that analyzes the user\'s specific layout JSON to provide real-time design advice and surgical code optimizations.',
    contributions: [
      'Developed a drag-and-drop canvas using React and Framer Motion for a fluid, professional UI.',
      'Integrated a Server-Side AI Proxy using Groq (Llama-3 models) to securely handle complex code generation and layout optimization.',
      'Engineered a "Pro-Developer Export" feature that generates a complete, downloadable Vite + React project structure.',
      'Implemented real-time data persistence using MongoDB Atlas to allow users to save and manage multiple design projects.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Framer Motion', 'Llama-3', 'TailwindCSS', 'Vite'],
    image: '/projects/neural.webp',
    imageAlt: 'Neural AI',
    imageW: 2518,
    imageH: 1385,
    link: 'https://vsrajhavel-neural-ai.hf.space/',
  },
  {
    title: 'Bus Transit AI',
    date: 'Mar 2025 – Apr 2025',
    subtitle: 'Predictive Mobility Engine for Urban Transportation',
    description: 'Bus Transit AI is a data-driven intelligence engine designed to eliminate unpredictability in public transportation, specifically optimized for the TNSTC network in Coimbatore. It utilizes advanced Graph Theory and Ensemble Machine Learning to transform city transit into a proactive, efficient infrastructure.',
    contributions: [
      'Developed a high-precision ETA prediction engine using a VotingRegressor ensemble (Random Forest + Gradient Boosting).',
      'Applied Graph Algorithms to optimize pathfinding and route synthesis across a network of 53+ transit stops.',
      'Built a high-performance dashboard to visualize real-time traffic congestion and route analytics for data-driven urban planning.',
      'Containerized the entire stack using Docker for seamless deployment and scalability in smart-city environments.',
    ],
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Graph Theory', 'Pandas', 'APIs'],
    image: '/projects/bus.webp',
    imageAlt: 'Bus Transit AI',
    imageW: 2485,
    imageH: 1363,
    link: 'https://vsrajhavel-bus-transit-ai.hf.space/',
  },
  {
    title: 'AgriSense India',
    date: 'Dec 2024',
    subtitle: 'Precision Agriculture & AI Crop Intelligence System',
    description: 'AgriSense India is a groundbreaking AI ecosystem built to empower the Indian agricultural sector with scientific certainty. By merging Computer Vision with specialized Machine Learning models, the platform provides farmers with predictive insights to optimize crop yields and ensure food security.',
    contributions: [
      'Engineered an Intelligent Crop Recommendation system using Random Forest Classifiers to analyze soil and climatic variables.',
      'Developed a Soil Classification engine powered by a Convolutional Neural Network (MobileNetV2) architecture for real-time image analysis.',
      'Designed a sophisticated Glassmorphism UI using Python/Flask and modern CSS to make complex data science accessible to non-technical users.',
      'Integrated high-speed data persistence for soil-to-market insights using a secure backend architecture.',
    ],
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'Keras', 'IoT', 'Google Maps API', 'Data Science'],
    image: '/projects/agrisense.webp',
    imageAlt: 'AgriSense India',
    imageW: 2459,
    imageH: 1387,
    link: 'https://vsrajhavel-agrisense-india.hf.space/',
  },
  {
    title: 'CampusIQ AI',
    date: 'Karunya Institute',
    subtitle: 'Smart Campus & Career Companion',
    description: 'CampusIQ AI is an AI-driven system designed to enhance decision-making and efficiency within campus environments by transforming raw data into actionable insights. The project focuses on applying machine learning techniques to analyze structured campus data, enabling predictive analysis and intelligent recommendations for better resource utilization and planning.',
    contributions: [
      'Data preprocessing and intelligent analysis of campus datasets',
      'Predictive modeling for improved decision support',
      'Scalable and modular architecture for future expansion',
      'Clean backend implementation using Python',
    ],
    tags: ['Machine Learning', 'Python', 'NLP', 'Transformers', 'React.js'],
    image: '/projects/campus.webp',
    imageAlt: 'CampusIQ AI',
    imageW: 1280,
    imageH: 672,
    link: 'https://vsrajhavel.github.io/campusiq-ai/',
  },
  {
    title: 'CareerCompass AI',
    date: 'Karunya Institute',
    subtitle: 'Intelligent Career Recommendation System',
    description: 'CareerCompass AI is an intelligent career recommendation system designed to help users make informed career decisions using artificial intelligence. The system analyzes user inputs such as skills, interests, and preferences to generate personalized career suggestions.',
    contributions: [
      'Personalized career recommendations based on user inputs',
      'Analysis of skills, interests, and preferences',
      'Machine learning-based prediction system',
      'Scalable and modular design',
    ],
    tags: ['Machine Learning', 'Python', 'NLP', 'Next.js', 'API Integration'],
    image: '/projects/career.webp',
    imageAlt: 'CareerCompass AI',
    imageW: 2515,
    imageH: 1377,
    link: 'https://vsrajhavel.github.io/CareerCompass-AI/',
  },
  {
    title: 'Shara Store',
    date: 'Business Deployment',
    subtitle: 'Computer Retail and Service Store',
    description: 'Shara Store is a fully deployed, real-world business website developed for a computer retail and service store. This project focuses on providing a digital presence for the business, enabling customers to explore services and easily connect with the store online.',
    contributions: [
      'Fully responsive design for mobile and desktop users',
      'Modern UI built for smooth user experience',
      'Easy navigation for services and contact information',
      'Optimized for performance using Next.js',
    ],
    tags: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'Stripe API', 'PostgreSQL'],
    image: '/projects/shara.webp',
    imageAlt: 'Shara Store',
    imageW: 2482,
    imageH: 1241,
    link: 'https://shara-store.vercel.app/',
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

function FloatingPreview({
  image,
  visible,
  mouseX,
  mouseY,
}: {
  image: string;
  visible: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const springX = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 25 });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed z-[100] pointer-events-none hidden md:block"
          style={{ left: springX, top: springY }}
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <div className="w-[280px] h-[175px] rounded-xl overflow-hidden shadow-2xl border border-white/10 -translate-x-1/2 -translate-y-[120%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const toggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  const handleRowMouseMove = (e: React.MouseEvent, idx: number) => {
    if (!isDesktop) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setHoveredIdx(idx);
  };

  const handleRowMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-surface-container-low px-4 md:px-8 border-y border-outline-variant overflow-hidden" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <motion.div
            className="font-label text-primary text-xs font-semibold tracking-widest uppercase mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            WHAT I&apos;VE BUILT
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-display text-headline-lg font-bold text-on-secondary-fixed mb-4"
              variants={clipReveal}
              custom={1}
            >
              Projects
            </motion.h2>
          </motion.div>
        </div>

        <div className="flex flex-col border-t border-outline-variant w-full">
          {projects.map((project, idx) => {
            const isOpen = expanded === idx;
            return (
              <motion.div
                key={project.title}
                className="proj-row group/row focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={`Toggle details for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(idx);
                  }
                }}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true, amount: 0.1 }}
                onClick={() => toggle(idx)}
                onMouseMove={(e) => handleRowMouseMove(e, idx)}
                onMouseLeave={handleRowMouseLeave}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
                  <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">{project.title}</h3>
                  <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">{project.date}</span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                      >
                        <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                          <Image src={project.image} alt={project.imageAlt} width={project.imageW} height={project.imageH} className="w-full h-full object-cover" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">{project.subtitle}</h4>
                          <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">{project.description}</p>

                          <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key {idx < 3 ? 'Contributions' : 'Features'}:</p>
                            <ul className="list-disc list-inside space-y-2">
                              {project.contributions.map((item, ci) => (
                                <li key={ci}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map(tag => (
                              <span key={tag} className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">{tag}</span>
                            ))}
                          </div>

                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]" onClick={(e) => e.stopPropagation()}>
                            View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {isDesktop && hoveredIdx !== null && (
        <FloatingPreview
          image={projects[hoveredIdx].image}
          visible={hoveredIdx !== null && expanded !== hoveredIdx}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      )}
    </section>
  );
}
