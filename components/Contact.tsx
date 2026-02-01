import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-content">
                <div className="contact-symbol">
                    <svg viewBox="0 0 150 150">
                        <circle className="contact-ring" cx="75" cy="75" r="70" />
                        <polygon className="contact-ring" points="75,15 130,45 130,105 75,135 20,105 20,45" />
                        <circle className="contact-ring" cx="75" cy="75" r="35" />
                        <circle className="contact-ring" cx="75" cy="75" r="6" />
                    </svg>
                </div>

                <h2 className="contact-title">Begin Your<br />Transformation</h2>
                <p className="contact-sub">
                    Ready to carry sacred marks? Currently accepting consultations for 2026.
                </p>
                <p className="contact-note">Limited availability · Custom work only</p>

                <a href="mailto:pierre@exodusbodyart.com?subject=Sacred%20Inquiry" className="btn">
                    Request Consultation
                </a>
            </div>
        </section>
    );
};

export default Contact;