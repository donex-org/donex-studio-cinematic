import { useState } from "react";
import { Play, Sparkles, Check, MessageCircle } from "lucide-react";

const DonexStudio = () => {
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
      gradient: "bg-gradient-to-b from-blue-900/50 to-blue-950/50",
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
      gradient: "bg-gradient-to-b from-blue-700/60 to-blue-900/60",
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
      gradient: "bg-gradient-to-b from-blue-600/70 to-blue-800/70",
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
      bestValue: false,
    },
    {
      id: "creator",
      name: "Creator",
      price: "Kshs 45,000",
      period: "/month",
      videos: "12 videos",
      bestValue: true,
    },
    {
      id: "studio",
      name: "Studio",
      price: "Kshs 90,000",
      period: "/month",
      videos: "20+ videos with extras",
      bestValue: false,
    },
  ];

  const addOns = [
    { name: "Thumbnail design", price: "Kshs 500" },
    { name: "Subtitles/captions", price: "Kshs 500-1,500" },
    { name: "Voice-over sync", price: "Kshs 1,000+" },
    { name: "YouTube optimization", price: "Kshs 1,500" },
    { name: "Instagram/TikTok formatting", price: "Kshs 800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="pulse-glow w-[600px] h-[600px] bg-blue-500 -top-48 -left-48" />
        <div className="pulse-glow w-[500px] h-[500px] bg-blue-600 -bottom-32 -right-32 animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-8">
            <Play className="w-4 h-4 text-blue-400" fill="currentColor" />
            <span className="text-blue-200 text-sm font-medium">Professional Video Editing Services</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display gradient-text-hero mb-6 tracking-tight">
            DonexStudio
          </h1>
          
          <p className="text-blue-200/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Transform your raw footage into stunning, cinematic masterpieces. 
            Professional video editing services tailored for creators, brands, and businesses.
          </p>
        </header>

        {/* Main Pricing Tiers */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative ${tier.gradient} backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 card-hover ${
                  hoveredCard === tier.id ? "z-20 shadow-2xl shadow-blue-500/50" : "z-10"
                }`}
                onMouseEnter={() => setHoveredCard(tier.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white font-display">{tier.name}</h3>
                  <p className="text-blue-300 text-sm">{tier.subtitle}</p>
                </div>

                <div className="mb-8">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-blue-300">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 p-4 rounded-xl bg-blue-950/50 border border-blue-400/20">
                  <p className="text-blue-200/80 text-sm">
                    <span className="text-blue-400 font-semibold">Best for:</span> {tier.bestFor}
                  </p>
                </div>

                <button className="btn-primary w-full">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Monthly Packages */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text text-center mb-12">
            Monthly Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-blue-900/40 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-6 card-hover ${
                  hoveredCard === `monthly-${pkg.id}` ? "z-20 shadow-2xl shadow-blue-500/50" : "z-10"
                }`}
                onMouseEnter={() => setHoveredCard(`monthly-${pkg.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {pkg.bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-yellow-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
                      Best Value
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white font-display mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-blue-300">{pkg.period}</span>
                </div>
                <p className="text-blue-200/80">{pkg.videos}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Add-On Services */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text text-center mb-12">
            Add-On Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 bg-blue-900/30 backdrop-blur-xl border border-blue-400/20 rounded-2xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-900/40"
              >
                <span className="text-blue-100 font-medium">{addon.name}</span>
                <span className="text-blue-300 font-semibold">{addon.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-blue-200/80 text-lg mb-10 max-w-xl mx-auto">
              Let's transform your vision into reality. Get in touch for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Start Your Project
              </button>
              <a
                href="https://wa.me/254790842476"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 0790 842 476
              </a>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="text-center">
          <p className="text-blue-300/60 text-sm">
            Prices may vary based on project complexity. Contact us for a personalized quote and professional consultation.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DonexStudio;
