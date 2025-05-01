import React, { useState } from "react";
import "../styles/projectsSection.css";
import GlitchImage from "./GlitchImage"; // 🆕 N'oublie pas de créer ce composant

const projects = [
  {
    id: 1,
    title: "MTI Electronics",
    stack: "Next.js • Payload CMS • Tailwind CSS",
    image: "/assets/mti.png",
  },
  {
    id: 2,
    title: "Flow Free",
    stack: "Java • Android",
    image: "./../public/FlowFree.png", // corrige le chemin ici
  },
  {
    id: 3,
    title: "Resume Roaster",
    stack: "GPT-4 • Next.js • PostgreSQL",
    image: "/assets/resume.png",
  },
  {
    id: 4,
    title: "Real Estate",
    stack: "React.js • Redux • Tailwind CSS",
    image: "/assets/realestate.png",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="projects-section" id="projects">
        <div className="projects-glow-1" />
        <div className="projects-glow-2" />
        <div className="projects-glow-3" />

      <h2 className="section-title">Projets</h2>
      <div className="projects-container">
        <ul className="project-list">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className={`project-item ${active === i ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="project-index">0{i + 1}.</span>
              <span className="project-title">{project.title}</span>
              <span className="project-stack">{project.stack}</span>
            </li>
          ))}
        </ul>

        <div className={`project-preview ${active !== null ? "active" : ""}`}>
          <div className="preview-image-wrapper">
            {active !== null && (
              <GlitchImage
                src={projects[active].image}
                alt={projects[active].title}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
