// src/components/NeonButton.jsx
import React from 'react'

export default function NeonButton({ href, children }) {
  return (
    <a href={href} className="btn-neon" data-text={children}>
      <span className="glitch-text" data-text={children}>
        {children}
      </span>
    </a>
  )
}
