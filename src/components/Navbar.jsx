import React from 'react'
import styles from '../styles/Navbar.module.css'
import '../styles/globals.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#about"   className={styles.link}>ABOUT</a>
      <a href="#projects" className={styles.link}>PROJECTS</a>
      <a href="#contact"  className={styles.link}>CONTACT</a>
    </nav>
  )
}
