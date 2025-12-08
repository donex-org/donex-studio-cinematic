import { useState, useEffect } from "react";

const portfolioItems = [
  [
    {
      id: 1,
      number: "01.",
      title: "Beautiful Venice",
      category: "TRAVEL",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=1000&fit=crop"
    },
    {
      id: 2,
      number: "02.",
      title: "Lovely Room",
      category: "INTERIOR",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=1000&fit=crop"
    },
    {
      id: 3,
      number: "03.",
      title: "Amazing Mountain",
      category: "LANDSCAPES",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop"
    },
    {
      id: 4,
      number: "04.",
      title: "Street Portrait",
      category: "PORTRAITS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
    }
  ],
  [
    {
      id: 1,
      number: "01.",
      title: "Sunset Paradise",
      category: "TRAVEL",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=1000&fit=crop"
    },
    {
      id: 2,
      number: "02.",
      title: "Modern Space",
      category: "INTERIOR",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop"
    },
    {
      id: 3,
      number: "03.",
      title: "Forest Path",
      category: "LANDSCAPES",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=1000&fit=crop"
    },
    {
      id: 4,
      number: "04.",
      title: "Urban Life",
      category: "PORTRAITS",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop"
    }
  ]
];

const Hero = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % portfolioItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentItems = portfolioItems[currentSet];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Portfolio Grid */}
      <div className="relative h-screen flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl w-full h-[600px]">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Bottom Content */}
                <div className="space-y-2">
                  <div className="text-white/80 text-5xl font-light" style={{ fontFamily: 'Georgia, serif' }}>{item.number}</div>
                  <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h2>
                  <p className="text-white/70 text-xs tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>{item.category}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent transition-opacity duration-500 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-center justify-between">
        <p className="text-white/50 text-xs">© All Rights Reserved 2017</p>
        <div className="w-12 h-1 bg-blue-500 rounded-full" />
      </div> */}
    </section>
  );
};

export default Hero;