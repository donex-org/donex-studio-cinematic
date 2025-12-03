import { useState, useEffect, useCallback } from "react";
import { Star, Quote, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  message: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rating: 5,
    message: "",
  });

  // Sample testimonials for display (since new ones need approval)
  const sampleTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "James Mwangi",
      company: "TechKE Solutions",
      rating: 5,
      message: "DonexStudio transformed our corporate videos into engaging content. The team understood our brand perfectly and delivered exceptional quality. Highly recommend!",
    },
    {
      id: "2",
      name: "Sarah Odhiambo",
      company: "Style & Grace Boutique",
      rating: 5,
      message: "The social media reels they created for our fashion brand went viral! Professional, creative, and always on time. Best investment for our marketing.",
    },
    {
      id: "3",
      name: "David Kimani",
      company: "YouTube Creator",
      rating: 5,
      message: "As a content creator, I needed a reliable editor who understood YouTube algorithms. DonexStudio delivers consistently amazing work that keeps my audience engaged.",
    },
    {
      id: "4",
      name: "Grace Wanjiku",
      company: "Events by Grace",
      rating: 4,
      message: "They edited our wedding highlight video beautifully. Every moment was captured perfectly with amazing transitions and music selection. Thank you!",
    },
    {
      id: "5",
      name: "Michael Otieno",
      company: "Otieno Music",
      rating: 5,
      message: "The music video they produced exceeded all expectations. Creative vision, professional execution, and great communication throughout the project.",
    },
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, company, rating, message")
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Combine approved testimonials with samples
      const combined = data && data.length > 0 
        ? [...data, ...sampleTestimonials] 
        : sampleTestimonials;
      
      setTestimonials(combined);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials(sampleTestimonials);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("testimonials").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        rating: formData.rating,
        message: formData.message.trim(),
      });

      if (error) throw error;

      toast.success("Thank you! Your testimonial has been submitted for review.");
      setFormData({ name: "", email: "", company: "", rating: 5, message: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast.error("Failed to submit testimonial. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const renderStars = (rating: number, interactive = false, onSelect?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive && onSelect ? () => onSelect(star) : undefined}
            className={interactive ? "cursor-pointer" : "cursor-default"}
            disabled={!interactive}
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              } ${interactive ? "hover:text-yellow-400 transition-colors" : ""}`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="section-title mt-2 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Full-width Auto-sliding Testimonials */}
        {testimonials.length > 0 && (
          <div className="mb-10 overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 lg:p-10 relative">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 italic text-center">
                      "{testimonial.message}"
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </h4>
                      {testimonial.company && (
                        <p className="text-muted-foreground text-sm">
                          {testimonial.company}
                        </p>
                      )}
                      <div className="mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Share Your Experience CTA */}
        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary inline-flex items-center gap-2"
            >
              Share Your Experience
              <Star className="w-5 h-5" />
            </button>
          ) : (
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground font-display mb-6">
                Share Your Experience
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Rating *
                  </label>
                  {renderStars(formData.rating, true, (rating) => 
                    setFormData({ ...formData, rating })
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your experience working with us..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-outline flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        Submit
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
