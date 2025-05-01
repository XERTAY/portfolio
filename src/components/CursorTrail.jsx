import React, { useEffect } from 'react';
import '../styles/cursorTrail.css';

const CursorTrail = () => {
  useEffect(() => {
    const trailLength = 12;
    const trail = [];

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

    const coords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;

      const target = e.target;
      const isOverPink = target.closest('.pink');
      const isOverCyan = target.closest('.cyan');

      trail.forEach(({ el }) => {
        el.classList.remove('pink', 'cyan');
        if (isOverPink) el.classList.add('pink');
        else if (isOverCyan) el.classList.add('cyan');
      });
    });

    function animate() {
      let x = coords.x;
      let y = coords.y;

      trail.forEach((dot, i) => {
        const next = trail[i + 1] || dot;
        dot.x += (x - dot.x) * 0.2;
        dot.y += (y - dot.y) * 0.2;
        dot.el.style.left = `${dot.x}px`;
        dot.el.style.top = `${dot.y}px`;
        dot.el.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
        dot.el.style.opacity = `${1 - i / trailLength}`;

        x = dot.x;
        y = dot.y;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      trail.forEach(dot => dot.el.remove());
    };
  }, []);

  return null;
};

export default CursorTrail;
