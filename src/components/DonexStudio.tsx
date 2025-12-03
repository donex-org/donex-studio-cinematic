import Navbar from "./Navbar";
import Hero from "./Hero";
import Statistics from "./Statistics";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const DonexStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default DonexStudio;
