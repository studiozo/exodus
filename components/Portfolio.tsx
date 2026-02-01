import React, { useState } from 'react';

interface PortfolioProps {
    openLightbox: (src: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ openLightbox }) => {
    const [currentTab, setCurrentTab] = useState('ALL');

    const categories = ['ALL', 'BLACKWORK', 'ORNAMENTAL', 'NORDIC', 'ASIATIC BLACKWORK', 'CONCEPTS'];

    // Full portfolio data mapped from public/images folders
    const portfolioItems = [
        // BLACKWORK (16 images)
        { id: 1, category: 'BLACKWORK', title: 'Blackwork 1', label: 'Sacred Armour', img: '/images/blackwork/rs=w_370,cg_true.webp' },
        { id: 2, category: 'BLACKWORK', title: 'Blackwork 2', label: 'Void Ritual', img: '/images/blackwork/rs=w_370,cg_true-1.webp' },
        { id: 3, category: 'BLACKWORK', title: 'Blackwork 3', label: 'Abstract Genesis', img: '/images/blackwork/fx-gs.webp' },
        { id: 4, category: 'BLACKWORK', title: 'Blackwork 4', label: 'Obsidian Flow', img: '/images/blackwork/rs=w_370,cg_true-2.webp' },
        { id: 5, category: 'BLACKWORK', title: 'Blackwork 5', label: 'Geometric Soul', img: '/images/blackwork/rs=w_370,cg_true-3.webp' },
        { id: 6, category: 'BLACKWORK', title: 'Blackwork 6', label: 'Sacred Alignment', img: '/images/blackwork/rs=w_370,cg_true-4.webp' },
        { id: 7, category: 'BLACKWORK', title: 'Blackwork 7', label: 'Anatomical Cipher', img: '/images/blackwork/rs=w_370,cg_true-5.webp' },
        { id: 8, category: 'BLACKWORK', title: 'Blackwork 8', label: 'Pattern of Existence', img: '/images/blackwork/rs=w_370,cg_true-6.webp' },
        { id: 9, category: 'BLACKWORK', title: 'Blackwork 9', label: 'Primal Contrast', img: '/images/blackwork/rs=w_370,cg_true-7.webp' },
        { id: 10, category: 'BLACKWORK', title: 'Blackwork 10', label: 'Ritual Scar', img: '/images/blackwork/rs=w_370,cg_true-8.webp' },
        { id: 11, category: 'BLACKWORK', title: 'Blackwork 11', label: 'Eternal Ink', img: '/images/blackwork/fx-gs-1.webp' },
        { id: 12, category: 'BLACKWORK', title: 'Blackwork 12', label: 'Somatic Blueprint', img: '/images/blackwork/rs=w_370,cg_true,m.webp' },
        { id: 13, category: 'BLACKWORK', title: 'Blackwork 13', label: 'Tribal Evolution', img: '/images/blackwork/rs=w_370,cg_true,m-1.webp' },
        { id: 14, category: 'BLACKWORK', title: 'Blackwork 14', label: 'Ancient Future', img: '/images/blackwork/rs=w_370,cg_true,m-2.webp' },
        { id: 15, category: 'BLACKWORK', title: 'Blackwork 15', label: 'Sacred Void', img: '/images/blackwork/rs=w_370,cg_true,m-3.webp' },
        { id: 16, category: 'BLACKWORK', title: 'Blackwork 16', label: 'Final Transcendence', img: '/images/blackwork/rs=w_370,cg_true,m-4.webp' },

        // ORNAMENTAL (12 images)
        { id: 17, category: 'ORNAMENTAL', title: 'Ornamental 1', label: 'Celestial Bloom', img: '/images/ornamental/rs=w_370,cg_true.webp' },
        { id: 18, category: 'ORNAMENTAL', title: 'Ornamental 2', label: 'Mandala Mandate', img: '/images/ornamental/rs=w_370,cg_true-1.webp' },
        { id: 19, category: 'ORNAMENTAL', title: 'Ornamental 3', label: 'Ethereal Symmetry', img: '/images/ornamental/fx-gs.webp' },
        { id: 20, category: 'ORNAMENTAL', title: 'Ornamental 4', label: 'Sacred Lotus', img: '/images/ornamental/rs=w_370,cg_true-2.webp' },
        { id: 21, category: 'ORNAMENTAL', title: 'Ornamental 5', label: 'Divine Ornament', img: '/images/ornamental/rs=w_370,cg_true-3.webp' },
        { id: 22, category: 'ORNAMENTAL', title: 'Ornamental 6', label: 'Intricate Vision', img: '/images/ornamental/rs=w_370,cg_true-4.webp' },
        { id: 23, category: 'ORNAMENTAL', title: 'Ornamental 7', label: 'Lace of Light', img: '/images/ornamental/rs=w_370,cg_true-5.webp' },
        { id: 24, category: 'ORNAMENTAL', title: 'Ornamental 8', label: 'Geometric Grace', img: '/images/ornamental/rs=w_370,cg_true-6.webp' },
        { id: 25, category: 'ORNAMENTAL', title: 'Ornamental 9', label: 'Flowing Spirit', img: '/images/ornamental/rs=w_370,cg_true-7.webp' },
        { id: 26, category: 'ORNAMENTAL', title: 'Ornamental 10', label: 'Core Resonance', img: '/images/ornamental/rs=w_370,cg_true-8.webp' },
        { id: 27, category: 'ORNAMENTAL', title: 'Ornamental 11', label: 'Path of Beauty', img: '/images/ornamental/rs=w_370,cg_true,m.webp' },
        { id: 28, category: 'ORNAMENTAL', title: 'Ornamental 12', label: 'Final Adornment', img: '/images/ornamental/rs=w_370,cg_true,m-1.webp' },

        // NORDIC (6 images)
        { id: 29, category: 'NORDIC', title: 'Nordic 1', label: 'Runic Whisper', img: '/images/nordic/rs=w_370,cg_true.webp' },
        { id: 30, category: 'NORDIC', title: 'Nordic 2', label: 'Viking Soul', img: '/images/nordic/fx-gs.webp' },
        { id: 31, category: 'NORDIC', title: 'Nordic 3', label: 'Sigil of Strength', img: '/images/nordic/rs=w_370,cg_true-1.webp' },
        { id: 32, category: 'NORDIC', title: 'Nordic 4', label: 'Nordic Flow', img: '/images/nordic/rs=w_370,cg_true-2.webp' },
        { id: 33, category: 'NORDIC', title: 'Nordic 5', label: 'Ancient North', img: '/images/nordic/fx-gs-1.webp' },
        { id: 34, category: 'NORDIC', title: 'Nordic 6', label: 'Transcendent Rune', img: '/images/nordic/rs=w_370,cg_true,m.webp' },

        // ASIATIC BLACKWORK (5 images)
        { id: 35, category: 'ASIATIC BLACKWORK', title: 'Asiatic 1', label: 'Oriental Shadow', img: '/images/asiatic blackwork/rs=w_370,cg_true.webp' },
        { id: 36, category: 'ASIATIC BLACKWORK', title: 'Asiatic 2', label: 'Ancient Current', img: '/images/asiatic blackwork/rs=w_370,cg_true,m.webp' },
        { id: 37, category: 'ASIATIC BLACKWORK', title: 'Asiatic 3', label: 'Sacred Eastern', img: '/images/asiatic blackwork/rs=w_370,cg_true,m-1.webp' },
        { id: 38, category: 'ASIATIC BLACKWORK', title: 'Asiatic 4', label: 'Ink Calligraphy', img: '/images/asiatic blackwork/rs=w_370,cg_true,m-2.webp' },
        { id: 39, category: 'ASIATIC BLACKWORK', title: 'Asiatic 5', label: 'Oriental Bloom', img: '/images/asiatic blackwork/rs=w_370,cg_true,m-3.webp' },

        // CONCEPTS (15 images)
        { id: 40, category: 'CONCEPTS', title: 'Concept 1', label: 'Future Archetype', img: '/images/concepts/rs=w_1280,h_1811.webp' },
        { id: 41, category: 'CONCEPTS', title: 'Concept 2', label: 'Ethereal Blueprint', img: '/images/concepts/rs=w_1280,h_1707.webp' },
        { id: 42, category: 'CONCEPTS', title: 'Concept 3', label: 'Digital Soul', img: '/images/concepts/rs=w_1280,h_1688.webp' },
        { id: 43, category: 'CONCEPTS', title: 'Concept 4', label: 'Sacred Specimen', img: '/images/concepts/rs=w_1280,h_1693.webp' },
        { id: 44, category: 'CONCEPTS', title: 'Concept 5', label: 'Abstract Flow', img: '/images/concepts/rs=w_1280,h_1673 (1).webp' },
        { id: 45, category: 'CONCEPTS', title: 'Concept 6', label: 'Void Projection', img: '/images/concepts/rs=w_1280,h_1600.webp' },
        { id: 46, category: 'CONCEPTS', title: 'Concept 7', label: 'Core Geometry', img: '/images/concepts/rs=w_1280,h_1811 (1).webp' },
        { id: 47, category: 'CONCEPTS', title: 'Concept 8', label: 'Pattern Mesh', img: '/images/concepts/cr=w_70,h_70,a_cc-2.webp' },
        { id: 48, category: 'CONCEPTS', title: 'Concept 9', label: 'Sacred Lattice', img: '/images/concepts/cr=w_70,h_70,a_cc-3.webp' },
        { id: 49, category: 'CONCEPTS', title: 'Concept 10', label: 'Geometry Mesh', img: '/images/concepts/cr=w_70,h_70,a_cc.webp' },
        { id: 50, category: 'CONCEPTS', title: 'Concept 11', label: 'Design Blueprint', img: '/images/concepts/cr=w_70,h_70,a_cc-1.webp' },
        { id: 51, category: 'CONCEPTS', title: 'Concept 12', label: 'Skin Architecture', img: '/images/concepts/rs=w_1280,h_1688 (1).webp' },
        { id: 52, category: 'CONCEPTS', title: 'Concept 13', label: 'Visual Prayer', img: '/images/concepts/rs=w_1280,h_1673.webp' },
        { id: 53, category: 'CONCEPTS', title: 'Concept 14', label: 'Sacred Geometry', img: '/images/concepts/rs=w_984,h_1215.webp' },
        { id: 54, category: 'CONCEPTS', title: 'Concept 15', label: 'Final Vision', img: '/images/concepts/rs=w_1280,h_1688 (2).webp' },
    ];

    const filteredItems = currentTab === 'ALL'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === currentTab);

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery-header">
                <span className="section-label">Work</span>
                <h2 className="section-title">Selected <span className="accent">Works</span></h2>

                <p className="about-text" style={{ fontSize: '0.9rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    A curation of sacred marks and geometric evolutions. Each piece is a unique collaboration,
                    honoring the body's architecture and the soul's expression.
                </p>

                <div className="tab-menu">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${currentTab === cat ? 'active' : ''}`}
                            onClick={() => setCurrentTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <a
                    href="https://kr.pinterest.com/pierremarceltattoo/tattoos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        marginTop: '2rem',
                        color: '#f2ede6',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(242, 237, 230, 0.3)',
                        paddingBottom: '0.2rem',
                        fontSize: '0.8rem',
                        letterSpacing: '0.1em',
                        opacity: 0.7,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
                >
                    View Full Archive on Pinterest ↗
                </a>
            </div>

            <div className="gallery-runes">
                {/* Retained decorative background */}
                <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
                    <path className="rune-path flow" d="M100,100 Q250,50 400,120 T700,80 T1000,120" />
                    <path className="rune-path flow" d="M100,300 L300,250 Q500,300 700,250 L1100,300" />
                    <path className="rune-path flow" d="M400,150 L400,450" />
                    <circle className="rune-dot pulse" cx="200" cy="100" r="6" />
                    <circle className="rune-dot pulse" cx="700" cy="80" r="6" style={{ animationDelay: '-1s' }} />
                </svg>
            </div>

            <div className="gallery-container">
                <div className="gallery-grid">
                    {filteredItems.map(item => (
                        <div className="gallery-item" key={item.id} onClick={() => openLightbox(item.img)} style={{ cursor: 'zoom-in' }}>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="gallery-image"
                            />
                            <div className="gallery-item-info">
                                <span className="gallery-label">{item.label}</span>
                                <span className="gallery-category">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;