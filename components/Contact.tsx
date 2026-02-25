import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-content">
                <div className="contact-symbol pm-logo">
                    <img src="/images/branding/logo-light.svg" alt="EXODUS Symbol" className="contact-logo-img" />
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