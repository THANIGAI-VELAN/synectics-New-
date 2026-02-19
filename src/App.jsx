import { useState } from "react";
import InteractiveGrid from "./components/InteractiveGrid";
import LightRays from "./components/LightRays";
import HeroSection from "./pages/HeroSections";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/AboutSection";
import ContactSection from "./pages/contact";
import Footer from "./pages/footer";
import WhyJoinSection from "./pages/joinus";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-montserrat">

      <InteractiveGrid className="fixed inset-0 z-[1]" />

      <div className="fixed inset-0 z-[2]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#D4AF37"
          raysSpeed={1.2}
          lightSpread={1.5}
          rayLength={2.5}
          fadeDistance={1.2}
          followMouse={true}
          mouseInfluence={0.15}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <HeroSection />
        </section>
        <section id="venues">
          <AboutSection />
        </section>
        <section id="roadmap">
          <WhyJoinSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>

    </div>
  );
}
