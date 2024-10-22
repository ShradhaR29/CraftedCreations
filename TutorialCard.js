import React from 'react';
import './TutorialCard.css';

const TutorialCard = ({ videoSrc, title, description }) => {
  return (
    <div className="tutorial-card">
      <div className="tutorial-video">
        <video width="300" height="200" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="tutorial-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TutorialCard;
