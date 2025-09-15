import React, { useState, useEffect } from "react";
import "../styles/projectsSection.css";
import GlitchImage from "./GlitchImage"; // 🆕 N'oublie pas de créer ce composant
import { useScrollContainer } from "../context/ScrollContext";

const projects = [
  {
    id: 1,
    title: "Room",
    stack: "React Native • Expo • SocketIO.js • Android • Apple",
    image: "/FlowFree.png",
    description: "Application mobile de gestion de chambres avec communication temps réel",
    details: "Room est une application mobile révolutionnaire développée avec React Native et Expo qui transforme la gestion hôtelière. L'application utilise SocketIO.js pour une communication instantanée entre le personnel, permettant une synchronisation en temps réel des données de toutes les chambres. Disponible sur Android et iOS, elle offre une interface intuitive et moderne pour la gestion des réservations, l'état des chambres, et la coordination du personnel de ménage. L'application inclut des fonctionnalités avancées comme la géolocalisation, les notifications push, et un système de reporting en temps réel.",
    features: [
      "Communication temps réel entre équipes",
      "Interface intuitive et moderne", 
      "Synchronisation multi-plateforme",
      "Gestion complète des réservations",
      "Système de notifications push",
      "Géolocalisation du personnel",
      "Reporting et analytics en temps réel",
      "Mode hors-ligne avec synchronisation"
    ],
    technologies: ["React Native", "Expo", "SocketIO.js", "JavaScript", "Android", "iOS", "Firebase", "Maps API"],
    detailImages: [
      "/FlowFree.png",
      "/pipes1.png", 
      "/pipes2.png"
    ]
  },
  {
    id: 2,
    title: "Delice",
    stack: "React Native • Expo • Express.js • Node.js • MongoDB",
    image: "/FlowFree.png",
    description: "Application de livraison de repas avec backend Express.js",
    details: "Delice est une plateforme complète de livraison de repas qui connecte les clients, restaurants et livreurs. Développée avec React Native et Expo pour le frontend mobile, et Express.js pour le backend robuste, l'application offre une expérience utilisateur fluide et moderne. Les clients peuvent parcourir les menus, passer des commandes, suivre leurs livraisons en temps réel, et évaluer leurs expériences. Les restaurateurs bénéficient d'un dashboard complet pour gérer leurs commandes, menus, et statistiques. L'application inclut un système de paiement sécurisé, une géolocalisation précise, et des algorithmes d'optimisation des trajets.",
    features: [
      "Commande en ligne intuitive",
      "Suivi de livraison en temps réel", 
      "Gestion complète des restaurants",
      "Système de paiement sécurisé",
      "Géolocalisation et navigation",
      "Évaluation et commentaires",
      "Dashboard analytics pour restaurateurs",
      "Optimisation des trajets de livraison"
    ],
    technologies: ["React Native", "Expo", "Express.js", "Node.js", "MongoDB", "Stripe API", "Maps API", "SocketIO.js"],
    detailImages: [
      "/FlowFree.png",
      "/background.png",
      "/background2.png"
    ]
  },
  {
    id: 3,
    title: "Site Kinésithérapeute",
    stack: "React.js • Tailwind CSS • Node.js • MongoDB",
    image: "/IMG_5118-12.jpg",
    description: "Site web professionnel pour cabinet de kinésithérapie",
    details: "Site web professionnel et moderne développé avec React.js pour un cabinet de kinésithérapie renommé. Le site présente de manière élégante les services offerts, permet la prise de rendez-vous en ligne avec un système de calendrier intelligent, et offre une interface responsive et accessible pour tous les patients. Le site inclut un système de gestion des horaires, des informations détaillées sur les traitements, un blog informatif, et une section témoignages. L'interface est optimisée pour la conversion avec des formulaires intuitifs et un design qui inspire confiance et professionnalisme.",
    features: [
      "Prise de rendez-vous en ligne",
      "Présentation détaillée des services", 
      "Interface responsive et accessible",
      "Gestion intelligente des horaires",
      "Blog informatif et actualités",
      "Section témoignages patients",
      "Formulaires de contact optimisés",
      "Système de notifications par email"
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "EmailJS", "Calendar API", "Responsive Design"],
    detailImages: [
      "/IMG_5118-12.jpg",
      "/preview.png",
      "/F11_logo.png"
    ]
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const [isAutoLooping, setIsAutoLooping] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrollClosing, setIsScrollClosing] = useState(false);
  const { activeSection } = useScrollContainer();

  // Boucle automatique toutes les 4 secondes
  useEffect(() => {
    if (!isAutoLooping) return;

    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoLooping]);

  // Fermer automatiquement les détails si on scroll en dehors de la section projets
  useEffect(() => {
    if (showDetails && activeSection !== "projects") {
      setIsScrollClosing(true);
      
      // Attendre la fin de l'animation avant de masquer complètement
      setTimeout(() => {
        setShowDetails(false);
        setSelectedProject(null);
        setIsAutoLooping(true);
        setIsScrollClosing(false);
      }, 50); // Animation rapide pour le scroll
    }
  }, [activeSection, showDetails]);

  // Gestion des interactions utilisateur
  const handleProjectHover = (index) => {
    setIsAutoLooping(false);
    setActive(index);
  };

  const handleProjectLeave = () => {
    setIsAutoLooping(true);
  };

  // Gestion du clic sur un projet
  const handleProjectClick = (index) => {
    setIsAutoLooping(false);
    setActive(index);
    setSelectedProject(projects[index]);
    setShowDetails(true);
  };

  // Fermer les détails avec animation (clic sur bouton retour)
  const handleCloseDetails = () => {
    setIsClosing(true);
    
    // Attendre la fin de l'animation avant de masquer complètement
    setTimeout(() => {
      setShowDetails(false);
      setSelectedProject(null);
      setIsAutoLooping(true);
      setIsClosing(false);
    }, 800); // Animation lente pour le clic
  };

  return (
    <section className="projects-section" id="projects">
        <div className="projects-glow-1" />
        <div className="projects-glow-2" />
        <div className="projects-glow-3" />

      <h2 className="section-title">Projets</h2>
      <p className="section-subtitle">Cliquer sur l'image ou la section de projet pour en savoir plus</p>
      
      <div className={`projects-slider ${showDetails ? "slide-left" : ""} ${isClosing ? "slide-right" : ""} ${isScrollClosing ? "slide-right-fast" : ""}`}>
        {/* Vue principale des projets */}
        <div className="projects-main-view">
          <div className="projects-container">
            <ul className="project-list">
              {projects.map((project, i) => (
                <li
                  key={project.id}
                  className={`project-item ${active === i ? "active" : ""}`}
                  onMouseEnter={() => handleProjectHover(i)}
                  onMouseLeave={handleProjectLeave}
                  onClick={() => handleProjectClick(i)}
                >
                  <span className="project-index">0{i + 1}.</span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-stack">{project.stack}</span>
                </li>
              ))}
            </ul>

            <div className={`project-preview ${active !== null ? "active" : ""}`}>
              <div className="preview-content">
                {active !== null && (
                  <div 
                    className="preview-image-wrapper"
                    onClick={() => handleProjectClick(active)}
                  >
                    <GlitchImage
                      src={projects[active].image}
                      alt={projects[active].title}
                      className="hologram-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Vue des détails du projet */}
        <div className={`projects-details-view ${showDetails ? "visible" : ""} ${isClosing ? "closing" : ""} ${isScrollClosing ? "closing-fast" : ""}`}>
            <button className="back-button" onClick={handleCloseDetails}>
              <span className="back-arrow">←</span>
              <span className="back-text">Retour aux projets</span>
            </button>
            
            <div className="project-details-content">
              <div className="project-details-header">
                <h3 className="project-details-title">{selectedProject?.title || "Test"}</h3>
                <p className="project-details-description">{selectedProject?.description || "Description de test"}</p>
              </div>

              <div className="project-details-body">
                <div className="project-details-section">
                  <h4>Description détaillée</h4>
                  <p>{selectedProject?.details || "Détails de test pour le projet"}</p>
                </div>

                <div className="project-details-section">
                  <h4>Fonctionnalités</h4>
                  <ul className="features-list">
                    {(selectedProject?.features || ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"]).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-details-section">
                  <h4>Technologies utilisées</h4>
                  <div className="technologies-tags">
                    {(selectedProject?.technologies || ["React", "JavaScript", "CSS"]).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-details-section">
                  <h4>Images du projet</h4>
                  <div className="project-images-grid">
                    {(selectedProject?.detailImages || ["/FlowFree.png", "/pipes1.png", "/pipes2.png"]).map((image, index) => (
                      <div key={index} className="project-detail-image">
                        <img src={image} alt={`${selectedProject?.title || "Projet"} - Image ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
