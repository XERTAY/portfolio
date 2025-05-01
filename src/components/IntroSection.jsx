import React, { useEffect, useState } from "react";
import "../styles/introSection.css";

const IntroSection = () => {
  const firstName = "Vincent";
  const lastName = "TEISSIER";

  const [showHint, setShowHint] = useState(false); // par défaut false
  const [visibleHint, setVisibleHint] = useState(false);
  const [finalFadeOut, setFinalFadeOut] = useState(false);

  useEffect(() => {
    // Ne montre le message que si écran large (non mobile)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    setShowHint(true);
    const startDelay = 400;
    let flashes = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleHint((prev) => !prev);
        flashes += 0.5;
        if (flashes >= 5) {
          clearInterval(interval);
          setFinalFadeOut(true);
          setTimeout(() => setShowHint(false), 1000);
        }
      }, 600);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  const renderSpans = (text, className) =>
    [...text].map((char, index) => (
      <span key={index} className={`letter ${className}`}>
        {char}
      </span>
    ));

  return (
    <section className="intro-section">
      {showHint && (
        <div
          className={`fullscreen-hint ${visibleHint ? "visible" : ""} ${
            finalFadeOut ? "fade-out" : ""
          }`}
        >
          <img src="/F11_logo.png" alt="F11 Logo" className="hint-icon" />
          <p className="hint-text">Pour une meilleure expérience</p>
        </div>
      )}

      <div className="intro-background-glow" />
      <div className="intro-glow-extra" />
      <div className="intro-glow-extra" />
      <div className="intro-glow-extra" />

      <p className="intro-subtitle">Hi, I am</p>
      <h1 className="glitch-text glitch-pop" data-text={firstName}>
        {renderSpans(firstName, "cyan")}
      </h1>
      <h1 className="glitch-text glitch-pop" data-text={lastName}>
        {renderSpans(lastName, "pink")}
      </h1>

      <p className="intro-description">
        Développeur logiciel et créateur d’expériences connectées
      </p>

      <div className="intro-socials delayed-fade">
        <a href="https://github.com" className="social-btn github" />
        <a href="https://linkedin.com" className="social-btn linkedin" />
        <a href="mailto:your@email.com" className="social-btn mail" />
      </div>

      <div className="intro-nav-buttons delayed-fade">
        <div className="nav-btn-wrapper">
          <span className="nav-arrow">←</span>
          <a href="#projects" className="nav-btn">Projects</a>
        </div>
        <div className="nav-btn-wrapper">
          <a href="#contact" className="nav-btn">Contact</a>
          <span className="nav-arrow">→</span>
        </div>
      </div>

      <div className="section-transition-glow" />
    </section>
  );
};

export default IntroSection;
