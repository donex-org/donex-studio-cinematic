import { Film, Users, Award, ThumbsUp } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Film,
      value: "500+",
      label: "Videos Edited",
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: "50+",
      label: "Projects Awarded",
    },
    {
      icon: ThumbsUp,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-brand-dark py-12 lg:py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white font-display mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
