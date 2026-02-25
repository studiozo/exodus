import React, { useState, useEffect } from 'react';

interface TestimonialsProps {
    openLightbox: (src: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ openLightbox }) => {
    const [activeZoSlide, setActiveZoSlide] = useState(0);
    const zoImages = [
        '/images/zo/IMG_6001.JPG',
        '/images/zo/IMG_5922.JPG',
        '/images/zo/IMG_5997.JPG',
        '/images/zo/IMG_5983.JPG'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveZoSlide((prev) => (prev + 1) % zoImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [zoImages.length]);

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="section-header centered">
                <span className="section-label">Reflections</span>
                <h2 className="section-title">Client <span className="accent">Stories</span></h2>
            </div>

            <div className="testimonials-grid">
                {/* Client 1 - ZØVIVAA */}
                <div className="testimonial-card">
                    <div className="testimonial-slider" onClick={() => openLightbox(zoImages[activeZoSlide])} style={{ cursor: 'zoom-in' }}>
                        {zoImages.map((img, index) => (
                            <div
                                key={index}
                                className={`testimonial-slide ${index === activeZoSlide ? 'active' : ''}`}
                            >
                                <img src={img} alt={`Sacred blackwork tattoo session ${index + 1} — client experience at EXODUS Bali`} />
                            </div>
                        ))}
                        <div className="slider-nav">
                            {zoImages.map((_, index) => (
                                <div
                                    key={index}
                                    className={`slider-dot ${index === activeZoSlide ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveZoSlide(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="client-quote">
                        "Working with Pierre was an amazing, incredible experience from start to finish. I loved the creative process of taking the time to sketch, plan, & visualize the body art we wanted to build together. I appreciated his attention to detail & soft hand - especially tattooing the hands & ribs -- his passion & creativity are only unmatched by his vibrant personality" - 10/10 would recommend to anyone interested in exploring body art.
                    </p>
                    <div className="client-info">
                        <h4 className="client-name">ZØVIVAA</h4>
                        <span className="client-project">Custom Body Art · 2026</span>
                    </div>
                </div>

                {/* Client 2 - Placeholder */}
                <div className="testimonial-card">
                    <div className="client-media">
                        <span style={{ opacity: 0.1, letterSpacing: '0.2em' }}>JOURNAL ENTRY</span>
                    </div>
                    <p className="client-quote" style={{ opacity: 0.4 }}>
                        More client stories coming soon...
                    </p>
                    <div className="client-info" style={{ opacity: 0.4 }}>
                        <h4 className="client-name">Coming Soon</h4>
                        <span className="client-project">Collective Soul</span>
                    </div>
                </div>

                {/* Client 3 - Placeholder */}
                <div className="testimonial-card">
                    <div className="client-media">
                        <span style={{ opacity: 0.1, letterSpacing: '0.2em' }}>PROCESS ART</span>
                    </div>
                    <p className="client-quote" style={{ opacity: 0.4 }}>
                        Space held for your story. Every mark is a chapter, every session a transformation.
                    </p>
                    <div className="client-info" style={{ opacity: 0.4 }}>
                        <h4 className="client-name">Coming Soon</h4>
                        <span className="client-project">Future Vision</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;