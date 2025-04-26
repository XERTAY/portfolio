// src/components/Section.jsx
import React, { useEffect } from 'react'
import styles from '../styles/Section.module.css'
import '../styles/globals.css'

export default function Section({ id, title, children }) {
  useEffect(() => {
    // initialise un --random aléatoire sur chaque titre au montage
    const el = document.getElementById(id)
    const header = el.querySelector('.glitch-text')
    if (header) {
      header.style.setProperty('--random', Math.random() * 100)
    }
  }, [id])

  return (
    <section id={id} className={styles.sectionContainer}>
      <h2
        className={`${styles.sectionTitle} glitch-text`}
        data-text={title}
      >
        {title}
      </h2>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  )
}
