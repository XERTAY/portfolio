import React, { useState, useEffect } from "react";
import { useScrollContainer } from "../context/ScrollContext";
import "../styles/navigation.css";

const Navigation = () => {
  const { activeSection, updateActiveSection } = useScrollContainer();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const sections = [
    { id: "intro", label: "Accueil" },
    { id: "about", label: "Mon Parcours" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    // Délai pour laisser l'animation F11 se terminer complètement
    const isMobile = window.innerWidth <= 768;
    const delay = isMobile ? 0 : 7500; // 7 secondes pour laisser l'animation F11 se terminer (4.4s + marge)
    
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, delay);

    const handleScroll = () => {
      if (!isLoaded) return;
      
      const scrollPosition = window.scrollY;
      // Masquer/afficher la navigation selon le scroll
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Mettre à jour immédiatement la section active via le contexte
      updateActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navigation ${isVisible ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <ul className="nav-menu">
          {sections.map((section) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === section.id ? "active" : ""}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
