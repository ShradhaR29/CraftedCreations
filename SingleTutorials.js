import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTutorial = () => {
  const { id } = useParams();

  const tutorialsData = {
    '1': { title: "Crochet Basics", videoUrl: "https://youtu.be/aAxGTnVNJiE" },
    '2': { title: "Intermediate Crochet", videoUrl: "https://youtu.be/aAxGTnVNJiE" },
    // More tutorials can be added
  };

  const tutorial = tutorialsData[id] || { title: "Tutorial Not Found", videoUrl: "" };
  const videoId = tutorial.videoUrl.split("/")[3]; // Extract YouTube video ID

  return (
    <div className="tutorial-detail">
      <h1>{tutorial.title}</h1>
      {tutorial.videoUrl ? (
        <div>
          <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`${tutorial.title} thumbnail`}
              className="video-thumbnail"
            />
          </a>
        </div>
      ) : (
        <p>No video available for this tutorial.</p>
      )}
      <p>Description and details about the tutorial go here...</p>
    </div>
  );
};

export default SingleTutorial;