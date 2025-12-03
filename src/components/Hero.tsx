import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="gradient-hero pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Play className="w-4 h-4 text-primary" fill="currentColor" />
              <span className="text-primary text-sm font-medium">Professional Video Editing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Transform Your
              <span className="text-primary"> Vision </span>
              Into Reality
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Professional video editing services that bring your stories to life. 
              From social media clips to cinematic productions, we deliver excellence every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("#services")}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                View Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-outline"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Video Element */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
              {/* Video Container */}
              <div className="aspect-video bg-foreground rounded-xl overflow-hidden relative">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <img
                      src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop"
                      alt="Video editing workspace"
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                    >
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="DonexStudio Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Bottom Bar */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Watch our showreel</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-muted rounded-md" />
                  <div className="w-8 h-8 bg-muted rounded-md" />
                </div>
              </div>
            </div>

            {/* Floating Decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10 rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-2xl -z-10 -rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
