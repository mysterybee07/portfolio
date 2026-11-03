import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import RequestFlow from "./components/RequestFlow.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Fade sections in as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 btn-primary">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <section aria-label="How a request flows" className="pt-8">
          <div className="container-x">
            <RequestFlow />
          </div>
        </section>
        <About />
        <Experience />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
