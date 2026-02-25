import React from 'react';

interface AboutProps {
    openLightbox: (src: string) => void;
}

const About: React.FC<AboutProps> = ({ openLightbox }) => {
    return (
        <section className="bio-section">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="section-label" style={{ justifyContent: 'center' }}>Biographie</span>
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>
                    <span className="line"><span>Pierre Marcel</span></span>
                </h1>
                <p className="hero-subtitle" style={{ opacity: 1, marginTop: '0.5rem' }}>Sacred Blackwork Artist · Uluwatu, Bali · Munich</p>
            </div>

            <div className="bio-grid-layout">
                {/* Sidebar */}
                <aside className="bio-sidebar">
                    <div className="bio-photo-placeholder" onClick={() => openLightbox("/images/pierre_artist_headshot.webp")} style={{ cursor: 'zoom-in' }}>
                        {/* Placeholder image logic - using a generic person placeholder or a solid color block with text if image fails */}
                        <img src="/images/pierre_artist_headshot.webp" alt="Pierre Marcel" onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.innerText = 'Pierre Marcel';
                                e.currentTarget.parentElement.style.color = '#e2d8cc';
                                e.currentTarget.parentElement.style.fontFamily = 'Bodoni Moda';
                                e.currentTarget.parentElement.style.fontSize = '1.5rem';
                                e.currentTarget.parentElement.style.letterSpacing = '0.1em';
                            }
                        }} />
                    </div>

                    <div className="sidebar-section">
                        <p className="sidebar-label">Born</p>
                        <p className="sidebar-value">July 1988</p>
                    </div>

                    <div className="sidebar-section">
                        <p className="sidebar-label">Origin</p>
                        <p className="sidebar-value">Caracas, Venezuela</p>
                    </div>

                    <div className="sidebar-section">
                        <p className="sidebar-label">Based</p>
                        <p className="sidebar-value">Uluwatu, Bali & Munich</p>
                    </div>

                    <div className="sidebar-section">
                        <p className="sidebar-label">Specializations</p>
                        <ul className="sidebar-list">
                            <li>Sacred Geometry</li>
                            <li>Blackwork</li>
                            <li>Ornamental</li>
                            <li>Dotwork</li>
                            <li>Nordic</li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <p className="sidebar-label">Travels</p>
                        <ul className="sidebar-list">
                            <li>India</li>
                            <li>Nepal</li>
                            <li>Brasil</li>
                            <li>Amazonas</li>
                            <li>Europe</li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="bio-content">
                    <div className="about-quote" style={{ borderTop: '1px solid rgba(226, 216, 204, 0.1)', borderBottom: '1px solid rgba(226, 216, 204, 0.1)', padding: '2rem 0', textAlign: 'center', marginBottom: '4rem' }}>
                        "A man without tattoos is invisible to the Gods"
                        <div className="sidebar-label" style={{ marginTop: '1rem', opacity: 0.5 }}>— Iban Proverb</div>
                    </div>

                    <div className="bio-chapter">
                        <h2 className="chapter-title">Origins</h2>
                        <p className="bio-text">
                            Born in July 1988, in the heart of chaotic <strong>Caracas, Venezuela</strong>—a city where art lived and breathed on the streets. Graffitis, murals, an incredible fusion of artistic styles painted every corner. Pierre was captivated by this visual language from childhood, developing deep respect and boundless curiosity for <strong>Latino-American artists</strong>, painters, tattooers, and traditional pre-Columbian culture.
                        </p>
                        <p className="bio-text">
                            In parallel with his artistic awakening, he completed his studies as an <em>electrical engineer</em>—a foundation in precision and structure that would later inform his geometric approach to body art.
                        </p>
                    </div>

                    <div className="bio-chapter">
                        <h2 className="chapter-title">The Calling</h2>
                        <p className="bio-text">
                            Since childhood, Pierre was drawn to the <strong>body art traditions of ancient civilizations</strong>. This fascination set him on a path of discovery—traveling extensively, reading voraciously, following the thread of curiosity wherever it led.
                        </p>

                        <div className="bio-highlight">
                            <p className="highlight-text">
                                "Curiosity is one of his strongest advantages—helping him discover remarkable artists and mentors who supported his evolution into a true tattooer."
                            </p>
                        </div>

                        <p className="bio-text">
                            Each encounter added layers to his understanding, building self-confidence along what he recognized would be a <strong>lifelong learning path</strong>.
                        </p>
                    </div>


                    <div className="bio-chapter">
                        <h2 className="chapter-title">The Journey</h2>
                        <p className="bio-text">
                            Through <strong>India, Nepal, Europe, the Amazon, Brasil</strong>, and beyond—Pierre immersed himself in the world's sacred traditions. He studied multiple techniques: patterns, dots, lines, ornaments, blackwork—all adapted to honor the body's natural anatomy.
                        </p>
                        <p className="bio-text">
                            His admiration for the <strong>ancient cultural concept of tattooing</strong> deepened with each journey. Every day became an opportunity to recreate and innovate—adapting timeless concepts to each unique soul and body. Building pieces of art that will <em>never be repeated</em>.
                        </p>
                    </div>

                    <div className="bio-chapter">
                        <h2 className="chapter-title">Philosophy</h2>
                        <p className="bio-text">
                            Travels across continents revealed how <strong>varied and profound tattoo culture</strong> can be in every civilization. Pierre continues to read, discover, and push beyond familiar horizons—always seeking interesting artists worldwide, learning new techniques, new perceptions, new tools.
                        </p>
                        <p className="bio-text">
                            The commitment is clear: <strong>stay on the continuous learning path</strong>, and implement every insight into his work.
                        </p>
                    </div>

                    <div className="bio-chapter">
                        <h2 className="chapter-title">Present</h2>
                        <p className="bio-text">
                            Currently based in <strong>Uluwatu, Bali</strong> most of the year, working from his private home studio—and traveling regularly to <strong>Munich, Germany</strong> for guest spots and ongoing projects.
                        </p>
                        <p className="bio-text">
                            Pierre is always open to hearing new ideas and collaborating on meaningful projects. <strong>Send a message</strong>, and he will respond as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;