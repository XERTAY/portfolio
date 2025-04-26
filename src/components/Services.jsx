import React from 'react'
import styles from '../styles/Services.module.css'
import '../styles/globals.css'
import Section from './Section'

export default function Services() {
  return (
    <Section id="services" title="SERVICES">
      <div className={styles.servicesContainer}>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>Développement mobile</li>
          <li className={styles.serviceItem}>UI Design</li>
        </ul>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>Développement backend</li>
          <li className={styles.serviceItem}>API sécurisées</li>
        </ul>
      </div>
    </Section>
  )
}
