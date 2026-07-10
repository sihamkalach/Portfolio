import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionIds = ["home", "about", "skills", "experience", "projects", "certifications", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar active={activeSection} onNav={handleNav} />
      <main>
        <Hero onPrimary={() => handleNav("projects")} />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
