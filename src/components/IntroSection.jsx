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
          <img src="/portfolio/F11_logo.png" alt="F11 Logo" className="hint-icon" />
          <p className="hint-text">Pour une meilleure expérience</p>
        </div>
      )}

      <div className="intro-background-glow" />
      <div className="intro-glow-extra" />
      <div className="intro-glow-extra" />
      <div className="intro-glow-extra" />
      
      {/* Image de profil */}
      <div className="profile-image-container">
        <img src="/portfolio/IMG_5118-12.jpg" alt="Vincent Teissier" className="profile-image" onError={(e) => {
          console.log('Image non trouvée, vérifiez le chemin');
          e.target.style.display = 'none';
        }} />
        <div className="profile-image-overlay" />
      </div>

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
        <a href="https://github.com/XERTAY" className="social-btn github" />
        <a href="https://www.linkedin.com/in/vincentteissier/" className="social-btn linkedin" />
        <a href="https://play.google.com/apps/test/com.xertay.room/3" className="social-btn playstore" />
      </div>


      <div className="section-transition-glow" />
    </section>
  );
};

export default IntroSection;
