import React from 'react';

interface FooterProps {
    scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">EXØDUS</div>
                    <p className="footer-desc">
                        Sacred blackwork body art. Custom designs that honor the body's
                        architecture. Based in Bali, working worldwide.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Portfolio</h4>
                    <ul className="footer-links">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Work</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('inspo'); }}>Styles</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('merch'); }}>Store</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Studio</h4>
                    <ul className="footer-links">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Pierre Marcel</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Client Stories</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('philosophy'); }}>Philosophy</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('locations'); }}>Locations</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Book</h4>
                    <ul className="footer-links">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Consultation</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('villa'); }}>Private Sessions</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('agenda'); }}>Agenda</a></li>
                    </ul>
                </div>

                <div className="footer-column" style={{ gridColumn: 'span 2' }}>
                    <h4>Agenda 2026</h4>
                    <ul className="footer-links" style={{ fontSize: '0.7rem', opacity: 0.6, lineHeight: '1.6' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>MAR - APR:</strong> Munich, Germany (Private Studio)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>APR - SEP:</strong> Bali, Indonesia (Private Space)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>SEPTEMBER:</strong> Munich, Germany (Project Focus)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>OCTOBER:</strong> Bali, Indonesia (Family & Private Space)</li>
                        <li style={{ marginBottom: '1rem' }}><strong>NOVEMBER:</strong> Australia (Under Planning)</li>
                        <li style={{ fontSize: '0.6rem', fontStyle: 'italic' }}>For appointments, please contact via Email. Agenda is almost fully booked.</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span className="footer-copy">© MMXXV EXØDUS · Pierre Marcel · Tribal Roots</span>
                <div className="footer-social">
                    <a href="https://www.instagram.com/pierremarcel.tattoos" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('ai-context'); }} style={{ opacity: 0.1 }}>Index</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;