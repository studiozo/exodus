import React, { useState } from 'react';
import Hero from './Hero';
import Contact from './Contact';

interface HomeProps {
    navigateTo: (page: string) => void;
    openLightbox: (src: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo, openLightbox }) => {
    const galleryImages = [
        '/images/home_gallery/1.JPG',
        '/images/home_gallery/2.webp',
        '/images/home_gallery/3.webp',
        '/images/home_gallery/4.webp',
        '/images/home_gallery/5.webp',
        '/images/home_gallery/6.webp',
        '/images/home_gallery/7.webp',
        '/images/home_gallery/8.webp',
        '/images/home_gallery/9.webp',
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
                            <img src="/images/pierre_artist_headshot.webp" alt="Pierre Marcel" onError={(e) => {
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

                        <p className="about-quote" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
                            "A man without tattoos is invisible to the Gods"
                        </p>

                        <p className="about-text">
                            From Caracas to Bali, a journey defined by ink and sacred traditions.
                            Engineering precision meets ancient artistry in every blackwork piece.
                        </p>
                        <button className="btn" onClick={() => navigateTo('about')}>Read Biography</button>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="home-teaser alt-bg">
                <div className="centered-teaser" style={{ maxWidth: '1100px', width: '100%' }}>
                    <span className="section-label" style={{ justifyContent: 'center' }}>Philosophy</span>
                    <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>The Body<br/>as <span className="accent">Temple</span></h2>

                    <p className="about-quote" style={{ fontSize: '1.3rem', maxWidth: '750px', margin: '0 auto 2rem' }}>
                        Every line carries <strong>intention</strong>. Every mark is a conversation
                        between ancient geometry and living flesh. This is not decoration—this is <strong>ritual</strong>.
                    </p>

                    <p className="about-text" style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto' }}>
                        EXODUS draws from patterns that have marked human skin for millennia—sacred geometry,
                        ancestral symbols, the visual language of transformation. What we practice today
                        is the continuation of the oldest art form on earth.
                    </p>

                    <div className="ancestral-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="ancestral-item" onClick={() => openLightbox('/images/ancestral/01_kalinga-elder_torso-geometric-linework.png')}>
                            <img src="/images/ancestral/01_kalinga-elder_torso-geometric-linework.png" alt="Kalinga elder with geometric torso tattoos" />
                        </div>
                        <div className="ancestral-item" onClick={() => openLightbox('/images/ancestral/12_chin-tribe_elder-woman-facial-tattoo-closeup-bw.jpg')}>
                            <img src="/images/ancestral/12_chin-tribe_elder-woman-facial-tattoo-closeup-bw.jpg" alt="Chin tribe elder woman with facial tattoos" />
                        </div>
                        <div className="ancestral-item" onClick={() => openLightbox('/images/ancestral/15_traditional-hand-tap_process-closeup-bw.jpg')}>
                            <img src="/images/ancestral/15_traditional-hand-tap_process-closeup-bw.jpg" alt="Traditional hand-tap tattoo process" />
                        </div>
                    </div>
                    <p className="ancestral-caption">Kalinga elder, Philippines · Chin tribe, Myanmar · Hand-tap technique — the oldest art form</p>

                    <button className="btn" onClick={() => navigateTo('philosophy')}>Read More</button>
                </div>
            </section>

            {/* Sacred Discipline — Selected Works */}
            <section className="home-teaser">
                <div className="centered-teaser" style={{ maxWidth: '1400px', width: '100%' }}>
                    <span className="section-label" style={{ justifyContent: 'center' }}>Sacred Discipline</span>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>Blackwork & <span className="accent">Ritual</span></h2>

                    {/* Home Gallery (3 Previews + Thumbnails) */}
                    <div className="home-gallery-container">
                        <div className="gallery-main-display">
                            {getMainImages().map((img, idx) => (
                                <div key={idx} className="gallery-main-item" onClick={() => openLightbox(img)} style={{ cursor: 'zoom-in' }}>
                                    <img src={img} alt={`Exodus Work ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="gallery-thumbnails">
                            {galleryImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumbnail-item ${idx === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <img src={img} alt={`Exodus Work ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="btn" onClick={() => navigateTo('portfolio')} style={{ marginTop: '2rem' }}>View Selected Works</button>
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