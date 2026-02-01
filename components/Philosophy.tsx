import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="bio-section" id="about">
        <div className="bio-grid-layout" style={{maxWidth: '1200px', margin: '0 auto'}}>
             {/* Left Column / Intro */}
             <div style={{position: 'sticky', top: '10rem', height: 'fit-content'}}>
                <div className="section-header">
                    <span className="section-label">Manifesto</span>
                    <h2 className="section-title">The Body<br/>as <span className="accent">Temple</span></h2>
                </div>
                
                <p className="about-quote">
                    Every line carries <strong>intention</strong>. Every mark is a conversation 
                    between ancient geometry and living flesh. This is not decoration—this is <strong>ritual</strong>.
                </p>
                
                <p className="about-text" style={{opacity: 0.8, fontSize: '0.9rem'}}>
                    EXØDUS creates sacred blackwork that honors the body's natural architecture. 
                    We draw from patterns that have marked human skin for millennia—sacred geometry, 
                    ancestral symbols, the visual language of transformation.
                </p>
             </div>
             
             {/* Right Column / Content */}
             <div className="bio-content">
                 
                 <div className="bio-chapter">
                     <p className="bio-text" style={{fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '3rem'}}>
                        I chose the name <strong>EXØDUS</strong> because it speaks to transformation, not escape.
                     </p>
                     
                     <h2 className="chapter-title" style={{marginTop: '4rem'}}>Why EXØDUS</h2>
                     
                     <p className="bio-text">
                         Tattooing, to me, is the moment the body becomes more than flesh — when skin turns into structure, and something permanent is built through intention. Every piece begins at that crossing.
                     </p>
                 </div>

                 <div className="bio-chapter">
                     <h2 className="chapter-title">EXØ</h2>
                     <p className="bio-text">
                         <strong>EXØ</strong> holds multiple meanings by design.
                     </p>
                     <p className="bio-text">
                         <strong>EX</strong> comes from Latin — <em>out of, beyond, former.</em><br/>
                         It represents moving from one state of being into another.
                     </p>
                     <p className="bio-text">
                         <strong>Ø</strong> is the zero, the void, the portal.<br/>
                         A space of nothingness and infinite possibility.
                     </p>
                     <p className="bio-text">
                         Together, <strong>EXØ</strong> feels like an exoskeleton — an external layer built onto the body, engineered with care, purpose, and precision.
                     </p>
                     <p className="bio-text">
                         That’s what tattooing is to me: an added structure that changes how the body exists in the world.
                     </p>
                 </div>

                 <div className="bio-chapter">
                     <h2 className="chapter-title">XØ</h2>
                     <p className="bio-text">
                         Visually, <strong>XØ</strong> reads as hugs and kisses — a reminder of intimacy and trust.
                     </p>
                     <p className="bio-text">
                         Tattooing requires closeness. Consent. Stillness. Vulnerability.
                     </p>
                     <p className="bio-text">
                         It’s not a transaction. It’s a shared moment between me and the body in front of me.
                     </p>
                 </div>

                 <div className="bio-chapter">
                     <h2 className="chapter-title">DUS / DUØ</h2>
                     <p className="bio-text">
                         <strong>DUS</strong> echoes <strong>DUO</strong> — two.
                     </p>
                     <p className="bio-text">
                         A tattoo can’t exist in isolation. It requires two people:
                     </p>
                     <ul className="sidebar-list" style={{margin: '2rem 0', paddingLeft: '1rem', borderLeft: '1px solid var(--bone)'}}>
                         <li style={{marginBottom: '1rem'}}>The artist, carrying vision and technique</li>
                         <li>The body, carrying the mark forward</li>
                     </ul>
                     <p className="bio-text">
                         Creation happens in the space between us. <strong>EXØDUS</strong> honors that relationship.
                     </p>
                 </div>

                 <div className="bio-chapter">
                     <h2 className="chapter-title">The Whole</h2>
                     <p className="bio-text">
                         <strong>EXØDUS</strong> is the crossing.
                     </p>
                     <p className="bio-text">
                         Not a departure from the body, but a return to it — rewritten.
                     </p>
                     <div className="bio-highlight">
                         <p className="highlight-text">
                             Every tattoo marks a shift. Not escape. Evolution.
                         </p>
                     </div>
                 </div>

             </div>
        </div>
    </section>
  );
};

export default Philosophy;