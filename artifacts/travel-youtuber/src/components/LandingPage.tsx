import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Destinations from "./sections/Destinations";
import Gallery from "./sections/Gallery";
import AskZoe from "./sections/AskZoe";
import Footer from "./sections/Footer";

export default function LandingPage() {
  return (
    <div style={{ background: "var(--gg-bg-primary)", color: "var(--gg-text-primary)" }} className="min-h-screen overflow-x-hidden">
      <Hero />
      <AskZoe />
      <Services />
      <About />
      <Destinations />
      <Gallery />
      <Footer />
    </div>
  );
}
