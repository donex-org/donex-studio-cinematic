import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "James Mwangi",
      role: "CEO / TechKE Solutions",
      message: "DonexStudio transformed our corporate videos into engaging content that perfectly captured our brand essence. The team's attention to detail and creative vision exceeded all our expectations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: "2",
      name: "Sarah Odhiambo",
      role: "Founder / Style & Grace Boutique",
      message: "The social media reels they created for our fashion brand went viral! Professional, creative, and always on time. Best investment we've made for our marketing strategy.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: "3",
      name: "David Kimani",
      role: "Content Creator / YouTube",
      message: "As a content creator, I needed a reliable editor who understood YouTube algorithms. DonexStudio consistently delivers amazing work that keeps my audience engaged and coming back for more.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: "4",
      name: "Grace Wanjiku",
      role: "Event Planner / Events by Grace",
      message: "They edited our wedding highlight video beautifully. Every precious moment was captured perfectly with amazing transitions and music selection. Truly exceptional work!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
    },
  ];

  // Auto-slide effect removed
  
  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm tracking-widest uppercase font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Testimonials
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Don't just take our word for it. Here's what our satisfied clients have to say
          </p>
        </div>

        {/* Main Testimonial Display - Fixed Height Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Profile Image with Quote Icon */}
          <div className="flex justify-between items-start mb-12">
            <div 
              key={`image-${currentIndex}`}
              className={`relative transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
          </div>

          {/* Testimonial Content - Fixed Height */}
          <div className="mb-12 min-h-[400px] lg:min-h-[300px] flex flex-col justify-between">
            <div 
              key={`content-${currentIndex}`}
              className={`transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <p className="text-2xl lg:text-4xl text-white font-light leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                {currentTestimonial.message}
              </p>
            </div>

            {/* Author Info */}
            <div 
              key={`author-${currentIndex}`}
              className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {currentTestimonial.name}
                </h3>
                <p className="text-white/60 text-sm lg:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                  {currentTestimonial.role}
                </p>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  disabled={isAnimating}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-blue-500" 
                      : "w-2 bg-white/30 hover:bg-white/50"
                  } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                disabled={isAnimating}
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
                  isAnimating ? 'cursor-not-allowed opacity-50' : ''
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
              </button>
              <button
                onClick={goToNext}
                disabled={isAnimating}
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
                  isAnimating ? 'cursor-not-allowed opacity-50' : ''
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;