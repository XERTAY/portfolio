import React, { useEffect } from 'react';
import '../styles/cursorTrail.css';

const CursorTrail = () => {
  useEffect(() => {
    const trailLength = 12;
    const trail = [];

    // Créer le curseur personnalisé
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);

    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.dataset.index = i;
      document.body.appendChild(dot);
      trail.push({
        el: dot,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
    
    // Supprimer la première boule de la traînée car le curseur personnalisé la remplace
    if (trail.length > 0) {
      trail[0].el.remove();
      trail.shift();
    }

    const coords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;

      // Mettre à jour la position du curseur personnalisé directement avec les coordonnées de la souris
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;

      const target = e.target;
      const isOverPink = target.closest('.pink');
      const isOverCyan = target.closest('.cyan');
      const isOverClickable = target.closest('a, button, .social-btn, .nav-btn');

      // Gérer les effets du curseur
      if (isOverClickable) {
        customCursor.classList.add('hover');
      } else {
        customCursor.classList.remove('hover');
      }

      trail.forEach(({ el }) => {
        el.classList.remove('pink', 'cyan');
        if (isOverPink) el.classList.add('pink');
        else if (isOverCyan) el.classList.add('cyan');
      });
    });

    // Gérer les clics
    window.addEventListener('mousedown', () => {
      customCursor.classList.add('click');
    });

    window.addEventListener('mouseup', () => {
      customCursor.classList.remove('click');
    });

    let animationId;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function animate(currentTime) {
      // Contrôle de fréquence pour éviter la surcharge
      if (currentTime - lastTime >= frameInterval) {
        let x = coords.x;
        let y = coords.y;

        trail.forEach((dot, i) => {
          const next = trail[i + 1] || dot;
          dot.x += (x - dot.x) * 0.2;
          dot.y += (y - dot.y) * 0.2;
          
          // Utiliser left/top pour la position et transform pour le scale
          dot.el.style.left = `${dot.x}px`;
          dot.el.style.top = `${dot.y}px`;
          dot.el.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
          dot.el.style.opacity = `${1 - i / trailLength}`;

          x = dot.x;
          y = dot.y;
        });

        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      trail.forEach(dot => dot.el.remove());
      customCursor.remove();
    };
  }, []);

  return null;
};

export default CursorTrail;
