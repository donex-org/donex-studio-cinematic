import { useState, useEffect } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-500 ease-out ${
        isScrolled 
          ? 'pt-2 px-4' 
          : 'pt-0 px-0'
      }`}>
        <nav 
          className={`transition-all duration-500 ease-out ${
            isScrolled 
              ? 'max-w-4xl mx-auto bg-slate-900/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-4 sm:px-6 lg:px-8' 
              : 'max-w-7xl mx-auto bg-transparent px-4 sm:px-6 lg:px-8 xl:px-20'
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-12' : 'h-16'
          }`}>
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className={`rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                isScrolled ? 'w-7 h-7' : 'w-8 h-8'
              }`}>
                <Globe className={`text-blue-400 transition-all duration-500 ${
                  isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                }`} />
              </div>
              <span className={`font-bold text-white tracking-wide transition-all duration-500 ${
                isScrolled ? 'text-base' : 'text-lg'
              }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                DONEX STUDIOS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center transition-all duration-500 ${
              isScrolled ? 'gap-0.5' : 'gap-1'
            }`}>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-white/80 hover:text-white font-medium transition-all duration-500 group overflow-hidden ${
                    isScrolled ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-sm'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-3/4 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Desktop Get Started Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollToSection('#services')}
                className={`group relative bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-2 ${
                  isScrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'
                }`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Get Started
                <ArrowRight className={`group-hover:translate-x-1 transition-all duration-500 ${
                  isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                }`} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`lg:hidden border-t transition-all duration-300 ${
              isScrolled ? 'border-white/20 bg-slate-900/90 backdrop-blur-xl rounded-b-2xl' : 'border-white/10 bg-slate-900/90 backdrop-blur-xl'
            }`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left text-white/80 hover:text-white hover:bg-white/5 px-3 py-2 font-medium transition-all duration-200 rounded-lg"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 pb-2">
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;