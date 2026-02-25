import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Contact from './Contact';

interface HomeProps {
    openLightbox: (src: string) => void;
}

const Home: React.FC<HomeProps> = ({ openLightbox }) => {
    const galleryImages = [
        '/images/home_gallery/1.JPG',
        '/images/pins/pinterest-sleeve-ornamental-eye-mandala-forearm.jpg',
        '/images/pins/pinterest-sleeve-japanese-peony-cloud-front.jpg',
        '/images/home_gallery/03_full-sleeve-ornamental-sacred-geometry.webp',
        '/images/home_gallery/04_full-back-tribal-geometric-mandala.webp',
        '/images/home_gallery/05_full-sleeve-nordic-rune-geometric-bw.webp',
        '/images/home_gallery/06_full-leg-tribal-flowing-lotus.webp',
        '/images/home_gallery/07_head-neck-tribal-flowing-blackwork.webp',
        '/images/home_gallery/08_peony-closeup-japanese-blackwork.webp',
        '/images/home_gallery/09_tribal-sleeve-concept-illustration.webp',
    ];

    const galleryAlt = [
        'Sacred blackwork tattoo by Pierre Marcel at EXODUS Bali',
        'Ornamental eye mandala forearm sleeve tattoo — sacred geometry blackwork',
        'Japanese peony and cloud full sleeve tattoo — blackwork by EXODUS Bali',
        'Full sleeve ornamental sacred geometry tattoo by Pierre Marcel',
        'Full back tribal geometric mandala blackwork tattoo Bali',
        'Full sleeve Nordic rune geometric blackwork tattoo by EXODUS',
        'Full leg tribal flowing lotus blackwork tattoo Bali',
        'Head and neck tribal flowing blackwork tattoo by Pierre Marcel',
        'Japanese peony blackwork tattoo closeup by EXODUS Bali',
        'Tribal sleeve concept illustration blackwork design EXODUS',
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Get 3 consecutive images for the main display, wrapping around if needed
    const getMainImages = () => {
        const images = [];
        for (let i = 0; i < 3; i++) {
            images.push(galleryImages[(activeIndex + i) % galleryImages.length]);
        }
        return images;
    };

    return (
        <>
            <Hero />

            {/* Artist & Founder */}
            <section className="home-teaser">
                <div className="teaser-grid">
                    <div className="teaser-image" onClick={() => openLightbox("/images/pierre_artist_headshot.webp")} style={{ cursor: 'zoom-in' }}>
                        <div style={{ width: '100%', height: '100%', background: 'var(--smoke)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--deep)' }}>
                            <img src="/images/pierre_artist_headshot.webp" alt="Pierre Marcel — blackwork tattoo artist at EXODUS Bali" onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.innerText = 'PM';
                                    e.currentTarget.parentElement.style.fontSize = '8rem';
                                    e.currentTarget.parentElement.style.fontFamily = 'Bodoni Moda';
                                }
                            }} />
                        </div>
                    </div>
                    <div className="teaser-content">
                        <span className="section-label">Artist & Founder</span>
                        <h2 className="section-title">Pierre Marcel</h2>

                        <p className="about-quote">
                            "A man without tattoos is invisible to the Gods"
                        </p>

                        <p className="about-text">
                            From Caracas to Bali, a journey defined by ink and sacred traditions.
                            Engineering precision meets ancient artistry in every blackwork piece.
                        </p>
                        <Link to="/about" className="btn" onClick={() => window.scrollTo(0, 0)}>Read Biography</Link>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="home-teaser alt-bg">
                <div className="centered-teaser">
                    <span className="section-label">Philosophy</span>
                    <h2 className="section-title">The Body<br/>as <span className="accent">Temple</span></h2>

                    <p className="about-quote">
                        Every line carries <strong>intention</strong>. Every mark is a conversation
                        between ancient geometry and living flesh. This is not decoration—this is <strong>ritual</strong>.
                    </p>

                    <p className="about-text">
                        EXODUS draws from patterns that have marked human skin for millennia—sacred geometry,
                        ancestral symbols, the visual language of transformation. What we practice today
                        is the continuation of the oldest art form on earth.
                    </p>

                    <div className="ancestral-grid-3">
                        <div className="ancestral-item" onClick={() => openLightbox('/images/ancestral/01_kalinga-elder_torso-geometric-linework.png')}>
                            <img src="/images/ancestral/01_kalinga-elder_torso-geometric-linework.png" alt="Kalinga elder with geometric torso tattoos — ancestral blackwork tradition" loading="lazy" />
                        </div>
                        <div className="ancestral-item" onClick={() => openLightbox('/images/ancestral/12_chin-tribe_elder-woman-facial-tattoo-closeup-bw.jpg')}>
                            <img src="/images/ancestral/12_chin-tribe_elder-woman-facial-tattoo-closeup-bw.jpg" alt="Chin tribe elder woman with traditional facial tattoos — sacred body art" loading="lazy" />
                        </div>
                        <div className="ancestral-item" onClick={() => openLightbox('/images/ancestral/15_traditional-hand-tap_process-closeup-bw.jpg')}>
                            <img src="/images/ancestral/15_traditional-hand-tap_process-closeup-bw.jpg" alt="Traditional hand-tap tattoo process — ancient technique" loading="lazy" />
                        </div>
                    </div>
                    <p className="ancestral-caption">Kalinga elder, Philippines · Chin tribe, Myanmar · Hand-tap technique — the oldest art form</p>

                    <Link to="/philosophy" className="btn" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
                </div>
            </section>

            {/* Sacred Discipline — Selected Works */}
            <section className="home-teaser">
                <div className="centered-teaser centered-teaser-wide">
                    <span className="section-label">Sacred Discipline</span>
                    <h2 className="section-title">Blackwork & <span className="accent">Ritual</span></h2>

                    {/* Home Gallery (3 Previews + Thumbnails) */}
                    <div className="home-gallery-container">
                        <div className="gallery-main-display">
                            {getMainImages().map((img, idx) => {
                                const realIdx = (activeIndex + idx) % galleryImages.length;
                                return (
                                    <div key={idx} className="gallery-main-item" onClick={() => openLightbox(img)} style={{ cursor: 'zoom-in' }}>
                                        <img src={img} alt={galleryAlt[realIdx]} loading="lazy" />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="gallery-thumbnails">
                            {galleryImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumbnail-item ${idx === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <img src={img} alt={galleryAlt[idx]} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link to="/portfolio" className="btn" onClick={() => window.scrollTo(0, 0)}>View Selected Works</Link>
                </div>
            </section>

            {/* Contact CTA */}
            <Contact />

            {/* Hidden SEO Block for "Home" context */}
            <div style={{ height: '1px', overflow: 'hidden', opacity: 0 }}>
                Pierre Marcel Tattoo Artist Uluwatu Bali Munich Blackwork Tribal Roots Sacred Geometry Custom Design.
            </div>
        </>
    );
};

export default Home;