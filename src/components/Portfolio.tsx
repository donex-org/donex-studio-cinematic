import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  subtitle: string;
  videoUrl: string;
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Tech Vision",
      subtitle: "Innovation",
      videoUrl: "/videos/1.mp4"
    },
    {
      id: 2,
      title: "Pixel Fusion",
      subtitle: "Techno",
      videoUrl: "/videos/3.mp4"
    },
    {
      id: 3,
      title: "EcoExplorer",
      subtitle: "GreenEarth",
      videoUrl: "/videos/2.mp4"
    },
    {
      id: 4,
      title: "Urban Uplift",
      subtitle: "MetroScape",
      videoUrl: "/videos/1.mp4"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    ScrollTrigger.refresh();

    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(wrapper, {
      x: () => `-${scrollDistance}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance}`, 
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
      {/* Portfolio Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="text-center space-y-4">
          <div className="inline-block">
            <span className="text-blue-400 text-sm uppercase font-light tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
              Portfolio
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Creative <span className="text-blue-400">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Explore our collection of captivating visual stories
          </p>
        </div>
      </div>

      <div ref={sectionRef} className="w-full h-screen relative flex items-center">
        {/* Horizontal Scrolling Cards */}
        <div
          ref={wrapperRef}
          className="flex space-x-8 pl-[50vw] pr-[2vw] items-center h-full"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex-shrink-0 w-[350px] lg:w-[420px] h-[450px] lg:h-[520px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                src={project.videoUrl}
                loop
                muted
                playsInline
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {project.title}
                </h3>
                <p className="text-base lg:text-lg text-white/70" style={{ fontFamily: 'Georgia, serif' }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/30 rounded-3xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Portfolio;