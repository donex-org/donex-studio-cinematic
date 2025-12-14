import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Lightbulb,
  CheckCircle,
  Users,
  Award,
  Clock,
  Heart,
  User,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const teamMembers = [
  {
    name: "David Kinyua",
    role: "Founder & Lead Editor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Wanjiru",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "James Ochieng",
    role: "Senior Editor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Grace Muthoni",
    role: "Motion Graphics Artist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Our work has been recognized with over 50 industry awards for excellence in video production.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We understand deadlines. Get your projects delivered on time without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our team is always available to discuss your project and provide personalized assistance.",
  },
  {
    icon: Heart,
    title: "Passion for Storytelling",
    description:
      "We're passionate about visual storytelling and bringing your unique vision to life.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About Us | DonexStudio - Professional Video Editing Team"
        description="Meet the passionate team behind DonexStudio. Since 2014, we've been transforming raw footage into compelling visual narratives for creators and businesses across Kenya."
        keywords="about DonexStudio, video editing team Kenya, professional editors, video production company"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                About Us
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Crafting Visual Stories
              <br />
              <span className="text-blue-400">That Inspire</span>
            </h1>
            <p
              className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto"
              style={{ fontFamily: "Georgia, serif" }}
            >
              We are a passionate team of video editors and storytellers
              dedicated to transforming your raw footage into compelling visual
              narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span
                  className="text-blue-400 text-sm tracking-widest uppercase font-light"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Our Story
                </span>
                <div className="w-12 h-0.5 bg-blue-500 mt-2" />
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                From Passion to Profession
              </h2>
              <div className="space-y-4 text-white/70" style={{ fontFamily: "Georgia, serif" }}>
                <p>
                  Donex Studio was founded in 2020 with a simple mission: to help
                  creators and businesses tell their stories through the power
                  of video. What started as a one-person operation has grown
                  into a full-service video editing studio.
                </p>
                <p>
                  Over the years, we've had the privilege of working with
                  hundreds of clients across various industries – from
                  YouTubers and content creators to corporate giants and
                  wedding filmmakers.
                </p>
                <p>
                  Our journey has been fueled by an unwavering commitment to
                  quality, creativity, and client satisfaction. Every project
                  we undertake is treated as an opportunity to create something
                  extraordinary.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/5.jpg"
                alt="Our Story"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-400" />
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Mission
              </h3>
              <p
                className="text-white/70"
                style={{ fontFamily: "Georgia, serif" }}
              >
                To empower creators and businesses with professional video
                editing services that transform their vision into captivating
                visual content, making high-quality video production accessible
                to everyone.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-400" />
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Vision
              </h3>
              <p
                className="text-white/70"
                style={{ fontFamily: "Georgia, serif" }}
              >
                To become East Africa's leading video editing studio,
                recognized for innovation, creativity, and excellence in
                storytelling through the medium of video.
              </p>
            </div>

            {/* Goals */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-blue-400" />
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Goals
              </h3>
              <ul
                className="text-white/70 space-y-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  Deliver 1000+ projects annually
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  Expand to 5 African countries
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  Train 50+ new video editors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Our Team
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Meet the <span className="text-blue-400">Creatives</span>
            </h2>
            <p
              className="text-white/70 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our talented team brings years of experience and passion to every
              project
            </p>
          </div>

          {/* Founder */}
          <div className="flex justify-center mb-16 relative">
            <div className="group text-center relative z-10">
              <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-blue-500/30">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300" />
              </div>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {teamMembers[0].name}
              </h3>
              <p
                className="text-blue-400 font-medium text-sm"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {teamMembers[0].role}
              </p>
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-48 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500/30 to-blue-500/10 -z-0" />
            <div className="absolute top-[calc(12rem+4rem)] left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-blue-500/10 -z-0 hidden md:block" />
            <div className="absolute top-[calc(12rem+4rem)] left-[10%] w-0.5 h-8 bg-blue-500/10 -z-0 hidden md:block" />
            <div className="absolute top-[calc(12rem+4rem)] left-1/2 w-0.5 h-8 bg-blue-500/10 -z-0 hidden md:block" />
            <div className="absolute top-[calc(12rem+4rem)] right-[10%] w-0.5 h-8 bg-blue-500/10 -z-0 hidden md:block" />
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <div className="relative mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto bg-white/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-blue-400" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span
                className="text-blue-400 text-sm tracking-widest uppercase font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Us
              </span>
              <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Why Choose <span className="text-blue-400">DonexStudio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.description}
                </p>
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
            Ready to Work Together?
          </h2>
          <p
            className="text-white/90 text-lg mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let's discuss your next project and create something amazing
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
