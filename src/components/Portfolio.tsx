import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "youtube", label: "YouTube" },
    { id: "social", label: "Social Media" },
    { id: "corporate", label: "Corporate" },
    { id: "music", label: "Music Videos" },
  ];

  const projects = [
    {
      id: 1,
      title: "Tech Review Channel Rebrand",
      category: "social",
      // thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
      thumbnail: "/images/1.jpg",
      description: "Complete visual overhaul for a tech YouTube channel",
    },
    {
      id: 2,
      title: "Fitness Brand Campaign",
      category: "social",
      // thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      thumbnail: "/images/2.jpg",
      description: "Dynamic reels and stories for fitness brand launch",
    },
    {
      id: 3,
      title: "Corporate Annual Report",
      category: "social",
      // thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      thumbnail: "/images/3.jpg",
      description: "Engaging video presentation for stakeholders",
    },
    {
      id: 4,
      title: "Afrobeats Music Video",
      category: "social",
      // thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      thumbnail: "/images/4.jpg",
      description: "High-energy music video with custom effects",
    },
    {
      id: 5,
      title: "Travel Vlog Series",
      category: "social",
      // thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
      thumbnail: "/images/5.jpg",
      description: "Cinematic travel documentary editing",
    },
    // {
    //   id: 6,
    //   title: "Restaurant Promo",
    //   category: "social",
    //   // thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    //   thumbnail: "public/images/6.jpg",
    //   description: "Mouth-watering food content for Instagram",
    // },
    // {
    //   id: 7,
    //   title: "Startup Pitch Video",
    //   category: "social",
    //   // thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    //   thumbnail: "public/images/7.jpg",
    //   description: "Compelling pitch deck video for investors",
    // },
    // {
    //   id: 8,
    //   title: "Gospel Music Video",
    //   category: "social",
    //   // thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
    //   thumbnail: "public/images/8.jpg",
    //   description: "Uplifting music video with beautiful visuals",
    // },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-section-gray">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="section-title mt-2 mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Browse through our diverse portfolio of video editing projects across various industries
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full capitalize">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline inline-flex items-center gap-2"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
