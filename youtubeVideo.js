// YouTubeVideo.js
import React from 'react';

const YouTubeVideo = ({ videoUrl }) => {
  return (
    <div className="youtube-video">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
