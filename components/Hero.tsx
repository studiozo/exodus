import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
        <div className="hero-symbol">
            <img src="/images/branding/logo-light.svg" alt="EXODUS Symbol" className="hero-logo-img" />
        </div>
        
        <h1 className="hero-title">
            <span className="line"><span><img src="/images/branding/exodus-name-light.svg" alt="EXODUS" className="exodus-name exodus-name-hero" /></span></span>
        </h1>

        <p className="hero-subtitle">Tattoo Body Art</p>
        <p className="hero-tagline">Sacred geometry meets skin. Permanent transformation.</p>
    </section>
  );
};

export default Hero;