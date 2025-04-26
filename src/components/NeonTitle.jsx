import React from 'react'
import styles from '../styles/NeonTitle.module.css'
import '../styles/globals.css'

export default function NeonTitle() {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.line} ${styles.cyan}`}>VINCENT</span>
      <span className={`${styles.line} ${styles.pink}`}>TEISSIER</span>
    </div>
  )
}
