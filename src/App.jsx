import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticleCanvas from "./components/ParticleCanvas";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [navActive, setNavActive] = useState("home");
  const [loaded, setLoaded] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavActive(id);
  };

  return (
    <>
      <CustomCursor />

      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />} {/* ← add */}

      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease", pointerEvents: loaded ? "auto" : "none" }}> {/* ← wrap existing content */}
        <ParticleCanvas />
        <div className="scanline-overlay" />
        <Navbar navActive={navActive} scrollTo={scrollTo} />
        <div style={{ paddingTop: 60 }}>
          <Hero scrollTo={scrollTo} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
