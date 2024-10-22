import React from 'react';
import premiumTutorial1 from './lotus Stitch.jpeg';
import premiumTutorial2 from './tulip stitch.jpeg';
import './PremiumTutorials.css';

const PremiumTutorials = () => {
  const handleSubscription = () => {
    alert('Subscribe to access these advanced patterns!');
  };

  return (
    <div className="premium-tutorials-container">
      <h1>Premium Advanced Crochet Tutorials</h1>
      <p>Subscribe to unlock these exclusive tutorials!</p>

      <div className="premium-tutorials-grid">
        {/* Tutorial 1 */}
        <div className="card">
          <img src={premiumTutorial1} alt="Lotus Stitch" />
          <h2 className="card-title">Lotus Stitch</h2>
          <button className="button" onClick={handleSubscription}>
            Watch now
          </button>
        </div>

        {/* Tutorial 2 */}
        <div className="card">
          <img src={premiumTutorial2} alt="Tulip Stitch" />
          <h2 className="card-title">Tulip Stitch</h2>
          <button className="button" onClick={handleSubscription}>
            Watch now
          </button>
        </div>

        {/* Add more tutorials as needed */}
      </div>
    </div>
  );
};

export default PremiumTutorials;
