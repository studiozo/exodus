import React from 'react';

const Locations: React.FC = () => {
  return (
    <section className="locations-section" id="locations">
        <div className="section-header" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem'}}>
            <span className="section-label" style={{justifyContent: 'center'}}>
                <span style={{order: 2}}>Studios</span>
            </span>
            <h2 className="section-title">Where to <span className="accent">Find Us</span></h2>
        </div>
        
        <div className="locations-grid">
            <div className="location-card">
                <h3 className="location-name">Bali</h3>
                <p className="location-country">Indonesia</p>
                <p className="location-details">
                    Primary studio in Canggu. Appointments available year-round. 
                    Multi-day sessions welcome with accommodation recommendations.
                </p>
                <span className="location-status open">Currently Booking</span>
            </div>
            
            <div className="location-card">
                <h3 className="location-name">Munich</h3>
                <p className="location-country">Germany</p>
                <p className="location-details">
                    Guest spots throughout the year. Limited availability. 
                    Join the waitlist for upcoming European sessions.
                </p>
                <span className="location-status">Guest Spots</span>
            </div>
        </div>
    </section>
  );
};

export default Locations;
