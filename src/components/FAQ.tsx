import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of videos do you edit?",
      answer: "We edit a wide variety of video content including YouTube videos, social media reels (Instagram, TikTok), corporate videos, documentaries, music videos, wedding films, promotional content, and more. Our team adapts to your specific style and requirements.",
    },
    {
      question: "How long does the editing process take?",
      answer: "Turnaround time depends on the project complexity. Basic edits typically take 2-3 business days, standard edits 4-5 days, and advanced/complex projects 7-14 days. Rush delivery is available for an additional fee.",
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept all major video formats including MP4, MOV, AVI, MKV, and raw footage from cameras like Canon, Sony, RED, and Blackmagic. We deliver in your preferred format and resolution, up to 4K.",
    },
    {
      question: "How do I send my footage?",
      answer: "You can upload your footage via Google Drive, Dropbox, WeTransfer, or any cloud storage of your choice. For larger projects, we can provide a dedicated upload link with faster transfer speeds.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! All our packages include revisions. Basic packages include 1 revision, Standard includes 2 revisions, and Advanced packages include unlimited revisions until you're completely satisfied with the final result.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, bank transfers, PayPal, and major credit/debit cards. For larger projects, we offer flexible payment plans with 50% upfront and 50% on completion.",
    },
    {
      question: "Can I request a specific editing style?",
      answer: "Absolutely! We encourage you to share reference videos, mood boards, or specific editing styles you like. Our editors will match your vision and brand aesthetic perfectly.",
    },
    {
      question: "Do you provide raw project files?",
      answer: "Project files can be provided upon request for an additional fee. This includes the editable timeline, assets, and any custom graphics created for your project.",
    },
  ];

  return (
    <section id="faq" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm tracking-widest uppercase font-light" style={{ fontFamily: 'Georgia, serif' }}>
              FAQ
            </span>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden border border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-blue-600' 
                        : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                    }`}>
                      <HelpCircle className={`w-6 h-6 transition-colors duration-300 ${
                        openIndex === index ? 'text-white' : 'text-blue-400'
                      }`} />
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors pr-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-blue-500/20 rotate-180' 
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-blue-400' : 'text-white/60'
                    }`} />
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-16 pr-4">
                      <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl shadow-blue-500/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Still Have Questions?
            </h3>
            <p className="text-white/90 text-base max-w-md" style={{ fontFamily: 'Georgia, serif' }}>
              We're here to help! Reach out and we'll get back to you as soon as possible.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;