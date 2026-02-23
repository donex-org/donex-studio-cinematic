import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Users, Award, Film } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";


const portfolioHighlights = [
  {
    id: 1,
    title: "Tech Vision",
    category: "Corporate",
    video: "/videos/reel1.mp4",
  },
  {
    id: 2,
    title: "Pixel Fusion",
    category: "Music Video",
    video: "/videos/reel2.mp4",
  },
  {
    id: 3,
    title: "EcoExplorer",
    category: "Documentary",
    video: "/videos/reel3.mp4",
  },
  {
    id: 4,
    title: "Urban Uplift",
    category: "Commercial",
    video: "/videos/reel4.mp4",
  },
];

const stats = [
  { icon: Film, number: "150+", label: "Projects Completed" },
  { icon: Users, number: "100+", label: "Happy Clients" },
  { icon: Star, number: "5+", label: "Years Experience" },
];

const trustedCompanies = [
  { name: "Rusty", logo: "/images/trustee/rusty.png" },
  { name: "Sozo", logo: "/images/trustee/sozo.jpeg" },
  { name: "Bistro", logo: "/images/trustee/bistro.jpg" },
  { name: "Parksby", logo: "/images/trustee/parksby.jpeg" },
];

const HomePage = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoLoad = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      // Load and show first frame
      video.currentTime = 0.1;
    }
  };

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
    <Layout>
      <SEO
        title="DonexStudio | Professional Video Editing Services Kenya"
        description="Transform your raw footage into stunning cinematic masterpieces. Professional video editing services in Kenya for creators, brands, and businesses. Packages from Kshs 2,000."
        keywords="video editing Kenya, professional video editor, YouTube editor, TikTok editor, video production, DonexStudio"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="DonexStudio Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/10 to-gray-900" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="inline-block mb-6">
            <span
              className="text-blue-100 text-sm tracking-widest uppercase font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Professional Video Editing Services
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Transforming Your
            <br />
            <span className="text-blue-400">Vision</span> Into Reality
          </h1>

          <p
            className="text-white/90 text-lg lg:text-xl max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            We craft compelling visual stories that captivate audiences and
            elevate your brand. From concept to final cut, we bring your ideas
            to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 flex items-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Get Started
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {stat.number}
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Featured Work
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Creative <span className="text-blue-400">Projects</span>
            </h2>
            <p
              className="text-white/70 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Explore some of our recent work that showcases our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioHighlights.map((project, index) => (
              <Link
                key={project.id}
                to="/projects"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Video */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.video}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={() => handleVideoLoad(index)}
                />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <p
            className="text-center text-white/50 text-sm uppercase tracking-widest mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Trusted by Leading Brands
          </p>
          <div className="relative w-full overflow-hidden pause-on-hover">
            <div className="flex animate-scroll w-max gap-16 items-center">
              {[...trustedCompanies, ...trustedCompanies, ...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div key={index} className="flex items-center justify-center min-w-[200px]">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 object-contain grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Bring Your Vision to Life?
          </h2>
          <p
            className="text-white/90 text-lg mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let's create something amazing together. Get in touch for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              to="/plans"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;