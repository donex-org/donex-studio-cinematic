import { Link } from "react-router-dom";
import { Check, Sparkles, Star, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

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

const addOns = [
  { name: "Rush Delivery (24-48 hours)", price: "+50% of project cost" },
  { name: "Thumbnail Design", price: "Kshs 500 - 1,500" },
  { name: "Script Writing", price: "Kshs 2,000 - 5,000" },
  { name: "Voiceover Recording", price: "Kshs 1,000 - 3,000" },
  { name: "Stock Footage Sourcing", price: "Kshs 500 - 2,000" },
  { name: "Project Files Handover", price: "Kshs 5,000" },
];

const faqs = [
  {
    question: "What types of videos do you edit?",
    answer:
      "We edit a wide variety of video content including YouTube videos, social media reels (Instagram, TikTok), corporate videos, documentaries, music videos, wedding films, promotional content, and more.",
  },
  {
    question: "How long does the editing process take?",
    answer:
      "Turnaround time depends on the project complexity. Basic edits typically take 2-3 business days, standard edits 4-5 days, and advanced/complex projects 7-14 days. Rush delivery is available.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept all major video formats including MP4, MOV, AVI, MKV, and raw footage from cameras like Canon, Sony, RED, and Blackmagic. We deliver in your preferred format up to 4K.",
  },
  {
    question: "How do I send my footage?",
    answer:
      "You can upload via Google Drive, Dropbox, WeTransfer, or any cloud storage. For larger projects, we provide a dedicated upload link with faster transfer speeds.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! All packages include revisions. Basic includes 1-2 revisions, Standard includes 3-4, and Advanced packages include unlimited revisions until you're completely satisfied.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfers, PayPal, and major credit/debit cards. For larger projects, we offer flexible payment plans with 50% upfront and 50% on completion.",
  },
];

const PlansPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
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
              Pricing Plans
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Choose Your <span className="text-blue-400">Perfect Plan</span>
          </h1>
          <p
            className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Professional video editing packages tailored to your needs and
            budget
          </p>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${
                  tier.popular
                    ? "ring-2 ring-blue-500 scale-105 shadow-2xl shadow-blue-500/20"
                    : "shadow-xl"
                }`}
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
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {tier.subtitle}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className="text-3xl lg:text-4xl font-bold text-white"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-white/60 text-lg ml-1"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span
                        className="text-white/80 text-sm leading-relaxed"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p
                    className="text-white/70 text-sm leading-relaxed"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    <span className="text-blue-400 font-semibold">
                      Best for:
                    </span>{" "}
                    {tier.bestFor}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-3 px-6 rounded-full font-bold text-center transition-all duration-300 ${
                    tier.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Monthly Retainers
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Save More with <span className="text-blue-400">Monthly</span>{" "}
              Packages
            </h2>
            <p
              className="text-white/60 text-base"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Consistent content creation at better rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {monthlyPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/15 hover:border-white/20 ${
                  pkg.bestValue
                    ? "ring-2 ring-blue-400 shadow-xl shadow-blue-500/20"
                    : "shadow-lg"
                }`}
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
                  <h4
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {pkg.name}
                  </h4>
                  <div className="mb-4">
                    <span
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-white/60 text-sm ml-1"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {pkg.period}
                    </span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-3">
                    <p
                      className="text-blue-300 font-semibold text-sm"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {pkg.videos}
                    </p>
                  </div>
                  <p
                    className="text-white/60 text-sm mb-6"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {pkg.description}
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium transition-all duration-300 hover:scale-105"
                  >
                    Select Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Add-Ons
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Additional <span className="text-blue-400">Services</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 ${
                  index !== addOns.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span
                  className="text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {addon.name}
                </span>
                <span
                  className="text-blue-400 font-semibold"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Compare <span className="text-blue-400">Plans</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th
                    className="text-left text-white/60 py-4 px-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Features
                  </th>
                  <th
                    className="text-center text-white py-4 px-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Basic
                  </th>
                  <th
                    className="text-center text-white py-4 px-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Standard
                  </th>
                  <th
                    className="text-center text-white py-4 px-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Advanced
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Basic Cuts & Transitions", true, true, true],
                  ["Color Correction", true, true, true],
                  ["Background Music", true, true, true],
                  ["Custom Graphics", false, true, true],
                  ["Motion Graphics", false, true, true],
                  ["Advanced VFX", false, false, true],
                  ["Multi-Camera Editing", false, false, true],
                  ["Revisions", "1-2", "3-4", "Unlimited"],
                  ["Priority Support", false, false, true],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td
                      className="text-white/80 py-4 px-4"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {row[0]}
                    </td>
                    {[1, 2, 3].map((col) => (
                      <td key={col} className="text-center py-4 px-4">
                        {typeof row[col] === "boolean" ? (
                          row[col] ? (
                            <Check className="w-5 h-5 text-blue-400 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span
                            className="text-white/80"
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {row[col]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                FAQ
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openFaq === index
                          ? "bg-blue-600"
                          : "bg-blue-500/20 group-hover:bg-blue-500/30"
                      }`}
                    >
                      <HelpCircle
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openFaq === index ? "text-white" : "text-blue-400"
                        }`}
                      />
                    </div>
                    <span
                      className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors pr-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p
                        className="text-white/70 leading-relaxed"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Need a Custom Package?
          </h2>
          <p
            className="text-white/90 text-lg mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let's discuss your unique requirements and create a tailored
            solution
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Contact Us for Custom Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PlansPage;
