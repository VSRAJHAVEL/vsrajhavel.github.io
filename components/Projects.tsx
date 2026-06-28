import Image from 'next/image';

export default function Projects() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low px-4 md:px-8 border-y border-outline-variant overflow-hidden" id="projects">
<div className="max-w-[1200px] mx-auto">
<div className="projects-anim-header mb-12">
<div className="font-label text-primary text-xs font-semibold tracking-widest uppercase mb-4 opacity-0 translate-y-[20px] will-change-anim anim-entrance-fast" id="projects-label">WHAT I'VE BUILT</div>
<h2 className="font-display text-headline-lg font-bold text-on-secondary-fixed mb-4 opacity-0 transition-opacity duration-700 ease" id="projects-heading">Projects</h2>
</div>


<div className="project-card flex flex-col border-t border-outline-variant w-full opacity-0 translate-y-[30px] will-change-anim anim-entrance" style={{ transitionDelay: '200ms' }} data-delay="0">
    
    {/*  Project 1: Neural AI  */}
    <div className="proj-row group/row">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
            <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">Neural AI</h3>
            <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">Dec 2025 – Jan 2026</span>
        </div>
        <div className="proj-grid">
            <div className="proj-content">
                <div className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                         <img src="./projects/neural.png" alt="Neural AI" width="2518" height="1385" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">Context-Aware AI Website Builder & React Code Generator</h4>
                        <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">Neural AI is an innovative, high-performance website builder that bridges the gap between visual design and production-ready React code. Unlike traditional no-code tools, Neural AI features a context-aware AI engine that analyzes the user's specific layout JSON to provide real-time design advice and surgical code optimizations.</p>
                        
                        <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key Contributions:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Developed a drag-and-drop canvas using React and Framer Motion for a fluid, professional UI.</li>
                                <li>Integrated a Server-Side AI Proxy using Groq (Llama-3 models) to securely handle complex code generation and layout optimization.</li>
                                <li>Engineered a "Pro-Developer Export" feature that generates a complete, downloadable Vite + React project structure.</li>
                                <li>Implemented real-time data persistence using MongoDB Atlas to allow users to save and manage multiple design projects.</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">React.js</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Node.js</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Express.js</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">MongoDB</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Framer Motion</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Llama-3</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">TailwindCSS</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Vite</span>
                        </div>
                        
                        <a href="https://vsrajhavel-neural-ai.hf.space/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                             View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Project 2: Bus Transit AI  */}
    <div className="proj-row group/row">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
            <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">Bus Transit AI</h3>
            <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">Mar 2025 – Apr 2025</span>
        </div>
        <div className="proj-grid">
            <div className="proj-content">
                <div className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                         <img src="./projects/bus.png" alt="Bus Transit AI" width="2485" height="1363" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">Predictive Mobility Engine for Urban Transportation</h4>
                        <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">Bus Transit AI is a data-driven intelligence engine designed to eliminate unpredictability in public transportation, specifically optimized for the TNSTC network in Coimbatore. It utilizes advanced Graph Theory and Ensemble Machine Learning to transform city transit into a proactive, efficient infrastructure.</p>
                        
                        <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key Contributions:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Developed a high-precision ETA prediction engine using a VotingRegressor ensemble (Random Forest + Gradient Boosting).</li>
                                <li>Applied Graph Algorithms to optimize pathfinding and route synthesis across a network of 53+ transit stops.</li>
                                <li>Built a high-performance dashboard to visualize real-time traffic congestion and route analytics for data-driven urban planning.</li>
                                <li>Containerized the entire stack using Docker for seamless deployment and scalability in smart-city environments.</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Python</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Machine Learning</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Scikit-learn</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Graph Theory</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Pandas</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">APIs</span>
                        </div>
                        
                        <a href="https://vsrajhavel-bus-transit-ai.hf.space/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                             View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Project 3: AgriSense India  */}
    <div className="proj-row group/row">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
            <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">AgriSense India</h3>
            <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">Dec 2024</span>
        </div>
        <div className="proj-grid">
            <div className="proj-content">
                <div className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                         <img src="./projects/agrisense.png" alt="AgriSense India" width="2459" height="1387" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">Precision Agriculture & AI Crop Intelligence System</h4>
                        <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">AgriSense India is a groundbreaking AI ecosystem built to empower the Indian agricultural sector with scientific certainty. By merging Computer Vision with specialized Machine Learning models, the platform provides farmers with predictive insights to optimize crop yields and ensure food security.</p>
                        
                        <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key Contributions:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Engineered an Intelligent Crop Recommendation system using Random Forest Classifiers to analyze soil and climatic variables.</li>
                                <li>Developed a Soil Classification engine powered by a Convolutional Neural Network (MobileNetV2) architecture for real-time image analysis.</li>
                                <li>Designed a sophisticated Glassmorphism UI using Python/Flask and modern CSS to make complex data science accessible to non-technical users.</li>
                                <li>Integrated high-speed data persistence for soil-to-market insights using a secure backend architecture.</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Python</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">TensorFlow</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Computer Vision</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Keras</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">IoT</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Google Maps API</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Data Science</span>
                        </div>
                        
                        <a href="https://vsrajhavel-agrisense-india.hf.space/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                             View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Project 4: CampusIQ AI  */}
    <div className="proj-row group/row">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
            <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">CampusIQ AI</h3>
            <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">Karunya Institute</span>
        </div>
        <div className="proj-grid">
            <div className="proj-content">
                <div className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                         <img src="./projects/campus.jpg" alt="CampusIQ AI" width="1280" height="672" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">Smart Campus & Career Companion</h4>
                        <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">CampusIQ AI is an AI-driven system designed to enhance decision-making and efficiency within campus environments by transforming raw data into actionable insights. The project focuses on applying machine learning techniques to analyze structured campus data, enabling predictive analysis and intelligent recommendations for better resource utilization and planning.</p>
                        
                        <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key Features:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Data preprocessing and intelligent analysis of campus datasets</li>
                                <li>Predictive modeling for improved decision support</li>
                                <li>Scalable and modular architecture for future expansion</li>
                                <li>Clean backend implementation using Python</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Machine Learning</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Python</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">NLP</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Transformers</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">React.js</span>
                        </div>
                        
                        <a href="https://vsrajhavel.github.io/campusiq-ai/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                             View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Project 5: CareerCompass AI  */}
    <div className="proj-row group/row">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
            <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">CareerCompass AI</h3>
            <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">Karunya Institute</span>
        </div>
        <div className="proj-grid">
            <div className="proj-content">
                <div className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                         <img src="./projects/career.png" alt="CareerCompass AI" width="2515" height="1377" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">Intelligent Career Recommendation System</h4>
                        <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">CareerCompass AI is an intelligent career recommendation system designed to help users make informed career decisions using artificial intelligence. The system analyzes user inputs such as skills, interests, and preferences to generate personalized career suggestions.</p>
                        
                        <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key Features:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Personalized career recommendations based on user inputs</li>
                                <li>Analysis of skills, interests, and preferences</li>
                                <li>Machine learning-based prediction system</li>
                                <li>Scalable and modular design</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Machine Learning</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Python</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">NLP</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Next.js</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">API Integration</span>
                        </div>
                        
                        <a href="https://vsrajhavel.github.io/CareerCompass-AI/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                             View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Project 6: Shara Store  */}
    <div className="proj-row group/row">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
            <h3 className="proj-title font-display text-3xl md:text-5xl lg:text-6xl font-bold">Shara Store</h3>
            <span className="proj-subtitle font-label text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0">Business Deployment</span>
        </div>
        <div className="proj-grid">
            <div className="proj-content">
                <div className="px-6 md:px-10 pb-8 md:pb-12 flex flex-col lg:flex-row gap-8 items-start">
                    
                    <div className="w-full lg:w-1/3 aspect-[16/9] bg-surface-container/20 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                         <img src="./projects/shara.png" alt="Shara Store" width="2482" height="1241" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[#60A5FA] font-label font-bold text-sm tracking-widest uppercase mb-4">Computer Retail and Service Store</h4>
                        <p className="text-gray-300 font-body text-base mb-4 leading-relaxed">Shara Store is a fully deployed, real-world business website developed for a computer retail and service store. This project focuses on providing a digital presence for the business, enabling customers to explore services and easily connect with the store online.</p>
                        
                        <div className="text-gray-400 font-body text-sm mb-6 space-y-1">
                            <p className="font-bold text-white mb-2">Key Features:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Fully responsive design for mobile and desktop users</li>
                                <li>Modern UI built for smooth user experience</li>
                                <li>Easy navigation for services and contact information</li>
                                <li>Optimized for performance using Next.js</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Next.js</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">React.js</span>
                            <span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">TypeScript</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">TailwindCSS</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">Stripe API</span>
<span className="font-label text-[10px] uppercase tracking-wider bg-surface-tint/20 text-gray-300 px-3 py-1 rounded-full border border-white/20">PostgreSQL</span>
                        </div>
                        
                        <a href="https://shara-store.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#3B82F6] text-[#000000] px-6 py-3 rounded-full font-label font-bold tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 items-center gap-2 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                             View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>
  );
}
