import React from "react";
import "../styles/contactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow-1" />
      <div className="contact-glow-2" />
      <div className="contact-glow-3" />

      <h2 className="section-title">Me Contacter</h2>
      <p className="contact-description">
        Une idée de projet ? Un poste à pourvoir ? N'hésitez pas à m'écrire !
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-socials">
        <a href="https://github.com/XERTAY" className="social-btn github" />
        <a href="https://www.linkedin.com/in/vincentteissier/" className="social-btn linkedin" />
        <a href="https://play.google.com/apps/test/com.xertay.room/3" className="social-btn playstore" />
      </div>
    </section>
  );
};

export default ContactSection;