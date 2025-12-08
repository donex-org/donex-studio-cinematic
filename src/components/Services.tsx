import { useState } from "react";
import { Check, Sparkles, Star } from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pricingTiers = [
    {
      id: "basic",
      name: "Basic Edit",
      subtitle: "Starter Pack",
      price: "Kshs 2,000 – 5,000",
      period: "/video",
      features: [
        "Basic cuts and transitions",
        "Color correction",
        "Background music",
        "Simple text overlays",
        "1-2 revision rounds",
      ],
      bestFor: "Perfect for quick social media clips and simple edits",
      popular: false,
    },
    {
      id: "standard",
      name: "Standard Edit",
      subtitle: "Creator Pack",
      price: "Kshs 6,000 – 12,000",
      period: "/video",
      features: [
        "Advanced transitions & effects",
        "Professional color grading",
        "Custom graphics & lower thirds",
        "Sound design & mixing",
        "3-4 revision rounds",
        "Intro/outro animations",
      ],
      bestFor: "Ideal for YouTubers, content creators, and small businesses",
      popular: true,
    },
    {
      id: "advanced",
      name: "Advanced Edit",
      subtitle: "Pro Pack",
      price: "Kshs 15,000 – 30,000+",
      period: "/video",
      features: [
        "Cinematic editing & VFX",
        "Advanced motion graphics",
        "Custom animations",
        "Professional voiceover sync",
        "Multi-camera editing",
        "Unlimited revisions",
        "Priority delivery",
      ],
      bestFor: "For brands, agencies, and premium productions",
      popular: false,
    },
  ];

  const monthlyPackages = [
    {
      id: "starter",
      name: "Starter",
      price: "Kshs 20,000",
      period: "/month",
      videos: "8 short videos",
      description: "Perfect for consistent social media presence",
      bestValue: false,
    },
    {
      id: "creator",
      name: "Creator",
      price: "Kshs 45,000",
      period: "/month",
      videos: "12 videos",
      description: "Most popular for active content creators",
      bestValue: true,
    },
    {
      id: "studio",
      name: "Studio",
      price: "Kshs 90,000",
      period: "/month",
      videos: "20+ videos with extras",
      description: "Complete video production solution",
      bestValue: false,
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm tracking-widest uppercase font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Our Services
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Choose Your <span className="text-blue-400">Perfect Plan</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Professional video editing packages tailored to your needs and budget
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${
                tier.popular ? "ring-2 ring-blue-500 scale-105 shadow-2xl shadow-blue-500/20" : "shadow-xl"
              }`}
              onMouseEnter={() => setHoveredCard(tier.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {tier.name}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {tier.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {tier.price}
                </span>
                <span className="text-white/60 text-lg ml-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  <span className="text-blue-400 font-semibold">Best for:</span> {tier.bestFor}
                </p>
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                  tier.popular 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:scale-105" 
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Monthly Packages Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-sm tracking-widest uppercase font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Monthly Retainers
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Save More with Monthly Packages
            </h3>
            <p className="text-white/60 text-base" style={{ fontFamily: 'Georgia, serif' }}>
              Consistent content creation at better rates
            </p>
          </div>

          {/* Monthly Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {monthlyPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/15 hover:border-white/20 ${
                  pkg.bestValue ? "ring-2 ring-blue-400 shadow-xl shadow-blue-500/20" : "shadow-lg"
                }`}
                onMouseEnter={() => setHoveredCard(`monthly-${pkg.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {pkg.bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      <Star className="w-3 h-3" fill="currentColor" />
                      Best Value
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {pkg.name}
                  </h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {pkg.price}
                    </span>
                    <span className="text-white/60 text-sm ml-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {pkg.period}
                    </span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-3">
                    <p className="text-blue-300 font-semibold text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                      {pkg.videos}
                    </p>
                  </div>
                  <p className="text-white/60 text-sm mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                    {pkg.description}
                  </p>
                  <button className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium transition-all duration-300 hover:scale-105">
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Need a custom package? Let's discuss your unique requirements
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
            Contact Us for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;