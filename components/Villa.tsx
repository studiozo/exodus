import React from 'react';

const Villa: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-grid">
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