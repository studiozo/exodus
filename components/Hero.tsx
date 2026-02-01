import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
        <div className="hero-symbol">
            <svg viewBox="0 0 200 200">
                <polygon className="symbol-stroke" points="100,10 180,50 180,130 100,170 20,130 20,50"/>
                <polygon className="symbol-stroke" points="100,35 155,60 155,120 100,145 45,120 45,60"/>
                <polygon className="symbol-stroke" points="100,55 130,70 130,110 100,125 70,110 70,70"/>
                <line className="symbol-stroke" x1="100" y1="10" x2="100" y2="170"/>
                <line className="symbol-stroke" x1="20" y1="90" x2="180" y2="90"/>
                <polygon className="symbol-stroke" points="100,70 115,90 100,110 85,90"/>
                <circle className="symbol-dot" cx="100" cy="90" r="5"/>
            </svg>
        </div>
        
        <h1 className="hero-title">
            <span className="line"><span>EXØDUS</span></span>
        </h1>
        
        <p className="hero-subtitle">Bali Blackwork Body Art</p>
        <p className="hero-tagline">Sacred geometry meets skin. Permanent transformation.</p>
        
        <div className="scroll-indicator">
            <span className="scroll-text">Scroll</span>
            <div className="scroll-line"></div>
        </div>
    </section>
  );
};

export default Hero;