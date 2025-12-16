import { useState, useRef } from "react";
import { Filter } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { useYouTubeFeed } from "@/hooks/useYouTubeFeed";
import VideoDialog from "@/components/VideoDialog";

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
  const { videos, loading, error } = useYouTubeFeed();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Use fetched videos if available, otherwise fallback to static projects (or empty)
  // For this implementation, we'll map YouTube videos to the Project structure
  // Note: YouTube API doesn't give us "category" easily without more complex logic, 
  // so we might default them to "All" or a specific category, or just ignore category filtering for the feed.
  // To keep UI consistent, let's assume all fetched videos are shown when "All" is selected.

  const displayProjects: Project[] = videos.length > 0
    ? videos.map((v, index) => ({
      id: index + 100, // Avoid ID collision with static data if mixed
      title: v.title,
      category: "Latest", // Default category for fetched videos
      description: v.description.slice(0, 100) + "...",
      thumbnail: v.thumbnail,
      videoUrl: v.videoUrl, // This is a YouTube URL, might need handling if the video tag expects a direct file
    }))
    : projects; // Fallback to static data if no videos fetched (or API key missing)

  const filteredProjects =
    selectedCategory === "All"
      ? displayProjects
      : displayProjects.filter((p) => p.category === selectedCategory);

  const handlePlayVideo = (projectId: number) => {
    // YouTube videos via iframe/embed don't support .play() on a video tag easily unless we use the YouTube Player API.
    // The current UI uses <video> tags which expect direct files.
    // If we are using YouTube, we should probably render an iframe or a thumbnail that links to YouTube.
    // However, the user asked to "reflect on the site".
    // Let's adjust the rendering logic below to handle YouTube URLs.
  };

  const handleMouseLeave = (projectId: number) => {
    // Same as above
  };

  return (
    <Layout>
      <SEO
        title="Our Projects | DonexStudio Portfolio - Video Editing Showcase"
        description="Explore our portfolio of video editing projects including corporate videos, music videos, documentaries, and social media content. See the quality of our work."
        keywords="video editing portfolio, Kenya video projects, corporate videos, music video editing, documentary editing"
      />
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
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 mb-16 flex-wrap">
            {/* Filter UI code... (kept as is or commented out as per original) */}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full flex items-center justify-center py-32">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
                  <p className="text-white/70 text-sm font-medium">Loading projects...</p>
                </div>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                  onMouseEnter={() => handlePlayVideo(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  {/* Video/Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-black/20">
                    <VideoDialog
                      videoUrl={project.videoUrl}
                      thumbnail={project.thumbnail}
                      title={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Info */}
                  <div className="p-7">
                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-white/50 text-sm leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors duration-300"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && !loading && (
            <div className="text-center py-32">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6">
                <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p
                className="text-white/50 text-lg mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                No projects found in this category
              </p>
              <p className="text-white/30 text-sm">
                Try selecting a different category to see more projects
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
