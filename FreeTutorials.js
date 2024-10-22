import React from 'react';
import './Tutorials.css';

const FreeTutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: 'How to Crochet for Absolute Beginners',
      description: 'Learn the basics of crochet with this easy-to-follow tutorial!',
      videoUrl: 'https://www.youtube.com/watch?v=aAxGTnVNJiE',
      thumbnail: 'https://img.youtube.com/vi/aAxGTnVNJiE/maxresdefault.jpg',
    },
    {
      id: 2,
      title: 'Crochet Basics - Tutorial 2',
      description: 'Continue your crochet journey with more tips and tricks.',
      videoUrl: 'https://www.youtube.com/watch?v=2blwA8pFWpE',
      thumbnail: 'https://img.youtube.com/vi/2blwA8pFWpE/maxresdefault.jpg',
    },
  ];

  return (
    <div className="free-tutorials-container">
      <h1 className="free-tutorials-title">Free Beginner Crochet Tutorials</h1>
      <p className="free-tutorials-description">
        These tutorials are free to access for everyone. Get started with crochet today!
      </p>
      
      <div className="tutorials-card-container">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="tutorial-card">
            <img src={tutorial.thumbnail} alt={tutorial.title} className="tutorial-thumbnail" />
            <h2 className="tutorial-title">{tutorial.title}</h2>
            <p className="tutorial-description">{tutorial.description}</p>
            <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer" className="watch-button">
              Watch Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTutorials;
