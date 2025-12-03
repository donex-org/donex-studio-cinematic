import { Check } from "lucide-react";

const About = () => {
  const values = [
    "Professional expertise with cutting-edge editing tools",
    "Fast turnaround times without compromising quality",
    "Personalized approach tailored to your unique vision",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl ${
                    i % 3 === 0
                      ? "bg-primary/20"
                      : i % 3 === 1
                      ? "bg-accent/20"
                      : "bg-primary/10"
                  } ${i === 4 ? "bg-primary" : ""}`}
                />
              ))}
            </div>
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/50 rounded-xl pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="section-title mt-2 mb-6">
              Crafting Stories Through
              <span className="text-primary"> Creative Excellence</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              DonexStudio is a premier video editing service dedicated to transforming 
              raw footage into compelling visual narratives. With years of experience 
              and a passion for storytelling, we help creators, businesses, and brands 
              bring their vision to life.
            </p>

            <p className="text-muted-foreground mb-8">
              Our team of skilled editors combines technical expertise with creative 
              flair to deliver videos that captivate audiences and drive results. 
              Whether you're a content creator, small business, or large enterprise, 
              we have the perfect solution for your video editing needs.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
