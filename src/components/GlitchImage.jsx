import React from 'react';
import './../styles/GlitchImage.css';

const GlitchImage = ({ src, alt }) => {
  return (
    <div className="glitch-wrapper">
      <div className="glitch-img" style={{ backgroundImage: `url(${src})` }} />
      <div className="glitch-img glitch-layer1" style={{ backgroundImage: `url(${src})` }} />
      <div className="glitch-img glitch-layer2" style={{ backgroundImage: `url(${src})` }} />
    </div>
  );
};

export default GlitchImage;
