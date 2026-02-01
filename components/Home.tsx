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

            {/* Pierre Marcel Teaser */}
            <section className="home-teaser">
                <div className="teaser-grid">
                    <div className="teaser-image" onClick={() => openLightbox("/images/pierre_artist_headshot.webp")} style={{ cursor: 'zoom-in' }}>
                        <div style={{ width: '100%', height: '100%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
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
                        <span className="section-label">The Artist</span>
                        <h2 className="section-title">Pierre Marcel<br /><span className="accent">Tribal Roots</span></h2>

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

            {/* Consolidated Work / Philosophy Teaser */}
            <section className="home-teaser alt-bg">
                <div className="centered-teaser" style={{ maxWidth: '1400px', width: '100%' }}>
                    <span className="section-label" style={{ justifyContent: 'center' }}>Sacred Discipline</span>
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>Blackwork & <span className="accent">Ritual</span></h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', textAlign: 'left', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
                        <div>
                            <h4 style={{ fontFamily: 'Bodoni Moda', fontSize: '1.2rem', marginBottom: '1rem', color: '#f2ede6' }}>Ancient Roots</h4>
                            <p className="about-text" style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0' }}>
                                Blackwork is a resurrection of ancestral roots—from Oceania to the Americas. We specialize in high-contrast geometric structures and abstract forms.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontFamily: 'Bodoni Moda', fontSize: '1.2rem', marginBottom: '1rem', color: '#f2ede6' }}>Sacred Process</h4>
                            <p className="about-text" style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0' }}>
                                Our process is a ritual; a deep relationship between artist and skin, respecting the body's architecture and the evolution of the sacred art.
                            </p>
                        </div>
                    </div>

                    <p className="about-text" style={{ fontSize: '1rem', opacity: 0.6, fontStyle: 'italic', marginBottom: '4rem' }}>
                        "We focus on the sacred perception of basic shapes—triangles and dots as representations of the divine."
                    </p>

                    {/* New Home Gallery (3 Previews + Thumbnails) */}
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
                Pierre Marcel Tattoo Artist Bali Munich Blackwork Tribal Roots Sacred Geometry Custom Design.
            </div>
        </>
    );
};

export default Home;