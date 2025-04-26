import React, { useState, useEffect } from 'react'
import styles from '../styles/Layout.module.css'
import '../styles/globals.css'

export default function Layout({ children }) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `center ${-offsetY * 0.3}px`,
      }}
    >
      {children}
    </div>
  )
}
