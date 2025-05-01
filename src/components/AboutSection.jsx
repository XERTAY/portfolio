import React from "react";
import { motion } from "framer-motion";
import "../styles/aboutSection.css";

const timeline = [
{
    date: "Aujourd'hui- ???",
    title: "Admis en Licence Miage",
    subtitle: "Evry Paris Saclay, Evry",
    details: "Spécialisation en développement web et mobile, projets en équipe, gestion de projet agile.",
    },
  {
    date: "2023 - Aujourd'hui",
    title: "BUT Informatique",
    subtitle: "Université Paris Est Créteil, Fontainebleau",
    details: "Spécialisation en développement web et mobile, projets en équipe, gestion de projet agile.",
  },
  {
    date: "2020 - 2023",
    title: "Lycée Options NSI, Mathématiques et Physique-Chimie",
    subtitle: "Lycée la Mare Carée, Moissy-Cramayel",
    details: "Formation Générale et informatique, mathématiques et physique-chimie, introduction à l'informatique.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">À propos</h2>
      <p className="about-description">Voici un aperçu de mon parcours universitaire, de mes formations et de mes domaines de spécialisation.</p>
      <div className="timeline">
        {timeline.map((step, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>{step.date}</h3>
              <h4>{step.title} — <span>{step.subtitle}</span></h4>
              <p>{step.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="about-glow-1" />
        <div className="about-glow-2" />
        <div className="about-glow-3" />
    </section>
  );
};

export default AboutSection;
