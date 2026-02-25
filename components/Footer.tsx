import React from 'react';
import { Link } from 'react-router-dom';

const scrollTop = () => window.scrollTo(0, 0);

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo"><img src="/images/branding/exodus-name-light.svg" alt="EXODUS" className="exodus-name exodus-name-footer" /></div>
                    <p className="footer-desc">
                        Sacred blackwork body art. Custom designs that honor the body's
                        architecture. Based in Uluwatu, Bali. Working worldwide.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Portfolio</h4>
                    <ul className="footer-links">
                        <li><Link to="/portfolio" onClick={scrollTop}>Work</Link></li>
                        <li><Link to="/styles" onClick={scrollTop}>Styles</Link></li>
                        <li><Link to="/studio" onClick={scrollTop}>Studio</Link></li>
                        <li><Link to="/store" onClick={scrollTop}>Store</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Studio</h4>
                    <ul className="footer-links">
                        <li><Link to="/about" onClick={scrollTop}>Pierre Marcel</Link></li>
                        <li><Link to="/testimonials" onClick={scrollTop}>Client Stories</Link></li>
                        <li><Link to="/philosophy" onClick={scrollTop}>Philosophy</Link></li>
                        <li><Link to="/studio" onClick={scrollTop}>The Studio</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Book</h4>
                    <ul className="footer-links">
                        <li><Link to="/contact" onClick={scrollTop}>Consultation</Link></li>
                        <li><Link to="/private-sessions" onClick={scrollTop}>Private Sessions</Link></li>
                        <li><Link to="/contact" onClick={scrollTop}>Agenda</Link></li>
                    </ul>
                </div>

                <div className="footer-column" style={{ gridColumn: 'span 2' }}>
                    <h4>Agenda 2026</h4>
                    <ul className="footer-links" style={{ fontSize: '0.7rem', opacity: 0.6, lineHeight: '1.6' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>MAR - APR:</strong> Munich, Germany (Private Studio)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>APR - SEP:</strong> Uluwatu, Bali (Private Space)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>SEPTEMBER:</strong> Munich, Germany (Project Focus)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>OCTOBER:</strong> Uluwatu, Bali (Family & Private Space)</li>
                        <li style={{ marginBottom: '1rem' }}><strong>NOVEMBER:</strong> Australia (Under Planning)</li>
                        <li style={{ fontSize: '0.6rem', fontStyle: 'italic' }}>For appointments, please contact via Email. Agenda is almost fully booked.</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span className="footer-copy">© MMXXVI EXODUS · Pierre Marcel · Tribal Roots</span>
                <div className="footer-social">
                    <a href="https://www.instagram.com/pierremarcel.tattoos" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <Link to="/index" onClick={scrollTop} style={{ opacity: 0.1 }}>Index</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
