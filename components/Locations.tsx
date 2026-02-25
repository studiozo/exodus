import React from 'react';

const Locations: React.FC = () => {
  return (
    <section className="locations-section" id="locations">

        {/* ═══ HERO HEADER ═══ */}
        <div className="studio-header">
            <span className="section-label" style={{justifyContent: 'center'}}>
                <span style={{order: 2}}>Location</span>
            </span>
            <h2 className="section-title" style={{textAlign: 'center'}}>
                The <span className="accent">Studio</span>
            </h2>
            <p className="studio-intro">
                Nestled in the heart of Uluwatu, Bali — surrounded by rice fields, ocean air,
                and the kind of stillness that lets the work breathe. This is where transformation begins.
            </p>
        </div>

        {/* ═══ HERO IMAGE — Full width ═══ */}
        <div className="studio-hero-img">
            <div className="studio-placeholder">
                <span className="placeholder-label">Studio Hero Image</span>
                <span className="placeholder-hint">Wide exterior or entrance shot · Recommended 16:9</span>
            </div>
        </div>

        {/* ═══ THE SPACE ═══ */}
        <div className="studio-content">
            <div className="studio-chapter">
                <h3 className="chapter-title">The Space</h3>
                <p className="bio-text bio-lede">
                    A private sanctuary built for focus, comfort, and intention.
                    The studio is designed around the ritual of tattooing — every detail considered,
                    from the natural light to the ambient sound to the materials that surround you.
                </p>
                <p className="bio-text">
                    Sessions happen one-on-one. No walk-ins, no distractions.
                    Just you, Pierre, and the work. Whether it's a single sitting or a multi-day project,
                    the space holds you for the entire journey.
                </p>
            </div>

            {/* ═══ IMAGE GRID — 2 column ═══ */}
            <div className="studio-grid-2">
                <div className="studio-placeholder studio-placeholder-tall">
                    <span className="placeholder-label">Interior Shot 1</span>
                    <span className="placeholder-hint">Workstation / setup · Portrait 4:5</span>
                </div>
                <div className="studio-placeholder studio-placeholder-tall">
                    <span className="placeholder-label">Interior Shot 2</span>
                    <span className="placeholder-hint">Atmosphere / details · Portrait 4:5</span>
                </div>
            </div>
            <p className="ancestral-caption">The private studio — Uluwatu, Bali</p>

            {/* ═══ THE EXPERIENCE ═══ */}
            <div className="studio-chapter">
                <h3 className="chapter-title">The Experience</h3>
                <p className="bio-text">
                    Every session begins with conversation. Pierre walks through the design,
                    the placement, the intention behind each element. There's no rush.
                    The work starts when the work is ready to start.
                </p>

                <div className="bio-highlight">
                    <p className="highlight-text">
                        This is not a tattoo shop. It's a private creative space where body art
                        is treated as what it is — a permanent act of transformation.
                    </p>
                </div>

                <p className="bio-text">
                    Clients traveling from abroad are welcome to plan multi-day sessions.
                    Pierre can recommend accommodation, recovery routines, and local experiences
                    to make the trip as meaningful as the ink.
                </p>
            </div>

            {/* ═══ IMAGE GRID — 3 column ═══ */}
            <div className="studio-grid-3">
                <div className="studio-placeholder">
                    <span className="placeholder-label">Detail Shot 1</span>
                    <span className="placeholder-hint">Equipment / ink / tools</span>
                </div>
                <div className="studio-placeholder">
                    <span className="placeholder-label">Detail Shot 2</span>
                    <span className="placeholder-hint">In-session moment</span>
                </div>
                <div className="studio-placeholder">
                    <span className="placeholder-label">Detail Shot 3</span>
                    <span className="placeholder-hint">Studio environment / vibe</span>
                </div>
            </div>
            <p className="ancestral-caption">Where the work happens</p>

            {/* ═══ LOCATION DETAILS ═══ */}
            <div className="studio-chapter">
                <h3 className="chapter-title">Finding Us</h3>
            </div>

            <div className="studio-details-grid">
                <div className="studio-detail-card">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">Uluwatu, Bali</span>
                    <span className="detail-sub">Indonesia</span>
                </div>
                <div className="studio-detail-card">
                    <span className="detail-label">Status</span>
                    <span className="detail-value detail-open">Currently Booking</span>
                    <span className="detail-sub">Limited availability 2026</span>
                </div>
                <div className="studio-detail-card">
                    <span className="detail-label">Sessions</span>
                    <span className="detail-value">By Appointment</span>
                    <span className="detail-sub">One client at a time</span>
                </div>
                <div className="studio-detail-card">
                    <span className="detail-label">Traveling</span>
                    <span className="detail-value">Munich, Germany</span>
                    <span className="detail-sub">Guest spots · Mar–Apr & Sep</span>
                </div>
            </div>

            {/* ═══ CLOSING ═══ */}
            <div className="studio-chapter" style={{marginTop: '3rem'}}>
                <div className="bio-highlight">
                    <p className="highlight-text">
                        Your appointment awaits. Reach out to begin the conversation —
                        every piece starts with intention.
                    </p>
                </div>
                <p className="bio-text" style={{textAlign: 'center', opacity: 0.5, fontSize: '0.85rem', letterSpacing: '0.15em'}}>
                    For bookings and inquiries: <a href="mailto:pierre@exodusbodyart.com" style={{color: 'var(--kalahari)', textDecoration: 'none', borderBottom: '1px solid var(--kalahari)'}}>pierre@exodusbodyart.com</a>
                </p>
            </div>
        </div>
    </section>
  );
};

export default Locations;
