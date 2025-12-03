import Navbar from "./Navbar";
import Hero from "./Hero";
import Statistics from "./Statistics";
import About from "./About";
import Services from "./Services";
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
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default DonexStudio;
