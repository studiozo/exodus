import React from 'react';

const Merch: React.FC = () => {
  return (
    <section className="contact-section">
        <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <span className="section-label" style={{justifyContent: 'center'}}>Store</span>
            <h2 className="section-title">Apparel | <span className="accent">Prints</span></h2>
        </div>

        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '400px',
            border: '1px solid rgba(226, 216, 204, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '4rem'
        }}>
            <h3 style={{
                fontFamily: 'Bodoni Moda', 
                fontSize: '3rem', 
                marginBottom: '2rem',
                opacity: 0.5
            }}>Coming Soon</h3>
            
            <p className="about-text" style={{textAlign: 'center', maxWidth: '400px'}}>
                A curated collection of limited edition prints and sacred geometry apparel designed by Pierre Marcel.
            </p>
            
            <div className="sidebar-list" style={{marginTop: '2rem', display: 'flex', gap: '2rem'}}>
                <span>Artwork</span>
                <span>•</span>
                <span>Clothing</span>
                <span>•</span>
                <span>Artifacts</span>
            </div>
        </div>
    </section>
  );
};

export default Merch;