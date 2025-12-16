import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const packages = [
  { id: "general", name: "General Inquiry" },
  { id: "basic-edit", name: "Basic Edit (Kshs 2,500 - 5,000)" },
  { id: "standard-edit", name: "Standard Edit (Kshs 6,000 - 12,000)" },
  { id: "advanced-edit", name: "Advanced Edit (Kshs 15,000 - 30,000+)" },
  { id: "monthly-starter", name: "Monthly Package - Starter (Kshs 20,000/month)" },
  { id: "monthly-creator", name: "Monthly Package - Creator (Kshs 45,000/month)" },
  { id: "monthly-studio", name: "Monthly Package - Studio (Kshs 90,000/month)" },
  { id: "custom", name: "Custom Package" },
];

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    package: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill package from URL parameter
  useEffect(() => {
    const packageParam = searchParams.get("package");
    if (packageParam && packages.find(p => p.id === packageParam)) {
      setFormData(prev => ({ ...prev, package: packageParam }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Log EmailJS configuration (with partial masking for security)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      // Generate Firestore Document ID first
      const docRef = doc(collection(db, "contacts"));
      const docId = docRef.id;

      // Generate timestamp using doc ID
      const now = new Date();
      // Format: YYYYMMDD using local time
      const dateStr = now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');

      const uniqueId = docId.substring(0, 4).toUpperCase();
      const customTimestamp = `${dateStr}-${uniqueId}`;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        package: packages.find((p) => p.id === formData.package)?.name || "General Inquiry",
        date: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`, // YYYY-MM-DD (Local)
        timestamp: customTimestamp,
        year: now.getFullYear(),
        company: "Donex Studio",
      };


      // Save to Firestore
      try {
        await setDoc(docRef, {
          ...formData,
          submittedAt: new Date().toISOString(),
          customTimestamp: customTimestamp, // Optional: save the custom timestamp to DB too
        });
      } catch (dbError) {
        // Continue to send email even if DB save fails
      }

      // Send email via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );


      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        package: "general",
      });
    } catch (error) {

      // Log specific error properties if available
      if (error && typeof error === 'object') {
      }

      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@donexstudio.com",
      href: "mailto:info@donexstudio.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 790 842 476",
      href: "tel:+254790842476",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 6PM",
      href: null,
    },
  ];

  const socialLinks = [
    // { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/donexstudio/" },
    // { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@254streettrends?si=EOdc61TAccEVIXbu" },
  ];

  return (
    <Layout>
      <SEO
        title="Contact Us | DonexStudio - Get a Free Video Editing Quote"
        description="Ready to start your video project? Contact DonexStudio for a free consultation. Email, phone, or WhatsApp. Located in Nairobi, Kenya. Mon-Sat: 9AM-6PM."
        keywords="contact DonexStudio, video editing quote Kenya, video editing consultation, Nairobi video editor"
      />
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
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's Create <span className="text-blue-400">Together</span>
          </h1>
          <p
            className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to start your project? Contact us today for a free
            consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2
                className="text-2xl lg:text-3xl font-bold text-white mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p
                        className="text-white/60 text-sm mb-1"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-medium hover:text-blue-400 transition-colors"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="text-white font-medium"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Inquiry */}
              <div className="mb-10">
                <p
                  className="text-white/80 text-sm mb-3"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Or inquire directly via WhatsApp:
                </p>
                <a
                  href={`https://wa.me/254790842476?text=${encodeURIComponent(
                    `Hi DonexStudio! I'm interested in the ${packages.find((p) => p.id === formData.package)?.name || "your services"
                    }. I'd like to discuss my video editing needs.${formData.name ? `\n\nName: ${formData.name}` : ""
                    }${formData.email ? `\nEmail: ${formData.email}` : ""}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quick Inquiry via WhatsApp
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3
                  className="text-lg font-bold text-white mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white/80 mb-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={20}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white/80 mb-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      maxLength={200}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-medium text-white/80 mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Package/Service Interested In
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-all appearance-none cursor-pointer"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id} className="bg-gray-900 text-white">
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-80 lg:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Nairobi, Kenya
              </h3>
              <p
                className="text-white/60"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Available for projects worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
