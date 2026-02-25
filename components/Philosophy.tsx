import React from 'react';

interface PhilosophyProps {
    openLightbox?: (src: string) => void;
}

const Philosophy: React.FC<PhilosophyProps> = ({ openLightbox }) => {
    const lb = (src: string) => openLightbox ? openLightbox(src) : undefined;

  return (
    <section className="bio-section" id="about">
        <div className="bio-grid-layout" style={{maxWidth: '1200px', margin: '0 auto'}}>
             {/* Left Column / Intro */}
             <div className="philosophy-sidebar">
                <div className="section-header">
                    <span className="section-label">Manifesto</span>
                    <h2 className="section-title">The Body<br/>as <span className="accent">Temple</span></h2>
                </div>

                <p className="about-quote">
                    Every line carries <strong>intention</strong>. Every mark is a conversation
                    between ancient geometry and living flesh. This is not decoration—this is <strong>ritual</strong>.
                </p>

                <p className="about-text" style={{opacity: 0.8, fontSize: '0.9rem'}}>
                    EXODUS draws from patterns that have marked human skin for millennia—sacred geometry,
                    ancestral symbols, the visual language of transformation. What we practice today
                    is the continuation of the oldest art form on earth.
                </p>
             </div>

             {/* Right Column / Content */}
             <div className="bio-content">

                 {/* ═══ BEFORE US ═══ */}
                 <div className="bio-chapter">
                     <h2 className="chapter-title">Before Us</h2>

                     <div className="bio-highlight">
                         <p className="highlight-text">
                             "A man without tattoos is invisible to the Gods."
                         </p>
                         <p className="ancestral-caption" style={{textAlign: 'left', marginTop: '0.8rem', marginBottom: 0}}>— Iban Proverb</p>
                     </div>

                     <p className="bio-text bio-lede">
                         Long before ink. Before needles. Before studios and machines. Humans were marking skin. With thorns, bone needles, soot, and ash — with whatever the earth gave them. The oldest known tattoos belong to <em>Ötzi the Iceman</em>, preserved in Alpine ice for over 5,300 years. But the impulse is far older than any single body.
                     </p>

                     <div className="ancestral-full" onClick={() => lb('/images/ancestral/10_cave-art_handprints-eye-symbol-ochre.jpg')}>
                         <img src="/images/ancestral/10_cave-art_handprints-eye-symbol-ochre.jpg" alt="Ancient cave art — handprints and eye symbol in ochre" />
                     </div>
                     <p className="ancestral-caption">Prehistoric cave art — the first impulse to leave a mark</p>

                     <p className="bio-text">
                         From cave walls to living skin — the desire to mark, to be seen, to carry meaning on the body — this is one of humanity's deepest instincts. It predates written language. It predates civilization itself.
                     </p>
                 </div>

                 {/* ═══ THE FIRST MARKS ═══ */}
                 <div className="bio-chapter">
                     <h2 className="chapter-title">The First Marks</h2>

                     <p className="bio-text bio-lede">
                         The oldest tattooed skin ever found tells us something profound: these marks were not random. They followed the body's structure — joints, meridians, lines of movement. They were <strong>intentional</strong>. They were medicine. They were prayer.
                     </p>

                     <div className="ancestral-grid-2">
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/09_preserved-hand_ancient-tribal-geometric-tattoo.jpg')}>
                             <img src="/images/ancestral/09_preserved-hand_ancient-tribal-geometric-tattoo.jpg" alt="Preserved ancient tattooed hand" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/01_kalinga-elder_torso-geometric-linework.png')}>
                             <img src="/images/ancestral/01_kalinga-elder_torso-geometric-linework.png" alt="Kalinga elder with geometric chest tattoos" />
                         </div>
                     </div>
                     <p className="ancestral-caption">Left: Preserved tattooed hand, thousands of years old · Right: Kalinga elder, Philippines — a living tradition</p>

                     <p className="bio-text">
                         In the Philippines, the <strong>Kalinga</strong> people have tattooed for over a thousand years. Their master tattoo artist, the <em>mambabatok</em>, uses a thorn attached to a stick — tapping ink into skin by hand. Each pattern earned: a mark for the warrior, the hunter, the provider. The body becomes a record of a life lived.
                     </p>
                 </div>

                 {/* ═══ ACROSS EVERY CONTINENT ═══ */}
                 <div className="bio-chapter">
                     <h2 className="chapter-title">Across Every Continent</h2>

                     <p className="bio-text bio-lede">
                         What makes tattooing sacred is not that one culture discovered it — it's that <strong>every culture did</strong>. Independently. On every inhabited continent. The same impulse arose wherever humans gathered: to transform the body into something more than flesh.
                     </p>

                     <div className="ancestral-grid-3">
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/03_polynesian-marquesan_full-body-traditional.png')}>
                             <img src="/images/ancestral/03_polynesian-marquesan_full-body-traditional.png" alt="Marquesan warrior with full body traditional tattoos" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/08_chin-tribe_elder-facial-tattoo-portrait.png')}>
                             <img src="/images/ancestral/08_chin-tribe_elder-facial-tattoo-portrait.png" alt="Chin tribe elder with facial tattoos" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/07_mentawai_traditional-hand-palm-tattoos.png')}>
                             <img src="/images/ancestral/07_mentawai_traditional-hand-palm-tattoos.png" alt="Mentawai woman showing traditional palm tattoos" />
                         </div>
                     </div>
                     <p className="ancestral-caption">Polynesia · Myanmar · Indonesia — three continents, one sacred language</p>

                     <p className="bio-text">
                         In <strong>Polynesia</strong>, tattoo — <em>tatau</em> — is the origin of the word itself. The Marquesan warrior wore his genealogy, his rank, his spiritual protection as a full-body suit of geometric blackwork. In <strong>Myanmar</strong>, the Chin tribe women carried their identity in their faces — lines that mapped belonging, beauty, and resistance. In the <strong>Mentawai</strong> islands of Indonesia, tattoos mirror the patterns of the natural world — rivers, roots, the skeletal structures of leaves.
                     </p>

                     <div className="ancestral-grid-2">
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/02_amazonian-shipibo_chest-geometric-blackwork.png')}>
                             <img src="/images/ancestral/02_amazonian-shipibo_chest-geometric-blackwork.png" alt="Shipibo woman with geometric chest blackwork" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/14_ramnami-tribe_man-full-body-script-tattoo.jpg')}>
                             <img src="/images/ancestral/14_ramnami-tribe_man-full-body-script-tattoo.jpg" alt="Ramnami tribe elder with full body script tattoos" />
                         </div>
                     </div>
                     <p className="ancestral-caption">Amazonian Shipibo, Peru · Ramnami Samaj, India</p>

                     <p className="bio-text">
                         In the <strong>Amazon</strong>, the Shipibo people tattoo sacred geometry that mirrors the patterns they see in <em>ayahuasca</em> visions — the structure of the cosmos made visible on skin. In <strong>India</strong>, the Ramnami Samaj tattooed the name of God across their entire bodies — every inch of skin a prayer, a radical act of devotion and defiance.
                     </p>

                     <div className="bio-highlight">
                         <p className="highlight-text">
                             Different tools. Different symbols. Different gods. But the same truth: the body is not complete until it is marked.
                         </p>
                     </div>
                 </div>

                 {/* ═══ WHAT THE ELDERS CARRY ═══ */}
                 <div className="bio-chapter">
                     <h2 className="chapter-title">What the Elders Carry</h2>

                     <p className="bio-text bio-lede">
                         Look at the faces of the last generation to carry these marks. These are not decorations — they are <strong>maps of a life</strong>. Every line was earned. Every pattern placed with ceremony, with pain, with meaning that connected the individual to something far larger than themselves.
                     </p>

                     <div className="ancestral-grid-2">
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/11_chin-tribe_elder-woman-full-facial-tattoo-bw.jpg')}>
                             <img src="/images/ancestral/11_chin-tribe_elder-woman-full-facial-tattoo-bw.jpg" alt="Chin tribe elder woman with full facial tattoo" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/12_chin-tribe_elder-woman-facial-tattoo-closeup-bw.jpg')}>
                             <img src="/images/ancestral/12_chin-tribe_elder-woman-facial-tattoo-closeup-bw.jpg" alt="Chin tribe elder woman facial tattoo closeup" />
                         </div>
                     </div>
                     <p className="ancestral-caption">Chin tribe elders, Myanmar — the last generation of a fading tradition</p>

                     <p className="bio-text">
                         Many of these traditions are disappearing. The last Kalinga <em>mambabatok</em>, Whang-Od, is over a hundred years old. The Chin women who carry full facial tattoos are the final generation — the practice was banned decades ago. When they pass, an unbroken line stretching back millennia will end.
                     </p>

                     <p className="bio-text">
                         This is why the work matters. Not to replicate what belongs to these cultures — but to <strong>honor the lineage</strong>. To understand that when we pick up a needle, we are participating in something ancient. Something that connects us to every human who ever felt the need to transform their body into something more.
                     </p>
                 </div>

                 {/* ═══ THE CRAFT ENDURES ═══ */}
                 <div className="bio-chapter">
                     <h2 className="chapter-title">The Craft Endures</h2>

                     <div className="ancestral-full" onClick={() => lb('/images/ancestral/15_traditional-hand-tap_process-closeup-bw.jpg')}>
                         <img src="/images/ancestral/15_traditional-hand-tap_process-closeup-bw.jpg" alt="Traditional hand-tap tattoo process" />
                     </div>
                     <p className="ancestral-caption">Hand-tap tattooing — the original technique, still alive</p>

                     <p className="bio-text bio-lede">
                         The hand-tap method — thorn, stick, ink, skin — is the oldest tattooing technique on earth. No electricity. No machine. Just rhythm and intention. The sound alone is a kind of prayer: <em>tap, tap, tap</em> — steady as a heartbeat.
                     </p>

                     <p className="bio-text">
                         Modern machines evolved from this, but the principle never changed. A needle enters the skin. Pigment stays behind. Something invisible becomes permanent and visible. The technology has evolved, but the ritual remains.
                     </p>
                 </div>

                 {/* ═══ THE CONTINUATION ═══ */}
                 <div className="bio-chapter">
                     <h2 className="chapter-title">The Continuation</h2>

                     <p className="bio-text bio-lede">
                         Contemporary blackwork is not a break from tradition — it is its <strong>direct descendant</strong>. The bold geometric forms, the respect for the body's architecture, the use of solid black to create structure and contrast — all of this traces back to the same ancestral source.
                     </p>

                     <div className="ancestral-grid-3">
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/04_modern-blackwork_hand-bold-geometric.png')}>
                             <img src="/images/ancestral/04_modern-blackwork_hand-bold-geometric.png" alt="Modern blackwork hand piece" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/06_modern-blackwork_full-sleeves-tribal-bands.png')}>
                             <img src="/images/ancestral/06_modern-blackwork_full-sleeves-tribal-bands.png" alt="Modern blackwork tribal sleeves" />
                         </div>
                         <div className="ancestral-item" onClick={() => lb('/images/ancestral/16_modern-blackwork_full-arm-tribal-geometric.jpg')}>
                             <img src="/images/ancestral/16_modern-blackwork_full-arm-tribal-geometric.jpg" alt="Modern blackwork tribal geometric arm" />
                         </div>
                     </div>
                     <p className="ancestral-caption">The lineage continues — modern sacred blackwork</p>

                     <p className="bio-text">
                         When Pierre builds a piece, he is not copying the past. He is <strong>listening to it</strong>. The triangles, the dots, the bands, the symmetry — these are not trends. They are the visual language of the human species, refined over thousands of years, now expressed through contemporary vision and precision.
                     </p>

                     <div className="bio-highlight">
                         <p className="highlight-text">
                             We don't invent the patterns. We inherit them. Every piece is a conversation between what was and what could be.
                         </p>
                     </div>
                 </div>

                 {/* ═══ WHY EXØDUS ═══ */}
                 <div className="bio-chapter" style={{marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid rgba(226,216,204,0.06)', borderBottom: 'none'}}>
                     <p className="bio-text" style={{fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '3.5rem', opacity: 0.9}}>
                        I chose the name <strong>EXØDUS</strong> because it speaks to transformation, not escape.
                     </p>

                     <h2 className="chapter-title">Why EXØDUS</h2>

                     <p className="bio-text">
                         Tattooing, to me, is the moment the body becomes more than flesh — when skin turns into structure, and something permanent is built through intention. Every piece begins at that crossing.
                     </p>

                     <p className="bio-text">
                         <strong>EXØ</strong> holds multiple meanings by design. <strong>EX</strong> comes from Latin — <em>out of, beyond, former.</em> It represents moving from one state of being into another. <strong>Ø</strong> is the zero, the void, the portal — a space of nothingness and infinite possibility.
                     </p>

                     <p className="bio-text">
                         Together, <strong>EXØ</strong> feels like an exoskeleton — an external layer built onto the body, engineered with care, purpose, and precision. <strong>XØ</strong> reads as intimacy and trust. <strong>DUS</strong> echoes <em>duo</em> — because a tattoo can't exist in isolation. It requires two: the artist carrying vision and technique, the body carrying the mark forward.
                     </p>

                     <p className="bio-text">
                         <strong>EXØDUS</strong> is the crossing. Not a departure from the body, but a return to it — rewritten.
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
