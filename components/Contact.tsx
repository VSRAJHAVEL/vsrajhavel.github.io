import Image from 'next/image';

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest px-4 md:px-8" id="contact">
    <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#000000] p-1 shadow-2xl contact-anim opacity-0 translate-y-[30px] will-change-anim anim-entrance">
            {/*  Animated Background Mesh  */}
            <div className="absolute inset-0 bg-mesh opacity-30"></div>
            
            {/*  Glass Inner Container  */}
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-3xl rounded-[1.8rem] border border-surface-container-lowest/20 p-10 md:p-20 text-center flex flex-col items-center justify-center overflow-hidden h-full z-10">
                
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Let's build<br/>something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">incredible.</span></h2>
                
                <p className="font-body text-body-lg text-white/70 max-w-xl mx-auto mb-12">Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.</p>
                
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-md mx-auto">
                    {/*  Magnetic Email Button  */}
                    <a href="mailto:vsrajhavelkarunyan@gmail.com" className="magnetic-wrap relative w-full sm:w-auto">
                        <div className="magnetic-btn w-full bg-surface-container-lowest text-[#000000] font-label font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl">
                            <span className="material-symbols-outlined text-lg">mail</span>
                            <span>Direct Email</span>
                        </div>
                    </a>
                    
                    {/*  Magnetic Calendar Button  */}
                    <a href="mailto:vsrajhavelkarunyan@gmail.com?subject=Schedule%20a%20Call" className="magnetic-wrap relative w-full sm:w-auto">
                        <div className="magnetic-btn w-full bg-transparent border-2 border-surface-container-lowest/30 text-white font-label font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-surface-container-lowest hover:text-[#000000] hover:border-surface-container-lowest transition-all duration-300">
                            <span className="material-symbols-outlined text-lg">calendar_month</span>
                            <span>Schedule Call</span>
                        </div>
                    </a>
                </div>
                
                <div className="mt-16 pt-8 border-t border-surface-container-lowest/10 w-full max-w-lg flex items-center justify-center gap-8 mx-auto">
                    <p className="text-gray-400 font-label text-xs tracking-widest uppercase"><span className="material-symbols-outlined text-[10px] align-middle mr-1">location_on</span> Coimbatore, India</p>
                    <p className="text-gray-400 font-label text-xs tracking-widest uppercase"><span className="material-symbols-outlined text-[10px] align-middle mr-1">call</span> +91 90430 00313</p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
