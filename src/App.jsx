import React from "react";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import CursorTrail from "./components/CursorTrail";
import ScrollProgressBar from "./components/ScrollProgressBar";
import SmoothSnapScrollWrapper from "./components/SmoothSnapScrollWrapper";
import { ScrollProvider } from "./context/ScrollContext"; // 🆕

function App() {
  return (
    <ScrollProvider>
      {(scrollRef) => (
        <>
          <ScrollProgressBar />
          <CursorTrail />
          <SmoothSnapScrollWrapper scrollRef={scrollRef}>
            <section id="intro">
              <IntroSection />
            </section>
            <section id="about">
              <AboutSection />
            </section>
            <section id="projects">
              <ProjectsSection />
            </section>
            <section id="contact">
              <ContactSection />
            </section>
          </SmoothSnapScrollWrapper>
        </>
      )}
    </ScrollProvider>
  );
}

export default App;
