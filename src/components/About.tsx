import { useState } from "react";
import { Play, Award, Users, Camera, Film } from "lucide-react";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { icon: Camera, number: "500+", label: "Projects Completed" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Film, number: "10+", label: "Years Experience" }
  ];

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger the video to play
  };

  return (
    <section id="about" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-blue-400 text-sm tracking-widest uppercase font-light" style={{ fontFamily: 'Georgia, serif' }}>
                About Us
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Crafting Visual Stories That Inspire
            </h2>

            <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              At Donex Studios, we believe in the power of visual storytelling. With over a decade of experience, 
              we've been capturing moments, creating memories, and bringing visions to life through our lens.
            </p>

            <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Our team of passionate photographers and videographers specialize in turning ordinary moments into 
              extraordinary visual experiences. From intimate portraits to grand landscapes, we approach every 
              project with creativity, precision, and dedication.
            </p>

            <div className="pt-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/20">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <stat.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Showreel Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <span className="text-blue-400 text-sm tracking-widest uppercase font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Our Showreel
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              See Our Work in Action
            </h2>
          </div>

          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Video Thumbnail/Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />

              {/* Play Button */}
              {!isPlaying && (
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group/play"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1 group-hover/play:scale-110 transition-transform" fill="currentColor" />
                </button>
              )}

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-xl lg:text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Donex Studios Showreel 2024
                    </h3>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                      A collection of our best work from the past year
                    </p>
                  </div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                    3:45
                  </div>
                </div>
              </div>
            </div>

            {/* Actual Video Element (hidden until play) */}
            {isPlaying && (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Video Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/60 text-base" style={{ fontFamily: 'Georgia, serif' }}>
              Watch our latest showreel showcasing breathtaking landscapes, intimate portraits, stunning interiors, 
              and captivating moments from events around the world. Each frame tells a unique story.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default About;