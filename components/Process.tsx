import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="process-section" id="process">
        <div className="process-content">
            <div className="process-header">
                <span className="section-label" style={{justifyContent: 'center'}}>
                    <span style={{order: 2}}>The Ritual</span>
                </span>
                <h2 className="section-title">How We <span className="accent">Work</span></h2>
            </div>
            
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-symbol">
                        <svg viewBox="0 0 120 120">
                            <circle className="step-symbol-path" cx="60" cy="60" r="55"/>
                            <circle className="step-symbol-fill" cx="60" cy="60" r="40"/>
                        </svg>
                        <span className="step-number">01</span>
                    </div>
                    <h3 className="step-title">Consultation</h3>
                    <p className="step-text">
                        We begin with intention. Through deep conversation, I learn your vision, 
                        your story, and study your body's unique architecture.
                    </p>
                </div>
                
                <div className="process-step">
                    <div className="step-symbol">
                        <svg viewBox="0 0 120 120">
                            <polygon className="step-symbol-path" points="60,5 115,60 60,115 5,60"/>
                            <polygon className="step-symbol-fill" points="60,25 95,60 60,95 25,60"/>
                        </svg>
                        <span className="step-number">02</span>
                    </div>
                    <h3 className="step-title">Design</h3>
                    <p className="step-text">
                        Every piece is custom. I draw specifically for your anatomy—creating 
                        patterns that will move as you move. No flash. No repetition.
                    </p>
                </div>
                
                <div className="process-step">
                    <div className="step-symbol">
                        <svg viewBox="0 0 120 120">
                            <polygon className="step-symbol-path" points="60,5 110,30 110,90 60,115 10,90 10,30"/>
                            <polygon className="step-symbol-fill" points="60,25 90,40 90,80 60,95 30,80 30,40"/>
                        </svg>
                        <span className="step-number">03</span>
                    </div>
                    <h3 className="step-title">Session</h3>
                    <p className="step-text">
                        The tattooing itself is sacred space. Whether it takes hours or 
                        multiple days, we work through the transformation together.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Process;