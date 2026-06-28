import Image from 'next/image';

const galleryImagesFwd = [
  { src: '/PHOTOS/Hero-section.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-0 (1).jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-0 (2).jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-1.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-2.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-3.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-4.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-5.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-6.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-7.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-8.jpg', caption: 'Moments' },
  { src: '/PHOTOS/Hero-section-9.jpg', caption: 'Moments' }
];

const galleryImagesRev = [
  { src: '/PHOTOS/robo-fest.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-1.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-2.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-3.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-4.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-5.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-1.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-2.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-3.jpg', caption: 'Robofest' },
  { src: '/PHOTOS/robo-fest-final-round-4.jpg', caption: 'Robofest' }
];

export default function Gallery() {
  return (
    <>
      <div className="section-divider max-w-[1200px] mx-auto visible"></div>
      <section className="py-20 md:py-28 overflow-hidden bg-[var(--color-on-secondary-fixed)] relative" id="gallery">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
                <div className="font-label text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3 opacity-0 translate-y-[20px] will-change-anim anim-entrance gallery-label" style={{ opacity: 1, transform: 'translateY(0)' }}>MOMENTS</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white opacity-0 translate-y-[20px] will-change-anim anim-entrance gallery-heading" style={{ transitionDelay: '100ms', opacity: 1, transform: 'translateY(0)' }}>Life Beyond<br/>the Screen</h2>
            </div>
            <p className="font-body text-gray-400 text-base max-w-xs opacity-0 translate-y-[20px] will-change-anim anim-entrance gallery-sub" style={{ transitionDelay: '200ms', opacity: 1, transform: 'translateY(0)' }}>Robotics stages, ACM chapters, and everything in between.</p>
        </div>

        {/* Row 1 - Forward */}
        <div className="relative mb-4 overflow-hidden">
            <div className="gallery-vignette gallery-vignette-left"></div>
            <div className="gallery-vignette gallery-vignette-right"></div>
            <div className="gallery-row-fwd flex gap-4 px-4 w-max hover:[animation-play-state:paused]">
                {[...galleryImagesFwd, ...galleryImagesFwd].map((img, idx) => (
                  <div key={idx} className="gallery-item h-[320px] relative">
                    <Image src={img.src} alt={img.caption} width={400} height={320} className="w-auto h-full object-cover" />
                    <div className="gi-caption"><span>{img.caption}</span></div>
                  </div>
                ))}
            </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="relative overflow-hidden">
            <div className="gallery-vignette gallery-vignette-left"></div>
            <div className="gallery-vignette gallery-vignette-right"></div>
            <div className="gallery-row-rev flex gap-4 px-4 w-max hover:[animation-play-state:paused]">
                {[...galleryImagesRev, ...galleryImagesRev].map((img, idx) => (
                  <div key={idx} className="gallery-item h-[240px] relative">
                    <Image src={img.src} alt={img.caption} width={400} height={240} className="w-auto h-full object-cover" />
                    <div className="gi-caption"><span>{img.caption}</span></div>
                  </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
