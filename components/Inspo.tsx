import React from 'react';

const Inspo: React.FC = () => {
  return (
    <section className="styles-section" id="styles">
        <div className="section-header" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem'}}>
            <span className="section-label" style={{justifyContent: 'center'}}>
                <span style={{order: 2}}>Specializations</span>
            </span>
            <h2 className="section-title">Styles & <span className="accent">Techniques</span></h2>
        </div>
        
        <div className="styles-grid">
            <div className="style-card">
                <div className="style-icon">
                    <svg viewBox="0 0 60 60">
                        <polygon className="style-icon-path" points="30,5 55,20 55,45 30,60 5,45 5,20"/>
                        <circle className="style-icon-path" cx="30" cy="32" r="10"/>
                    </svg>
                </div>
                <h3 className="style-title">Sacred Geometry</h3>
                <p className="style-desc">Ancient patterns and mathematical precision. Metatron's cube, flower of life, platonic solids.</p>
            </div>
            
            <div className="style-card">
                <div className="style-icon">
                    <svg viewBox="0 0 60 60">
                        <circle className="style-icon-path" cx="30" cy="30" r="25"/>
                        <circle className="style-icon-path" cx="30" cy="30" r="15"/>
                        <circle className="style-icon-path" cx="30" cy="30" r="5"/>
                    </svg>
                </div>
                <h3 className="style-title">Ornamental</h3>
                <p className="style-desc">Intricate mandala work and decorative patterns. Flowing lines that honor the body's curves.</p>
            </div>
            
            <div className="style-card">
                <div className="style-icon">
                    <svg viewBox="0 0 60 60">
                        <rect className="style-icon-path" x="10" y="10" width="40" height="40" fill="currentColor" stroke="none" opacity="0.3"/>
                        <line className="style-icon-path" x1="30" y1="5" x2="30" y2="55"/>
                    </svg>
                </div>
                <h3 className="style-title">Blackout</h3>
                <p className="style-desc">Bold, solid black coverage. Dramatic negative space. Cover-up transformations.</p>
            </div>
            
            <div className="style-card">
                <div className="style-icon">
                    <svg viewBox="0 0 60 60">
                        <circle className="style-icon-path" cx="15" cy="15" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="30" cy="15" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="45" cy="15" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="15" cy="30" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="30" cy="30" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="45" cy="30" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="15" cy="45" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="30" cy="45" r="3" fill="currentColor"/>
                        <circle className="style-icon-path" cx="45" cy="45" r="3" fill="currentColor"/>
                    </svg>
                </div>
                <h3 className="style-title">Dotwork</h3>
                <p className="style-desc">Stippled shading and geometric precision. Meditative technique, timeless results.</p>
            </div>
        </div>
    </section>
  );
};

export default Inspo;