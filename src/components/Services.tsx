import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

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

  return (
    <section id="services" className="section-padding bg-section-gray">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-title mt-2 mb-4">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Professional video editing packages tailored to your needs and budget
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white border border-border rounded-2xl p-6 lg:p-8 card-hover ${
                hoveredCard === tier.id ? "shadow-2xl" : "shadow-lg"
              } ${tier.popular ? "ring-2 ring-primary" : ""}`}
              onMouseEnter={() => setHoveredCard(tier.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground font-display">{tier.name}</h3>
                <p className="text-muted-foreground text-sm">{tier.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-2xl lg:text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 rounded-xl bg-muted">
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary font-semibold">Best for:</span> {tier.bestFor}
                </p>
              </div>

              <button className={`w-full ${tier.popular ? "btn-primary" : "btn-outline"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Monthly Packages */}
        <div className="text-center mb-10">
          <h3 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
            Monthly Packages
          </h3>
          <p className="text-muted-foreground">
            Save more with our monthly retainer packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {monthlyPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white border border-border rounded-xl p-6 card-hover ${
                hoveredCard === `monthly-${pkg.id}` ? "shadow-xl" : "shadow-md"
              }`}
              onMouseEnter={() => setHoveredCard(`monthly-${pkg.id}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {pkg.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                    Best Value
                  </span>
                </div>
              )}

              <h4 className="text-lg font-bold text-foreground font-display mb-2">{pkg.name}</h4>
              <div className="mb-3">
                <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground">{pkg.period}</span>
              </div>
              <p className="text-muted-foreground">{pkg.videos}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
