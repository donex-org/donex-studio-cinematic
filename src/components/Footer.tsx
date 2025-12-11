import { Link } from "react-router-dom";
import { Play, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Basic Edit", href: "/plans" },
      { name: "Standard Edit", href: "/plans" },
      { name: "Advanced Edit", href: "/plans" },
      { name: "Monthly Packages", href: "/plans" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "#" },
    ],
    social: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "YouTube", icon: Youtube, href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Play
                  className="w-5 h-5 text-primary-foreground"
                  fill="currentColor"
                />
              </div>
              <span className="text-xl font-bold font-display text-white">
                DonexStudio
              </span>
            </Link>
            <p className="text-white/60 mb-6">
              Professional video editing services that bring your stories to
              life. Transform your vision into reality with our expert team.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4">
              Stay Updated
            </h4>
            <p className="text-white/60 mb-4">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} DonexStudio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
