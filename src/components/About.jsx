import React from 'react'
import styles from '../styles/About.module.css'
import '../styles/globals.css'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="ABOUT">
      <div className={styles.sectionPlate}>
        <p className={styles.content}>
          Je suis un développeur d’applications et de logiciels toutes plateformes passionné,
          avec une expertise en création d’interfaces utilisateur modernes, développement web
          et mobile, ainsi que conception d’API robustes.
        </p>
      </div>
    </Section>
  )
}
