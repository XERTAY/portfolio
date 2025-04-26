import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import '../styles/globals.css'
import NeonButton from './NeonButton'

export default function ProjectCard({ title }) {
  return (
    <div className={`${styles.projectCard} ${styles.fileCard}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.cardLine} />
      <NeonButton href="#">Voir plus</NeonButton>
    </div>
  )
}
