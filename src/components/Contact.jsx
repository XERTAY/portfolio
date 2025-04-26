import React from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import styles from '../styles/Contact.module.css'
import '../styles/globals.css'

export default function Contact() {
  return (
    <footer className={styles.footer} id="contact">
      <h2 className={styles.title}>CONTACT US</h2>
      <p className={styles.subtitle}>
        N’hésite pas à m’écrire pour toute question, collaboration ou simplement pour
        échanger autour des technologies web et mobiles !
      </p>
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="Ton adresse mail"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Envoyer
        </button>
      </form>
      <div className={styles.icons}>
        <a href="mailto:you@example.com" className={styles.iconLink}>
          <FiMail size={24}/>
        </a>
        <a href="https://linkedin.com/in/you" className={styles.iconLink}>
          <FiLinkedin size={24}/>
        </a>
        <a href="https://github.com/you" className={styles.iconLink}>
          <FiGithub size={24}/>
        </a>
      </div>
      <p className={styles.legal}>
        © {new Date().getFullYear()} Vincent Teissier — All rights reserved
      </p>
    </footer>
  )
}
