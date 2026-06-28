export default function TechMarquee() {
  const techs = [
    'Python', 'React', 'Machine Learning', 'Computer Vision', 'Flask', 
    'Node.js', 'OpenCV', 'Generative AI', 'Raspberry Pi', 'Arduino', 
    'Snowflake', 'Power BI'
  ];

  return (
    <>
      <div className="section-divider max-w-[1200px] mx-auto visible"></div>
      <div className="marquee-container w-full bg-[#E8EDF5] border-y border-[#D1D9E6] py-4 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-8 font-label text-[var(--color-primary)] text-sm font-semibold tracking-wider uppercase items-center w-max">
              {/* Duplicate mapping for infinite loop */}
              {[...techs, ...techs].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-8">
                  <span>{tech}</span>
                  {idx !== techs.length * 2 - 1 && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-on-secondary-fixed)]"></span>
                  )}
                </div>
              ))}
          </div>
      </div>
    </>
  );
}
