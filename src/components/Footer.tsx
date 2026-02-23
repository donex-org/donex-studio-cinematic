import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Facebook, Instagram, Twitter, Youtube, Loader2 } from "lucide-react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import LegalDialog from "./LegalDialog";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      // Check if email already exists
      const q = query(collection(db, "subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.info("You are already subscribed to our newsletter!");
        setEmail("");
        return;
      }

      // Add new subscriber
      await addDoc(collection(db, "subscribers"), {
        email,
        subscribedAt: new Date().toISOString(),
      });
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

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
      // { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/donexstudio/" },
      // { name: "Twitter", icon: Twitter, href: "#" },
      { name: "YouTube", icon: Youtube, href: "https://youtube.com/@254streettrends?si=EOdc61TAccEVIXbu" },
    ],
  };

  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img
                  src="/donex-logo.jpg"
                  alt="Donex Studio Logo"
                  className="w-5 h-5 object-contain"
                />
              </div> */}
              <span className="text-xl font-bold font-display text-white">
                Donex Studio
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
                  target="_blank"
                  rel="noopener noreferrer"
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
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold font-display mb-4">
              Stay Updated
            </h4>
            <p className="text-white/60 mb-6">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Donex Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <LegalDialog
                title="Terms and Conditions"
                pdfUrl="/pdf/TERMS AND CONDITIONS.pdf"
                triggerText="Terms of Service"
                className="text-white/60 hover:text-white text-sm transition-colors"
              />
              <LegalDialog
                title="Privacy Policy"
                pdfUrl="/pdf/PRIVACY NOTICE.pdf"
                triggerText="Privacy Policy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
