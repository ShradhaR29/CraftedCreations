import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import './TutorialsPage.css';  // Import CSS for styling

const TutorialsPage = () => {
  const navigate = useNavigate();  // Replace useHistory with useNavigate

  // Navigate to Free Tutorials page
  const goToFreeTutorials = () => {
    navigate('/tutorials/FreeTutorials');  // Updated to use navigate
  };

  // Navigate to Premium Tutorials page
  const goToPremiumTutorials = () => {
    navigate('/tutorials/PremiumTutorials');  // Updated to use navigate
  };

  return (
    <div className="tutorials-main-container">
      <h1 className="page-title">Crochet Tutorials</h1>
      <p className="page-description">
        Welcome to our collection of crochet tutorials! We offer both free and premium tutorials to help you master the art of crochet, whether you’re a beginner or an advanced crafter.
      </p>

      <div className="tutorials-section">
        {/* Free Tutorials Section */}
        <div className="tutorials-box free-tutorials">
          <h2>Free Tutorials</h2>
          <p>Start with our free tutorials, perfect for beginners looking to learn the basics of crochet.</p>
          <button onClick={goToFreeTutorials} className="tutorial-button">Explore Free Tutorials</button>
        </div>

        {/* Premium Tutorials Section */}
        <div className="tutorials-box premium-tutorials">
          <h2>Premium Tutorials</h2>
          <p>For advanced techniques and exclusive content, check out our premium tutorials.</p>
          <button onClick={goToPremiumTutorials} className="tutorial-button">Explore Premium Tutorials</button>
        </div>
      </div>
    </div>
  );
}

export default TutorialsPage;