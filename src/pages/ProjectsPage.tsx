import { useState, useRef } from "react";
import { Play, Filter } from "lucide-react";
import Layout from "@/components/Layout";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
};

const categories = [
  "All",
  "Corporate",
  "Music Videos",
  "Documentaries",
  "Social Media",
  "Events",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Tech Vision Campaign",
    category: "Corporate",
    description: "Brand video for TechKE Solutions showcasing innovation",
    thumbnail: "/images/1.jpg",
    videoUrl: "/videos/1.mp4",
  },
  {
    id: 2,
    title: "Pixel Fusion",
    category: "Music Videos",
    description: "Music video with stunning visual effects and transitions",
    thumbnail: "/images/2.jpg",
    videoUrl: "/videos/2.mp4",
  },
  {
    id: 3,
    title: "EcoExplorer Documentary",
    category: "Documentaries",
    description: "Environmental documentary about conservation efforts",
    thumbnail: "/images/3.jpg",
    videoUrl: "/videos/3.mp4",
  },
  {
    id: 4,
    title: "Urban Uplift",
    category: "Social Media",
    description: "Viral social media campaign for urban development",
    thumbnail: "/images/4.jpg",
    videoUrl: "/videos/1.mp4",
  },
  {
    id: 5,
    title: "Grace & Style Fashion Show",
    category: "Events",
    description: "Fashion show highlight reel with dynamic editing",
    thumbnail: "/images/5.jpg",
    videoUrl: "/videos/2.mp4",
  },
  {
    id: 6,
    title: "Startup Launch",
    category: "Corporate",
    description: "Product launch video for emerging tech startup",
    thumbnail: "/images/1.jpg",
    videoUrl: "/videos/3.mp4",
  },
  {
    id: 7,
    title: "Sunset Vibes",
    category: "Music Videos",
    description: "Chill music video with beautiful cinematography",
    thumbnail: "/images/3.jpg",
    videoUrl: "/videos/1.mp4",
  },
  {
    id: 8,
    title: "Wedding Highlights",
    category: "Events",
    description: "Beautiful wedding highlight film capturing precious moments",
    thumbnail: "/images/2.jpg",
    videoUrl: "/videos/2.mp4",
  },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handlePlayVideo = (projectId: number) => {
    // Pause any currently playing video
    if (playingVideo && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo]?.pause();
    }
    setPlayingVideo(projectId);
  };

  const handleMouseLeave = (projectId: number) => {
    if (videoRefs.current[projectId]) {
      videoRefs.current[projectId]?.pause();
      if (videoRefs.current[projectId]) {
        videoRefs.current[projectId]!.currentTime = 0;
      }
    }
    if (playingVideo === projectId) {
      setPlayingVideo(null);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="inline-block mb-4">
            <span
              className="text-blue-400 text-sm tracking-widest uppercase font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Portfolio
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Creative <span className="text-blue-400">Projects</span>
          </h1>
          <p
            className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Explore our portfolio of video projects across various industries
            and styles
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            <Filter className="w-5 h-5 text-white/60 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
                style={{ fontFamily: "Georgia, serif" }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500"
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                {/* Thumbnail / Video */}
                <div className="relative aspect-video overflow-hidden">
                  {playingVideo === project.id ? (
                    <video
                      ref={(el) => (videoRefs.current[project.id] = el)}
                      src={project.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                      <button
                        onClick={() => handlePlayVideo(project.id)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <Play
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                        />
                      </button>
                    </>
                  )}

                  {/* Category Badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs rounded-full"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-white/60 text-lg"
                style={{ fontFamily: "Georgia, serif" }}
              >
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Want Your Project Featured Here?
          </h2>
          <p
            className="text-white/90 text-lg mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let's create something amazing together. Get started today!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
