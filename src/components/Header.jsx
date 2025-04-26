// src/components/Header.jsx
import React from 'react'
import NeonTitle from './NeonTitle'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.headerPlate}>
      <NeonTitle />
      <hr className={styles.headerSeparator} />
      <p className={styles.subtitle}>
        Développeur logiciel et créateur d’expériences connectées
      </p>

      <div className={styles.scrollHint}>
        <span className={styles.arrow}>&#8595;</span>
        <span className={styles.arrow}>&#8595;</span>
      </div>
    </div>
  )
}
