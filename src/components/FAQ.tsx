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
    <section id="faq" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="section-title mt-2 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pl-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
