import React from 'react';

const Villa: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-grid">
                <div className="about-visual" style={{ background: '#0a0a0a' }}>
                    {/* Villa Video Snippet */}
                    <video
                        src="/videos/villa/villa_snippet.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                    />
                    <div className="about-symbol">
                        <svg viewBox="0 0 100 100">
                            <circle className="about-symbol-path" cx="50" cy="50" r="45" />
                            <path className="about-symbol-path" d="M50,5 L50,95 M5,50 L95,50" />
                        </svg>
                    </div>
                </div>

                <div className="about-content">
                    <div className="section-header">
                        <span className="section-label">Immersion</span>
                        <h2 className="section-title">Private <span className="accent">Sessions</span></h2>
                    </div>

                    <p className="about-quote" style={{ fontSize: '1.5rem' }}>
                        We bring the ritual to you. Experience tattooing in the privacy of your own sanctuary.
                    </p>

                    <p className="about-text">
                        For clients seeking absolute privacy and comfort, Pierre is available for mobile sessions at your private villa or residence. This option allows for a deeper, more personal integration of the work in your own environment.
                    </p>

                    <div className="sidebar-list" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                        <p className="sidebar-label">Requirements</p>
                        <ul className="sidebar-list">
                            <li>Private, sterile environment</li>
                            <li>Good lighting conditions</li>
                            <li>Advance booking required</li>
                        </ul>
                    </div>

                    <a href="mailto:info@exodus.ink?subject=Private%20Session%20Inquiry" className="btn">
                        Inquire for Details
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Villa;